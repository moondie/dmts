import './index.scss'
import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import React, { lazy, useEffect } from 'react'
import { Footer } from "antd/es/layout/layout";
import EWDSHeader from "@/pages/Layout/EWDSHeader";
import EWDSSider from "@/pages/Layout/EWDSSider";
import { Layout } from 'antd'

const { Content } = Layout

const Error = lazy(() => import('./Error'))
const Main = lazy(() => import('./Main'))
const Task = lazy(() => import('./Task'))
const Result = lazy(() => import('./Result'))
const Explore = lazy(() => import('./Explore'))
const User = lazy(() => import('./User'))


const EWDSLayout = () => {
    return (
        <Layout>
            <EWDSHeader />
            <Layout>
                <EWDSSider />
                <Layout style={{ padding: '0', }}>
                    <Content style={{ padding: 24, margin: 0, overflowY: 'auto', }} id="layout-content">
                        <Routes>
                            {/* 子页面路由 */}
                            <Route path='main/*' element={<Main />} />
                            <Route path='task/*' element={<Task />} />
                            <Route path='result/*' element={<Result />} />
                            <Route path='Explore/*' element={<Explore />} />
                            <Route path='user/*' element={<User />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>华中科技大学 网络空间安全学院 信息安全实验室 代码透视组 2023</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default EWDSLayout

