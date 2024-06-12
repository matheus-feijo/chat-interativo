import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../screens/login";

export function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
