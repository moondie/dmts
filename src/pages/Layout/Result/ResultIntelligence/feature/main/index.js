import React from "react";
import { useStore } from "@/store";
import { ProCard } from "@ant-design/pro-components"
import { Table } from "antd";

import "./index.scss"


const FeatureTablePage = () => {
    const { resultStore } = useStore()
    return (
        <ProCard
            headerBordered
            bordered
            split="horizontal"
        >
            <ProCard
                title="代码行为的高维特征提取算法"
                subTitle="代码隐式行为特征达50维，异构特征达5种"
            >
                <Table
                    dataSource={resultStore.outlineTableData.feature.data}
                    columns={resultStore.outlineTableData.feature.columns}
                    pagination={{ pageSize: 100 }}
                    rowClassName={(_, index) => {
                        if (index <= 2) {
                            return "odd"
                        } else if (index <= 7) {
                            return "even"
                        } else if (index <= 19) {
                            return "odd"
                        } else if (index <= 24) {
                            return "even"
                        } else if (index <= 45) {
                            return "odd"
                        } else if (index <= 52) {
                            return "even"
                        } else {
                            return "odd"
                        }
                    }}
                />
            </ProCard>
        </ProCard >
    )
}

export default FeatureTablePage