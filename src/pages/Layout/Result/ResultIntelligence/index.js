/**
 * 此页面展示基于情报分析的社会属性和心理属性分析结果
 * 展示内容：
 * 以力导向图的形式展示代码归属结果和情报分析结果
 */

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import ResultHeader from "../ResultHeader";
import { useStore } from "@/store";
import { useSearchParams } from "react-router-dom";
import G6 from "@antv/g6";
import { Divider } from "antd";

import "./index.css"
import { observer } from "mobx-react-lite";

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
            const menu = new G6.Menu({
                offsetX: 10,
                offsetY: 10,
                shouldBegin(e) {
                    return e.item.getModel().social_attributes.length !== 0
                },
                getContent(e) {
                    let div = document.createElement('div');
                    e.item.getModel().social_attributes.forEach((item) => {
                        let p = document.createElement("p")
                        let a = document.createElement("a")
                        a.setAttribute("href", item.url)
                        a.setAttribute("target", "_blank")
                        a.innerHTML = `${item.key}: ${item.value}`
                        p.appendChild(a)
                        div.appendChild(p)
                    })
                    return div
                },
                itemTypes: ['node'],
                trigger: "click",
            })

            const container = document.getElementById('layout-content');
            const width = container.clientWidth * 0.8;
            const height = container.clientHeight;

            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width,
                height,
                layout: {
                    type: 'force',
                    linkDistance: height / 3,
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
                plugins: [menu]
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
        <div ref={ref}></div>
    )

}

// 懒加载力导向图
const ResultIntelligenceGraphContainer = ({ task_id }) => {
    if (task_id === "请选择扫描任务") {
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
    const { taskStore } = useStore()
    const [params] = useSearchParams()
    let task_id = params.get("task_id")
    if (!task_id) task_id = "请选择扫描任务";
    useEffect(() => {
        taskStore.setPageType("intelligence")
    }, [])
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

export default observer(ResultIntelligence)