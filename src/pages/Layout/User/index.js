/**
 * 用户模块：
 * · 为管理员角色的用户提供对用户的增删改功能；
 * · 为所有用户提供对自己账户的操作功能。
 *
 * 页面：
 * · /user: <UserContent/>，提供用户列表一览。只有管理员可以进行操作，普通用户只能查看。
 * · /user/add：<UserAdd/>，新建一个用户。只有管理员可以进行操作，普通用户只能查看。
 * · /user/settings：<UserSettings/>，修改自己账户的信息。
 */

import {Link, Navigate, Route, Routes} from "react-router-dom";
import React, { useState } from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserAddOutlined, UserDeleteOutlined} from '@ant-design/icons';
import {message, Avatar, Button, Card, Col, Popconfirm, Row, Skeleton, Switch} from 'antd';
import UserSettings from "@/pages/Layout/User/UserSettings";
import UserAdd from "@/pages/Layout/User/UserAdd";
const { Meta } = Card;


// 测试数据
const user_list = [
    {
        id: 1,
        name: 'ewds',
        description: 'The main user of the system',
        role: 'admin',
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        id: 2,
        name: 'Venti',
        description: 'EiHei',
        role: 'user',
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        id: 3,
        name: 'ZhongLi',
        description: '巨额岩元素伤害',
        role: 'user',
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
]

/**
 *  /user页面，提供用户列表一览。
 *  使用卡片方式实现，并且在数据加载时有可视化提示。
 */
const UserContent = () => {
    const [loading, setLoading] = useState(true);
    const onUserDeleteConfirm = () => {
        // TODO: 用户删除后请求刷新页面
        message.success('啊没删呢');
    };
    // 测试延迟加载
    setTimeout(()=>{
        setLoading(false);
    }, 1000)
    return (
        <div className="site-card-wrapper">
            <Button type="primary">
                <Link
                    to='/user/add'
                    style={{
                        color:'#fff'
                    }}
                >
                    <UserAddOutlined /> 新建用户
                </Link>
            </Button>

            <Row gutter={20}>
            {
                user_list.map((item, index) => {
                    return (
                        <Col key={item.id}>
                        <Card
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                            actions={[
                                <EditOutlined />,
                                <Popconfirm
                                    onConfirm={onUserDeleteConfirm}
                                    placement="bottom"
                                    title="是否确认删除用户" okText="删除" cancelText="取消">
                                    <UserDeleteOutlined />
                                </Popconfirm>,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar = {item.avatar}
                                    title = {item.name}
                                    description = {item.description}
                                />
                            </Skeleton>
                        </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
};

const User = () => (
    <Routes>
        <Route path='' element={<UserContent/>}></Route>
        <Route path='add' element={<UserAdd/>}></Route>
        <Route path='settings' element={<UserSettings/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
    </Routes>
);

export default User;