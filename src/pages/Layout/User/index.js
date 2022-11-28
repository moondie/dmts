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

const User = () => {
    return (
        <UserRoute/>
    );
}

export default User;