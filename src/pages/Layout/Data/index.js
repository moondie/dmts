import React from 'react';
import { Route, Routes } from "react-router-dom";
import DataContent from "@/pages/Layout/Data/DataContent";
import DataTrace from "@/pages/Layout/Data/DataTrace";
import DataIntelligence from "@/pages/Layout/Data/DataIntelligence";
import Error from "@/pages/Layout/Error"


const Data = () => (
    <Routes>
        <Route path='' element={<DataContent />}></Route>
        <Route path='trace' element={<DataTrace />}></Route>
        <Route path='intelligence' element={<DataIntelligence />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default Data;