import React from "react";
import {observer} from 'mobx-react-lite'
import {useRoutes} from "react-router-dom";
import UserContent from "@/pages/Layout/User/UserContent";
import {useStore} from "@/store";
import UserAdd from "@/pages/Layout/User/UserAdd";
import UserSettings from "@/pages/Layout/User/UserSettings";

function UserRoute() {
    const {userStore} = useStore()
    const routesList = [
        {
            path: '/',
            element: userStore.userInfo.role === 'admin' ? <UserContent/> : <h2>对不起，您没有查看此页面的权限！</h2>
            // children: [
            //     {
            //         element: <Board />,
            //         index: true, // index设置为true 变成默认的二级路由
            //     },
            //     {
            //         path: 'article',
            //         element: <Article />,
            //     },
            // ],
        }, {
            path: 'add',
            element: userStore.userInfo.role === 'admin' ? <UserAdd/> : <h2>对不起，您没有查看此页面的权限！</h2>
        }, {
            path: 'settings',
            element: <UserSettings/>
        }, {
            path: '*',
            element: userStore.userInfo.role === 'admin' ? <UserContent/> : <h2>对不起，您没有查看此页面的权限！</h2>
        }
    ]
    return useRoutes(routesList)
}

export default observer(UserRoute)