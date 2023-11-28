import { Nav } from "./components";
import {
    Hero,
    Mariage,
    Services,
    Subscribe,
    Footer,
    Vision,
    Strategies,
} from "./sections";
import Pasteur from "./sections/Pasteur";

const Home = () => {
    return (
        <main className="scroll-smooth focus:scroll-auto relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>

            <section className="padding bg-gray-100">
                <Vision />
            </section>

            <sextion className="padding">
                <Strategies />
            </sextion>

            <section className="padding">
                <Pasteur />
            </section>



            <section className="padding">
                <Mariage />
            </section>

            <section className="padding-x py-10">
                <Services />
            </section>

            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>

            <section className=" bg-black padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    )
}

export default Home