import React, {useState} from 'react';
import {
    Form,
    Input,
    Button,
    Radio, message,
} from 'antd';
import {useStore} from "@/store";
import sha256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";

const {TextArea, Password} = Input;

/**
 *  /user/add页面，提供添加用户操作。
 *  name: 用户名
 *  password: 密码
 *  role: 用户权限
 *  description: 用户描述
 */
const UserAdd = () => {
    const {managerUserStore} = useStore()
    const navigate = useNavigate()
    const onFinish = ({name, password, description}) => {
        managerUserStore.addUser({
            'name': name,
            'password': sha256(sha256(name) + sha256(password)).toString(),
            'description': description
        }).then(success => {
            message.success('添加成功')
            navigate('/user')
        }).catch(err => {
            message.error(err.response.data.msg)
        })

    }
    return (
        <>
            <Form
                labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
                initialValues={{role: 'user'}} colon={false} onFinish={onFinish}>
                <Form.Item label="用户名：" name="name" rules={[{required: true, message: "请输入用户名！"}]}>
                    <Input placeholder="请输入用户名"/>
                </Form.Item>

                <Form.Item label="密码：" name="password" rules={[
                    {required: true, message: "请输入密码！"},
                    {min: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
                ]}>
                    <Password placeholder="请输入密码"/>
                </Form.Item>

                <Form.Item label="确认密码：" name="" rules={[
                    {required: true, message: "请输入同样的新密码！"},
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不匹配！'));
                        },
                    }),
                ]}>
                    <Password placeholder="请输入同样的密码"/>
                </Form.Item>

                <Form.Item label="描述：" name="description">
                    <TextArea placeholder="请输入用户描述" rows={4}/>
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">新建用户</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default UserAdd;