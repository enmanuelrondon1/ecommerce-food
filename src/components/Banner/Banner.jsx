import { GrSecure } from "react-icons/gr";
import Img from "../../assets/website/biryani5.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

export const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };


  return (
    <div  className="min-h-[550px] ">
      <div className="min-h-[550px] flex justify-center items-center backdrop:blur-xl py-12 sm:py-0 ">
        <div data-aos="slide-up" data-aos-duration="300" className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div>
              <img
                src={Img}
                alt="Image"
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)] duration-200 "
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold ">
                Los mejores restaurantes de la ciudad
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 text-justify ">
                Dedicados a la satisfacción de nuestros clientes y a nuestra
                comunidad de comercio
                <br />
                <br />
                Con nuestro ecommerce online, podrás encontrar los mejores
                restaurantes de la ciudad, con una amplia variedad de opciones
                de comida y servicios. Solo aqui no dejes de seguirnos en
                nuestras redes sociales para conocer más sobre nuestra empresa y
                nuestros productos.
              </p>
              <div className="flex gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400 " />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bgorange400" />
                </div>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
