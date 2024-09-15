import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TaskPage from "@/pages/task";
import HomePage from "@/pages/home";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TaskPage />} path="/task" />
      <Route element={<HomePage />} path="/home" />
    </Routes>
  );
}

export default App;
