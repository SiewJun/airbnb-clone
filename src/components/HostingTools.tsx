import toolone from "../assets/toolone.avif";
import tooltwo from "../assets/tooltwo.avif";
import toolthree from "../assets/toolthree.avif";

const HostingTools = () => {
  const tools = [
    {
      image: toolone,
      title: "Listing editor",
      description: "Showcase every detail of your home",
    },
    {
      image: tooltwo,
      title: "Calendar",
      description: "Manage your availability and pricing",
    },
    {
      image: toolthree,
      title: "Messages",
      description: "Quickly message guests and support",
    },
  ];

  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20 lg:pb-40">
        <div className="text-center pb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-none whitespace-nowrap">
            All the tools you need
            <br />
            to host, all in one app
          </h2>
        </div>

        {/* Grid for lg and above, horizontally scrollable below lg */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-6 hidden">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col items-center"
            >
              <div className="mb-6">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full max-w-xs h-auto object-contain rounded-xl bg-muted"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-base text-foreground-light text-center">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontally scrollable for below lg */}
        <div className="xl:hidden overflow-x-auto scrollbar-hide">
          <div className="flex pb-4 ">
            {tools.map((tool, index) => (
              <div
                key={index}
                className=" rounded-xl flex flex-col items-center min-w-[280px] sm:min-w-[320px] shrink-0"
              >
                <div className="mb-6">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full max-w-xs h-auto object-contain rounded-xl bg-muted"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-base text-foreground-light text-center">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:px-10 lg:px-20">
        <hr className="border-t border-gray-300 mt-8 " />
      </div>
    </section>
  );
};

export default HostingTools;
