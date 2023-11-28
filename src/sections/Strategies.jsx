import { strategie1, strategie2, bcc } from ".";

const Strategies = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-[100px] text-white">
        <div className="max-w-[1240px] m-auto pt-10">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-left text-4xl font-bold uppercase">
            Les strategies
          </h3>

          <div className="relative flex max-sm:flex-col max-sm:p-10 justify-between items-center mt-[100px] gap-10">
            <div className="flex-1 basic-1/4" data-aos="fade-left">
              <h3 className="text-4xl uppercase text-gray-500 font-bold">
                Premiere semaine{" "}
                <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  1994-2001
                </span>
              </h3>
              <p className="text-2xl text-left">
                Precher la bonne nouvelle et rassembler les gens au sein d'une
                meme famille (crhetienne).{" "}
                <small>
                  Ezechiel 37, 1-10; 1 Rois 18, 30-46; Mathieu 2,30; Apocalypse
                  5,9-10
                </small>
              </p>
            </div>
            <div className="flex-1" data-aos="fade-right">
              <img
                src={strategie1}
                className="transition-opacity w-full rounded-xl sm:flex-col"
                alt="Image"
              />
            </div>
          </div>

          <div className="relative flex max-sm:flex-col max-sm:p-10 flex-reverse justify-between items-center my-[100px] gap-10">
            <div className="flex-1 sm:flex-col">
              <img  data-aos="flip-down"
                src={strategie2}
                className="w-full rounded-xl sm:flex-col"
                alt="Image"
              />
            </div>
            <div className="flex-1 basic-1/4" data-aos="fade-left">
              <h3 className="text-4xl uppercase text-gray-500 font-bold">
                Deuxieme semaine:
                <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  {" "}
                  2001-2008
                </span>
              </h3>
              <p className="text-2xl text-left">
                Liberer, soigner et restaurer les coeurs desseches. <br />
                <div className="flex flex-wrap realtive max-sm:flex-wrap mb-5">
                  <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Proverbe 24,11</a>
                  <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Ezechiel 11, 19-20</a>
                  <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Marc 16, 16-20</a>
                  <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Proverbes 27,23</a>
                </div>
              </p>
            </div>
          </div>

          <div className="flex relative max-sm:flex max-sm:p-10 flex-reverse justify-between my-[100px] gap-10">
            <div className="flex-1 basic-1/4" data-aos="fade-left">
                <h3 className="text-4xl uppercase text-gray-500 font-bold">
                  Troisieme semaine:
                  <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    {" "}
                    2008-2015
                  </span>
                </h3>
                <p className="text-2xl text-left">
                  Enseigner, former et equiper les chretiens en vue d'en faire des disples <br />
                  <div className="flex flex-wrap realtive max-sm:flex-wrap mb-5">
                    <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Mathieu 28,18-20</a>
                    <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">2 Timothee 2, 2</a>
                    <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Ezechiel 3, 1-5</a>
                  </div>
                </p>
              </div>
              <div className="flex-1 basic-1/4">
                <img
                    src={bcc}
                    className="w-full rounded-xl sm:flex-col"
                    alt="Image"
                  />
              </div>
          </div>

          <div className="flex relative max-sm:flex max-sm:p-10 flex-reverse justify-between my-[100px] gap-10">
            
            <div className="flex-1 basic-1/4" data-aos="flip-up">
                <img
                    src={bcc}
                    className="w-full rounded-xl sm:flex-col"
                    alt="Image"
                  />
            </div>
            <div className="flex-1 basic-1/4" data-aos="fade-left">
                <h3 className="text-4xl uppercase text-gray-500 font-bold">
                  Quatrieme semaine:
                  <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    {" "}
                    2015-2022
                  </span>
                </h3>
                <p className="text-2xl text-left">
                  Consecration au Seigneur <br />
                  <div className="flex flex-wrap realtive max-sm:flex-wrap mb-5">
                    <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Jean 12, 24-26</a>
                    <a href="#" className="bg-coral-red text-[15px] rounded-full p-3 mt-3 mr-3">Romains 12, 1-3</a>
                  </div>
                </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Strategies;
