import React from "react";
import {Route, Routes} from "react-router-dom";

import MainContent from "@/pages/Layout/Main/MainContent";


const Main = () => (
    <Routes>
        <Route path="" element={<MainContent/>}></Route>
    </Routes>
);
export default Main;