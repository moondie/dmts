/**
 * 此页面展示基于情报分析的社会属性和心理属性分析结果
 * 展示内容：
 * 以力导向图的形式展示代码归属结果和情报分析结果
 */

import React, { useEffect, useRef } from "react";
import ResultHeader from "../ResultHeader";
import { useStore } from "@/store";
import { useSearchParams } from "react-router-dom";
import G6 from "@antv/g6";
import { Divider } from "antd";

import "./index.css"

const ResultIntelligenceGraph = ({ task_id }) => {
    const { resultStore } = useStore()
    const ref = useRef(null)
    let graph = null

    function refreshDragedNodePosition(e) {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
    }

    useEffect(() => {
        if (!graph) {
            const tooltip = new G6.Tooltip({
                offsetX: 10,
                offsetY: 10,
                shouldBegin(e) {
                    return e.item.getModel().social_attributes.length !== 0
                },
                getContent(e) {
                    let ul = document.createElement('ul');
                    e.item.getModel().social_attributes.forEach((item) => {
                        let li = document.createElement("li")
                        li.innerHTML = `${item.key}: ${item.value}`
                        ul.appendChild(li)
                    })
                    return ul
                },
                itemTypes: ['node']
            });

            const container = document.getElementById('layout-content');
            const width = container.clientWidth * 0.8;
            const height = container.clientHeight * 1.4;

            graph = new G6.Graph({
                container: 'container',
                width,
                height,
                layout: {
                    type: 'force',
                    linkDistance: 400,
                    preventOverlap: true,
                },
                defaultNode: {
                    size: 15,
                    style: {
                        fill: "#5C6470",
                        stroke: "#FFFFFF",
                        cursor: "grab",
                    },
                    labelCfg: {
                        position: 'right',
                        offset: 5,
                        style: {
                            fill: "#5C6470",
                            stroke: "#FFFFFF",
                        }
                    },
                },
                defaultEdge: {
                    style: {
                        endArrow: true,
                        stroke: "#5C6470",
                    },
                    labelCfg: {
                        autoRotate: true
                    }
                },
                modes: {
                    default: [
                        'drag-canvas',
                        'drag-node',
                        'zoom-canvas',
                    ]
                },
                plugins: [tooltip]
            })
            graph.data(resultStore.getIntelligenceResult(task_id))
            graph.render()

            graph.on('node:dragstart', function (e) {
                graph.layout();
                refreshDragedNodePosition(e);
            });
            graph.on('node:drag', function (e) {
                const forceLayout = graph.get('layoutController').layoutMethods[0];
                forceLayout.execute();
                refreshDragedNodePosition(e);
            });
            graph.on('node:dragend', function (e) {
                e.item.get('model').fx = null;
                e.item.get('model').fy = null;
            });

            if (typeof window !== 'undefined')
                window.onresize = () => {
                    if (!graph || graph.get('destroyed')) return;
                    if (!container || !container.scrollWidth || !container.scrollHeight) return;
                    graph.changeSize(container.scrollWidth, container.scrollHeight);
                };
        }
    }, [task_id])

    return (
        <div id="container" ref={ref}></div>
    )

}

// 懒加载力导向图
const ResultIntelligenceGraphContainer = ({ task_id }) => {
    if (task_id == "请选择扫描任务") {
        return (
            <></>
        )
    } else {
        return (
            <ResultIntelligenceGraph task_id={task_id}></ResultIntelligenceGraph>
        )
    }
}

const ResultIntelligence = () => {
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
            }}
            >
                <Divider>代码情报分析结果图</Divider>
                <ResultIntelligenceGraphContainer task_id={task_id}></ResultIntelligenceGraphContainer>
            </div>
        </>
    )
}

export default ResultIntelligence