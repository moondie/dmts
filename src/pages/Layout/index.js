import {Layout, Menu, Popconfirm} from 'antd'
import {Link, useLocation, useNavigate, Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
    UserOutlined
} from '@ant-design/icons'
import './index.scss'
import {useStore} from '@/store'
import React, {lazy, useEffect} from 'react'
import {Footer} from "antd/es/layout/layout";
import {AdminVerify} from "@/components/AdminComponent";

const {Header, Content, Sider} = Layout

const Error = lazy(() => import('./Error'))
const Main = lazy(() => import('./Main'))
const Task = lazy(() => import('./Task'))
const Data = lazy(() => import('./Data'))
const User = lazy(() => import('./User'))

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const sidebar_items = [
    // 数据概览
    getItem('数据概览', 'main', <HomeOutlined/>, [
        getItem(<Link to='/main'>总体数据概览</Link>, '/main'),
        getItem(<Link to='/main/xxx'>xxx数据概览</Link>, '/main/xxx'),
        getItem(<Link to='/main/yyy'>yyy数据概览</Link>, '/main/yyy'),
    ]),

    // 分析任务
    getItem('分析任务管理', 'task', <DiffOutlined/>, [
        getItem(<Link to='/task'>分析任务总览</Link>, '/task'),
        getItem(<Link to='/task/create'>新建分析任务</Link>,  '/task/create'),
    ]),

    // 分析数据
    getItem('分析数据查看', 'data', <EditOutlined/>, [
        getItem(<Link to='/data'>分析数据总览</Link>, '/data'),
        getItem(<Link to='/data/url'>URL数据查看</Link>, '/data/url'),
        getItem(<Link to='/data/vulnerabilities'>漏洞数据查看</Link>, '/data/vulnerabilities'),
        getItem(<Link to='/data/cgi'>cgi动态分析数据查看</Link>, '/data/cgi'),
    ]),

    // 用户管理
    getItem('用户管理', 'user', <UserOutlined/>, [
        AdminVerify() ? getItem(<Link to='/user'>用户总览</Link>, '/user') : null,
        AdminVerify() ? getItem(<Link to='/user/add'>新增用户</Link>, '/user/add') : null,
        getItem(<Link to='/user/settings'>个人设置</Link>, '/user/settings'),
    ]),
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
                    <span className="user-name">
                        <Link
                            to='/user/settings'
                            style={{color:'#fff'}}
                        >
                            <UserOutlined/> {userStore.userInfo.name}
                        </Link>
                    </span>
                    <span className="user-logout">
            <Popconfirm
                placement="bottomRight"
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
                            overflowY: 'scroll',
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
                            <Route path='user/*' element={<User/>}></Route>
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