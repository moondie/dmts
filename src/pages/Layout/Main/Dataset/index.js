import React, { useState } from 'react';
import { Button, Modal, Table, Tag } from 'antd';
import { ProList, ProCard } from '@ant-design/pro-components';

import { useStore } from '@/store';
import { Image } from 'antd';

const getOriginColor = (origin) => {
    const originColor = {
        "论文": {
            color: "#12aa9c"
        },
        "自建": {
            color: "#b2b213"
        },
    }
    if (origin in originColor) {
        return originColor[origin].color
    }
    return "#CDAA7D"
}

const TaskContentActionsRender = ({ id }) => {
    const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
    const [isSchemeModalOpen, setSchemeIsModalOpen] = useState(false);
    const [isCountModalOpen, setCountIsModalOpen] = useState(false);
    const showMethodModal = () => {
        setIsMethodModalOpen(true);
    };
    const methodHandleOk = () => {
        setIsMethodModalOpen(false);
    };
    const methodHandleCancel = () => {
        setIsMethodModalOpen(false);
    };
    const showSchemeModal = () => {
        setSchemeIsModalOpen(true);
    };
    const schemeHandleOk = () => {
        setSchemeIsModalOpen(false);
    };
    const schemeHandleCancel = () => {
        setSchemeIsModalOpen(false);
    };
    const showCountModal = () => {
        setCountIsModalOpen(true);
    };
    const countHandleOk = () => {
        setCountIsModalOpen(false);
    };
    const countHandleCancel = () => {
        setCountIsModalOpen(false);
    };
    const record = id.props.record
    return (
        <>
            <Button style={{ margin: 6 }} key="view" onClick={showMethodModal}>
                查看数据收集方式
            </Button>
            <Button style={{ margin: 6 }} key="view" onClick={showSchemeModal}>
                查看数据库字段
            </Button>
            <Button style={{ margin: 6 }} key="view" onClick={showCountModal}>
                查看数据统计
            </Button>

            <Modal key="method" title={<h2>数据收集方式</h2>} open={isMethodModalOpen} onOk={methodHandleOk} onCancel={methodHandleCancel}>
                {record.source.map((para) => {
                    return (
                        <p>{para}</p>
                    )
                })}
            </Modal>

            <Modal key="scheme" title={<h2>数据库字段说明</h2>} open={isSchemeModalOpen} onOk={schemeHandleOk} onCancel={schemeHandleCancel}>
                {record.scheme.map(({ title, data, column }) => {
                    const showTitle = () => (title)
                    return (<Table title={showTitle} dataSource={data} columns={column}></Table>)
                })}
            </Modal>

            <Modal key="count" title={<h2>数据统计</h2>} open={isCountModalOpen} onOk={countHandleOk} onCancel={countHandleCancel}>
                <Table dataSource={record.count.data} columns={record.count.column}></Table>
            </Modal>
        </>
    )
}

const DatasetContentList = ({ data }) => {
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
                    dataIndex: 'dataName',
                    render: (nameList) => (
                        nameList.map((name) => {
                            return (
                                <Tag color="#12aa9c">
                                    {name}
                                </Tag>
                            )
                        })
                    )
                },
                description: {
                    dataIndex: 'description',
                    render: (description) => (
                        <div key="label" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ color: '#00000073', margin: 6 }}>获取方式:</div>
                            <div style={{ color: '#000000D9', margin: 6 }}><span
                                style={{
                                    display: 'inline-block',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: getOriginColor(description.origin),
                                    marginInlineEnd: 8,
                                }}
                            />
                                {description.origin}
                            </div>
                            <div style={{ color: '#00000073', margin: 6 }}>用途:</div>
                            <div style={{ color: '#000000D9', margin: 6 }}>{description.usage}</div>
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
            }}
        >
        </ProList>
    )
}

const DatasetInfo = () => {
    const { chartStore } = useStore()
    return (
        <ProCard
            title="数据集展示"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard>
                <DatasetContentList data={chartStore.datasetInfo}></DatasetContentList>
            </ProCard>
            <ProCard
                title="代码心理属性数据集统计结果"
                split="horizontal"
            >
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/2.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/3.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/4.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/5.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/6.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/7.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/8.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/9.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/10.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/11.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/12.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/13.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/14.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/15.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/16.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/17.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/18.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/19.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/20.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/21.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/22.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/23.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/24.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/25.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/26.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/27.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/28.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/29.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/30.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/31.png")}
                        />
                    </ProCard>
                </ProCard>
                <ProCard split="vertical">
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/32.png")}
                        />
                    </ProCard>
                    <ProCard colSpan="50%">
                        <Image
                            src={require("@/assets/Dataset/Psychological/33.png")}
                        />
                    </ProCard>
                </ProCard>
            </ProCard>
        </ProCard>

    )
}

export default DatasetInfo