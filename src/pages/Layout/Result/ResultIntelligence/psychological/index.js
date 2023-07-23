import React from 'react';
import { Route, Routes } from "react-router-dom";
import PsychologicalMultiSpacesPage from '@/pages/Layout/Result/ResultIntelligence/psychological/multispaces';
import PsychologicalSocialPage from '@/pages/Layout/Result/ResultIntelligence/psychological/social';
import PsychologicalTracePage from '@/pages/Layout/Result/ResultIntelligence/psychological/trace';
import PsychologicalTablePage from '@/pages/Layout/Result/ResultIntelligence/psychological/main';
import Error from "@/pages/Layout/Error"


const PsychologicalRouter = () => (
    <Routes>
        <Route path='' element={<PsychologicalTablePage />}></Route>
        <Route path='multispaces' element={<PsychologicalMultiSpacesPage />}></Route>
        <Route path='social' element={<PsychologicalSocialPage />}></Route>
        <Route path='trace' element={<PsychologicalTracePage />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
);

export default PsychologicalRouter;