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

import React, {useEffect, useState} from "react";
import {Badge, Button, Descriptions, Empty, message, Modal, Popconfirm, Typography, Upload} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {ProList} from "@ant-design/pro-components";
import {Link, useLocation} from "react-router-dom";

import moment from "moment-timezone";

import {PlusOutlined} from "@ant-design/icons";
import {useStore} from "@/store";
import {getToken} from "@/utils";
import {BASE_URL} from "@/utils/http";

const {Dragger} = Upload;
const {Title} = Typography;

const UploadCgiFile = () => {
    const props = {
        name: "file",
        multiple: true,
        action: `${BASE_URL}/cgi/upload_cgi`,
        // withCredentials: true,
        maxCount: 1,
        headers: {
            Authorization: getToken()
        },
        onChange(info) {
            const {status} = info.file;
            if (status !== "uploading") {
            }
            if (status === "done") {
                message.success(`${info.file.name} 文件上传成功`);
            } else if (status === "error") {
                message.error(`${info.file.name} 文件上传失败`);
            }
        },
        onDrop(e) {
            console.log("删除文件", e.dataTransfer.files);
        },
    };
    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">点击或拖拽文件至此区域上传</p>
            <p className="ant-upload-hint">
                一次只上传一个CGI文件
            </p>
        </Dragger>
    );
};

const CurrentScanCard = (props) => {
    const [displayState, setDisplayState] = useState({emptyDisplay: "block", descriptionsDisplay: "none"});
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    const [logs, setLogs] = useState([]);
    const [scanStatus, setScanStatus] = useState({
        errors: false,
        href: "",
        id: -1,
        scanId: "null",
        status: "null",
        target_urls: ["123"]
    });
    const {scanStore} = useStore();

    const showLogModal = () => {
        scanStore.getLogs().then(logs => {
            setLogs(logs);
            setIsLogModalOpen(true);
        });
    };
    const handleOk = () => {
        setIsLogModalOpen(false);
    };
    const handleCancel = () => {
        setIsLogModalOpen(false);
    };
    const changeState = (display) => {
        if (display) {
            setDisplayState({emptyDisplay: "none", descriptionsDisplay: "block"});
        } else {
            setDisplayState({emptyDisplay: "block", descriptionsDisplay: "none"});
        }
    };
    const {updateScanList} = props.props;
    const onClickStop = () => {
        scanStore.stopScan({scanId: scanStatus.scanId}).then(res => {
            updateScanList();
            message.success("已发送停止扫描指令");
        }).catch(err => {
            message.error("发送停止扫描指令失败");
            console.log(err);
        });
    };
    const updateRunningStatus = (show_message = true) => {
        scanStore.getStatus().then(status => {
            status.startTime = moment.tz(Number(status.startTime), "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
            setScanStatus(status);
            if (status.id === -1) {
                changeState(false);
                updateScanList();
            } else {
                changeState(true);
            }
            if (show_message) {
                message.success("更新扫描状态成功");
            }

        });
    };


    useEffect(() => {
        const status_interval = setInterval(() => {
            updateRunningStatus(false);
        }, 1000);
        return () => {
            clearInterval(status_interval);
        };
    }, []);

    return (
        <>
            <Modal title="日志" open={isLogModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {logs.map(log => <p key={log.id}>{log.message}</p>)}
            </Modal>
            <Descriptions style={{display: displayState.descriptionsDisplay}} bordered>
                <Descriptions.Item
                    label="URL">{scanStatus.target_urls ? scanStatus.target_urls[0] : "123"}</Descriptions.Item>
                <Descriptions.Item label="scanId">{scanStatus.scanId}</Descriptions.Item>
                <Descriptions.Item label="创建者">{scanStatus.userName}</Descriptions.Item>
                <Descriptions.Item label="创建时间">{scanStatus.startTime}</Descriptions.Item>
                <Descriptions.Item label="状态">
                    <Badge status="processing" text={scanStatus.status}/>
                </Descriptions.Item>
                <Descriptions.Item label="操作">
                    <Popconfirm
                        placement="top"
                        title="是否停止当前扫描？"
                        onConfirm={() => onClickStop()}
                        okText="Yes"
                        cancelText="No">
                        <Button style={{marginRight: 5}} type={"primary"} danger>停止</Button>
                    </Popconfirm>

                    <Button style={{marginRight: 5}} type={"primary"} onClick={() => showLogModal()}>查看日志</Button>
                    <Button style={{marginRight: 5}} type={"primary"}
                            onClick={() => updateRunningStatus()}>刷新</Button>
                </Descriptions.Item>
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
                    <Title level={4} style={{
                        margin: 8,
                        padding: 8,
                    }}>
                        文件上传
                    </Title>
                    <div style={{
                        margin: 8,
                        padding: 8,
                    }}>
                        <UploadCgiFile/>
                    </div>
                </div>

                <div style={{
                    margin: 8,
                    padding: 8,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    overflow: "auto",
                }}>
                    <Title level={4} style={{
                        margin: 8,
                        padding: 8,
                    }}>
                        正在进行的扫描
                    </Title>
                    <div style={{
                        margin: 8,
                        padding: 8,
                    }}>
                        <CurrentScanCard props={{"updateScanList": updateScanList}}/>
                    </div>
                </div>
                <div style={{
                    margin: 8,
                    padding: 8,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    overflow: "auto",
                }}>
                    <Title level={4} style={{
                        margin: 8,
                        padding: 8,
                    }}>
                        已完成的扫描
                    </Title>
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
                                render: (text, row) => {
                                    //console.log(row.scanId);
                                    const scanId = row.scanId.split(" ")[2];
                                    //console.log(scanId);
                                    return [
                                        <Link to={`/plan/details/${scanId}`} key={scanId}>详情</Link>,
                                        <a href={row.html_url} target="_blank" rel="noopener noreferrer"
                                           key="delete">
                                            删除
                                        </a>,
                                    ];
                                },
                            },
                        }}
                        toolbar={{
                            actions: [
                                <Link to="/plan/create" style={{color: "#fff"}}>
                                    <Button type="primary" key="primary">
                                        <PlusOutlined/> 新建分析计划
                                    </Button>
                                </Link>,
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
    }
;

export default PlanContent;