from contextlib import contextmanager
from dotenv import load_dotenv
from fastapi import Request
from models import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Query
from sqlalchemy.sql import ClauseElement
from typing import Optional, List
import os


load_dotenv()
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")


class Storage():
    _engine = None
    _session = None

    def __init__(self):
        self._engine = create_engine(SQLALCHEMY_DATABASE_URL)
        self._session = sessionmaker(autocommit=False, autoflush=False, bind=self._engine, expire_on_commit=False)
        Base.metadata.create_all(bind=self._engine)

    @contextmanager
    def session_scope(self):
        db = self._session()
        try:
            yield db
            db.commit()
        except Exception:
            db.rollback()
            raise
        finally:
            db.close()

    def query_db(
            self,
            model,
            filters: Optional[List[ClauseElement]] = None,
            options: Optional[List] = None
        ) -> List:
        with self.session_scope() as session:
            query: Query = session.query(model)
            if options:
                query = query.options(*options)
            if filters:
                query = query.filter(*filters)
            return query.all()


def get_storage(request: Request) -> Storage:
    return request.app.state.storage
