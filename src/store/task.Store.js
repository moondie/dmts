/**
 * 实现任务列表的增删改查操作
 */


import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class taskStore {
    task_list = [
        {
            id: 1,
            name: 'https://github.com/THUDM/VisualGLM-6B',
        },
        {
            id: 2,
            name: 'https://github.com/imClumsyPanda/langchain-ChatGLM',
        },
    ]

    task_list_info = [
        {
            id: 1,
            name: 'https://github.com/THUDM/VisualGLM-6B',

            // 分析任务列表
            tasks: [
                {
                    id: 1,
                    name: '代码归属分析',
                    language: 'Python',
                    task_description: {
                        create_time: '2022-11-29 12:00:00',
                        status: 'success',
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
                    id: 2,
                    name: '全量扫描',
                    language: 'Python',
                    task_description: {
                        create_time: '2022-11-29 12:00:00',
                        status: 'waiting',
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
                }
            ],

        },
        {
            id: 2,
            name: 'https://github.com/imClumsyPanda/langchain-ChatGLM',
            tasks: [
                {
                    id: 1,
                    name: '代码情报分析',
                    language: 'Python',
                    task_description: {
                        create_time: '2022-11-29 12:00:00',
                        status: 'failed',
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
                    id: 2,
                    name: '全量扫描',
                    language: 'Python',
                    task_description: {
                        create_time: '2022-11-29 12:00:00',
                        status: 'running',
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
                }
            ]
        },
    ]

    getTaskList = () => {
        // const res = await http.get("/task/list")
        // this.task_list = res.data.task_list
        return this.task_list
    }

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