/**
 * 创建分析计划页面。
 */
import React, {useState} from 'react';
import {plan_list_header} from "@/TestData";
import { ProTable } from '@ant-design/pro-components';
import {Button, Form, Popconfirm, Select, Tag} from "antd";
import {Link, Navigate, useLocation, useNavigate, useSearchParams} from "react-router-dom";

const DataHeader = () => {
    const [params] = useSearchParams()
    const {pathname} = useLocation()
    let plan_id = parseInt(params.get("plan"))
    if (isNaN(plan_id)) plan_id = 1;
    const navigate = useNavigate()
    const onPlanChange = (id) => {
        navigate(pathname + '?plan=' + id)
    }
    return (
        <div style={{
            margin: 8,
            padding: 24,
            backgroundColor: '#fff',
            borderRadius: 16,
            overflow: "auto",
        }}>
            <Form
                layout="horizontal"
                initialValues={{
                    task: plan_id
                }}
                colon={false}
            >
                <Form.Item label="选择分析任务：" name="task">
                    <Select onChange={onPlanChange}>
                        {
                            plan_list_header.map((plan) => (
                                <Select.Option key={plan.id} value={plan.id}>{plan.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>

            </Form>
        </div>
    )
}

export default DataHeader;