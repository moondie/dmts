import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import MainContent from "@/pages/Layout/Main/MainContent";
import DatasetInfo from "@/pages/Layout/Main/Dataset";

const Error = lazy(() => import('@/pages/Layout/Error'))

const Main = () => (
    <Routes>
        <Route path="" element={<MainContent />}></Route>
        <Route path="dataset/*" element={<DatasetInfo />}></Route>
        <Route path="/*" element={<Error />}></Route>
    </Routes>
);
export default Main;