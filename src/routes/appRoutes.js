import { createBrowserRouter } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";
import Feedbacks from "../components/Feedbacks";

const appRoutes = createBrowserRouter([
  {
    path: "/addfeedback",
    element: <FeedbackForm />,
  },
  {
    path: "/editfeedback/:id",
    element: <FeedbackForm />,
  },
  {
    path: "/feedbacks",
    element: <Feedbacks />,
  },
]);

export default appRoutes;
