import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Top questions",
    answer:
      "Find answers to the most commonly asked questions about hosting on Airbnb.",
  },
  {
    id: 2,
    question: "Hosting basics",
    answer:
      "Learn the fundamentals of hosting, from setting up your listing to welcoming your first guest.",
  },
  {
    id: 3,
    question: "Policy & regulations",
    answer:
      "Understand Airbnb's policies and local regulations that may apply to your hosting.",
  },
  {
    id: 4,
    question: "Co-hosts",
    answer:
      "Discover how co-hosts can help you manage your listing and share hosting responsibilities.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-muted">
      <div className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-2">
              Your questions,
            </h2>
            <h2 className="text-3xl lg:text-5xl font-semibold">answered</h2>
          </div>

          <div className="space-y-0">
            {faqData.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between py-6 text-left px-6 rounded-lg"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <span className="text-xl font-normal text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 shrink-0 ml-4 ${
                      openItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id)
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600">{item.answer}</div>
                </div>

                {index < faqData.length && (
                  <hr className="border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl lg:text-3xl font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-base text-gray-600 pb-10">
              Get answers from an experienced local host.
            </p>
            <button>
              <a
                href="/"
                className="bg-gray-900 text-white px-8 py-4 text-lg font-medium min-w-75 text-center inline-block rounded-full"
              >
                Ask a Host
              </a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-t border-gray-300" />
      </div>
      <div className="px-6 sm:px-10 lg:px-20 py-8 text-sm font-normal leading-relaxed">
        <p>
          Hosts on the Co-Host Network typically have high ratings, low
          cancellation rates, and established Airbnb hosting experience. Ratings
          are based on guest reviews for listings they host or co-host and may
          not represent the co-host's unique services.
        </p>
        <p className="mt-4">
          Co-Host Network is powered by Airbnb Global Services Limited, Airbnb
          Living LLC, and Airbnb Plataforma Digital Ltda. Available in select
          locations only.
          <a href="#" className="underline hover:no-underline">
            Learn more
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQ;
