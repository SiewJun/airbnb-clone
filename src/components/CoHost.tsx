import { useEffect, useRef } from "react";
import Card from "./Card";
import { coHostsData } from "../data/coHostsData";

const CoHost = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isSmallScreen = window.innerWidth < 1024;

      if (row1Ref.current && row2Ref.current && isSmallScreen) {
        row1Ref.current.style.transform = `translateX(-${scrollY * 0.2}px)`;
        row2Ref.current.style.transform = `translateX(${scrollY * 0.2}px)`;
      } else if (row1Ref.current && row2Ref.current && !isSmallScreen) {
        row1Ref.current.style.transform = `translateX(0px)`;
        row2Ref.current.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const midPoint = Math.ceil(coHostsData.length / 2);
  const row1Data = coHostsData.slice(0, midPoint);
  const row2Data = coHostsData.slice(midPoint);

  return (
    <section className="py-12">
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="pb-14">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-center leading-none whitespace-nowrap pb-4">
            A co-host can help
            <br />
            <span>you get started</span>
          </h1>
          <p className="text-sm md:text-lg font-base text-center leading-none whitespace-nowrap">
            Now you can hire a local co‑host to help create <br />
            <span>your listing, get your space ready, and more.</span>
          </p>
        </div>

        <div className="hidden lg:block overflow-hidden -mx-20">
          <div className="flex gap-6 pb-4 -ml-32">
            {coHostsData.map((coHost) => (
              <Card
                key={coHost.id}
                imageUrl={coHost.imageUrl}
                title={coHost.title}
                description={coHost.description}
                rating={coHost.rating}
                years={coHost.years}
              />
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6 overflow-hidden -mx-6 sm:-mx-20">
          <div
            ref={row1Ref}
            className="flex gap-6 transition-transform duration-100"
          >
            {row1Data.map((coHost) => (
              <Card
                key={coHost.id}
                imageUrl={coHost.imageUrl}
                title={coHost.title}
                description={coHost.description}
                rating={coHost.rating}
                years={coHost.years}
              />
            ))}
          </div>

          <div
            ref={row2Ref}
            className="flex gap-6 transition-transform duration-100 -ml-70"
          >
            {row2Data.map((coHost) => (
              <Card
                key={coHost.id}
                imageUrl={coHost.imageUrl}
                title={coHost.title}
                description={coHost.description}
                rating={coHost.rating}
                years={coHost.years}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 pb-22 sm:pb-30">
          <a
            href="/co-hosts/home"
            className="bg-gray-900 text-white px-8 py-4 text-lg font-medium min-w-75 text-center inline-block rounded-full"
          >
            Find a co-host
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoHost;
