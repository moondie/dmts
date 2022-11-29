import {useStore} from "@/store";
import {observer} from 'mobx-react-lite'
import {Button, Form, message} from "antd";
import React, {useEffect} from "react";
import TextArea from "antd/es/input/TextArea";

/**
 *  /user/settings页面，提供用户修改信息操作。
 *  description: 修改设置
 */

const UserDescription = () => {
    const {userStore} = useStore()
    const form = Form.useForm()[0];
    const onFinish = (values) => {
        values.name = userStore.userInfo.name
        userStore.changeDescription(values).then(success => {
            userStore.getProfile().then(success => {
                message.success('修改成功')
            })
        }).catch(err => {
            message.error('修改失败')
        })
    }
    useEffect(() => {
        form.setFieldValue('description', userStore.userInfo.description)
    })
    return (
        <Form form={form} labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
              initialValues={{role: 'user', description: userStore.userInfo.description}}
              colon={false} onFinish={onFinish}>
            <Form.Item label="描述：" name="description">
                <TextArea key='description' rows={4}/>
            </Form.Item>
            <Form.Item label=" ">
                <Button type="primary" htmlType="submit">修改信息</Button>
            </Form.Item>
        </Form>
    );
};
export default observer(UserDescription)