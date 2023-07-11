/**
 * 实现任务列表的增删改查操作
 */


import { http } from "@/utils";
import { makeAutoObservable } from "mobx";

class TaskStore {
    taskListInfo = []

    intelligenceTaskList = [
        {
            id: 1,
            name: "身份追溯 1"
        },
        {
            id: 2,
            name: "身份追溯 2"
        }
    ]

    taskPattern = {
        "traceability": "代码溯源分析",
        "intelligence": "代码情报分析",
        "all": "全量扫描"
    }

    /**
     * @description 获取有效的任务列表
     * @returns {Array}
     */
    getTaskListInfo() {
        return this.taskListInfo.filter((taskInfo) => {
            return taskInfo.isEffective === true
        })
    }

    /**
     * @description 获取成功运行且有效的任务列表
     * @returns {Array}
     */
    getSuccessTaskListInfo(pageType) {
        if (pageType === "trace") {
            return this.taskListInfo.filter((taskInfo) => {
                return taskInfo.isEffective === true && taskInfo.taskDescription.status === "success"
            })
        } else if (pageType === "intelligence") {
            return this.intelligenceTaskList
        } else {
            return []
        }
    }

    /**
     * @description 增加任务到任务列表
     * @param {object} taskInfo 
     */
    addTask = async (taskInfo) => {
        return await http.post("/taskmanage/create", taskInfo)
    }

    /**
     * @description 获取任务列表的总长度
     * @returns {number}
     */
    getTaskLength() {
        return this.taskListInfo.length
    }

    /**
     * @description 根据 id 删除任务
     * @param {object} taskInfo 
     */
    deleteTask = async (taskInfo) => {
        return await http.post("taskmanage/delete", taskInfo)
    }

    getTaskList = async () => {
        http.get("/taskmanage/getTaskList").then((res) => {
            if (res.status === 200) {
                this.taskListInfo = []
                res.data.forEach(data => {
                    this.taskListInfo.push({
                        id: data.taskId,
                        name: data.taskName,
                        type: this.taskPattern[data.taskMode],
                        language: data.language,
                        isEffective: data.is_effective,
                        taskDescription: {
                            createTime: data.startTime,
                            status: data.status,
                            url: data.taskURL,
                        },
                        reposInfo: {
                            languages: [data.language],
                            size: data.size,
                            time: `${data.startTime} - ${data.updateTime}`,
                        }
                    })
                });
            }
        }).catch((err => {
            alert("获取任务列表失败")
            console.log(err)
        }))
    }

    getIntelligenceTaskListInfo = () => {
        return this.intelligenceTaskList
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default TaskStore;