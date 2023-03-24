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
 */
import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite'
import {EditOutlined, UserAddOutlined, UserDeleteOutlined} from '@ant-design/icons';
import {
    message, Avatar, Button, Card, Col, Popconfirm, Row, Skeleton, Tag, Divider, Collapse, Input, Tabs, Form, Radio
} from 'antd';
import {useStore} from '@/store'
import avatar from '@/assets/avatar.png'
import sha256 from "crypto-js/sha256";

const {Meta} = Card;
const {Panel} = Collapse;
const {TextArea, Password} = Input;
const UserEditInfo = ({item}) => {
    const {managerUserStore} = useStore()
    const onFinish = (values) => {
        values.name = item.name
        managerUserStore.changeDescription(values).then(success => {
            managerUserStore.getAllUsers()//修改后重新获得一次用户信息
            message.success('修改成功')
        }).catch(err => {
            message.error('修改失败')
        })
    }
    return (
        <>
            <Form
                labelCol={{span: 0,}}
                wrapperCol={{span: 0,}}
                layout="horizontal"
                initialValues={{
                    role: item.role,
                    description: item.description,
                }}
                colon={false}
                onFinish={onFinish}>
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

const UserEditPassword = ({item}) => {
    const {managerUserStore} = useStore()
    const onFinish = ({new_password}) => {
        let data = {}
        data.name = item.name
        data.password = sha256(sha256(data.name) + sha256(new_password)).toString()
        managerUserStore.changePassword(data).then(success => {
            message.success('修改成功')
        }).catch(err => {
            message.error('修改失败')
        })
    }
    return (
        <>
            <Form labelCol={{span: 0,}} wrapperCol={{span: 0,}} layout="horizontal" colon={false} onFinish={onFinish}>
                <Form.Item
                    label=""
                    name="new_password"
                    rules={[
                        {required: true, message: "请输入新密码"},
                        {min: 6, message: '密码长度必须为6位及以上', validateTrigger: 'onBlur'},
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
                    <Input.Password placeholder="请输入同样的新密码"/>
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
                    children: <UserEditPassword item={item}/>,
                },
            ]}
        />
    );
};

const UserCard = ({item}) => {
    const [loading, setLoading] = useState(true);
    const [collapse, setCollapse] = useState(false);
    const {managerUserStore} = useStore()
    const onUserDeleteConfirm = () => {
        // TODO: 用户删除后请求刷新页面
        managerUserStore.removeUser({name: item.name}).then(success => {
            managerUserStore.getAllUsers()
            message.success('删除成功');
        }).catch(err => {
            message.error(err.response.data.msg)
        })

    };
    // 测试延迟加载
    setTimeout(() => {
        setLoading(false);
    }, 50)

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
                    title = {
                    <> {item.name}
                        <Tag style={{marginLeft: 8}} color={item.role === 'admin' ? "red" : "blue"}>
                            {item.role === 'admin' ? "管理员" : "普通用户"}
                        </Tag>
                    </>
                }
                    description = {item.description}
                    />
                </Skeleton>
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
        managerUserStore.getAllUsers()
    }, [])

    return (
        <div className="site-card-wrapper">
            <Link to='/user/add' style={{color: '#fff'}}>
                <Button type="primary">
                    <UserAddOutlined/> 新建用户
                </Button>
            </Link>

            <Row gutter={20}>
                {managerUserStore.userList.map(item => <UserCard key={item.name} item={item}/>)}
            </Row>
        </div>
    );
};
export default observer(UserContent)
