import React from "react";
import { useStore } from "@/store";
import { ProCard } from "@ant-design/pro-components"
import { Table } from "antd";

import "./index.scss"


const BehaviorTablePage = () => {
    const { resultStore } = useStore()
    return (
        <ProCard
            headerBordered
            bordered
            split="horizontal"
        >
            <ProCard
                title="代码特征与作者心理特征动态映射"
                subTitle="编码行为模式达10种，可映射的社会行为模式达8种，代码特征与社会属性映射精确率达90%以上，召回率达95%以上"
            >
                <Table
                    dataSource={resultStore.outlineTableData.behavior.data}
                    columns={resultStore.outlineTableData.behavior.columns}
                    pagination={{ pageSize: 100 }}
                    rowClassName={(_, index) => (index >= 10 ? "even" : "odd")}
                />
            </ProCard>
        </ProCard >
    )
}

export default BehaviorTablePage