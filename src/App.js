import './App.css';
import React from 'react';
import { lazy, Suspense } from 'react'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { history } from "@/utils";

const EWDSLayout = lazy(() => import('./pages/Layout'))

const App = () => (
    <HistoryRouter history={history}>
        <div className='App'>
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: 200 }}> loading... </div>}>
                <Routes>
                    {/* EWDSLayout中继续路由，不知是否有更好的写法可以改进 */}
                    <Route path="/" element={<Navigate to="/main" />} />
                    <Route path='/*' element={<EWDSLayout />}>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    </HistoryRouter>
);

export default App;