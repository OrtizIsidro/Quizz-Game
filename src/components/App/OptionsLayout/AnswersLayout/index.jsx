import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AnswersButtons from "./AnswerButtons";
import { increment } from "../../../../redux/pointsReducers";

export default function AnswersLayout({
  items,
  correct_answer,
  isConfig,
  handleNext,
  controls,
}) {
  const dispatch = useDispatch();
  const COLUMNS_AMOUNT_DESKTOP =
    items.length % 2 === 0 ? (items.length > 10 ? 3 : 6) : 12;
  const COLUMNS_AMOUNT_MOBILE = 12;
  const [show, setShow] = useState(false);
  const [answers, setAnswers] = useState(items);
  const hanldeSelect = (answerID, answer) => {
    if (show) return;
    controls.stop();
    setShow(true);
    setAnswers((st) =>
      st.map((item) =>
        item.id === answerID
          ? {
              ...item,
              isCorrect: item.value === correct_answer,
              selected: true,
            }
          : item
      )
    );
    if (answer === correct_answer) dispatch(increment());
  };
  return answers.map((item) => (
    <AnswersButtons
      COLUMNS_AMOUNT_DESKTOP={COLUMNS_AMOUNT_DESKTOP}
      COLUMNS_AMOUNT_MOBILE={COLUMNS_AMOUNT_MOBILE}
      show={show}
      isCorrect={item?.isCorrect}
      handler={isConfig ? handleNext : hanldeSelect}
      isConfig={isConfig}
      selected={item?.selected}
      value={item?.value}
      search={item?.search}
      key={nanoid()}
      id={item.id}
    />
  ));
}
