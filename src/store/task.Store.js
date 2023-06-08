/**
 * 实现任务列表的增删改查操作
 */


import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class TaskStore {
    task_list_info = [
        {
            id: 1,
            name: "测试 1",
            type: "代码溯源分析",
            language: 'Python',
            is_effective: true,
            task_description: {
                create_time: '2022-11-29 12:00:00',
                status: 'success',
                url: "https://github.com/THUDM/VisualGLM-6B",
            },
            repos_info: {
                languages: [
                    "Python",
                    "Java"
                ],
                file_number: 100,
                size: "2.3M",
                time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
                hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
            },
        },
        {
            id: 2,
            name: '测试 2',
            type: "全量扫描",
            language: 'Golang',
            is_effective: true,
            task_description: {
                create_time: '2022-11-29 12:00:00',
                status: 'waiting',
                url: "https://github.com/THUDM/VisualGLM-6B",
            },
            repos_info: {
                languages: [
                    "Python",
                    "Java"
                ],
                file_number: 100,
                size: "2.3M",
                time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
                hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
            },
        },
        {
            id: 3,
            name: '测试 3',
            type: "代码情报分析",
            language: 'C/C++',
            is_effective: true,
            task_description: {
                create_time: '2022-11-29 12:00:00',
                status: 'failed',
                url: "https://github.com/imClumsyPanda/langchain-ChatGLM",
            },
            repos_info: {
                languages: [
                    "Python",
                    "Java"
                ],
                file_number: 100,
                size: "2.3M",
                time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
                hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
            },
        }, {
            id: 4,
            name: '测试 4',
            type: "全量扫描",
            language: 'None',
            is_effective: true,
            task_description: {
                create_time: '2022-11-29 12:00:00',
                status: 'running',
                url: "https://github.com/imClumsyPanda/langchain-ChatGLM",
            },
            repos_info: {
                languages: [
                    "Python",
                    "Java"
                ],
                file_number: 100,
                size: "2.3M",
                time: "2022-11-29 12:00:00 - 2022-11-29 12:03:00",
                hash: "198f932540e0e8eb25c29c6201cbc1f90024c39b",
            },
        },
    ]

    getTaskListInfo() {
        return this.task_list_info.filter((task_info) => {
            return task_info.is_effective === true
        })
    }

    taskPattern = {
        "traceability": "代码溯源分析",
        "intelligence": "代码情报分析",
        "all": "全量扫描"
    }

    addTask(task_info) {
        this.task_list_info.push({
            id: this.getTaskLength() + 1,
            name: task_info.task_name,
            type: task_info.task_type,
            language: "None",
            is_effective: true,
            task_description: {
                create_time: new Date().toLocaleString(),
                status: 'running',
                url: task_info.task_context,
            },
            repos_info: {
                languages: []
            },
        })
    }

    getTaskLength() {
        return this.task_list_info.length
    }

    // 根据 id 删除任务
    deleteTask(task_id) {
        for (let i in this.task_list_info) {
            if (this.task_list_info[i].id !== task_id) {
                continue
            }
            this.task_list_info[i].is_effective = false
            break
        }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default TaskStore;