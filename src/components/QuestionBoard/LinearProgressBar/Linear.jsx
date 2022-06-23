import { motion } from "framer-motion";
import { useEffect } from "react";

const CustomLinearProgress = ({
  styleProps,
  attrProps,
  controls,
  nextStep,
}) => {
  useEffect(() => {
    controls.start({ x: "98%" });
  }, [controls]);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#a7caed",
        width: "100%",
        height: "5px",
        overflow: "hidden",
      }}
    >
      <motion.span
        style={{
          left: "-100%",
          width: "102%",
          height: "5px",
          borderRadius: "20px",
          position: "absolute",
          backgroundColor: "#1976d2",
          fontSize: "0px",
          ...styleProps,
        }}
        transition={{ duration: 10 }}
        animate={controls}
        onAnimationComplete={() => nextStep()}
        {...attrProps}
      >
        q
      </motion.span>
    </div>
  );
};
export default CustomLinearProgress;
