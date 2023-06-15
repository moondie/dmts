import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import AiFeature from "@/pages/Layout/Explore/Ai";
import BinaryToSourceFeature from "@/pages/Layout/Explore/Binary";
import EventFeature from "@/pages/Layout/Explore/Event";
import GenderFeature from "@/pages/Layout/Explore/Gender";


const Explore = () => (
    <Routes>
        <Route path='ai' element={<AiFeature />}></Route>
        <Route path='gender' element={<GenderFeature />}></Route>
        <Route path='binary' element={<BinaryToSourceFeature />}></Route>
        <Route path='event' element={<EventFeature />}></Route>
        <Route path='*' element={<Navigate to='' />}></Route>
    </Routes>
);

export default Explore;