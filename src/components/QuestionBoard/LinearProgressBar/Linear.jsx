import { motion } from "framer-motion";

const CustomLinearProgress = ({ styleProps, attrProps }) => {
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
        animate={{ x: "97%" }}
        {...attrProps}
      >
        q
      </motion.span>
    </div>
  );
};
export default CustomLinearProgress;
