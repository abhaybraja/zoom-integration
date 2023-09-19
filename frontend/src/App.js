import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ScheduleMeeting from "./components/ScheduleMeeting";
import StartMeeting from "./components/StartMeeting";

import Root, { rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "schedule",
    element: <ScheduleMeeting />,
    loader: rootLoader,
  },
  {
    path: "start",
    element: <StartMeeting />,
    loader: rootLoader,
  },
]);


function App() {
  return  <RouterProvider router={router} />;
}

export default App;
