import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
} from 'antd';

const { TextArea, Password } = Input;

/**
 *  /user/add页面，提供添加用户操作。
 *  name: 用户名
 *  password: 密码
 *  role: 用户权限
 *  description: 用户描述
 */
const UserAdd = () => {
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
                <Form.Item label="用户名：" name="name" rules={[{ required: true, message: "请输入用户名！" }]}>
                    <Input placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item label="密码：" name="password" rules={[
                    { required: true, message: "请输入密码！" },
                    { len: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
                ]}>
                    <Password placeholder="请输入密码" />
                </Form.Item>

                <Form.Item label="用户权限：" name="role">
                    <Radio.Group>
                        <Radio.Button value="admin"> 管理员 </Radio.Button>
                        <Radio.Button value="user"> 普通用户 </Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="描述：" name="description">
                    <TextArea placeholder="请输入用户描述" rows={4} />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">新建用户</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default () => <UserAdd />;