import React from 'react';
import { Space, Table, Tag } from 'antd';
import {Route, Routes} from "react-router-dom";
import DataURL from "@/pages/Layout/Data/DataURL";
const columns = [
        {
                title: '分析任务名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a>{text}</a>,
        },
        {
                title: '任务类型',
                dataIndex: 'type',
                key: 'type',
        },
        {
                title: '创建时间',
                dataIndex: 'time',
                key: 'time',
        },
        {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                render: (_, { tags }) => (
                    <>
                            {tags.map((tag) => {
                                    let color = tag.length > 5 ? 'geekblue' : 'green';
                                    if (tag === 'loser') {
                                            color = 'volcano';
                                    }
                                    return (
                                        <Tag color={color} key={tag}>
                                                {tag.toUpperCase()}
                                        </Tag>
                                    );
                            })}
                    </>
                ),
        },
        {
                title: '操作',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                            <a>Invite {record.name}</a>
                            <a>Delete</a>
                    </Space>
                ),
        },
];
const data = [
        {
                key: '1',
                name: 'John Brown',
                type: 32,
                time: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
        },
        {
                key: '2',
                name: 'Jim Green',
                type: 42,
                time: 'London No. 1 Lake Park',
                tags: ['loser'],
        },
        {
                key: '3',
                name: 'Joe Black',
                type: 32,
                time: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
        },
];
const DataContent = () => <Table columns={columns} dataSource={data} />;

const Data = () => (
    <Routes>
        <Route path='' element={<DataContent/>}></Route>
        <Route path='url' element={<DataURL/>}></Route>
    </Routes>
);

export default Data;