import { Layout, Menu } from 'antd'
import { Link, useLocation } from "react-router-dom";
import { observer } from 'mobx-react-lite'
import { DiffOutlined, EditOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";

const { Sider } = Layout

const DMTSSider = () => {
    const { pathname } = useLocation()
    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const createSidebarItems = () => {
        return [
            // 数据概览
            getItem('数据总览', 'main', <HomeOutlined />, [
                getItem(<Link to='/main'>总体数据概览</Link>, '/main'),
                getItem(<Link to='/main/dataset'>数据集展示</Link>, '/main/dataset'),
            ]),

            // 分析任务
            getItem('扫描任务管理', 'task', <DiffOutlined />, [
                getItem(<Link to='/task'>扫描任务总览</Link>, '/task'),
                getItem(<Link to='/task/create'>新建扫描任务</Link>, '/task/create'),
            ]),

            // 分析数据
            getItem('分析数据查看', 'result', <EditOutlined />, [
                getItem(<Link to='/result'>分析数据总览</Link>, '/result'),
                getItem(<Link to='/result/trace'>代码归属模块</Link>, '/result/trace'),
                getItem(<Link to='/result/intelligence/feature'>代码行为的高维特征</Link>, '/result/intelligence/feature', <></>, [
                    getItem(<Link to='/result/intelligence/feature/engineer'>工程事务特征</Link>, '/result/intelligence/feature/engineer'),
                    getItem(<Link to='/result/intelligence/feature/team'>团队成员特征</Link>, '/result/intelligence/feature/team'),
                    getItem(<Link to='/result/intelligence/feature/social'>社会属性</Link>, '/result/intelligence/feature/social'),
                    getItem(<Link to='/result/intelligence/feature/five'>大五人格</Link>, '/result/intelligence/feature/five'),
                    getItem(<Link to='/result/intelligence/feature/lexical'>代码词汇特征</Link>, '/result/intelligence/feature/lexical'),
                    getItem(<Link to='/result/intelligence/feature/layout'>代码布局特征</Link>, '/result/intelligence/feature/layout'),
                    getItem(<Link to='/result/intelligence/feature/syntax'>代码语法特征</Link>, '/result/intelligence/feature/syntax'),
                ]),
                getItem(<Link to='/result/intelligence/psychological'>代码作者全场景心理特征</Link>, '/result/intelligence/psychological', <></>, [
                    getItem(<Link to='/result/intelligence/psychological/social'>社会属性</Link>, '/result/intelligence/psychological/social'),
                    getItem(<Link to='/result/intelligence/psychological/multispaces'>多重空间</Link>, '/result/intelligence/psychological/multispaces'),
                    getItem(<Link to='/result/intelligence/psychological/trace'>社交跟踪范围</Link>, '/result/intelligence/psychological/trace'),
                ]),
                getItem(<Link to='/result/intelligence/behavior'>代码特征与作者心理特征映射</Link>, '/result/intelligence/behavior', <></>, [
                    getItem(<Link to='/result/intelligence/behavior/coding'>编码行为模式</Link>, '/result/intelligence/behavior/coding'),
                    getItem(<Link to='/result/intelligence/behavior/social'>社会行为模式</Link>, '/result/intelligence/behavior/social'),
                ]),
            ]),

            // 前瞻性课题
            getItem('前瞻课题', 'explore', <EditOutlined />, [
                getItem(<Link to='/explore/ai'>AI代码特征分析</Link>, '/explore/ai'),
                getItem(<Link to='/explore/gender'>代码作者性别分析</Link>, '/explore/gender'),
                getItem(<Link to='/explore/binary'>二进制代码风格迁移分析</Link>, '/explore/binary'),
                // getItem(<Link to='/explore/event'>恶意代码事件溯源分析</Link>, '/explore/event'),
            ]),
        ]
    }
    return (
        <Sider width={300} className="site-layout-background">
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
                items={createSidebarItems()}
            >
            </Menu>
        </Sider>
    )
}
export default observer(DMTSSider)