import './index.scss'
import { Routes, Route } from 'react-router-dom'
import React, { lazy } from 'react'
import DMTSHeader from "@/pages/Layout/DMTSHeader";
import DMTSSider from "@/pages/Layout/DMTSSider";
import { Layout } from 'antd'

const { Content } = Layout

const Error = lazy(() => import('./Error'))
const Main = lazy(() => import('./Main'))
const Task = lazy(() => import('./Task'))
const Result = lazy(() => import('./Result'))
const Explore = lazy(() => import('./Explore'))


const DMTSLayout = () => {
    return (
        <Layout>
            <DMTSHeader />
            <Layout>
                <DMTSSider />
                <Layout style={{ padding: '0', }}>
                    <Content style={{ padding: 24, margin: 0, overflowY: 'auto', }}>
                        <Routes>
                            {/* 子页面路由 */}
                            <Route path='main/*' element={<Main />} />
                            <Route path='task/*' element={<Task />} />
                            <Route path='result/*' element={<Result />} />
                            <Route path='Explore/*' element={<Explore />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default DMTSLayout

