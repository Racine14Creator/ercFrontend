import masasu from "../assets/images/coupleMasasu.png";

const Mariage = () => {
  return (
    <section
      data-aos="fade-up"
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-w-[1240px] m-auto"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={masasu}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Pourquoi
          <span className="text-coral-red"> se </span>
          <span className="text-coral-red">marier </span> est une bonne chose <span className="text-red-600 text-8xl">?</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red border-coral-red">
            Lire plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mariage;
