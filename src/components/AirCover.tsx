import { Check } from "lucide-react";

const AirCover = () => {
  const protectionFeatures = [
    "Up to $3M damage protection",
    "Up to $1M liability insurance",
    "24-hour safety line",
  ];

  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20">
        <div>
          <div className="flex justify-center">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727211098415/original/127d7106-4f3e-4c9b-aff4-fc109f08e574.png?im_w=720"
              alt="Aircover Logo"
              loading="lazy"
              className="w-32 h-32 sm:w-44 sm:h-44 object-contain"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none whitespace-nowrap">
              However you host,
              <br />
              you're protected
            </h1>
            <p className="text-base md:text-lg text-foreground-light leading-none whitespace-nowrap">
              Top-to-bottom protection, included
              <br />
              every time you host your home on Airbnb.
            </p>
          </div>

          <div className="max-w-110 lg:max-w-2xl mx-auto mb-8 ">
            {protectionFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b last:border-b-0 border-gray-300"
              >
                <span className="text-xs lg:text-base font-normal">
                  {feature}
                </span>
                <Check className="text-green-600 w-6 h-6 shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 pb-14">
            <button>
              <a
                href="/"
                className="bg-gray-900 text-white px-8 py-4 text-lg font-medium min-w-75 text-center inline-block rounded-full"
              >
                Learn about Aircover
              </a>
            </button>
          </div>

          <div className="flex text-center justify-center pb-22 sm:pb-30 max-w-130 mx-auto">
            <p className="text-sm text-foreground-light font-medium">
              Host Damage Protection reimburses for certain guest damages during
              Airbnb stays. It's not insurance and may apply if guests don't
              pay. Liability insurance is provided by 3rd parties.{" "}
              <a
                href="#"
                className="underline text-foreground-light font-semibold"
              >
                See details and exclusions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirCover;
