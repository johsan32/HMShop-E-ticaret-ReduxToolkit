import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    lazyLoad: "ondemand",
    draggable: true,
    swipe: true,
    cssEase: "linear",

  };
  return (
    <div className="relative ">
      <Slider {...settings}>
        <div className="!flex items-end justify-center h-[300px] md:h-[80vh]  ">
          <div className="absolute flex flex-col gap-3 items-center justify-center text-center px-4">
            <h1 className="text-bold bg-red-400 p-1 rounded-md text-2xl md:text-5xl items-center">
            Autumn ’23 Menswear Trends
            </h1>
            <p className="text-md md:text-xl">
              Explore the new season’s key trends and garments featured in H&M
              Man’s lookbook.
            </p>
            <button className="border-none px-1 mb-5 rounded-sm cursor-pointer text-2xl text-black w-[150px] bg-gray-300 hover:bg-red-400 hover:text-white transition-linear outline-none">
              Shop Now
            </button>
          </div>
          <img src="./pictures/hero1.webp" alt="" className="w-full h-full" />
        </div>
        <div className="!flex items-end justify-center h-[300px] md:h-[80vh] ">
          <div className="absolute flex flex-col gap-3 items-center justify-center text-center px-4">
            <h1 className="text-bold bg-red-400 p-1 rounded-md text-2xl md:text-5xl items-center">
            Designed to thrill
            </h1>
            <p className="">
            H&M Studio A/W 2023 is a delightfully dark collection that will get your heart racing
            </p>
            <button className="border-none px-1 mb-5 rounded-sm cursor-pointer text-2xl text-black w-[150px] bg-gray-300 hover:bg-red-400 hover:text-white transition-linear outline-none">
              Shop Now
            </button>
          </div>
          <img src="./pictures/hero4.jpeg" alt="" className="w-full h-full " />
        </div>
        <div className="!flex items-end justify-center h-[300px] md:h-[80vh] ">
          <div className="absolute flex flex-col gap-3 items-center justify-center text-center px-4">
            <h1 className="text-bold bg-red-400 p-1 rounded-md text-2xl md:text-5xl items-center">
            Street style, but make it glam
            </h1>
            <p className="">
            It’s all about the sleek street-style look this fall.
            </p>
            <button className="border-none px-1 mb-5 rounded-sm cursor-pointer text-2xl text-black w-[150px] bg-gray-300 hover:bg-red-400 hover:text-white transition-linear outline-none">
              Shop Now
            </button>
          </div>
          <img src="./pictures/hero1.webp" alt="" className="w-full  h-full  " />
        </div>
        <div className="!flex items-end justify-center h-[300px] md:h-[80vh] ">
          <div className="absolute flex flex-col gap-3 items-center justify-center text-center px-4">
            <h1 className="text-bold bg-red-400 p-1 rounded-md text-2xl md:text-5xl items-center">
            Dresses we're falling for
            </h1>
            <p className="">
            From soft-&-cozy to omg-so-cute, the obsession is real
            </p>
            <button className="border-none px-1 mb-5 rounded-sm cursor-pointer text-2xl text-black w-[150px] bg-gray-300 hover:bg-red-400 hover:text-white transition-linear outline-none">
              Shop Now
            </button>
          </div>
          <img src="./pictures/hero5.avif" alt="" className="w-full h-full " />
        </div>
        <div className="!flex items-end justify-center h-[300px] md:h-[80vh] ">
          <div className="absolute flex flex-col gap-3 items-center justify-center text-center px-4">
            <h1 className="text-bold bg-red-400 p-1 rounded-md text-2xl md:text-5xl items-center">
            Let’s change
            </h1>
            <p className="">
            Change is at our core. And now it’s time to change fashion.
            </p>
            <button className="border-none px-1 mb-5 rounded-sm cursor-pointer text-2xl text-black w-[150px] bg-gray-300 hover:bg-red-400 hover:text-white transition-linear outline-none">
              Shop Now
            </button>
          </div>
          <img src="./pictures/hero2.jpg" alt="" className="w-full  h-full " />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
