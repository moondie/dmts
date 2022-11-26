/**
 * 用于测试的数据。
 */
import {Avatar} from "antd";
import React from "react";

// 用户列表的测试数据
export const user_list = [
    {
        id: 1,
        name: 'ewds',
        description: 'The main user of the system',
        role: 'admin',
    },
    {
        id: 2,
        name: 'Venti',
        description: 'EiHei',
        role: 'user',
    },
    {
        id: 3,
        name: 'ZhongLi',
        description: '巨额岩元素伤害',
        role: 'user',
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
]

// 用户token判断是否为管理员的测试数据，token传回后端判断是否过期 是否是管理员？
export const is_admin = true

export default {
    user_list,
    is_admin
}