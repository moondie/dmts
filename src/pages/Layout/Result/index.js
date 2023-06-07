import React from 'react';
import { Route, Routes } from "react-router-dom";
import ResultContent from "@/pages/Layout/Result/ResultContent";
import ResultTrace from "@/pages/Layout/Result/ResultTrace";
import ResultIntelligence from "@/pages/Layout/Result/ResultIntelligence";
import Error from "@/pages/Layout/Error"


const Result = () => (
    <Routes>
        <Route path='' element={<ResultContent />}></Route>
        <Route path='trace' element={<ResultTrace />}></Route>
        <Route path='intelligence' element={<ResultIntelligence />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default Result;