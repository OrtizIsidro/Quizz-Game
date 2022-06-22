import { useEffect, useRef, useState } from "react";
import IndexQuestionsBoard from ".";
import { nanoid } from "nanoid";
import { shuffle } from "./helper";
import OptionsLayout from "../App/OptionsLayout";
import { CircularProgress } from "@mui/material";
import { Box, Container } from "@mui/system";
import Test from "../Test/Test";

const QuestionsBoard = ({ params }) => {
  const [Category, Amount, Difficulty, typeApi] = params;
  const [step, setStep] = useState(0);
  const [data, setData] = useState(undefined);
  const [points, setPoints] = useState(0);
  const [isFirst, setIsFirst] = useState(false);
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
            answers: shuffle(
              [...question.incorrect_answers, question.correct_answer].map(
                (value) => ({
                  value,
                  isCorrect: false,
                  selected: false,
                  id: nanoid(),
                })
              )
            ),
            id: nanoid(),
            alreadySelected: false,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, [Amount, Category, Difficulty, typeApi]);

  const handleSelect = (questionID, answerID) => {
    return setData((prevSt) =>
      prevSt.map((question) => {
        if (question.id === questionID) {
          if (question.alreadySelected) return question;
          return {
            ...question,
            answers: question.answers.map((answer) => {
              if (answer.id === answerID) {
                if (answer.value === question.correct_answer)
                  setPoints((st) => st + POINT);
                return {
                  ...answer,
                  isCorrect: answer.value === question.correct_answer,
                  selected: true,
                };
              }
              return { ...answer, isCorrect: false, selected: false };
            }),
            alreadySelected: true,
          };
        }
        return question;
      })
    );
  };
  const handleNext = () => setStep((st) => st + STEP);

  const cardElements = data?.map((card) => (
    <OptionsLayout
      key={nanoid()}
      items={card.answers}
      title={card.question}
      handler={handleSelect}
      handleSteps={handleNext}
      questionID={card.id}
      alreadySelected={card.alreadySelected}
      progress={true}
    />
  ));

  return (
    <IndexQuestionsBoard
      hola={"hola como estas"}
      loading={data ? false : true}
      element={cardElements?.[step]}
      alreadySelected={data?.[step].alreadySelected}
      handleNext={handleNext}
      points={points}
      data={data}
    />
  );
};
export default QuestionsBoard;
