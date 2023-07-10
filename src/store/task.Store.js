/**
 * 实现任务列表的增删改查操作
 */


import { http } from "@/utils";
import { makeAutoObservable } from "mobx";

class TaskStore {
    task_list_info = []
    // task_list_info = [
    //     {
    //         id: 1,
    //         name: "测试 1",
    //         type: "代码溯源分析",
    //         language: 'Python',
    //         is_effective: true,
    //         task_description: {
    //             create_time: '2022-11-29 12:00:00',
    //             status: 'success',
    //             url: "https://github.com/THUDM/VisualGLM-6B",
    //         },
    //         repos_info: {
    //             languages: [
    //                 "Python",
    //                 "Java"
    //             ],
    //             file_number: 100,
    //             size: "2.3M",
    //             time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
    //             hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
    //         },
    //     },
    //     {
    //         id: 2,
    //         name: '测试 2',
    //         type: "全量扫描",
    //         language: 'Golang',
    //         is_effective: true,
    //         task_description: {
    //             create_time: '2022-11-29 12:00:00',
    //             status: 'running',
    //             url: "https://github.com/THUDM/VisualGLM-6B",
    //         },
    //         repos_info: {
    //             languages: [
    //                 "Python",
    //                 "Java"
    //             ],
    //             file_number: 100,
    //             size: "2.3M",
    //             time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
    //             hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
    //         },
    //     },
    //     {
    //         id: 3,
    //         name: '测试 3',
    //         type: "代码情报分析",
    //         language: 'C/C++',
    //         is_effective: true,
    //         task_description: {
    //             create_time: '2022-11-29 12:00:00',
    //             status: 'failed',
    //             url: "https://github.com/imClumsyPanda/langchain-ChatGLM",
    //         },
    //         repos_info: {
    //             languages: [
    //                 "Python",
    //                 "Java"
    //             ],
    //             file_number: 100,
    //             size: "2.3M",
    //             time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
    //             hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
    //         },
    //     }, {
    //         id: 4,
    //         name: '测试 4',
    //         type: "全量扫描",
    //         language: 'None',
    //         is_effective: true,
    //         task_description: {
    //             create_time: '2022-11-29 12:00:00',
    //             status: 'running',
    //             url: "https://github.com/imClumsyPanda/langchain-ChatGLM",
    //         },
    //         repos_info: {
    //             languages: [
    //                 "Python",
    //                 "Java"
    //             ],
    //             file_number: 100,
    //             size: "2.3M",
    //             time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
    //             hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
    //         },
    //     },
    // ]
    intelligence_task_list = [
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
        return this.task_list_info.filter((task_info) => {
            return task_info.is_effective === true
        })
    }

    /**
     * @description 获取成功运行且有效的任务列表
     * @returns {Array}
     */
    getSuccessTaskListInfo(pageType) {
        if (pageType === "trace") {
            return this.task_list_info.filter((task_info) => {
                return task_info.is_effective === true && task_info.task_description.status === "success"
            })
        } else if (pageType === "intelligence") {
            return this.intelligence_task_list
        } else {
            return []
        }
    }

    /**
     * @description 增加任务到任务列表
     * @param {object} task_info 
     */
    addTask = async (task_info) => {
        return await http.post("/taskmanage/create", task_info)
    }

    /**
     * @description 获取任务列表的总长度
     * @returns {number}
     */
    getTaskLength() {
        return this.task_list_info.length
    }

    /**
     * @description 根据 id 删除任务
     * @param {object} task_info 
     */
    deleteTask = async (task_info) => {
        return await http.post("taskmanage/delete", task_info)
    }

    getTaskList = async () => {
        http.get("/taskmanage/getTaskList").then((res) => {
            if (res.status === 200) {
                this.task_list_info = []
                res.data.forEach(data => {
                    this.task_list_info.push({
                        id: data.taskId,
                        name: data.taskName,
                        type: this.taskPattern[data.taskMode],
                        language: data.language,
                        is_effective: data.is_effective,
                        task_description: {
                            create_time: data.startTime,
                            status: data.status,
                            url: data.taskURL,
                        },
                        repos_info: {
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
        return this.intelligence_task_list
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default TaskStore;