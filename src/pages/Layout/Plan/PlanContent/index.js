/**
 *  分析计划列表页面的内容。用antd的高级列表ProList实现。
 *  列表标题：分析计划名 name
 *  列表描述：初始URL start_url
 *  列表内容：创建者 user
 *          创建时间 create_time
 *          分析任务数 task_count
 *  列表操作：编辑分析计划（待实现）
 *          删除分析计划（待实现）
 */

import React, {useEffect, useRef, useState} from "react";
import {Badge, Button, Descriptions, Empty} from "antd";
import {ProList} from "@ant-design/pro-components";
import {Link} from "react-router-dom";

import moment from "moment-timezone";

import {PlusOutlined} from "@ant-design/icons";
import {useStore} from "@/store";

const CurrentScanCard = (props) => {
    const [displayState, setDisplayState] = useState({emptyDisplay: "block", descriptionsDisplay: "none"});
    const [scanStatus, setScanStatus] = useState({errors: false, href: "", id: -1, status: "null", target_urls: []});
    const {scanStore} = useStore();
    const changeState = (display) => {
        if (display) {
            setDisplayState({emptyDisplay: "none", descriptionsDisplay: "block"});
        } else {
            setDisplayState({emptyDisplay: "block", descriptionsDisplay: "none"});
        }
    };
    useEffect(() => {
        scanStore.getStatus().then(status => {
            status.startTime=moment.tz(Number(status.startTime), "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss")
            setScanStatus(status);
            if (status.id === -1) {
                changeState(false);
            } else {
                changeState(true);
            }
        });
    }, []);
    return (
        <>
            <Descriptions style={{display: displayState.descriptionsDisplay}} bordered>
                <Descriptions.Item label="URL">{scanStatus.target_urls[0]}</Descriptions.Item>
                <Descriptions.Item label="创建者">{scanStatus.userName}</Descriptions.Item>
                <Descriptions.Item label="创建时间">{scanStatus.startTime}</Descriptions.Item>
                <Descriptions.Item label="状态">{scanStatus.status}</Descriptions.Item>
                {/*<Descriptions.Item label="Status">*/}
                {/*    <Badge status="processing" text="Running"/>*/}
                {/*</Descriptions.Item>*/}
            </Descriptions>
            <Empty style={{display: displayState.emptyDisplay}} description={"暂无数据"}/>
        </>

    );
};

const PlanContent = () => {
    const {scanStore} = useStore();
    const [scanList, setScanList] = useState([]);
    const statusDict = {
        "Stopped": "正常停止",
        "Halted": "用户手动停止",
        "Timeout": "超时停止"
    };
    const updateScanList = () => {
        scanStore.getScanList().then(res => {
            const list = [];
            for (const item of res) {
                const startTime = moment.tz(Number(item.startTime), "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
                list.push({
                    scanId: `scanId = ${item.scanId}`,
                    targetURL: item.targetURL,
                    content: {
                        userName: item.userName,
                        status: statusDict[item.status],
                        startTime: startTime
                    }
                });
            }
            setScanList(list);
        });
    };
    useEffect(() => {
        updateScanList();
    }, []);

    return (
        <>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "auto",
            }}>
                <h2>正在进行的扫描</h2>
                <CurrentScanCard props={{"updateScanList": updateScanList}}/>
            </div>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "auto",
            }}>
                <h2>已完成的扫描</h2>
                <ProList
                    rowKey="id"
                    dataSource={scanList}
                    metas={{
                        title: {
                            dataIndex: "targetURL",
                        },
                        description: {
                            dataIndex: "scanId",
                        },
                        content: {
                            dataIndex: "content",
                            render: (text) => (
                                <div key="label" style={{display: "flex", justifyContent: "space-around"}}>
                                    <div style={{width: 64}}>
                                        <div style={{color: "#00000073"}}>创建者</div>
                                        <div style={{color: "#000000D9"}}>{text.userName}</div>
                                    </div>
                                    <div style={{width: 128}}>
                                        <div style={{color: "#00000073"}}>创建时间</div>
                                        <div style={{color: "#000000D9"}}>{text.startTime}</div>
                                    </div>
                                    <div style={{width: 128}}>
                                        <div style={{color: "#00000073"}}>状态</div>
                                        <div style={{color: "#000000D9"}}><span>{text.status}</span></div>
                                    </div>
                                </div>
                            ),
                        },
                        actions: {
                            render: (text, row) => [
                                <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
                                    编辑
                                </a>,
                                <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
                                    删除
                                </a>,
                            ],
                        },
                    }}
                    toolbar={{
                        actions: [
                            <Button type="primary" key="primary">
                                <Link to="/plan/create" style={{color: "#fff"}}>
                                    <PlusOutlined/> 新建分析计划
                                </Link>
                            </Button>,
                        ],
                        search: {
                            onSearch: (value) => {
                                // TODO: 搜索分析计划，暂时不需要
                            },
                        },
                    }}
                >
                </ProList>
            </div>
        </>
    );
};

export default PlanContent;