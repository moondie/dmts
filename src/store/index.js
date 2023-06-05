import React from "react";
import LoginStore from "./login.Store";
import UserStore from "@/store/user.Store";
import ManagerUserStore from "@/store/managerUser.Store";
import ChartStore from "@/store/chart.Store";
import ScanStore from "@/store/scan.Store";
import taskStore from "./task.Store";

class RootStore {
    // 组合模块
    constructor() {
        this.loginStore = new LoginStore();
        this.userStore = new UserStore();
        this.managerUserStore = new ManagerUserStore();
        this.chartStore = new ChartStore();
        this.scanStore = new ScanStore();
        this.taskStore = new taskStore();
    }
}

// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore());
export const useStore = () => React.useContext(StoresContext);