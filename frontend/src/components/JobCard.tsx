
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {job.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.101-8.625-3.004m16.5 0a2.25 2.25 0 002.25-2.25v-3.375c0-1.036-.84-1.875-1.875-1.875h-15c-1.036 0-1.875.84-1.875 1.875v3.375c0 1.036.84 1.875 1.875 1.875h.375m-1.5 0h.375m-1.5 0V6.75m1.5 6.75V6.75m-1.5 6.75h.375m-1.5 0h.375m-1.5 0V6.75m1.5 6.75V6.75M12 21.75c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"
            />
          </svg>
          {job.type}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.727A8 8 0 016.343 7.273L12 2l5.657 5.273a8 8 0 010 9.454z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 13a3 3 0 100-6 3 3 0 000 6z"
            ></path>
          </svg>
          {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
