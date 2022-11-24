import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
} from 'antd';

const { TextArea } = Input;

/**
 *  /user/add页面，提供添加用户操作。
 *  name: 用户名
 *  role: 用户权限
 *  description: 用户描述
 */
const UserAdd = () => {
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
                <Form.Item label="用户名：" name="name" rules={[{ required: true, message: "请输入用户名！" }]}>
                    <Input placeholder="请输入用户名" />
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