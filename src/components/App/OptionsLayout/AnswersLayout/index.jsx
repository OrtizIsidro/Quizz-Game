import { DragControls } from "framer-motion";
import { nanoid } from "nanoid";
import { useState } from "react";
import AnswersButtons from "./AnswerButtons";

export default function AnswersLayout({
  items,
  correct_answer,
  isConfig,
  handleNext,
  controls,
  addPoint,
}) {
  const COLUMNS_AMOUNT_DESKTOP =
    items.length % 2 === 0 ? (items.length > 10 ? 3 : 6) : 12;
  const COLUMNS_AMOUNT_MOBILE = 12;
  const [show, setShow] = useState(false);
  const [answers, setAnswers] = useState(items);
  const hanldeSelect = (answerID) => {
    if (show) return;
    controls.stop();
    setShow(true);
    setAnswers((st) =>
      st.map((item) => {
        if (item.id === answerID) {
          return {
            ...item,
            isCorrect: (() => {
              if (item.value === correct_answer) {
                addPoint();
                return true;
              }
              return false;
            })(),
            selected: true,
          };
        }
        return item;
      })
    );
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
