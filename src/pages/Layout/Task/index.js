import React from 'react';
import { Avatar, List } from 'antd';
import {Link, Navigate, Route, Routes} from "react-router-dom";

import TaskCreate from "@/pages/Layout/Task/TaskCreate";
const data = [
    {
        title: '分析任务 1',
        description: "URL分析任务",
    },
    {
        title: '分析任务 2',
        description: "漏洞检测任务",
    },
    {
        title: '分析任务 3',
        description: "动态分析任务",
    },
    {
        title: '分析任务 4',
        description: "删库跑路任务",
    },
];
const TaskContent = () => (
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
            <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<Link to='.'>{item.title}</Link>}
                        description={item.description}
                    />
            </List.Item>
        )}
    />
);

const Task = () => (
    <Routes>
        <Route path='' element={<TaskContent/>}></Route>
        <Route path='create' element={<TaskCreate/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
    </Routes>
);

export default Task;