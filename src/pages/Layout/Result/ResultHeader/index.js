/**
 * 创建分析计划页面。
 */
import React, { useEffect } from 'react';
import { Form, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useStore } from '@/store';

const ResultHeader = ({ pageType }) => {
    const { taskStore } = useStore()
    const [params, setParams] = useSearchParams()
    let task_id = params.get("task_id")
    if (!task_id) task_id = "请选择扫描任务";
    const onPlanChange = (id) => {
        setParams({
            task_id: id
        })
    }
    useEffect(() => {
        taskStore.getTaskList()
    }, [])
    return (
        <div
            style={{
                margin: 8,
                padding: 24,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}
        >
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
                            taskStore.getSuccessTaskListInfo(pageType).map((task) => (
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