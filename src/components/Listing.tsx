import { Home, Clock, MessageSquare } from "lucide-react";
import iphones from "../assets/iphones.avif";

const Listing = () => {
  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="pb-14">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-center leading-none whitespace-nowrap">
            It's easy to list your
            <br />
            <span>home on Airbnb</span>
          </h1>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <img
                src={iphones}
                alt="Airbnb app interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-14">
            
            <div className="flex sm:pr-3.5 sm:flex-col items-center text-center">
              <div className="mb-4 mr-3.5 sm:pr-0 bg-muted w-12 h-12 flex justify-center items-center rounded-lg shrink-0">
                <Home className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal mb-2 text-start">
                  Create a listing for your
                  <br className="hidden sm:inline" />
                  place in just a few steps
                </h3>
              </div>
            </div>

            <div className="flex sm:pr-3.5 sm:flex-col items-center text-center">
              <div className="mb-4 mr-3.5 sm:pr-0 bg-muted w-12 h-12 flex justify-center items-center rounded-lg shrink-0">
                <Clock className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal mb-2 text-start">
                  Go at your own pace, and
                  <br className="hidden sm:inline" />
                  make changes whenever
                </h3>
              </div>
            </div>

            <div className="flex sm:flex-col items-center text-center">
              <div className="mb-4 mr-3.5 sm:pr-0 bg-muted w-12 h-12 flex justify-center items-center rounded-lg shrink-0">
                <MessageSquare
                  className="w-5 h-5 text-gray-700"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal mb-2 text-start">
                  Get 1:1 support from
                  <br className="hidden sm:inline" />
                  experienced hosts at any time
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
