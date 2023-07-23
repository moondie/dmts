import React from 'react';
import { Route, Routes } from "react-router-dom";
import FeatureRouter from "@/pages/Layout/Result/ResultIntelligence/feature";
import PsychologicalRouter from "@/pages/Layout/Result/ResultIntelligence/psychological";
import BehaviorRouter from "@/pages/Layout/Result/ResultIntelligence/behavior";
import Error from "@/pages/Layout/Error"


const ResultIntelligence = () => (
    <Routes>
        <Route path='feature/*' element={<FeatureRouter />}></Route>
        <Route path='psychological/*' element={<PsychologicalRouter />}></Route>
        <Route path='behavior/*' element={<BehaviorRouter />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default ResultIntelligence;