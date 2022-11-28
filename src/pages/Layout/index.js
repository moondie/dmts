import './index.scss'
import {Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import React, {lazy, useEffect} from 'react'
import {Footer} from "antd/es/layout/layout";
import EWDSHeader from "@/pages/Layout/EWDSHeader";
import EWDSSider from "@/pages/EWDSSider";
import {Layout} from 'antd'

const {Content} = Layout

const Error = lazy(() => import('./Error'))
const Main = lazy(() => import('./Main'))
const Task = lazy(() => import('./Task'))
const Data = lazy(() => import('./Data'))
const User = lazy(() => import('./User'))


const EWDSLayout = () => {
    return (
        <Layout>
            <EWDSHeader/>
            <Layout>
                <EWDSSider/>
                <Layout style={{padding: '0',}}>
                    <Content style={{padding: 24, margin: 0, overflowY: 'auto',}}>
                        <Routes>
                            {/* 子页面路由 */}
                            <Route path='main/*' element={<Main/>}/>
                            <Route path='task/*' element={<Task/>}/>
                            <Route path='data/*' element={<Data/>}/>
                            <Route path='user/*' element={<User/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>HUST EWDS@2022</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default EWDSLayout

