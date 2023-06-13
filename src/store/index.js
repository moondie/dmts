import React from "react";
import ChartStore from "@/store/chart.Store";
import TaskStore from "./task.Store";
import ResultStore from "./result.Store";

class RootStore {
    // 组合模块
    constructor() {
        this.chartStore = new ChartStore();
        this.taskStore = new TaskStore();
        this.resultStore = new ResultStore();
    }
}

// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore());
export const useStore = () => React.useContext(StoresContext);