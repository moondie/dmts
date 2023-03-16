import {Layout, Menu, Popconfirm} from 'antd'
import {Link, useLocation} from "react-router-dom";
import {useStore} from "@/store";
import {observer} from 'mobx-react-lite'
import {DiffOutlined, EditOutlined, HomeOutlined, SnippetsOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
const {Sider} = Layout

const EWDSSider = () => {
    const {pathname} = useLocation()
    const {userStore} = useStore()
    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const createSidebarItems = (role) => {
        return [
            // 数据概览
            getItem('数据概览', 'main', <HomeOutlined/>, [
                getItem(<Link to='/main'>总体数据概览</Link>, '/main'),
            ]),

            // 分析计划
            getItem('分析计划管理', 'plan', <SnippetsOutlined />, [
                getItem(<Link to='/plan'>分析计划总览</Link>, '/plan'),
                getItem(<Link to='/plan/create'>新建分析计划</Link>, '/plan/create'),
            ]),

            // 分析任务
            getItem('分析任务管理', 'task', <DiffOutlined/>, [
                getItem(<Link to='/task'>分析任务总览</Link>, '/task'),
                getItem(<Link to='/task/create'>新建分析任务</Link>, '/task/create'),
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
                role === 'admin' ? getItem(<Link to='/user'>用户总览</Link>, '/user') : null,
                role === 'admin' ? getItem(<Link to='/user/add'>新增用户</Link>, '/user/add') : null,
                getItem(<Link to='/user/settings'>个人设置</Link>, '/user/settings'),
            ]),
        ]
    }
    return (
        <Sider width={250} className="site-layout-background">
            {/* 高亮原理：defaultSelectedKeys === item key */}
            {/* 获取当前激活的path路径？ */}
            {/*  defaultSelectedKeys: 初始化渲染的时候生效一次 */}
            {/*selectedKeys: 每次有值更新时都会重新渲染视图 */}
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
                items={createSidebarItems(userStore.userInfo.role)}
            >
            </Menu>
        </Sider>
    )
}
export default observer(EWDSSider)