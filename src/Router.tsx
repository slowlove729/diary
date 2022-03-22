import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Router/main";
import Month from "./Router/month";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={`/calender/:month`} element={<Month />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
