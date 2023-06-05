/**
 * 创建分析计划页面。
 */
import React from 'react';
import { plan_list_url } from "@/TestData";
import { ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Tag } from "antd";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import TaskHeader from "@/pages/Layout/TaskHeader";
import URLChart from "@/pages/Layout/Data/DataURL/URLChart";

function getUrls(id) {
    // TODO: 向后端发送请求，得到当前分析计划的URL列表
    for (let i in plan_list_url) {
        if (plan_list_url[i].id === id)
            return plan_list_url[i].urls
    }
    return []
}

const method_color = {
    GET: 'green',
    POST: 'blue',
    HEAD: 'volcano',
    PUT: 'orange',
    DELETE: 'lime',
    OPTIONS: 'cyan',
    CONNECT: 'geekblue',
    TRACE: 'purple',
}

const type_CN = {
    webpage: '网页',
    interface: '接口',
    static: '静态资源',
}


const columns = [
    {
        title: '方法',
        dataIndex: 'method',
        key: 'method',
        render: (method) => (
            <Tag color={method_color[method]}>
                {method}
            </Tag>
        )
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        render: (url) => (
            <a href={url} target="_blank">{url}</a>
        )
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render: (type) => (
            <Tag>{type_CN[type]}</Tag>
        )
    },
];

const DataURL = () => {
    const [params] = useSearchParams();
    // 分析任务id在URL中，以/url?id=1的形式展示。也可以使用任务名之类作为主键
    //
    let plan_id = parseInt(params.get("plan"))
    const urls = getUrls(plan_id)
    return (
        <>
            <TaskHeader />
            {plan_id ? <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}>
                <URLChart />
            </div> : null}

            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}>
                <ProTable
                    columns={columns}
                    dataSource={urls}
                    rowKey="id"
                    pagination={{
                        showQuickJumper: true,
                    }}
                    search={false}
                    dateFormatter="string"
                    headerTitle="URL列表"
                />
            </div>
        </>
    );
}

export default DataURL;