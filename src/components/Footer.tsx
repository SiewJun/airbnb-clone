import { Globe, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const supportLinks = [
    { title: "Help Center", href: "#" },
    { title: "Get help with a safety issue", href: "#" },
    { title: "AirCover", href: "#" },
    { title: "Anti-discrimination", href: "#" },
    { title: "Disability support", href: "#" },
    { title: "Cancellation options", href: "#" },
    { title: "Report neighborhood concern", href: "#" },
  ];

  const hostingLinks = [
    { title: "Airbnb your home", href: "#" },
    { title: "Airbnb your experience", href: "#" },
    { title: "Airbnb your service", href: "#" },
    { title: "AirCover for Hosts", href: "#" },
    { title: "Hosting resources", href: "#" },
    { title: "Community forum", href: "#" },
    { title: "Hosting responsibly", href: "#" },
    { title: "Airbnb-friendly apartments", href: "#" },
    { title: "Join a free Hosting class", href: "#" },
    { title: "Find a co-host", href: "#" },
    { title: "Refer a host", href: "#" },
  ];

  const airbnbLinks = [
    { title: "2025 Summer Release", href: "#" },
    { title: "Newsroom", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Investors", href: "#" },
    { title: "Gift cards", href: "#" },
    { title: "Airbnb.org emergency stays", href: "#" },
  ];

  return (
    <footer className="bg-muted border-gray-300">
      <div className="px-6 sm:px-10 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="pb-8 border-b md:border-b-0 border-gray-300">
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-8 border-b md:border-b-0 border-gray-300">
            <h3 className="font-semibold text-sm mb-4">Hosting</h3>
            <ul className="space-y-3">
              {hostingLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-8 border-b md:border-b-0 border-gray-300">
            <h3 className="font-semibold text-sm mb-4">Airbnb</h3>
            <ul className="space-y-3">
              {airbnbLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm font-normal text-foreground hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:opacity-70">
                    <Facebook size={18} fill="currentColor" />
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <img
                      className="w-5 h-5"
                      src="https://img.icons8.com/ios/50/twitterx--v2.png"
                      alt="twitterx--v2"
                    />
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <Instagram size={18} />
                  </a>
                </div>
                <span>© 2025 Airbnb, Inc.</span>
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="hidden md:inline text-gray-400">·</span>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                  <span className="text-gray-400">·</span>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                  <span className="text-gray-400">·</span>
                  <a
                    href="#"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Your Privacy Choices
                    <svg width="26" height="12" fill="none">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="11"
                        rx="5.5"
                        fill="#fff"
                      ></rect>
                      <path
                        d="M14 1h7a5 5 0 010 10H11l3-10z"
                        fill="#06F"
                      ></path>
                      <path
                        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                        stroke="#06F"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                        stroke="#fff"
                        stroke-linecap="round"
                      ></path>
                      <rect
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="11"
                        rx="5.5"
                        stroke="#06F"
                      ></rect>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex justify-between md:justify-end items-center w-full md:w-auto gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 hover:underline text-sm font-semibold">
                    <Globe size={16} />
                    <span>English (US)</span>
                  </button>

                  <button className="hover:underline text-sm font-semibold">
                    <span>RM MYR</span>
                  </button>
                </div>

                <div className="hidden sm:flex sm:items-center sm:gap-4">
                  <a href="#" className="hover:opacity-70">
                    <Facebook size={18} fill="currentColor" />
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <img
                      className="w-5 h-5"
                      src="https://img.icons8.com/ios/50/twitterx--v2.png"
                      alt="twitterx--v2"
                    />
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
