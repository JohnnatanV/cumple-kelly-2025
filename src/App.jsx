// import { useState } from 'react'
import { motion } from "motion/react";

function App() {
  // const [count, setCount] = useState(0)

  const saludo = "Feliz cumpleaños, mi niña Kelly";
  return (
    <div>
      <motion.h1
        initial={{ y: 0, color: "#ffffff" }}
        className="kaushan-script-regular "
        animate={{ y: 200, scale: [1, 3], color: "#000" }}
        transition={{ duration: 1.5 }}
      >
        {saludo}
      </motion.h1>
    </div>
  );
}

export default App;
