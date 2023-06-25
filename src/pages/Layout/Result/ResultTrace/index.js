/**
 * 此页面展示代码归属分类的结果
 * 展示内容：
 * 以表的形式展示归属的结果，包括ULR、危险程度、相似度和相似特征等信息
 */

import React, { useEffect, useState } from "react";
import ResultHeader from "@/pages/Layout/Result/ResultHeader";
import { useStore } from "@/store";
import { Table, Divider } from "antd";
import { useSearchParams } from "react-router-dom/dist";

const { Column } = Table

const ResultTrace = () => {
    const { resultStore, taskStore } = useStore()
    const [traceResult, setTraceResult] = useState([])
    const [params] = useSearchParams()
    useEffect(() => {
        taskStore.setPageType("trace")
        let task_id = params.get("task_id")
        if (!task_id) {
            return
        }
        resultStore.getTaskResultByTaskID(task_id).then((res) => {
            setTraceResult(res.data.associated_repo_objs)
        }).catch((err) => {
            alert("获取结果失败")
            console.error(err)
        })
    }, [params])
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
                <Table
                    dataSource={traceResult}
                    width="12"
                >
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
                        dataIndex="similarity"
                        title="相似度分数"
                        key="similarity_score"
                        sorter={(rowA, rowB) => rowA.similarity_score < rowB.similarity_score}
                    />
                    <Column
                        dataIndex="threat_level"
                        title="恶意等级"
                        key="malicious_level"
                        sorter={(rowA, rowB) => rowA.malicious_level < rowB.malicious_level}
                    />
                    <Column
                        dataIndex="product_layout"
                        title="布局特征关联性"
                        key="product_layout"
                        sorter={(rowA, rowB) => rowA.product_layout < rowB.product_layout}
                    />
                    <Column
                        dataIndex="product_lexical"
                        title="词法特征关联性"
                        key="product_lexical"
                        sorter={(rowA, rowB) => rowA.product_lexical < rowB.product_lexical}
                    />
                    <Column
                        dataIndex="product_syntactic"
                        title="语法特征关联性"
                        key="product_syntactic"
                        sorter={(rowA, rowB) => rowA.product_syntactic < rowB.product_syntactic}
                    />
                </Table>
            </div >
        </>
    );
}

export default ResultTrace
