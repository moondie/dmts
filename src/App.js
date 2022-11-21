import './App.css';
import React from 'react';
import {Button, Space} from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'

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
                <Route path='/' element={<Login/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </div>

    </BrowserRouter>


);

export default App;