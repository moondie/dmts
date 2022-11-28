import {Card, Form, Input, Checkbox, Button, message} from 'antd'
import logo from '@/assets/logo.png'
import {useNavigate} from 'react-router-dom'

import sha256 from 'crypto-js/sha256'
// 导入样式文件
import './index.scss'

import {useStore} from '@/store'
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import Password from "antd/es/input/Password";

function Login() {
    const {loginStore} = useStore()
    const navigate = useNavigate()

    async function onFinish(values) {
        // todo:登录
        let {name, password} = values
        const hashName = sha256(name).toString()
        password = sha256(password).toString()
        password = sha256(hashName + password).toString()//密码hash之后传输
        await loginStore.getToken({name, password})
        // 跳转首页
        navigate('/', {replace: true})
        // 提示用户
        message.success('登录成功')
    }

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                {/* 登录表单 */}
                {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        remember: true,
                        name: 'ewds',
                        password: 'ewds123'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                            {
                                //pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的用户名',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" placeholder="请输入用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            {
                                //len: 6,
                                // message: '请输入6位密码',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login