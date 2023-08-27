import { Navbar } from "../components";
import { Img2 } from "../images";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <main className="box bg-gray-800">
      <Navbar />
      <section className="inner-box product items-center justify-center">
        <div className="about">
          <h1 className="text-5xl font-bold mb-10 leading-tight">
            Simple Pricing. <br /> Just $9/month.
          </h1>
          <p className="text-xl mb-16 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dolorum ipsum sequi iure quaerat, doloribus omnis maiores sint, eos
            rem ratione ad doloremque quod cupiditate laudantium sunt a totam
            exercitationem?
          </p>
          <Link to="/login">
            <Button styles="text-lg px-8 py-3 rounded-md">
              START TRACKING NOW
            </Button>
          </Link>
        </div>
        <img src={Img2} alt="img-2" />
      </section>
    </main>
  );
};
export default Pricing;
