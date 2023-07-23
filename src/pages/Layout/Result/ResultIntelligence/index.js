import React from 'react';
import { Route, Routes } from "react-router-dom";
import ResultIntelligenceOutlinePage from "@/pages/Layout/Result/ResultIntelligence/main";
import FeatureCasePage from "@/pages/Layout/Result/ResultIntelligence/feature";
import PsychologicalCasePage from "@/pages/Layout/Result/ResultIntelligence/psychological";
import BehaviorCasePage from "@/pages/Layout/Result/ResultIntelligence/behavior";
import Error from "@/pages/Layout/Error"


const ResultIntelligence = () => (
    <Routes>
        <Route path='' element={<ResultIntelligenceOutlinePage />}></Route>
        <Route path='feature' element={<FeatureCasePage />}></Route>
        <Route path='psychological' element={<PsychologicalCasePage />}></Route>
        <Route path='behavior' element={<BehaviorCasePage />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default ResultIntelligence;