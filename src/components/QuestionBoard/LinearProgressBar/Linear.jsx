import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CustomLinearProgress = ({ styleProps, attrProps, controls }) => {
  useEffect(() => {
    controls.start({ x: "98%" });
  }, []);
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
        transition={{ duration: 4 }}
        animate={controls}
        {...attrProps}
      >
        q
      </motion.span>
    </div>
  );
};
export default CustomLinearProgress;
