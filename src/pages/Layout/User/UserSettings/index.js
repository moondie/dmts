import {Form, Input, Button, Tabs, message} from 'antd';
import UserDescription from "@/pages/Layout/User/UserSettings/UserDescription";
import {useStore} from "@/store";
import sha256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";

const {Password} = Input;

const UserPassword = ({userInfo}) => {
    const {userStore, loginStore} = useStore()
    const navigate = useNavigate()
    const onFinish = (values) => {
        userStore.changePassword({
            oldPassword: sha256(sha256(userInfo.name) + sha256(values.old_password)).toString(),
            newPassword: sha256(sha256(userInfo.name) + sha256(values.new_password)).toString()
        }).then(success => {
            message.success('修改成功')
            loginStore.loginOut()
            navigate('/login')
        }).catch(err => {
            message.error(err.response.data.msg)
        })
    }
    return (
        <Form labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal" colon={false} onFinish={onFinish}>
            <Form.Item
                label="旧密码："
                name="old_password"
                rules={[
                    {required: true, message: "请输入旧密码"},
                ]}
            >
                <Password placeholder="请输入旧密码"/>
            </Form.Item>

            <Form.Item
                label="新密码："
                name="new_password"
                rules={[
                    {required: true, message: "请输入新密码"},
                    {min: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
                ]}
            >
                <Password placeholder="请输入新密码"/>
            </Form.Item>

            <Form.Item
                label="确认新密码："
                name="new_password_confirm"
                rules={[
                    {required: true, message: "请输入同样的新密码"},
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('new_password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不匹配！'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="请输入新密码"/>
            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit">修改密码</Button>
            </Form.Item>
        </Form>
    );
};

const UserSettings = () => {
    const {userStore} = useStore()
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
                    children: <UserPassword userInfo={userStore.userInfo}/>,
                },
            ]}
        />
    );
};
export default UserSettings