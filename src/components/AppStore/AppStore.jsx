import AppStoreLogo from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";
import Imag3 from "../../assets/website/mobile_bike.gif";

export const AppStore = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-24 ">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400 ">
              Foodly is available on the App Store and Google Play
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center ">
              <a href="#">
                <img
                  src={AppStoreLogo}
                  alt="AppStore"
                  className="max-x[150px] sm:max-w-[120px] md:max-w-[200px] "
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                />
              </a>
            </div>
          </div>
          <div>
            <img
              src={Imag3}
              alt="Image"
              className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
