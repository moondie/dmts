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

const {Header, Sider} = Layout

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
                <Sider width={200} className="site-layout-background">
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
                        style={{height: '100%', borderRight: 0}}
                    >
                        <Menu.Item icon={<HomeOutlined/>} key="/">
                            <Link to='/'>数据概览</Link>
                        </Menu.Item>
                        <Menu.Item icon={<DiffOutlined/>} key="/article">
                            <Link to="/article">分析任务管理</Link>
                        </Menu.Item>
                        <Menu.Item icon={<EditOutlined/>} key="/publish">
                            <Link to='/publish'>分析数据查看</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>

        </Layout>
    )
}
export default EWDSLayout