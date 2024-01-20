import { useState } from "react";

import { statistics } from "../constants";
import { Button } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center py-5 min-h-screen gap-10 max-w-[1200px] mx-auto"
    >
      <div
        data-aos="fade-left"
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x mx-auto pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          L'eglise de Jesus-Christ
        </p>

        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-8 pr-10">
            Evangelical Restoration
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Church</span> Congo
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Notre mission : Restaurer les âmes par la grâce et la foi.
        </p>

        <Button label="Se connecter" iconURL={arrowRight} />

        <div className="flex justify-start sm:hidden items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-center">
        <img
          data-aos="fade-right"
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-7"
        />
      </div>
    </section>
  );
};

export default Hero;
