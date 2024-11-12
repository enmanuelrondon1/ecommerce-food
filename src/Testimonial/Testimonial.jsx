import Slider from "react-slick";

const TestimonialSlider = [
  {
    id: 1,
    name: "Samuel",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Tom",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Alejandra",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    img: "https://picsum.photos/103/103",
  },
];

export const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    sliderToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
            What our customers say about us
          </p>
          <h1 className="text-3xl font-bold">Testimonial </h1>
          <p className="text-xs text-gray-400">
            Gran restaurante con una gran variedad de productos y servicios
            excelentes.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px] mx-auto gap-6 "
        >
          <Slider {...settings}>
            {TestimonialSlider.map((item) => (
              <div className="my-6" key={item.id}>
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <img
                    src={item.img}
                    alt="Image"
                    className="rounded-full block mx-auto"
                  />
                  <p className="text-xl font-bold">{item.description}</p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
