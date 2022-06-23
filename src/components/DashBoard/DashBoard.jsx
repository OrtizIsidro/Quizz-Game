import IndexDashBoard from ".";
import { useDispatch } from "react-redux";
import { reset as appReset } from "../../redux/appStepsReducer";
import { reset as pointsReset } from "../../redux/pointsReducers";
import { reset as questionsReset } from "../../redux/questionsBoardStepsReducer";

export default function DashBoard() {
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(appReset());
    dispatch(pointsReset());
    dispatch(questionsReset());
  };
  return <IndexDashBoard restart={restart} />;
}
