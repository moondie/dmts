/**
 * 此页面展示代码归属分类的结果
 * 展示内容：
 * 以表的形式展示归属的结果，包括ULR、危险程度、相似度和相似特征等信息
 */

import React, { useState } from "react";
import ResultHeader from "@/pages/Layout/Result/ResultHeader";
import { useStore } from "@/store";
import { Table, Modal, Button } from "antd";
import { useSearchParams } from "react-router-dom/dist";

const { Column } = Table

const ResultTrace = () => {
    const { resultStore } = useStore()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [params] = useSearchParams()
    let task_id = parseInt(params.get("task"))
    if (isNaN(task_id)) task_id = "请选择扫描任务";
    return (
        <>
            <ResultHeader></ResultHeader>
            <Table dataSource={resultStore.getSimilarRepository(task_id)}>
                <Column
                    dataIndex="url"
                    title="Url"
                    key="url"
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
                    key="features"
                    render={(features, record) => {
                        return (
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                        )
                    }
                    }
                />
            </Table>
            <Modal title="关联特征" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table></Table>
            </Modal>
        </>
    );
}

export default ResultTrace
