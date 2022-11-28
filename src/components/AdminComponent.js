// 1. 判断token是否存在
// 2. 如果存在 直接正常渲染
// 3. 如果不存在 重定向到登录路由

// 高阶组件:把一个组件当成另外一个组件的参数传入
// 然后通过一定的判断 返回新的组件
// 测试数据
import {useStore} from "@/store";

function AdminComponent({children}) {
    const {userStore} = useStore()

    return (
        userStore.userInfo.role === 'admin' ? <>{children}</> : <h2>对不起，您没有查看此页面的权限！</h2>
    )
}

// <AuthComponent> <Layout/> </AuthComponent>
// 登录：<><Layout/></>
// 非登录：<Navigate to="/login" replace />

export {
    AdminComponent
}