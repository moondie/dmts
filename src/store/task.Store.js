/**
 * 实现任务列表的增删改查操作
 */


import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class taskStore {
    task_list_info = [
        {
            id: 1,
            name: "测试 1",
            type: "全量分析",
            language: 'Python',
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
            language: 'Java',
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

    getTaskListInfo = () => {
        return this.task_list_info
    }

    getTaskInfo = (url_id) => {
        // const res = await http.post("/task/")
        for (let i in this.task_list_info) {
            if (this.task_list_info[i].id === url_id) {
                return this.task_list_info[i].tasks
            }
        }
        return []
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default taskStore;