import { motion } from "motion/react";
import Collage from "./Collage";

const Present = () => {
  // Comment Test
  const message = "Feliz cumpleaños, Mi niña Kelly";
  return (
    <div className="present">
      <motion.h1
        className="kaushan-script-regular message"
        initial={{ opacity: 0, scale: 0, color: "#ffffff" }}
        animate={{ opacity: 1, scale: 1.5, color: "#222" }}
        transition={{
          duration: 1.5,
          delay: 5,
          type: "spring",
          visualDuration: 1,
          bounce: 0.5,
        }}
      >
        {message}
      </motion.h1>
      <div>
        <p>Espero que este collage te guste. 🎉</p>
        <Collage />
      </div>
    </div>
  );
};

export default Present;
