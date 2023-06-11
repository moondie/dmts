/**
 * 实现任务列表的增删改查操作
 */


import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class ResultStore {

    /**
     * @description 代码归属测试数据
     */
    trace_result_list = [
        {
            id: 1,
            name: "测试 1",
            repos_name: "github.com/THUDM/VisualGLM-6B",
            url: "https://github.com/THUDM/VisualGLM-6B",
            type: "代码溯源分析",
            language: 'Python',
            is_effective: true,
            features: {
                layout_feature: 2
            },
            similar_repository: [
                {
                    name: "github.com/ml-research/XIConceptLearning",
                    url: "https://github.com/ml-research/XIConceptLearning",
                    type: "repository",
                    similarity_score: 90,
                    malicious_level: 1,
                    features: {
                        layout_feature: 7
                    }
                },
                {
                    name: "github.com/MBCProject/mbc-markdown",
                    url: "https://github.com/MBCProject/mbc-markdown",
                    type: "repository",
                    similarity_score: 90,
                    malicious_level: 2,
                    features: {
                        layout_feature: 4
                    }
                },
                {
                    name: "github.com/Vision-CAIR/MiniGPT-4",
                    url: "https://github.com/Vision-CAIR/MiniGPT-4",
                    type: "repository",
                    similarity_score: 80,
                    malicious_level: 5,
                    features: {
                        layout_feature: 7
                    }
                },
                {
                    name: "github.com/yueyueL/DL-based-Android-Malware-Defenses-review",
                    url: "https://github.com/yueyueL/DL-based-Android-Malware-Defenses-review",
                    type: "repository",
                    similarity_score: 70,
                    malicious_level: 2,
                    features: {
                        layout_feature: 5
                    }
                },
                {
                    name: "github.com/E0HYL/BrutePrint",
                    url: "https://github.com/E0HYL/BrutePrint",
                    type: "repository",
                    similarity_score: 60,
                    malicious_level: 9,
                    features: {
                        layout_feature: 1
                    }
                },
                {
                    name: "github.com/vxunderground/MalwareSourceCode",
                    url: "https://github.com/vxunderground/MalwareSourceCode",
                    type: "repository",
                    similarity_score: 50,
                    malicious_level: 2,
                    features: {
                        layout_feature: 4
                    }
                },
                {
                    name: "github.com/binary-husky/gpt_academic",
                    url: "https://github.com/binary-husky/gpt_academic",
                    type: "repository",
                    similarity_score: 40,
                    malicious_level: 9,
                    features: {
                        layout_feature: 2
                    }
                },
                {
                    name: "github.com/NotDSF/ServerSearch",
                    url: "https://github.com/NotDSF/ServerSearch",
                    type: "repository",
                    similarity_score: 65,
                    malicious_level: 1,
                    features: {
                        layout_feature: 2
                    }
                },
                {
                    name: "github.com/tedaditya/healthcare-kiosk",
                    url: "https://github.com/tedaditya/healthcare-kiosk",
                    type: "repository",
                    similarity_score: 36,
                    malicious_level: 0,
                    features: {
                        layout_feature: 2
                    }
                },
                {
                    name: "github.com/untodeath/main",
                    url: "https://github.com/untodeath/main",
                    type: "repository",
                    similarity_score: 45,
                    malicious_level: 9,
                    features: {
                        layout_feature: 2
                    }
                },
                {
                    name: "github.com/chfrank-cgn/Rancher",
                    url: "https://github.com/chfrank-cgn/Rancher",
                    type: "repository",
                    similarity_score: 75,
                    malicious_level: 4,
                    features: {
                        layout_feature: 2
                    }
                }
            ]
        }
    ]

    /**
     * @description 情报分析数据
     */
    intelligence_result_list = {
        "github.com/NotDSF/ServerSearch": {
            url: "https://github.com/NotDSF/ServerSearch",
            author: "dsf",
            social_attributes: [
                {
                    key: "独立合作",
                    value: "true",
                    url: "https://github.com/NotDSF"
                }
            ]
        },
        "github.com/tedaditya/healthcare-kiosk": {
            url: "https://github.com/tedaditya/healthcare-kiosk",
            author: "Alvian Tedy Aditya",
            social_attributes: [
                {
                    key: "消费能力",
                    value: "中等",
                    url: "https://twitter.com/tedaditya"
                }
            ]
        },
        "github.com/untodeath/main": {
            url: "https://github.com/untodeath/main",
            author: "Unto Death",
            social_attributes: [
                {
                    key: "宗教背景",
                    value: "基督教",
                    url: "https://github.com/untodeath"
                }
            ]
        },
        "github.com/chfrank-cgn/Rancher": {
            url: "https://github.com/chfrank-cgn/Rancher",
            author: "Christian Frank",
            social_attributes: [
                {
                    key: "宗教背景",
                    value: "佛教",
                    url: "https://github.com/chfrank-cgn"
                }
            ]
        }
    }

    /**
     * @description 根据任务 id 来获取代码归属结果中的相似性的仓库
     * @param {Number} task_id 
     * @returns {Array}
     */
    getSimilarRepository(task_id) {
        for (let i in this.trace_result_list) {
            if (this.trace_result_list[i].id !== task_id) {
                continue
            }
            return this.trace_result_list[i].similar_repository
        }
        return []
    }

    /**
     * @description 根据任务 id 来获取情报分析结果, 目前结果写死
     * @param {Number} task_id 
     * @returns {Object}
     */
    getIntelligenceResult(task_id) {
        let edges = []
        let nodes = []
        for (let i in this.trace_result_list) {
            if (this.trace_result_list[i].id === task_id) {
                let src_name = this.trace_result_list[i].repos_name
                nodes.push({
                    "id": src_name,
                    "label": src_name
                })
                for (let j in this.trace_result_list[i].similar_repository) {
                    edges.push({
                        "source": src_name,
                        "target": this.trace_result_list[i].similar_repository[j].name
                    })
                }
            }
        }
        for (let i in edges) {
            nodes.push({
                "id": edges[i].target,
                "label": edges[i].target
            })
        }
        return {
            "nodes": nodes,
            "edges": edges
        }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default ResultStore;