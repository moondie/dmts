import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import aiFeature from "@/pages/Layout/Explore/ai";
import binaryToSourceFeature from "@/pages/Layout/Explore/binary";
import eventFeature from "@/pages/Layout/Explore/event";
import genderFeature from "@/pages/Layout/Explore/gender";


const Explore = () => (
    <Routes>
        <Route path='ai' element={<aiFeature />}></Route>
        <Route path='gender' element={<binaryToSourceFeature />}></Route>
        <Route path='binary' element={<eventFeature />}></Route>
        <Route path='event' element={<genderFeature />}></Route>
        <Route path='*' element={<Navigate to='' />}></Route>
    </Routes>
);

export default Explore;