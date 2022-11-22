import './App.css';
import React from 'react';
import {lazy, Suspense} from 'react'
import {unstable_HistoryRouter as HistoryRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import {history} from "@/utils";
import {AuthComponent} from "@/components/AuthComponent";

const Login = lazy(() => import('./pages/Login'))
const EWDSLayout = lazy(() => import('./pages/Layout'))
const Main = lazy(() => import('./pages/Main'))

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
                    <Route path='/' element={
                        <AuthComponent>
                            <EWDSLayout/>
                        </AuthComponent>
                    }>
                        <Route path='main' index element={<Main/>}></Route>
                    </Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </Suspense>
        </div>

    </HistoryRouter>


);

export default App;