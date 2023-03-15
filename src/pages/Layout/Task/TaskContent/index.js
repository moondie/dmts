/**
 *  分析任务列表页面的内容。用antd的高级列表ProList实现。
 *  列表标题：分析任务名 name
 *  列表描述：分析任务类型 WEB/CGI
 *  列表内容：
 *  列表操作：
 *
 */

import React, {useState} from 'react';
import {Button, List, Modal, Popconfirm, Tag} from 'antd';
import { ProList } from '@ant-design/pro-components';
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";

import {plan_list_task} from "@/TestData";
import {PlusOutlined} from "@ant-design/icons";
import PlanHeader from "@/pages/Layout/PlanHeader";

function getTasks(id){
    // TODO: 向后端发送请求，得到当前分析计划的分析任务列表
    for (let i in plan_list_task) {
        if (plan_list_task[i].id === id)
            return plan_list_task[i].tasks
    }
    return []
}

function getConfig(task_id) {

}

const status_style = {
    'success': {
        color: '#52c41a',
        description: '成功',
        action: '重新运行',
    },
    'failed' : {
        color: '#c41a52',
        description: '失败',
        action: '重新运行'
    },
    'running': {
        color: '#1a52c4',
        description: '运行中',
        action: '终止',
    },
    'waiting': {
        color: '#808080',
        description: '待运行',
        action: '运行',
    },
}


const TaskContentActionsRender = ({id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onDeleteConfirm = () => {

    }
    const record = id.props.record
    const scan_urls = record.config.scan_urls === undefined ? [] : record.config.scan_urls
    return (
        <>
        <Button style={{margin: 6}} key="run_state" type='primary'>
            {status_style[record.content.status].action}
        </Button>
        <Button style={{margin: 6}} key="view" onClick={showModal}>
            查看详情
        </Button>
        <Button style={{margin: 6}} key="data" type='primary' ghost>
            查看数据
        </Button>
        <Popconfirm placement="left" onConfirm={onDeleteConfirm} okType='danger'
                    title="是否确认删除分析任务？" okText="删除" cancelText="取消">
            <Button style={{margin: 6}} key="delete" danger>
                删除
            </Button>
        </Popconfirm>
        <Modal key="info" title={"分析任务详情：" + record.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h3>扫描URL：</h3>
            {
                // TODO: 详细信息展示
                scan_urls.map((url)=>(
                    <p>
                        <a href={url} target='_blank'>
                            {url}
                        </a>
                    </p>
                ))
            }
        </Modal>
    </>
)
}

const TaskContent = () => {
    const [params] = useSearchParams()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    let plan_id = parseInt(params.get("plan"))
    let is_valid_id = isNaN(plan_id)
    const onCreateClick = () => {
        navigate('/task/create?plan=' + plan_id)
    }
    const tasks = getTasks(plan_id)
    return (
        <>
            <PlanHeader/>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}>
                <ProList
                    rowKey="id"
                    dataSource={tasks}
                    showActions="hover"
                    showExtra="hover"
                    metas={{
                        title: {
                            dataIndex: 'name',
                        },
                        subTitle: {
                            dataIndex: 'type',
                            render: (type) => (
                                <Tag color={type === 'web' ? "green" : "red"}>
                                    {type}
                                </Tag>
                            )
                        },
                        description: {
                            dataIndex: 'content',
                            render: (text) => (
                                <div key="label" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{ color: '#00000073', margin: 6 }}>创建时间：</div>
                                    <div style={{ color: '#000000D9', margin: 6 }}>{text.create_time}</div>
                                    <div style={{ color: '#00000073', margin: 6 }}>运行状态：</div>
                                    <div style={{ color: '#000000D9', margin: 6 }}><span
                                        style={{
                                            display: 'inline-block',
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: status_style[text.status].color,
                                            marginInlineEnd: 8,
                                        }}
                                    />
                                        {status_style[text.status].description}
                                    </div>
                                </div>
                            ),
                        },
                        actions: {
                            dataIndex: 'id',
                            render: (id) => (
                                <TaskContentActionsRender key={id.props.record.id} id={id}/>
                            )
                        },
                    }}
                    toolbar={{
                        actions: [
                            <Button type="primary" key="primary" onClick={onCreateClick}
                                    disabled={is_valid_id}>
                                    <PlusOutlined /> 新建分析任务
                            </Button>,
                        ],
                        search: {
                            onSearch: (value) => {
                            },
                        },
                    }}
                >

                </ProList>
            </div>
        </>
    );
}

export default TaskContent;