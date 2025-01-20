import { useState } from "react";
import Countdown from "./components/Countdown";
import Present from "./components/Present";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [isCountdownComplete, setIsCountdownComplet] = useState(false);

  const handleCountdownComplete = () => {
    setIsCountdownComplet(true);
  };

  return (
    <div>
      <AnimatedBackground />
      {isCountdownComplete ? (
        <Present />
      ) : (
        <Countdown onComplete={handleCountdownComplete} />
      )}
    </div>
  );
}

export default App;
