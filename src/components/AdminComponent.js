// 1. 判断token是否存在
// 2. 如果存在 直接正常渲染
// 3. 如果不存在 重定向到登录路由

// 高阶组件:把一个组件当成另外一个组件的参数传入
// 然后通过一定的判断 返回新的组件
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

// 测试数据
import {is_admin} from "@/TestData";

function isAdmin (token) {
  // TODO: 向后端请求数据，返回是否为admin用户
  return is_admin;
}

function AdminVerify () {
  const token = getToken()
  return isAdmin(token);
}

function AdminComponent ({ children }) {
  const token = getToken()
  if (isAdmin(token)) {
    return <>{children}</>
  } else {
    return <h2>对不起，您没有查看此页面的权限！</h2>
  }
}

// <AuthComponent> <Layout/> </AuthComponent>
// 登录：<><Layout/></>
// 非登录：<Navigate to="/login" replace />

export {
  AdminVerify,
  AdminComponent
}