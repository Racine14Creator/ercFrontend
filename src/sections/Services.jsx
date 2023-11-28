import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-w-[1240px] m-auto flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
