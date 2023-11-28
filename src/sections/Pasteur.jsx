import { pasteurs } from "../constants";
import { PasteurCard } from "../components";

const Pasteur = () => {
  return (
    <section id="pasteurs" className="max-w-[1240px] mx-auto max-sm:mt-24s">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl uppercase text-gray-500 font-palanquin font-bold" data-aos="flip-down">
          Nos <span className="text-coral-red"> Pasteurs </span> dans le monde
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-2xl">
          Dispenser des enseignements bibliques lors des cultes et des réunions
          religieuses. <br />Prêcher la Parole de Dieu pour nourrir spirituellement la
          congrégation. <br />Interpréter les Écritures et les enseignements religieux
          pour aider les fidèles à comprendre leur foi et à la mettre en
          pratique.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {pasteurs.map((pasteur) => (
          <PasteurCard key={pasteur.name} {...pasteur} />
        ))}
      </div>
    </section>
  );
};

export default Pasteur;
