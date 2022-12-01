/**
 * 创建分析计划页面。
 */
import React from 'react';
import {plan_list_header} from "@/TestData";
import {Form, Select} from "antd";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const PlanHeader = () => {
    const [params] = useSearchParams()
    const {pathname} = useLocation()
    let plan_id = parseInt(params.get("plan"))
    if (isNaN(plan_id)) plan_id = "请选择分析计划";
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
                <Form.Item label="选择分析计划：" name="task">
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

export default PlanHeader;