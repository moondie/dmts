/**
 * 创建分析计划页面。
 */
import React from 'react';
import { Form, Select } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useStore } from '@/store';

const ResultHeader = () => {
    const { taskStore } = useStore()
    const [params] = useSearchParams()
    const { pathname } = useLocation()
    let task_id = parseInt(params.get("task_id"))
    if (isNaN(task_id)) task_id = "请选择扫描任务";
    const navigate = useNavigate()
    const onPlanChange = (id) => {
        navigate(pathname + '?task_id=' + id)
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
                    task: task_id
                }}
                colon={false}
            >
                <Form.Item label="选择扫描任务：" name="task">
                    <Select onChange={onPlanChange}>
                        {
                            taskStore.getSuccessTaskListInfo().map((task) => (
                                <Select.Option key={task.id} value={task.id}>{task.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ResultHeader;