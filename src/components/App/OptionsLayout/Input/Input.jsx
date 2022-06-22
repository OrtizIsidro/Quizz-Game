import { useState } from "react";
import IndexInput from ".";

export default function Input({ handleNext }) {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (e) => {
    if (e.target.value < 0) return (e.target.value = 0);
    if (e.target.value > 50) return (e.target.value = 50);
    return setCurrentValue((st) => (st = e.target.value));
  };
  const DEFAULT = 10;
  const IS_EMPTY =
    currentValue === "" || currentValue === 0 || currentValue === "0";

  return (
    <IndexInput
      handleNext={handleNext}
      handleChange={handleChange}
      CURRENT_VALUE={currentValue}
      IS_EMPTY={IS_EMPTY}
      DEFAULT={DEFAULT}
    />
  );
}
