/**
 * 创建分析计划页面。
 */
import React, { useState } from 'react';
import { Button, Divider, Form, Input, Select, Radio, Typography, message, Switch, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/http";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { getToken } from "@/utils";

const { Title } = Typography;
const { Option } = Select;
const { Dragger } = Upload;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const UploadFile = () => {
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

const TaskCreate = () => {
    const [hideUserName, setHideUserName] = useState(true);
    const navigate = useNavigate();

    const onFinish = ({ target_url, auto_login, form_fill, save_resources }) => {
        message.success('暂时还没有接口，总之成功了');
        navigate('/task');
    }

    const onAutoLoginChange = (checked) => {
        setHideUserName(!checked);
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
                    initialValues={{
                        auto_login: "off",
                        form_fill: "off",
                        save_resources: "off"
                    }}
                    colon={false}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Divider orientation="left" style={{ fontWeight: 'bold' }}>基础设置</Divider>

                    <Form.Item
                        label="扫描URL："
                        name="target_url"
                        rules={[{ required: true, message: '请输入起始URL！' }]}>
                        <Input addonBefore={selectBefore}
                            placeHolder={'请输入待扫描仓库链接，如:https://github.com/charlesSeek/weka-example'} />
                    </Form.Item>

                    <Form.Item label="上传文件：" valuePropName="fileList" >
                        <Upload listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>上传</div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="使用Token："
                        name="use_token">
                        <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={onAutoLoginChange} />
                    </Form.Item>

                    <Form.Item label=" " hidden={hideUserName} style={{ marginBottom: 0 }}>
                        {/* <Form.Item
                            label="用户名："
                            name="username"
                            style={{ display: 'inline-block', width: 'calc(40% - 8px)', marginRight: 8 }}>
                            <Input placeHolder={'请输入用户名'} />
                        </Form.Item> */}

                        <Form.Item
                            label="Token："
                            name="password"
                            style={{ display: 'inline-block', width: 'calc(40% - 8px)', marginLeft: 8 }}>
                            <Input type='password' placeHolder={'请输入Token'} />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="任务模式：" name="task_type">
                        <Radio.Group>
                            <Radio.Button value="traceability">代码溯源分析</Radio.Button>
                            <Radio.Button value="intelligence">代码情报分析</Radio.Button>
                            <Radio.Button value="all">全量扫描</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Divider orientation="left" style={{ fontWeight: 'bold' }}>高级设置</Divider>

                    <Form.Item
                        label="待定">
                    </Form.Item>


                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">新建代码扫描任务并运行</Button>
                    </Form.Item>
                </Form>
            </div >
        </>
    );
}

export default TaskCreate;