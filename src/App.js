import './App.css';
import React from 'react';
import {lazy, Suspense} from 'react'
import {unstable_HistoryRouter as HistoryRouter, BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {history} from "@/utils";
import {AuthComponent} from "@/components/AuthComponent";

const Login = lazy(() => import('./pages/Login'))
const EWDSLayout = lazy(() => import('./pages/Layout'))

const App = () => (
    <HistoryRouter history={history}>
        <div className='App'>
            <Suspense
                fallback={
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: 200
                        }}
                    >
                        loading...
                    </div>
                }
            >
                <Routes>
                    <Route path='/login' element={<Login/>}></Route>
                    {/* EWDSLayout中继续路由，不知是否有更好的写法可以改进 */}
                    <Route path="/" element={<Navigate to ="/main" />}/>
                    <Route path='/*' element={
                        <AuthComponent>
                            <EWDSLayout/>
                        </AuthComponent>
                    }>
                    </Route>

                </Routes>
            </Suspense>
        </div>

    </HistoryRouter>


);

export default App;