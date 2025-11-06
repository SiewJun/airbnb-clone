import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [nights, setNights] = useState(12);
  const pricePerNight = 214;
  const totalEarnings = nights * pricePerNight;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNights(Number(e.target.value));
  };

  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="grid xl:grid-cols-2 items-center pt-4 pb-18 sm:pt-20 sm:pb-30">
          <div>
            <div className="mb-6 mx-7">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-center leading-none whitespace-nowrap">
                Your home could
                <br />
                <span>make RM{totalEarnings.toLocaleString()}</span>
                <br />
                on Airbnb
              </h1>
            </div>

            <div className="mb-9">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <span className="text-lg font-medium px-4 py-1.5 ">
                    {nights} nights
                  </span>
                  <span className="text-lg font-medium ml-2">
                    · RM{pricePerNight}/night
                  </span>
                </div>
                <div className="mb-8">
                  <p className="text-sm font-light text-foreground-light">
                    Learn how we
                    <span className=" pl-1 underline cursor-pointer">
                      estimate earnings
                    </span>
                  </p>
                </div>
                <div className="w-full max-w-md px-4">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={nights}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #FF385C 0%, #FF385C ${
                        ((nights - 1) / 29) * 100
                      }%, #E5E7EB ${((nights - 1) / 29) * 100}%, #E5E7EB 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-12 xl:mb-4 flex justify-center">
              <div className="flex items-center justify-center w-full max-w-105 gap-4 border border-gray-300 rounded-full pl-4 pr-5 py-3">
                <div className="flex items-center gap-2 flex-1">
                  <SearchIcon className="text-primary w-4 h-4" />
                  <div className="flex-1 xl:flex items-center">
                    <p className="text-base font-medium">Kuala Lumpur</p>
                    <span className="text-base font-light text-foreground-light ml-1">
                      <span className="hidden xl:inline-block">·</span> Entire
                      place · 2 bedrooms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-55 sm:h-100 md:h-125 bg-gray-100 rounded-2xl overflow-hidden justify-self-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.511516858!2d101.617444!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e337%3A0x1019cb37e21e9c8!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1699296000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
