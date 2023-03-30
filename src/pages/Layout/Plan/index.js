import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";


import PlanContent from "@/pages/Layout/Plan/PlanContent";
import PlanCreate from "@/pages/Layout/Plan/PlanCreate";
import PlanDetails from "@/pages/Layout/Plan/PlanDetails";

const Plan = () => (
    <Routes>
        <Route path="" element={<PlanContent/>}></Route>
        <Route path="create" element={<PlanCreate/>}></Route>
        <Route path="details/:scanId" element={<PlanDetails/>}></Route>
        <Route path="*" element={<Navigate to=""/>}></Route>
    </Routes>
);

export default Plan;