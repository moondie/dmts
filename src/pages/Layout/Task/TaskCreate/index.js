/**
 * 创建分析计划页面。
 */
import React, { useState } from 'react';
import { Button, Divider, Form, Input, Select, Radio, Typography, message, Switch, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/http";
import { InboxOutlined } from "@ant-design/icons";
import { CheckCard } from '@ant-design/pro-components';
import { getToken } from "@/utils";
import { useStore } from '@/store';

const { Title } = Typography;
const { Option } = Select;
const { Dragger } = Upload;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const TaskPattern = () => {
    const [taskPattern, setTaskPattern] = useState("url")
    const onTaskPatternChange = (value) => {
        setTaskPattern(value)
    }

    const UploadFile = () => {
        const props = {
            name: "task_context",
            multiple: true,
            action: `${BASE_URL}/cgi/upload_cgi`,
            // withCredentials: true,
            maxCount: 1,
            headers: {
                Authorization: getToken()
            },
            onChange(info) {
                const { status } = info.file;
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
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽文件至此区域上传</p>
                <p className="ant-upload-hint">
                    支持上传 .zip, .rar, .7z 等压缩包文件
                </p>
            </Dragger>
        );
    };

    const InputContext = ({ taskPattern }) => {
        switch (taskPattern) {
            case "url":
                return (
                    <Form.Item
                        label=""
                        name="task_context"
                        style={{ marginBottom: 0 }}
                    >
                        <Input name='task_context' addonBefore={selectBefore} placeHolder={'请输入待扫描仓库链接，如:https://github.com/charlesSeek/weka-example'} />
                    </Form.Item>
                )
            case "file_upload":
                return (
                    <Form.Item
                        label=""
                        name="task_context"
                        style={{ marginBottom: 0 }}
                    >
                        <UploadFile></UploadFile>
                    </Form.Item>
                )
            default:
                return (
                    <></>
                )
        }
    }
    return (
        <>
            <CheckCard.Group
                onChange={(value) => {
                    onTaskPatternChange(value)
                }}
                defaultValue="url"
            >
                <CheckCard title="URL 扫描模式" description="给定 ULR,将自动从该 URL 爬取源代码并分析.目前支持 GitHub, Gitee, Gitlab" value="url" />
                <CheckCard title="文件上传模式" description="从本地上传源代码文件并分析.目前支持 .zip, .7z, .rar 压缩包" value="file_upload" />
            </CheckCard.Group>
            <InputContext taskPattern={taskPattern} name="task_context"></InputContext>
        </>
    )
}

const TokenPattern = () => {
    const [useToken, setUseToken] = useState(false);
    const onUseTokenChange = (checked) => {
        setUseToken(checked);
    }

    const TokenContext = ({ useToken }) => {
        if (useToken) {
            return (
                <Form.Item
                    label="Token："
                    name="token"
                    style={{ display: 'inline-block', width: 'calc(40% - 8px)', marginBottom: 0, marginTop: 10 }}>
                    <Input type='password' placeHolder={'请输入Token'} />
                </Form.Item>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <>
            <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={onUseTokenChange} />
            <br />
            <TokenContext useToken={useToken} ></TokenContext>
        </>
    )
}

const TaskCreate = () => {
    const { taskStore } = useStore()
    const navigate = useNavigate();
    const onFinish = (value) => {
        // TODO: 缺号连接后端操作
        taskStore.addTask(value)
        navigate('/task');
    }

    return (
        <>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
            }}>
                <Title level={4} style={{
                    margin: 8,
                    padding: 8,
                }}>
                    新建代码扫描任务：
                </Title>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    colon={false}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Divider orientation="left" style={{ fontWeight: 'bold' }}>基础设置</Divider>

                    <Form.Item
                        label="扫描任务名称："
                        name="task_name"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的任务名称!',
                            }
                        ]}
                    >
                        <Input></Input>
                    </Form.Item>

                    {/* 虚假的校验 */}
                    <Form.Item
                        label="扫描模式："
                        name="task_pattern"
                        valuePropName="taskPattern"
                        required
                    >
                        <TaskPattern></TaskPattern>
                    </Form.Item>

                    <Form.Item
                        label="使用Token："
                        name="use_token"
                        valuePropName="useToken"
                    >
                        <TokenPattern></TokenPattern>
                    </Form.Item>

                    <Form.Item label="任务模式：" name="task_type">
                        <Radio.Group>
                            <Radio.Button value="traceability">代码溯源分析</Radio.Button>
                            <Radio.Button value="intelligence">代码情报分析</Radio.Button>
                            <Radio.Button value="all">全量扫描</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    {/* <Divider orientation="left" style={{ fontWeight: 'bold' }}>高级设置</Divider>

                    <Form.Item
                        label="待定">
                    </Form.Item> */}


                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">新建代码扫描任务并运行</Button>
                    </Form.Item>
                </Form>
            </div >
        </>
    );
}

export default TaskCreate;