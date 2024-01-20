const PasteurCard = ({ imgURL, name, location }) => {
  return (
    <div className="flex flex-col text-center p-3 cursor-pointer hover:shadow-xl justify-center rounded-[10px] w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="max-md:w-full m-auto rounded-full w-[282px] h-[282px] object-cover" />

      <h3 className="pt-2 px-3 mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="flex px-3 items-center mt-2 font-semibold font-montserrat text-center text-coral-red text-2xl leading-normal">
        {location}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default PasteurCard;
