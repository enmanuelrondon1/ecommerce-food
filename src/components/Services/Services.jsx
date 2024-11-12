import Img1 from "../../assets/website/food-7.png";
import Img2 from "../../assets/website/food-6.png";
import Img3 from "../../assets/website/biryani2.png";

export const Services = () => {
  const muestra = [
    {
      id: 1,
      img: Img1,
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Tacos",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 3,
      img: Img3,
      name: "Sushi",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    // {
    //   id: 4,
    //   img: Img4,
    //   name: "Pasta",
    //   description:
    //     "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    // },
    // {
    //   id: 5,
    //   img: Img5,
    //   name: "Burger",
    //   description:
    //     "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    // },
  ];
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {muestra.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="400"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px] ">
                  <img
                    src={item.img}
                    alt="Imagenes"
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 aspect-[7/5]"
                  />
                </div>

                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold ">{item.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2 ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
