import {Layout, Menu, Popconfirm} from 'antd'
import {Link, useLocation, useNavigate, Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import {useStore} from '@/store'
import React, {lazy, useEffect} from 'react'
import {Footer} from "antd/es/layout/layout";

const {Header, Content, Sider} = Layout

const Error = lazy(() => import('./Error'))
const Main = lazy(() => import('./Main'))
const Task = lazy(() => import('./Task'))
const Data = lazy(() => import('./Data'))

const sidebar_items = [
    {
        label: '数据概览',
        key: 'main',
        icon: <HomeOutlined/>,
        children: [
            {
                label: (
                    <Link to='/main'>总体数据概览</Link>
                ),
                key: '/main',
            },
            {
                label: (
                    <Link to='/main/xxx'>xxx数据概览</Link>
                ),
                key: '/main/xxx',
            },
            {
                label: (
                    <Link to='/main/yyy'>yyy数据概览</Link>
                ),
                key: '/main/yyy',
            }
        ],
    },
    {
        label: '分析任务管理',
        key: 'task',
        icon: <DiffOutlined/>,
        children: [
            {
                label: (
                    <Link to='/task'>分析任务总览</Link>
                ),
                key: '/task',
            },
            {
                label: (
                    <Link to='/task/create'>新建分析任务</Link>
                ),
                key: '/task/create',
            },
        ],
    },
    {
        label: '分析数据查看',
        key: 'data',
        icon: <EditOutlined/>,
        children: [
            {
                label: (
                    <Link to='/data'>分析数据总览</Link>
                ),
                key: '/data',
            },
            {
                label: (
                    <Link to='/data/url'>URL数据查看</Link>
                ),
                key: '/data/url',
            },
            {
                label: (
                    <Link to='/data/vulnerabilities'>漏洞数据查看</Link>
                ),
                key: '/data/vulnerabilities',
            },
        ],
    },
]

const EWDSLayout = () => {
    const {pathname} = useLocation()
    const {userStore, loginStore} = useStore()
    const navigate = useNavigate()
    useEffect(() => {
        userStore.getUserInfo()
    }, [userStore])
    const onConfirm = () => {
        // 退出登录 删除token 跳回到登录
        loginStore.loginOut()
        navigate('/login')
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{userStore.userInfo.name}</span>
                    <span className="user-logout">
            <Popconfirm
                onConfirm={onConfirm}
                title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined/> 退出
            </Popconfirm>
          </span>
                </div>
            </Header>
            <Layout>
                <Sider width={250} className="site-layout-background">
                    {/* 高亮原理：defaultSelectedKeys === item key */}
                    {/* 获取当前激活的path路径？ */}
                    {/*
             defaultSelectedKeys: 初始化渲染的时候生效一次
             selectedKeys: 每次有值更新时都会重新渲染视图
          */}

                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultOpenKeys={[pathname.split('/')[1]]}
                        defaultSelectedKeys={pathname}
                        selectedKeys={pathname}
                        style={{
                            height: '100%',
                            borderRight: 0,
                            overflowY: 'auto',
                        }}
                        items={sidebar_items}
                    >
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            overflowY: 'auto',
                        }}
                    >
                        {/* 根目录下的路由 */}
                        <Routes>
                            {/* 子页面路由 */}
                            <Route path='main/*' element={<Main/>}></Route>
                            <Route path='task/*' element={<Task/>}></Route>
                            <Route path='data/*' element={<Data/>}></Route>
                            <Route path='*' element={<Error/>}></Route>
                        </Routes>
                        <Footer style={{ textAlign: 'center' }}>HUST EWDS@2022</Footer>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default observer(EWDSLayout)