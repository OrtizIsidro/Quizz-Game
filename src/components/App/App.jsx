import { useState } from "react";
import IndexApp from ".";
import QuestionsBoard from "../QuestionBoard/QuestionBoard";
import { layaoutElements } from "./helper";
import OptionsLayout from "./OptionsLayout";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/appStepsReducer";
const LAST_STEP = layaoutElements.length + 1;

const App = () => {
  const [config, setConfig] = useState([]);
  const step = useSelector((st) => st.app)["value"];
  const dispatch = useDispatch();
  const handleStep = () => dispatch(increment());
  const handleConfig = (config) => setConfig((st) => [...st, config]);
  const handleNext = (config) => {
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
