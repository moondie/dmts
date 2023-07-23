/**
 * 此页面展示基于情报分析的社会属性和心理属性分析结果
 * 展示内容：
 * 以力导向图的形式展示代码归属结果和情报分析结果
 */

import React from "react";
import { useStore } from "@/store";
import { ProCard } from "@ant-design/pro-components"
import "./index.css"
import { observer } from "mobx-react-lite";
import AttributeGraph from "./AttributeGraph";


const ResultIntelligenceOutlinePage = () => {
    const { resultStore } = useStore()
    return (
        <ProCard
            title="sdf"
            split="vertical"
        >
            <ProCard>
                <AttributeGraph data={resultStore.getIntelligenceResult(1)}></AttributeGraph>
            </ProCard>
            <ProCard>
                <AttributeGraph data={resultStore.getIntelligenceResult(2)}></AttributeGraph>
            </ProCard>
        </ProCard>
    )
}

export default observer(ResultIntelligenceOutlinePage)