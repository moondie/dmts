import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Tabs,
} from 'antd';
const { TextArea, Password } = Input;

/**
 *  /user/settings页面，提供用户修改信息操作。
 *  description: 修改设置
 */

const UserDescription = () => {
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
                colon={false}
            >
                <Form.Item
                    label="旧密码："
                    name="old_password"
                    rules={[
                        { required: true, message: "请输入旧密码" },
                    ]}
                >
                    <Password placeholder="请输入旧密码" />
                </Form.Item>

                <Form.Item
                    label="新密码："
                    name="new_password"
                    rules={[
                        { required: true, message: "请输入新密码" },
                        { len: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
                    ]}
                >
                    <Password placeholder="请输入新密码" />
                </Form.Item>

                <Form.Item
                    label="确认新密码："
                    name="new_password_confirm"
                    rules={[
                        { required: true, message: "请输入同样的新密码" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('new_password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次输入的密码不匹配！'));
                            },
                        }),
                    ]}
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