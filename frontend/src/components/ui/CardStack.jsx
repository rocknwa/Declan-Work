import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className={`relative h-[19rem] w-11/12 lg:h-[21rem] lg:w-9/12 xl:h-[24rem] xl:w-11/12 flex justify-center items-center`}>
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={index}
            className={`absolute bg-white h-full w-full lg:h-full lg:w-11/12 xl:h-full xl:w-9/12 rounded-3xl px-6 py-8 md:px-7 md:py-10 lg:px-9 lg:py-16 xl:px-12 xl:py-18 shadow-xl shadow-black/[0.1] border flex flex-col justify-center`}
            style={{
              transformOrigin: "top center",
              backgroundColor: card.bgColor,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="flex justify-start w-10/12 lg:w-3/5">
              <p className={`text-lg md:text-2xl lg:text-4xl font-bold ${card.bgColor === "#000000" ? "text-white" : "text-black"}`}>
                {card.title}
              </p>
            </div>
            <div className={`mt-1 lg:mt-3 ${card.textColor} text-sm lg:text-base
             lg:leading-5 xl:leading-7 w-10/12 lg:w-3/5`}>
              {card.description}
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
