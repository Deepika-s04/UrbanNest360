import React from 'react';

export default function FAQ() {
  return (
    <>
      {/* Inject Playfair Display font directly */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <section className="bg-white px-4 sm:px-6 py-8 sm:py-12 max-w-3xl mx-auto font-playfair">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {[
            {
              id: "faq1",
              question: "What is the process for buying a property?",
              answer:
                "The process involves selecting the right property, negotiating terms with the agent, signing the contract, and completing the transaction. Our professional agents will guide you through every step to ensure a smooth experience.",
            },
            {
              id: "faq2",
              question: "How do I determine how much I can afford?",
              answer:
                "We recommend consulting with a mortgage specialist who can evaluate your income, expenses, and credit score to provide tailored advice.",
            },
            {
              id: "faq3",
              question: "What documents are required for renting a property?",
              answer:
                "Typically, you’ll need proof of identity, income verification, rental history, and a completed application form. Some landlords may also request a credit report or references.",
            },
            {
              id: "faq4",
              question: "Can I terminate a lease agreement early?",
              answer:
                "Early termination is possible but may involve penalties or fees. Review your lease terms and consult your landlord or property manager for options like subletting or lease transfer.",
            },
            {
              id: "faq5",
              question: "What are the risks of investing in real estate?",
              answer:
                "Risks include market fluctuations, property depreciation, maintenance costs, and tenant issues. Diversifying your portfolio and conducting thorough research can help mitigate these risks.",
            },
            {
              id: "faq6",
              question: "How do I choose the right property to invest in?",
              answer:
                "Consider location, market trends, rental demand, and property condition. It's also wise to consult with a real estate advisor to align your investment goals with the right asset.",
            },
            {
              id: "faq7",
              question: "Do high-end properties support virtual tours?",
              answer:
                "Yes, many premium listings offer virtual tours, 3D walkthroughs, and video previews to help buyers explore properties remotely with ease and detail.",
            },
            {
              id: "faq8",
              question: "How long does the property transfer process take?",
              answer:
                "The transfer process typically takes 2 to 6 weeks depending on documentation, legal checks, and local regulations. Working with experienced agents can help expedite the timeline.",
            },
          ].map(({ id, question, answer }) => (
            <div key={id} className="border-b pb-4">
              <input type="checkbox" id={id} className="peer hidden" />
              <label
                htmlFor={id}
                className="flex justify-between items-center cursor-pointer text-base sm:text-lg text-gray-800 font-medium"
              >
                <span>{question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </label>
              <div className="mt-2 text-gray-600 text-sm sm:text-base max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300">
                {answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}