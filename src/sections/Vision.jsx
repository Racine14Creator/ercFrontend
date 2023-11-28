import { useEffect } from "react";
import mision from "../assets/images/ercImages/IMG-20221007-WA0033.jpg";
import AOS from "aos";

import MissionImg from "../assets/images/ercImages/mission.jpg";

const missionData = [
  {
    index: "a",
    objectif:
      "À restaurer l'homme dans toutes ses dimensions : esprit, âme et corps et en faire un restaurateur des personnes, des familles, des villes et des nations meurtries.",
  },
  {
    index: "b",
    objectif:
      "Proclamer l'évangile du salut conformément à l'ordre donné par le Seigneur Jésus-Christ (cf. Matthieu 28, 19-20).",
  },
  {
    index: "c",
    objectif:
      "Offrir aux nouveaux chrétiens les soins nécessaires à leur libération totale en vue d'une vie épanouie, en organisant des prières, des entretiens (counseling), des visites pastorales, des affermissements, des exhortations, etc.",
  },
  {
    index: "d",
    objectif:
      "Former les nouveaux chrétiens par des enseignements bibliques et par la prière en vue d'être des hommes mûrs au service du Seigneur.",
  },
  {
    index: "e",
    objectif:
      "Offrir aux chrétiens un cadre d'épanouissement spirituel tel que des cellules de prière, des assemblées locales, des centres bibliques et théologiques, etc.",
  },
  {
    index: "f",
    objectif:
      "Contribuer à la recherche de solutions aux questions liées au développement pour améliorer le niveau de vie de la population en général et des membres en particulier.",
  },
  {
    index: "g",
    objectif:
      "Créer des œuvres sociales et charitables telles que les services de santé, l'éducation, l'assistance aux nécessiteux, etc.",
  },
];

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <div className=" max-w-[1240px] mx-auto">
        <h2
          data-aos="fade-left"
          className="mt-10 uppercase text-gray-500 font-palanquin text-4xl max-sm:text-[42px] py-5 max-sm:leading-[82px] font-bold"
        >
          Vision de l'<span className="text-coral-red"> e</span>vangelical
          <span className="text-coral-red"> r</span>estoration
          <span className="text-coral-red"> c</span>hurch
        </h2>

        <div
          data-aos="fade-right"
          className="flex justify-between max-xl:flex-col-reverse gap-10"
        >
          <div className="flex-1">
            <p className="lg:max-w-lg mt-2 font-montserrat text-2xl text-slate-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolor doloribus totam. Officia sed amet sit rerum fuga sapiente
              suscipit, reiciendis tempore asperiores nesciunt doloribus saepe
              quidem quasi ex nemo. 🤧
            </p>
            <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red border-coral-red mt-10">Lire plus</button>
          </div>
          <div className="flex-1">
            <img
              src={mision}
              alt="Image Vision"
              className="w-full rounded rounded-lg w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-[1240px] m-auto py-52">
        <h2 className="text-left uppercase text-gray-500 text-4xl font-bold">
          <span className="text-coral-red">La mission</span> de l'evangelical
          Restoration Church
        </h2>
        <div className="md:flex sm:grid sm:grid-cols-1 justify-between gap-10 mt-10">
          <div className="flex-1 relative" data-aos="fade-left">
            <span className="badgeImage"></span>
            <img
              src={MissionImg}
              className="w-full max-w-[500px] rounded rounded-xl"
              alt="Mission"
            />
          </div>
          <div className="flex-1" data-aos="fade-right">
            <ul className="list list-none">
              {missionData.map((item) => (
                <div
                  className="flex justify-between items-center"
                  key={item.index}
                >
                  <span className="text-coral-red uppercase mr-[50px] text-2xl font-bold">
                    {item.index}
                  </span>
                  <li className="bg-white shadow-xl shadow-emerald-100 p-3 rounded rounded-xl text-2xl text-gray-500 my-2">
                    {item.objectif}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
