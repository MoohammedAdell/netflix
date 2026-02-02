import { useState } from "react";
import Title from "./Title";
import { FiPlus, FiX } from "react-icons/fi";

const faqData = [
  {
    question: "What is Netflix?",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    ],
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online anytime.",
  },
  {
    question: "What Can I Watch On Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix Good For Kids?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",

      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ],
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 lg:px-36 my-16 text-white">
      <Title>Frequently Asked Questions</Title>

      <div className="mt-6 space-y-2">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="bg-[#2d2d2d]">
              <button
                onClick={() => toggleQuestion(index)}
                className="
                  w-full
                  flex items-center justify-between
                  p-6
                  text-xl lg:text-2xl font-medium
                  hover:bg-[#414141]
                  transition
                "
              >
                {item.question}

                <span className="ml-4">
                  {isOpen ? (
                    <FiX className="text-3xl" />
                  ) : (
                    <FiPlus className="text-3xl" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 py-8 text-md lg:text-2xl leading-relaxed border-t border-black space-y-4">
                  {Array.isArray(item.answer) ? (
                    item.answer.map((text, i) => <p key={i}>{text}</p>)
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
