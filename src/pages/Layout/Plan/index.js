import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";


import PlanContent from "@/pages/Layout/Plan/PlanContent";
import PlanCreate from "@/pages/Layout/Plan/PlanCreate";

const Plan = () => (
    <Routes>
        <Route path='' element={<PlanContent/>}></Route>
        <Route path='create' element={<PlanCreate/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
    </Routes>
);

export default Plan;