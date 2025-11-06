import hosting from "../assets/hosting.avif";

const ApartmentHosting = () => {
  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20 py-22 lg:py-30">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Image */}
          <div className="lg:pr-16 pb-6 lg:pb-0">
            <img
              src={hosting}
              alt="Modern apartment building"
              className="w-67.5 h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-start">
            <h2 className="text-xl lg:text-3xl font-semibold pb-3 leading-tight">
              Hosting isn't only for homeowners
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-tight font-normal">
              Airbnb-friendly apartments make it easy for you to rent, host, and
              earn extra income when you're away.
            </p>
            <a
              href="#"
              className="inline-block text-sm lg:text-lg font-semibold underline hover:text-gray-700 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ApartmentHosting;
