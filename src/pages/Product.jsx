import { Navbar } from "../components";
import { Img1 } from "../images";

const Product = () => {
  return (
    <main className="box bg-gray-800">
      <Navbar />
      <section className="inner-box product items-center justify-center">
        <img src={Img1} alt="img-1" />
        <div className="about">
          <h1 className="text-5xl font-bold mb-16">About WorldWise</h1>
          <p className="text-xl mb-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dolorum ipsum sequi iure quaerat, doloribus omnis maiores sint, eos
            rem ratione ad doloremque quod cupiditate laudantium sunt a totam
            exercitationem?
          </p>
          <p className="text-xl mb-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repellendus quaerat deserunt neque itaque, porro incidunt minima at
            nobis laborum?
          </p>
        </div>
      </section>
    </main>
  );
};
export default Product;
