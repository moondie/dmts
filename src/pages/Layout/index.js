import {Layout, Menu, Popconfirm} from 'antd'
import {Outlet, Link, useLocation, useNavigate} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import {useStore} from '@/store'
import {useEffect} from 'react'

const {Header,Content, Sider} = Layout

const sidebar_items = [
    {
        label: (
            <Link to='/main'>数据概览</Link>
        ),
        key: '/main',
        icon: <HomeOutlined/>,
        children: [
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
        label: (
            <Link to="/task">分析任务管理</Link>
        ),
        key: '/task',
        icon: <DiffOutlined/>,
        children: [
            {
                label: (
                    <Link to='/task/create'>新建分析任务</Link>
                ),
                key: '/task/create',
            },
        ],
    },
    {
        label: (
            <Link to='/data'>分析数据查看</Link>
        ),
        key: '/data',
        icon: <EditOutlined/>,
        children: [
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

const EWDSLayout = (content) => {
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
                        defaultSelectedKeys={pathname}
                        selectedKeys={pathname}
                        style={{
                            height: '100%',
                            borderRight: 0,
                            'overflow-y': 'scroll',
                        }}
                        items={sidebar_items}
                    >
                    </Menu>
                </Sider>
            </Layout>
            <Content>
                {content}
            </Content>
        </Layout>
    )
}
export default EWDSLayout