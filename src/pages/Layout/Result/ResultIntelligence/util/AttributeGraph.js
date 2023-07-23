import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import "./index.scss"

function refreshDragedNodePosition(e) {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
}

function AttributeGraph({ data }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const menu = new G6.Menu({
            offsetX: 10,
            offsetY: 10,
            shouldBegin(e) {
                return e.item.getModel().socialAttributes.length !== 0
            },
            getContent(e) {
                let div = document.createElement('div');
                e.item.getModel().socialAttributes.forEach((item) => {
                    let p = document.createElement("p")
                    let a
                    if (item.key === "" && item.value === "") {
                        a = document.createElement("p")
                        a.innerHTML = `......`
                    } else if (item.url === undefined) {
                        a = document.createElement("p")
                        a.innerHTML = `${item.key}: ${item.value}`
                    } else {
                        a = document.createElement("a")
                        a.setAttribute("href", item.url)
                        a.setAttribute("target", "_blank")
                        a.innerHTML = `${item.key}: ${item.value}`
                    }
                    p.appendChild(a)
                    div.appendChild(p)
                })
                return div
            },
            itemTypes: ['node'],
            trigger: "click",
        })

        const graph = new G6.Graph({
            container: containerRef.current,
            width: containerRef.current.scrollWidth,
            height: 400,
            layout: {
                type: 'force',
                linkDistance: 400 / 3,
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
        });

        graph.data(data);
        graph.render();

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
                if (!containerRef.current || !containerRef.current.scrollWidth || !containerRef.current.scrollHeight) return;
                graph.changeSize(containerRef.current.scrollWidth, containerRef.current.scrollHeight);
            };

        // Remember to clean up after the component is unmounted
        return () => graph.destroy();
    }, []);

    return <div ref={containerRef} style={{ border: '3px solid #b99014' }} />;
}

export default AttributeGraph;