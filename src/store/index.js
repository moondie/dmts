import React from "react"
import LoginStore from './login.Store'
import UserStore from "@/store/user.Store";
import ManagerUserStore from "@/store/managerUser.Store";

class RootStore {
    // 组合模块
    constructor() {
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
        this.managerUserStore = new ManagerUserStore()
    }
}

// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)