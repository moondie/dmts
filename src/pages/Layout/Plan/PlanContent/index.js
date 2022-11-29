/**
 *  分析计划列表页面的内容。用antd的高级列表ProList实现。
 *  列表标题：分析计划名 name
 *  列表描述：初始URL start_url
 *  列表内容：分析任务数 count
 *  列表操作：编辑分析计划（待实现）
 *          删除分析计划（待实现）
 */

import React from 'react';
import {Button} from 'antd';
import { ProList } from '@ant-design/pro-components';
import {Link} from "react-router-dom";

import {plan_list_general} from "@/TestData";
import {PlusOutlined} from "@ant-design/icons";

const PlanContent = () => (
    <div style={{
        margin: 8,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
    }}>
        <ProList
            rowKey="id"
            dataSource={plan_list_general}
            metas={{
                title: {
                    dataIndex: 'name',
                },
                description: {
                    dataIndex: 'start_url',
                },
                content: {
                    dataIndex: 'content',
                    render: (text) => (
                        <div key="label" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            {
                                //(typeof text == 'string' ? [] : text).map((t) => {})}
                            }
                            <div>
                                <div style={{ color: '#00000073' }}>创建者</div>
                                <div style={{ color: '#000000D9' }}>{text.user}</div>
                            </div>
                            <div>
                                <div style={{ color: '#00000073' }}>创建时间</div>
                                <div style={{ color: '#000000D9' }}>{text.create_time}</div>
                            </div>
                            <div>
                                <div style={{ color: '#00000073' }}>分析任务数</div>
                                <div style={{ color: '#000000D9' }}>{text.task_count}</div>
                            </div>
                        </div>
                    ),
                },
                actions: {
                    render: (text, row) => [
                        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
                            编辑
                        </a>,
                        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
                            删除
                        </a>,
                    ],
                },
            }}
            toolbar={{
                actions: [
                    <Button type="primary" key="primary">
                        <Link to='/plan/create' style={{color: '#fff'}}>
                            <PlusOutlined /> 新建分析计划
                        </Link>
                    </Button>,
                ],
                search: {
                    onSearch: (value) => {
                        // TODO: 搜索分析计划，暂时不需要
                    },
                },
            }}
        >

        </ProList>
    </div>
);

export default PlanContent;