import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDeviceBreakpoints } from "../hooks/use-ismobile";
export const Hero2 = () => {
  const { is4kScreen, isLaptop, isMobile, isPc, isTablet } =
    useDeviceBreakpoints();

  useGSAP(() => {
    if (!is4kScreen && !isLaptop && !isMobile && !isPc && !isTablet) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: is4kScreen ? 1.5 : 1,
      x: "0%",
      bottom: isMobile ? "0%" : is4kScreen ? "0%" : "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e: Event) {
      const mouseEvent = e as MouseEvent;
      const xMove = (mouseEvent.clientX / window.innerWidth - 0.5) * 10;
      //   gsap.to(".main", {
      //     x: `${xMove * 0.4}%`,
      //   });
      gsap.to(".text", {
        x: `${xMove * 0.5}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [is4kScreen, isLaptop, isMobile, isPc, isTablet]);
  return (
    <div className="main w-full rotate-[-10deg] scale-[1.7]">
      <div className="landing h-screen">
        <div className="imagesdiv relative h-full w-full">
          <img
            className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
            src="/images/sky.png"
            alt=""
          />
          <img
            className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
            src="/images/bg.png"
            alt=""
          />
          <div className="text text-white col-center gap-3 absolute inset-0 sm:top-10 left-1/2 right-1/2 scale-[1.4] rotate-[-10deg] font-bold uppercase text-7xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[15rem] 2xl:text-[20rem]">
            <h1 className="">hello</h1>
            <h1 className="">there</h1>
          </div>

          <img
            className="absolute object-cover md:object-contain character bottom-0 left-1/2 -translate-x-1/2 scale-[4] sm:scale-[5] md:scale-[3] rotate-[-20deg] md:-bottom-[25%] overflow-hidden max-w-[90vw] sm:max-w-[70vw] lg:max-w-[50vw]"
            src={"/images/biblegirlsmall.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
