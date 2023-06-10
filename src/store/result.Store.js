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
            url: "https://github.com/THUDM/VisualGLM-6B",
            type: "代码溯源分析",
            language: 'Python',
            is_effective: true,
            features: {
                layout_feature: 2
            },
            similar_repository: [
                {
                    name: "ml-research/XIConceptLearning",
                    url: "https://github.com/ml-research/XIConceptLearning",
                    type: "repository",
                    similarity_score: 90,
                    malicious_level: 1,
                    features: {
                        layout_feature: 7
                    }
                },
                {
                    name: "MBCProject/mbc-markdown",
                    url: "https://github.com/MBCProject/mbc-markdown",
                    type: "repository",
                    similarity_score: 90,
                    malicious_level: 2,
                    features: {
                        layout_feature: 4
                    }
                },
                {
                    name: "Vision-CAIR/MiniGPT-4",
                    url: "https://github.com/Vision-CAIR/MiniGPT-4",
                    type: "repository",
                    similarity_score: 80,
                    malicious_level: 5,
                    features: {
                        layout_feature: 7
                    }
                },
                {
                    name: "yueyueL/DL-based-Android-Malware-Defenses-review",
                    url: "https://github.com/yueyueL/DL-based-Android-Malware-Defenses-review",
                    type: "repository",
                    similarity_score: 70,
                    malicious_level: 2,
                    features: {
                        layout_feature: 5
                    }
                },
                {
                    name: "E0HYL/BrutePrint",
                    url: "https://github.com/E0HYL/BrutePrint",
                    type: "repository",
                    similarity_score: 60,
                    malicious_level: 9,
                    features: {
                        layout_feature: 1
                    }
                },
                {
                    name: "vxunderground/MalwareSourceCode",
                    url: "https://github.com/vxunderground/MalwareSourceCode",
                    type: "repository",
                    similarity_score: 50,
                    malicious_level: 2,
                    features: {
                        layout_feature: 4
                    }
                },
                {
                    name: "binary-husky/gpt_academic",
                    url: "https://github.com/binary-husky/gpt_academic",
                    type: "repository",
                    similarity_score: 40,
                    malicious_level: 9,
                    features: {
                        layout_feature: 2
                    }
                }
            ]
        }
    ]

    getSimilarRepository(task_id) {
        for (let i in this.trace_result_list) {
            if (this.trace_result_list[i].id !== task_id) {
                continue
            }
            return this.trace_result_list[i].similar_repository
        }
        return []
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default ResultStore;