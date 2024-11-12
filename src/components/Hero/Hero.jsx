import Ima1 from "../../assets/website/biryani.png";
import Ima2 from "../../assets/website/biryani5.png";
import Ima3 from "../../assets/website/biryani2.png";
import Ima4 from "../../assets/website/vector3.png";
import { useState } from "react";

const ImageList = [
  {
    id: 1,
    img: Ima1,
  },
  {
    id: 2,
    img: Ima2,
  },
  {
    id: 3,
    img: Ima3,
  },
];

export const Hero = ({handleOrderPopup}) => {
  const [imageId, setImageId] = useState(Ima1);

  

  const bgImage = {
    backgroundImage: `url(${Ima4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
    <div
   
      style={bgImage}
      className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 "
    >
      <div>
        <div
         className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div 
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                Welcome to
                <span> Fodie </span>
                Zone
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit repellat illum earum praesentium reprehenderit omnis?
              </p>
              <div>
                <button
                onClick={() => handleOrderPopup()} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                  Order Now
                </button>
              </div>
            </div>
            {/* image section  */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center ">
                <img
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-once="true"
              
                  src={imageId}
                  alt="Image"
                  className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
                />
              </div>

              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2  lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full ">
                {ImageList.map((image) => (
                  <img
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                    src={image.img}
                    alt="Image"
                    key={image.id}
                    onClick={() =>
                      setImageId(
                        image.id === 1
                          ? Ima1
                          : image.id === 2
                          ? Ima2
                          : Ima3
                      )
                    }
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 "
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   

    </>
    


  );
};
