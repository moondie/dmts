/**
 * 此页面展示代码归属分类的结果
 * 展示内容：
 * 以表的形式展示归属的结果，包括ULR、危险程度、相似度和相似特征等信息
 */

import React, { useState } from "react";
import ResultHeader from "@/pages/Layout/Result/ResultHeader";
import { useStore } from "@/store";
import { Table, Modal, Button, Divider, Space } from "antd";
import { useSearchParams } from "react-router-dom/dist";

const { Column } = Table

const ResultTrace = () => {
    const { resultStore } = useStore()
    // 关联特征 Modal 控制
    const [isAsFModalOpen, setIsAsFModalOpen] = useState(false)
    const showAsFModal = () => {
        setIsAsFModalOpen(true);
    };
    const handleAsFOk = () => {
        setIsAsFModalOpen(false);
    };
    const handleAsFCancel = () => {
        setIsAsFModalOpen(false);
    };
    // 所有特征 Modal 控制
    const [isAllFModalOpen, setIsAllFModalOpen] = useState(false)
    const showAllFModal = () => {
        setIsAllFModalOpen(true);
    };
    const handleAllFOk = () => {
        setIsAllFModalOpen(false);
    };
    const handleAllFCancel = () => {
        setIsAllFModalOpen(false);
    };
    const [params] = useSearchParams()
    let task_id = parseInt(params.get("task_id"))
    if (isNaN(task_id)) task_id = "请选择扫描任务";
    return (
        <>
            <ResultHeader></ResultHeader>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}>
                <Divider>代码归属分析结果表</Divider>
                <Table dataSource={resultStore.getSimilarRepository(task_id)} width="12">
                    <Column
                        dataIndex="url"
                        title="Url"
                        key="url"
                        textWrap="word-break"
                        render={
                            (url, record) => {
                                return (<a href={url}>{url.substring(8,)}</a>)
                            }
                        }
                        sorter={(rowA, rowB) => rowA.url < rowB.url}
                    />
                    <Column
                        dataIndex="type"
                        title="类型"
                        key="type"
                        sorter={(rowA, rowB) => rowA.type < rowB.type}
                    />
                    <Column
                        dataIndex="similarity_score"
                        title="相似度分数"
                        key="similarity_score"
                        sorter={(rowA, rowB) => rowA.similarity_score < rowB.similarity_score}
                    />
                    <Column
                        dataIndex="malicious_level"
                        title="恶意等级"
                        key="malicious_level"
                        sorter={(rowA, rowB) => rowA.malicious_level < rowB.malicious_level}
                    />
                    <Column
                        dataIndex="features"
                        title="关联特征"
                        key="associated_features"
                        render={(features, record) => {
                            return (
                                <>
                                    <Space size="large" wrap>
                                        <Button type="primary" onClick={showAsFModal}>
                                            查看关联特征
                                        </Button>
                                        <Button type="primary" onClick={showAllFModal}>
                                            查看所有特征
                                        </Button>
                                    </Space>
                                </>
                            )
                        }
                        }
                    />
                </Table>
                <Modal title="关联特征" open={isAsFModalOpen} onOk={handleAsFOk} onCancel={handleAsFCancel}>
                    <Table></Table>
                </Modal>
                <Modal title="所有特征" open={isAllFModalOpen} onOk={handleAllFOk} onCancel={handleAllFCancel}>
                    <Table></Table>
                </Modal>
            </div>
        </>
    );
}

export default ResultTrace
