import React from 'react';
import { Route, Routes } from "react-router-dom";
import BehaviorSocialPage from '@/pages/Layout/Result/ResultIntelligence/behavior/social';
import BehaviorCodingPage from '@/pages/Layout/Result/ResultIntelligence/behavior/coding';
import BehaviorTablePage from '@/pages/Layout/Result/ResultIntelligence/behavior/main';
import Error from "@/pages/Layout/Error"


const BehaviorRouter = () => (
    <Routes>
        <Route path='' element={<BehaviorTablePage />}></Route>
        <Route path='coding' element={<BehaviorCodingPage />}></Route>
        <Route path='social' element={<BehaviorSocialPage />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default BehaviorRouter;