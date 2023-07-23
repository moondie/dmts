import React from 'react';
import { Route, Routes } from "react-router-dom";
import FeatureEngineerPage from '@/pages/Layout/Result/ResultIntelligence/feature/engineer';
import FeatureTeamPage from '@/pages/Layout/Result/ResultIntelligence/feature/team';
import FeatureFivePage from '@/pages/Layout/Result/ResultIntelligence/feature/five';
import FeatureSocialPage from '@/pages/Layout/Result/ResultIntelligence/feature/social';
import FeatureLexicalPage from '@/pages/Layout/Result/ResultIntelligence/feature/lexical';
import FeatureLayoutPage from '@/pages/Layout/Result/ResultIntelligence/feature/layout';
import FeatureSyntaxPage from '@/pages/Layout/Result/ResultIntelligence/feature/syntax';
import FeatureTablePage from '@/pages/Layout/Result/ResultIntelligence/feature/main';
import Error from "@/pages/Layout/Error"


const FeatureRouter = () => (
    <Routes>
        <Route path='' element={<FeatureTablePage />}></Route>
        <Route path='engineer' element={<FeatureEngineerPage />}></Route>
        <Route path='team' element={<FeatureTeamPage />}></Route>
        <Route path='five' element={<FeatureFivePage />}></Route>
        <Route path='social' element={<FeatureSocialPage />}></Route>
        <Route path='lexical' element={<FeatureLexicalPage />}></Route>
        <Route path='layout' element={<FeatureLayoutPage />}></Route>
        <Route path='syntax' element={<FeatureSyntaxPage />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default FeatureRouter;