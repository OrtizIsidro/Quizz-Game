import { useEffect, useState } from "react";
import IndexQuestionsBoard from ".";
import { shuffle } from "./helper";
import { useAnimation } from "framer-motion";
import OptionsLayout from "../App/OptionsLayout";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import DashBoard from "../DashBoard/DashBoard";
import { increment } from "../../redux/questionsBoardStepsReducer";

const QuestionsBoard = ({ params }) => {
  const [Category, Amount, Difficulty, typeApi] = params;
  const step = useSelector((st) => st.questions)["value"];
  const dispatch = useDispatch();
  const [data, setData] = useState(undefined);
  const STEP = 1;
  const LAST_STEP = data?.length - 1;
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${Amount}&category=${Category}&difficulty=${Difficulty}${
        typeApi ? `&type=${typeApi}` : ""
      }`
    )
      .then((res) => res.json())
      .then((d) =>
        setData(
          d.results.map((question) => ({
            ...question,
            answers: shuffle([
              ...question.incorrect_answers,
              question.correct_answer,
            ]),
          }))
        )
      )
      .catch((err) => console.log(err));
  }, [Amount, Category, Difficulty, typeApi]);
  const handleNext = () => dispatch(increment());

  const controls = useAnimation();
  const elements = data?.map((card) => (
    <OptionsLayout
      controls={controls}
      key={nanoid()}
      items={card.answers.map((item) => ({ value: item, id: nanoid() }))}
      correct_answer={card.correct_answer}
      title={card.question}
      handleNext={handleNext}
      progress={true}
    />
  ));
  if (step === LAST_STEP) return <DashBoard />;
  return (
    <IndexQuestionsBoard
      data={data}
      handleNext={handleNext}
      element={elements?.[step]}
      key={nanoid()}
    />
  );
};
/// onClick pause else next
export default QuestionsBoard;
