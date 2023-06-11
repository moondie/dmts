/**
 * 此页面展示基于情报分析的社会属性和心理属性分析结果
 * 展示内容：
 * 以力导向图的形式展示代码归属结果和情报分析结果
 */

import React from "react";
import ResultHeader from "../ResultHeader";
import { useStore } from "@/store";
import { useSearchParams } from "react-router-dom";
import G6 from "@antv/g6";

const ResultIntelligence = () => {
    const { resultStore } = useStore()
    const [params] = useSearchParams()
    let task_id = parseInt(params.get("task"))
    if (isNaN(task_id)) task_id = "请选择扫描任务";
    console.log(G6.Global.version)
    return (
        <>
            <ResultHeader></ResultHeader>
        </>
    )
}

export default ResultIntelligence