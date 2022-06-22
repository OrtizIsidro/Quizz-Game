import { useState } from "react";
import IndexApp from ".";
import QuestionsBoard from "../QuestionBoard/QuestionBoard";
import { layaoutElements } from "./helper";
import OptionsLayout from "./OptionsLayout";
import { nanoid } from "nanoid";
const LAST_STEP = layaoutElements.length + 1;

const App = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState([]);

  const handleStep = () => setStep((st) => st + 1);
  const handleConfig = (config) => setConfig((st) => [...st, config]);
  const handleNext = (config) => {
    console.log("run", config);
    handleConfig(config);
    handleStep();
  };

  const elements = layaoutElements.map((lay) => (
    <OptionsLayout
      key={nanoid()}
      handleNext={handleNext}
      isConfig={true}
      items={lay.items.map((item) => ({ value: item[0], search: item[1] }))}
      title={lay.title}
    />
  ));

  if (step === LAST_STEP) return <QuestionsBoard params={config} />;
  return <IndexApp step={step} config={config} elements={elements} />;
};
export default App;
