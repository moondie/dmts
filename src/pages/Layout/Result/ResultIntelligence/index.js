/**
 * 此页面展示基于情报分析的社会属性和心理属性分析结果
 * 展示内容：
 * 以力导向图的形式展示代码归属结果和情报分析结果
 */

import React, { useEffect, useRef, useState } from "react";
import ResultHeader from "../ResultHeader";
import { useStore } from "@/store";
import { useSearchParams } from "react-router-dom";
import G6 from "@antv/g6";
import { Divider } from "antd";

import { NodeTooltips, EdgeToolTips, NodeContextMenu } from './component'


const ResultIntelligenceGraph = ({ task_id }) => {
    const ref = useRef(null)
    let graph = null
    const { resultStore } = useStore()
    // 边tooltip坐标
    const [showEdgeTooltip, setShowEdgeTooltip] = useState(false)
    const [edgeTooltipX, setEdgeTooltipX] = useState(0)
    const [edgeTooltipY, setEdgeTooltipY] = useState(0)

    // 节点tooltip坐标
    const [showNodeTooltip, setShowNodeTooltip] = useState(false)
    const [nodeTooltipX, setNodeToolTipX] = useState(0)
    const [nodeTooltipY, setNodeToolTipY] = useState(0)

    // 节点ContextMenu坐标
    const [showNodeContextMenu, setShowNodeContextMenu] = useState(false)
    const [nodeContextMenuX, setNodeContextMenuX] = useState(0)
    const [nodeContextMenuY, setNodeContextMenuY] = useState(0)

    const bindEvents = () => {
        // 监听edge上面mouse事件
        graph.on('edge:click', evt => {
            const { item, target } = evt
            const type = target.get('type')
            if (type !== 'text') {
                return
            }
            const model = item.getModel()
            const { endPoint } = model
            const y = endPoint.y - 35
            const x = endPoint.x - 150 - 10
            const point = graph.getCanvasByPoint(x, y)
            setEdgeTooltipX(point.x)
            setEdgeTooltipY(point.y)
            setShowEdgeTooltip(true)
        })

        graph.on('edge:mouseleave', () => {
            setShowEdgeTooltip(false)
        })

        // 监听node上面mouse事件
        graph.on('node:mouseenter', evt => {
            const { item } = evt
            const model = item.getModel()
            const { x, y } = model
            const point = graph.getCanvasByPoint(x, y)
            console.log(evt)
            setNodeToolTipX(point.x - 75)
            setNodeToolTipY(point.y + 15)
            setShowNodeTooltip(true)
        })

        // 节点上面触发mouseleave事件后隐藏tooltip和ContextMenu
        graph.on('node:mouseleave', () => {
            setShowNodeTooltip(false)
            setShowNodeContextMenu(false)
        })

        // 监听节点上面右键菜单事件
        graph.on('node:contextmenu', evt => {
            const { item } = evt
            const model = item.getModel()
            const { x, y } = model
            const point = graph.getCanvasByPoint(x, y)
            setNodeContextMenuX(point.x)
            setNodeContextMenuY(point.y)
            setShowNodeContextMenu(true)
        })
    }

    useEffect(() => {
        if (!graph) {
            const miniMap = new G6.Minimap()
            graph = new G6.Graph({
                container: ref.current,
                width: 1000,
                height: 500,
                modes: {
                    default: ['drag-canvas', 'drag-node', 'zoom-canvas']
                },
                defaultNode: {
                    shape: 'node',
                    size: 15,
                    // 节点文本样式
                    labelCfg: {
                        style: {
                            fill: '#000000A6',
                            fontSize: 5
                        }
                    },
                    // 节点默认样式
                    style: {
                        stroke: '#72CC4A',
                        width: 50
                    }
                },
                defaultEdge: {
                    shape: 'polyline'
                },
                // 节点交互状态配置
                nodeStateStyles: {
                    hover: {
                        stroke: 'red',
                        lineWidth: 3
                    }
                },
                edgeStateStyles: {
                    hover: {
                        stroke: 'blue',
                        lineWidth: 3
                    }
                },
                layout: {
                    type: 'force',
                    preventOverlap: true,
                },
                plugins: [miniMap]
            })
        }
        graph.data(resultStore.getIntelligenceResult(task_id))
        graph.render()

        const edges = graph.getEdges()
        edges.forEach(edge => {
            const line = edge.getKeyShape()
            const stroke = line.attr('stroke')
            const targetNode = edge.getTarget()
            targetNode.update({
                style: { stroke }
            })
        })
        graph.paint()

        bindEvents()
    }, [task_id])

    return (
        <div ref={ref}>
            {showEdgeTooltip && <EdgeToolTips x={edgeTooltipX} y={edgeTooltipY} />}
            {showNodeTooltip && <NodeTooltips x={nodeTooltipX} y={nodeTooltipY} />}
            {showNodeContextMenu && <NodeContextMenu x={nodeContextMenuX} y={nodeContextMenuY} />}
        </div>
    );
}

const ResultIntelligence = () => {

    const [params] = useSearchParams()
    let task_id = parseInt(params.get("task"))
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
                id="container"
            >
                <Divider>代码情报分析结果图</Divider>
                <ResultIntelligenceGraph task_id={task_id}></ResultIntelligenceGraph>
            </div>
        </>
    )
}

export default ResultIntelligence