import React, { useState } from 'react';
import { Button, Modal, Popconfirm, Tag } from 'antd';
import { ProList } from '@ant-design/pro-components';
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { PlusOutlined } from "@ant-design/icons";
import { useStore } from '@/store';

const statusStyle = {
    'success': {
        color: '#52c41a',
        description: '成功',
        action: '重新运行',
    },
    'failed': {
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

const languageColor = {
    "Python": {
        color: "#12aa9c"
    },
    "Java": {
        color: "#d34431"
    },
    "C/C++": {
        color: "#b2b213"
    },
    "Golang": {
        color: "#b34563"
    },
    "Shell": {
        color: "#b99014"
    },
}

const getLanguageColor = (language) => {
    if (language in languageColor) {
        return languageColor[language].color
    }
    return "#CDAA7D"
}

const getStatusInfo = (status) => {
    if (status in statusStyle) {
        return statusStyle[status]
    }
    return {
        color: '#808080',
        description: '未知',
        action: '未知',
    }
}

const TaskContentActionsRender = ({ id }) => {
    const { taskStore } = useStore()
    const navigate = useNavigate()
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
    const onLookData = () => {
        navigate("/result/trace?task_id=" + id.props.record.id)
    }
    const onDeleteConfirm = (id) => {
        taskStore.deleteTask({
            taskId: id
        })
        // 刷新网页
        window.location.reload();
    }
    const isSuccess = (status) => {
        if (status === "success") {
            return false
        }
        return true
    }
    const record = id.props.record
    const reposInfo = record.reposInfo === undefined ? [] : record.reposInfo
    return (
        <>
            <Button style={{ margin: 6 }} key="view" onClick={showModal}>
                查看详情
            </Button>
            <Button style={{ margin: 6 }} key="data" type='primary' onClick={onLookData} ghost disabled={isSuccess(record.taskDescription.status)}>
                查看数据
            </Button >
            <Popconfirm placement="left" onConfirm={() => { onDeleteConfirm(record.id) }} okType='danger'
                title="是否确认删除分析任务？" okText="删除" cancelText="取消">
                <Button style={{ margin: 6 }} key="delete" danger>
                    删除
                </Button>
            </Popconfirm>

            <Modal key="info" title={<h2>分析任务详情：</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h3>扫描URL：</h3>
                <p><a href={record.taskDescription.url}>{record.taskDescription.url}</a></p>
                <h3>扫描类别：</h3>
                <p>{record.type}</p>
                <h3>代码语言种类：</h3>
                {
                    reposInfo.languages.map((language) => (
                        <p>{language}</p>
                    ))
                }
                <h3>文件大小</h3>
                <p>{reposInfo.size}</p>
                <h3>运行时间：</h3>
                <p>{reposInfo.time}</p>
            </Modal>
        </>
    )
}

const TaskContentList = ({ data }) => {
    const navigate = useNavigate()
    const onCreateClick = () => {
        navigate('/task/create')
    }
    return (
        <ProList
            rowKey="id"
            dataSource={data}
            showActions="hover"
            showExtra="hover"
            metas={{
                title: {
                    dataIndex: 'name',
                },
                subTitle: {
                    dataIndex: 'language',
                    render: (language) => (
                        <Tag color={getLanguageColor(language)}>
                            {language}
                        </Tag>
                    )
                },
                description: {
                    dataIndex: 'taskDescription',
                    render: (description) => (
                        <div key="label" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ color: '#00000073', margin: 6 }}>创建时间：</div>
                            <div style={{ color: '#000000D9', margin: 6 }}>{description.createTime}</div>
                            <div style={{ color: '#00000073', margin: 6 }}>扫描URL：</div>
                            <div style={{ color: '#00000073', margin: 6 }}><a href={description.url}>{description.url}</a></div>
                            <div style={{ color: '#00000073', margin: 6 }}>运行状态：</div>
                            <div style={{ color: '#000000D9', margin: 6 }}><span
                                style={{
                                    display: 'inline-block',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: getStatusInfo(description.status).color,
                                    marginInlineEnd: 8,
                                }}
                            />
                                {getStatusInfo(description.status).description}
                            </div>
                        </div>
                    ),
                },
                actions: {
                    dataIndex: 'id',
                    render: (id) => (
                        <>
                            <TaskContentActionsRender id={id} />
                        </>
                    )
                },
            }
            }
            toolbar={{
                actions: [
                    <Button type="primary" key="primary" onClick={onCreateClick} >
                        <PlusOutlined /> 新建分析任务
                    </Button>,
                ],
            }}
        >

        </ProList>
    )
}

export default observer(TaskContentList)