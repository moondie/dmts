import './App.css';
import React from 'react';
import {Button, Space} from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AuthComponent} from "@/components/AuthComponent";
import Login from '@/pages/Login'
import EWDSLayout from '@/pages/Layout'
import Main from "@/pages/Main";


const App = () => (
    <BrowserRouter>
        {/*<Space wrap>*/}
        {/*    <Button type="primary">Primary Button</Button>*/}
        {/*    <Button>Default Button</Button>*/}
        {/*    <Button type="dashed">Dashed Button</Button>*/}
        {/*    <Button type="text">Text Button</Button>*/}
        {/*    <Button type="link">Link Button</Button>*/}
        {/*</Space>*/}
        <div className='App'>
            <Routes>
                <Route path='/' element={<AuthComponent><EWDSLayout/></AuthComponent>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/main' element={<AuthComponent><Main/></AuthComponent>}></Route>
            </Routes>
        </div>

    </BrowserRouter>


);

export default App;