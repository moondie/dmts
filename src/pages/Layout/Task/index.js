import React from 'react';
import { Avatar, List } from 'antd';
import {Link, Navigate, Route, Routes} from "react-router-dom";

import TaskContent from "@/pages/Layout/Task/TaskContent";
import TaskCreate from "@/pages/Layout/Task/TaskCreate";


const Task = () => (
    <Routes>
        <Route path='' element={<TaskContent/>}></Route>
        <Route path='create' element={<TaskCreate/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
    </Routes>
);

export default Task;