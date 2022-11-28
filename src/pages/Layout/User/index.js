/**
 * 用户模块：
 * · 为管理员角色的用户提供对用户的增删改功能；
 * · 为所有用户提供对自己账户的操作功能。
 *
 * 页面：
 * · /user: <UserContent/>，提供用户列表一览。只有管理员可以进行操作，普通用户只能查看。
 * · /user/add：<UserAdd/>，新建一个用户。只有管理员可以进行操作，普通用户只能查看。
 * · /user/settings：<UserSettings/>，修改自己账户的信息。
 *
 * DONE: 用户头像只有默认样式
 * DONE: 用户权限用标签显示
 * DONE: 管理员修改用户描述、密码界面
 * DONE: 用户修改密码时两次一致提示
 * DONE: 密码安全性提示
 * TODO: 后端接口对接
 *
 */

import {Link, Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserAddOutlined, UserDeleteOutlined} from '@ant-design/icons';
import {
    message,
    Avatar,
    Button,
    Card,
    Col,
    Popconfirm,
    Row,
    Skeleton,
    Tag,
    Divider,
    Collapse,
    Input,
    Tabs, Form, Radio
} from 'antd';
import {useStore} from '@/store'
import UserSettings from "@/pages/Layout/User/UserSettings";
import UserAdd from "@/pages/Layout/User/UserAdd";
import {AdminComponent} from "@/components/AdminComponent";
import avatar from '@/assets/avatar.png'

// 测试数据导入
import {user_list} from "@/TestData"

const {Meta} = Card;
const {Panel} = Collapse;
const {TextArea, Password} = Input;

/**
 *  /user页面，提供用户列表一览。
 *  使用卡片方式实现，并且在数据加载时有可视化提示。
 *
 *  组件：
 *  · UserEditInfo: 修改用户信息界面。
 *  · UserEditPassword: 修改用户密码
 *  · UserEdit: 编辑用户界面的分栏。
 *  · UserCard: 单个用户卡片。
 *  · UserContent: 用户界面的内容，包含多个用户卡片。
 *  · User: 只负责路由。
 */

const UserEditInfo = ({item}) => {
    return (
        <>
            <Form
                labelCol={{
                    span: 0,
                }}
                wrapperCol={{
                    span: 0,
                }}
                layout="horizontal"
                initialValues={{
                    role: item.role,
                    description: item.description,
                }}
                colon={false}
            >

                <Form.Item label="" name="role">
                    <Radio.Group>
                        <Radio.Button value="admin"> 管理员 </Radio.Button>
                        <Radio.Button value="user"> 普通用户 </Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="" name="description">
                    <TextArea placeholder="请输入用户描述" rows={4}/>
                </Form.Item>

                <Form.Item label="">
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const UserEditPassword = () => {
    return (
        <>
            <Form
                labelCol={{
                    span: 0,
                }}
                wrapperCol={{
                    span: 0,
                }}
                layout="horizontal"
                colon={false}
            >
                <Form.Item
                    label=""
                    name="new_password"
                    rules={[
                        {required: true, message: "请输入新密码"},
                        {len: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
                    ]}
                >
                    <Password placeholder="请输入新密码"/>
                </Form.Item>

                <Form.Item
                    label=""
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

                <Form.Item label="">
                    <Button type="primary" htmlType="submit">修改密码</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const UserEdit = ({item}) => {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: `修改用户信息`,
                    key: 'description',
                    children: <UserEditInfo item={item}/>,
                },
                {
                    label: `修改用户密码`,
                    key: 'password',
                    children: <UserEditPassword/>,
                },
            ]}
        />
    );
};

const UserCard = ({item}) => {
    const [loading, setLoading] = useState(true);
    const [collapse, setCollapse] = useState(false);
    const onUserDeleteConfirm = () => {
        // TODO: 用户删除后请求刷新页面
        message.success('啊没删呢');
    };
    // 测试延迟加载
    setTimeout(() => {
        setLoading(false);
    }, 500)

    function toggleEditPanel() {
        setCollapse(!collapse);
    }

    return (
        <Col>
            <Card
                style={{
                    width: 300,
                    marginTop: 16,
                }}
                actions={[
                    <EditOutlined onClick={toggleEditPanel}/>,
                    <Popconfirm
                        onConfirm={onUserDeleteConfirm}
                        placement="bottom"
                        title="是否确认删除用户" okText="删除" cancelText="取消">
                        <UserDeleteOutlined/>
                    </Popconfirm>,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar=<Avatar src={avatar}/>
                    title = {<>
                    {item.name}
                    <Tag style={{marginLeft: 8}}
                         color={item.role === 'admin' ? "red" : "blue"}
                    >
                        {item.role === 'admin' ? "管理员" : "普通用户"}
                    </Tag>
                </>}
                    description = {item.description}
                    /></Skeleton>
                <Collapse collapsible="icon" bordered={false} ghost activeKey={collapse ? "1" : ""}>
                    <Panel showArrow={false} header="" key="1">
                        <Divider/>
                        <UserEdit item={item}/>
                    </Panel>
                </Collapse>
            </Card>
        </Col>
    )
}

const UserContent = () => {
    const {managerUserStore, userStore} = useStore()
    useEffect(() => {
        userStore.getUserInfo()
    }, [userStore])
    managerUserStore.getAllUsers()
    return (
        <div className="site-card-wrapper">
            <Button type="primary">
                <Link to='/user/add' style={{color: '#fff'}}>
                    <UserAddOutlined/> 新建用户
                </Link>
            </Button>

            <Row gutter={20}>
                {
                    managerUserStore.userList.map((item, index) => (
                        <UserCard key={item.name} item={item}/>
                    ))
                }
            </Row>
        </div>
    );
};

const User = () => (
    <Routes>
        <Route path='' element={<AdminComponent><UserContent/></AdminComponent>}></Route>
        <Route path='add' element={<AdminComponent><UserAdd/></AdminComponent>}></Route>
        <Route path='settings' element={<UserSettings/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
    </Routes>
);

export default User;