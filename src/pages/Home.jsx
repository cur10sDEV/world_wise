import { Button } from "../components/Button";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="box home">
      <Navbar />
      <section className="inner-box flex flex-col justify-center items-center text-center px-24">
        <h1 className="text-6xl font-bold leading-tight mb-8">
          You Travel the world. <br /> WorldWise keeps track of your adventures.
        </h1>
        <h2 className="text-2xl text-gray-400 mb-10">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login">
          <Button styles="py-3 text-xl">START TRACKING NOW</Button>
        </Link>
      </section>
    </main>
  );
};
export default Home;
