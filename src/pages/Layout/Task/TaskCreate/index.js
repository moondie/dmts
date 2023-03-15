/**
 * 创建分析计划页面。
 */
import React, {useState} from 'react';
import {Button, Divider, Form, Input, Select, Radio, Typography, message, Switch} from "antd";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;
const {Option} = Select;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const TaskCreate = () => {
    const [hideUserName, setHideUserName] = useState(true);
    const navigate = useNavigate();

    const onFinish = ({target_url, auto_login, form_fill, save_resources}) => {
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
                    新建动态爬虫任务：
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
                    <Divider orientation="left" style={{fontWeight: 'bold'}}>基础设置</Divider>

                    <Form.Item
                        label="起始URL："
                        name="target_url"
                        rules={[{required: true, message: '请输入起始URL！'}]}>
                        <Input addonBefore={selectBefore}
                               placeHolder={'请输入待扫描网站域名/IP地址:端口，如：192.168.1.1:8000'}/>
                    </Form.Item>

                    <Form.Item
                        label="自动登录："
                        name="auto_login">
                        <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={onAutoLoginChange}/>
                    </Form.Item>

                    <Form.Item label=" " hidden={hideUserName} style={{marginBottom: 0}}>
                        <Form.Item
                            label="用户名："
                            name="username"
                            style={{display: 'inline-block', width: 'calc(40% - 8px)', marginRight: 8}}>
                            <Input placeHolder={'请输入用户名'}/>
                        </Form.Item>

                        <Form.Item
                            label="密码："
                            name="password"
                            style={{display: 'inline-block', width: 'calc(40% - 8px)', marginLeft: 8}}>
                            <Input type='password' placeHolder={'请输入密码'}/>
                        </Form.Item>
                    </Form.Item>


                    <Form.Item
                        label="表单自动填充分析："
                        name="form_fill">
                        <Switch checkedChildren="开启" unCheckedChildren="关闭"/>
                    </Form.Item>

                    <Form.Item
                        label="静态资源存储："
                        name="save_resources">
                        <Switch checkedChildren="开启" unCheckedChildren="关闭"/>
                    </Form.Item>

                    <Divider orientation="left" style={{fontWeight: 'bold'}}>高级设置</Divider>

                    <Form.Item
                        label="待定">
                    </Form.Item>


                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">新建动态爬虫任务并运行</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default TaskCreate;