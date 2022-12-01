import React from 'react';
import { Space, Table, Tag } from 'antd';
import {Route, Routes} from "react-router-dom";
import DataURL from "@/pages/Layout/Data/DataURL";
import DataContent from "@/pages/Layout/Data/DataContent";

const Data = () => (
    <Routes>
        <Route path='' element={<DataContent/>}></Route>
        <Route path='url' element={<DataURL/>}></Route>
    </Routes>
);

export default Data;