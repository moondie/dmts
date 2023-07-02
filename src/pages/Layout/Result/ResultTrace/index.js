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
import { QuestionCircleOutlined } from "@ant-design/icons"
import { Tooltip } from "antd";
import { Space } from "antd";

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
                    showSorterTooltip={false}
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
                        title={
                            <Space>
                                布局特征关联性
                                <Tooltip title="布局特征是代码的视觉特征,布局风格是代码呈现给人的第一观感，诸如代码中的缩进、换行、注释等因素都会影响代码的布局特征">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Space>
                        }
                        key="product_layout"
                        sorter={(rowA, rowB) => rowA.product_layout < rowB.product_layout}
                    />
                    <Column
                        dataIndex="product_lexical"
                        title={
                            <Space>
                                词法特征关联性
                                <Tooltip title="词法特征是代码的语言特征,良好的命名规则能够让代码读起来像自然语言一样通顺.诸如标识符、关键字、操作符等因素都会影响代码的词法特征">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Space>
                        }
                        key="product_lexical"
                        sorter={(rowA, rowB) => rowA.product_lexical < rowB.product_lexical}
                    />
                    <Column
                        dataIndex="product_syntactic"
                        title={
                            <Space>
                                语法特征关联性
                                <Tooltip title="句法特征是代码的逻辑特征，它对应编程者对于问题的拆解过程，抽象语法树中的节点、边以及属性等因素都会影响代码的句法特征">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Space>
                        }
                        key="product_syntactic"
                        sorter={(rowA, rowB) => rowA.product_syntactic < rowB.product_syntactic}
                    />
                </Table>
            </div >
        </>
    );
}

export default ResultTrace
