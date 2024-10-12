import { motion } from 'framer-motion'

function DraggableDivs({initialX, initialY, text, className, style}) {
    return (
        <motion.div
          drag
          dragMomentum={false}
          initial={{ x: initialX, y: initialY }}
          className={`text-center absolute cursor-pointer text-[0.5rem] sm:text-xs md:text-sm px-2 py-1 lg:text-base lg:px-4 lg:py-2 rounded-full shadow-md ${className}`}
          style={style}
        >
          {text}
        </motion.div>
      )
}

export default DraggableDivs