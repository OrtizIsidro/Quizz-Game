import { useEffect, useRef, useState } from "react";
import IndexQuestionsBoard from ".";
import { nanoid } from "nanoid";
import { shuffle } from "./helper";
import OptionsLayout from "../App/OptionsLayout";
import { CircularProgress } from "@mui/material";
import { Box, Container } from "@mui/system";
import Test from "../Test/Test";
import { useAnimation } from "framer-motion";

const QuestionsBoard = ({ params }) => {
  const [Category, Amount, Difficulty, typeApi] = params;
  const [step, setStep] = useState(0);
  const [data, setData] = useState(undefined);
  const [points, setPoints] = useState(0);
  const POINT = 1;
  const STEP = 1;
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
  const handleNext = () => setStep((st) => st + STEP);
  const controls = useAnimation();

  const cardElements = data?.map((card) => (
    <OptionsLayout
      addPoint={() => setPoints((st) => st + POINT)}
      controls={controls}
      key={nanoid()}
      items={card.answers.map((item) => ({ value: item, id: nanoid() }))}
      correct_answer={card.correct_answer}
      title={card.question}
      progress={true}
    />
  ));

  return (
    <IndexQuestionsBoard
      loading={data ? false : true}
      element={cardElements?.[step]}
      alreadySelected={data?.[step].alreadySelected}
      handleNext={handleNext}
      points={points}
      data={data}
    />
  );
};
/// onClick pause else next
export default QuestionsBoard;
