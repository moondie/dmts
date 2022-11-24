import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload, Tabs,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

/**
 *  /user/settings页面，提供用户修改信息操作。
 *  description: 修改设置
 */

const UserDescription = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                initialValues={{
                    role: 'user'
                }}
                colon={false}
            >
                <Form.Item label="描述：" name="description">
                    <TextArea placeholder="请输入用户描述" rows={4} />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">修改信息</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const UserPassword = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                initialValues={{
                    role: 'user'
                }}
                colon={false}
            >
                <Form.Item
                    label="旧密码："
                    name="old_password"
                    rules={[{ required: true, message: "请输入旧密码" }]}
                >
                    <Input.Password placeholder="请输入旧密码" />
                </Form.Item>

                <Form.Item
                    label="新密码："
                    name="new_password"
                    rules={[{ required: true, message: "请输入新密码" }]}
                >
                    <Input.Password placeholder="请输入新密码" />
                </Form.Item>

                <Form.Item
                    label="重复新密码："
                    name="new_password_repeat"
                    rules={[{ required: true, message: "请输入新密码" }]}
                >
                    <Input.Password placeholder="请输入新密码" />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">修改密码</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const UserSettings = () => {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: `修改描述信息`,
                    key: 'description',
                    children: <UserDescription/>,
                },
                {
                    label: `修改密码`,
                    key: 'password',
                    children: <UserPassword/>,
                },
            ]}
        />
    );
};
export default () => <UserSettings />;