
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import NoPage from './Pages/NoPage';
import Register from "./Pages/Register";

function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route index element={<Landing />} />
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"*"} element={<NoPage/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;