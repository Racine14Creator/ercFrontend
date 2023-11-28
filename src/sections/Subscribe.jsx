const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className=" max-w-[1240px] m-auto flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Inscrivez-vous pour recevoir des
        <span className="text-coral-red"> mises à jour et des </span>bulletins
        d’information
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Enregistrez vous"
          className="input bg-none"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red border-coral-red">
            Enregistre
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
