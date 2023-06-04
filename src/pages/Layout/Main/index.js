import React, {lazy} from "react";
import {Route, Routes} from "react-router-dom";

import MainContent from "@/pages/Layout/Main/MainContent";

const Error = lazy(() => import('@/pages/Layout/Error'))

const Main = () => (
    <Routes>
        <Route path="" element={<MainContent/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
    </Routes>
);
export default Main;