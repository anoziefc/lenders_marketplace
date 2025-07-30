import redis


redis_client = redis.Redis(
    host="localhost",
    port=6379,
    db=0,
    decode_responses=True
)

LENDER_CACHE_TTL_SECONDS = 15 * 60
