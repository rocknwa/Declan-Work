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
    (<div className={`relative h-60 w-60 md:h-60 md:w-96 lg:h-[24rem] lg:w-[27rem] flex justify-center items-center`}>
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={index}
            className={`absolute bg-white h-60 w-60 md:h-60 md:w-96 lg:h-[24rem] lg:w-[74rem] rounded-3xl md:px-10 md:py-16 lg:px-12 lg:py-18 shadow-xl shadow-black/[0.1] border flex flex-col justify-center`}
            style={{
              transformOrigin: "top center",
              backgroundColor: card.bgColor,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="flex justify-start w-3/5">
              <p className={`text-4xl font-bold ${card.bgColor === "#000000" ? "text-white" : "text-black"}`}>
                {card.title}
              </p>
            </div>
            <div className={`mt-3 ${card.textColor} leading-7 w-3/5`}>
              {card.description}
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
