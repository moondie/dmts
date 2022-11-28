/**
 * 用户模块：
 * · 为管理员角色的用户提供对用户的增删改功能；
 * · 为所有用户提供对自己账户的操作功能。
 *
 * 页面：
 * · /user: <UserContent/>，提供用户列表一览。只有管理员可以进行操作，普通用户只能查看。
 * · /user/add：<UserAdd/>，新建一个用户。只有管理员可以进行操作，普通用户只能查看。
 * · /user/settings：<UserSettings/>，修改自己账户的信息。
 *
 * DONE: 用户头像只有默认样式
 * DONE: 用户权限用标签显示
 * DONE: 管理员修改用户描述、密码界面
 * DONE: 用户修改密码时两次一致提示
 * DONE: 密码安全性提示
 * TODO: 后端接口对接
 *
 */

import React from 'react';
import UserRoute from "@/pages/Layout/User/UserRoute";

/**
 *  /user页面，提供用户列表一览。
 *  使用卡片方式实现，并且在数据加载时有可视化提示。
 *
 *  组件：
 *  · UserEditInfo: 修改用户信息界面。
 *  · UserEditPassword: 修改用户密码
 *  · UserEdit: 编辑用户界面的分栏。
 *  · UserCard: 单个用户卡片。
 *  · UserContent: 用户界面的内容，包含多个用户卡片。
 *  · User: 只负责路由。
 */

const User = () => {
    return (
        <UserRoute/>
        // <Routes>
        //
        //     <Route path='' element={<AdminComponent><UserContent/></AdminComponent>}></Route>
        //     <Route path='add' element={<AdminComponent><UserAdd/></AdminComponent>}></Route>
        //     <Route path='settings' element={<UserSettings/>}></Route>
        //     <Route path='*' element={<Navigate to=''/>}></Route>
        // </Routes>
    );
}

export default User;