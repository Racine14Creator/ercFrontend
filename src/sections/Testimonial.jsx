import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Testimonial = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Les temoignages
        <span className="text-coral-red"> De(s) Chretien(ne)s </span>
        Sur <span className="text-coral-red">Jesus-Christ</span>
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text max-w-[700px]">
        Les Évangiles : Les quatre Évangiles du Nouveau Testament (Matthieu,
        Marc, Luc et Jean) sont les textes les plus importants pour la
        compréhension de la vie, de l'enseignement, de la mort et de la
        résurrection de Jésus-Christ. Ces récits fournissent des témoignages
        oculaires et des récits de première main de ceux qui ont suivi Jésus
        pendant sa vie terrestre.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
