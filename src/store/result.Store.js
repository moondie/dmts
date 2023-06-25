/**
 * 实现任务列表的增删改查操作
 */


import { http } from "@/utils";
import { makeAutoObservable } from "mobx";

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
            ]
        }
    ]

    /**
     * @description 情报分析数据
     * 为了实现快速索引，将 name 作为 key 值
     */
    intelligence_result_list = {
        "github.com/NotDSF/ServerSearch": {
            url: "https://github.com/NotDSF/ServerSearch",
            author: "dsf",
            social_attributes: [
                {
                    key: "独立合作",
                    value: "合作",
                    url: [
                        "https://github.com/NotDSF"
                    ]
                }
            ]
        },
        "github.com/tedaditya/healthcare-kiosk": {
            url: "https://github.com/tedaditya/healthcare-kiosk",
            author: "Alvian Tedy Aditya",
            social_attributes: [
                {
                    key: "经济地位",
                    value: "中",
                    url: [
                        "https://twitter.com/tedaditya",
                    ]
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
                    url: [
                        "https://github.com/untodeath"
                    ]
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
                    url: [
                        "https://github.com/chfrank-cgn"
                    ]
                }
            ]
        },
        "github.com/Jokas-null/Windows_RootKit": {
            url: "https://github.com/Jokas-null/Windows_RootKit",
            author: "Revathy VENUGOPAL",
            social_attributes: [
                {
                    key: "性别",
                    value: "女性",
                    url: [
                        "https://avatars.githubusercontent.com/u/74172574?v=4",
                    ]
                }
            ]
        },
        "github.com/WTFAcademy/ETHBeijing": {
            url: "https://github.com/WTFAcademy/ETHBeijing",
            author: "WTF.Academy",
            social_attributes: [
                {
                    key: "地域",
                    value: "北京",
                    url: [
                        "https://github.com/WTFAcademy/ETHBeijing#place",
                    ]
                }
            ]
        },
        "github.com/LiteSec/OneOS-X": {
            url: "https://github.com/LiteSec/OneOS-X",
            author: "LiteSec",
            social_attributes: [
                {
                    key: "社交程度",
                    value: "高",
                    url: [
                        "https://github.com/LiteSec/OneOS-X",
                    ]
                }
            ]
        },
        "github.com/professorisidro/IntegracaoBD": {
            url: "https://github.com/professorisidro/IntegracaoBD",
            author: "Professor Isidro",
            social_attributes: [
                {
                    key: "社会地位",
                    value: "高",
                    url: [
                        "https://github.com/professorisidro?tab=achievements",
                    ]
                }
            ]
        },
        "github.com/doctorn/micro-mitten": {
            url: "https://github.com/doctorn/micro-mitten",
            author: "Nathan Corbyn",
            social_attributes: [
                {
                    key: "职业特征",
                    value: "学生",
                    url: [
                        "https://nathancorbyn.com/",
                    ]
                }
            ]
        },
        "github.com/Jiab77/libvirt-web": {
            url: "https://github.com/Jiab77/libvirt-web",
            author: "Doctor Who",
            social_attributes: [
                {
                    key: "语言特征",
                    value: "乐观",
                    url: [
                        "https://twitter.com/Jiab77"
                    ]
                }
            ]
        },
        "github.com/hartescout/ThreatHunt---Personal": {
            url: "https://github.com/hartescout/ThreatHunt---Personal",
            author: "ark",
            social_attributes: [
                {
                    key: "大五人格",
                    value: "开放性,情绪性",
                    url: [
                        "https://github.com/hartescout",
                    ]
                }
            ]
        },
    }

    /**
     * @description 情报分析增加美感数据
     */
    intelligence_edge_list = [
        {
            source: "github.com/ml-research/XIConceptLearning",
            target: "github.com/MBCProject/mbc-markdown",
        },
        {
            source: "github.com/MBCProject/mbc-markdown",
            target: "github.com/Vision-CAIR/MiniGPT-4",
        },
        {
            source: "github.com/Vision-CAIR/MiniGPT-4",
            target: "github.com/yueyueL/DL-based-Android-Malware-Defenses-review",
        },
        {
            source: "github.com/yueyueL/DL-based-Android-Malware-Defenses-review",
            target: "github.com/chfrank-cgn/Rancher",
        },
        {
            source: "github.com/tedaditya/healthcare-kiosk",
            target: "github.com/untodeath/main",
        },
        {
            source: "github.com/Jokas-null/Windows_RootKit",
            target: "github.com/chfrank-cgn/Rancher",
        },
        {
            source: "github.com/LiteSec/OneOS-X",
            target: "github.com/Jokas-null/Windows_RootKit",
        },
    ]

    /**
     * @description 根据任务ID获得代码归属的结果
     * @param {Number} task_id 
     * @returns 
     */
    getTaskResultByTaskID = async (task_id) => {
        console.log(task_id)
        return await http.post("/taskmanage/getDetail", { taskId: task_id })
    }

    /**
     * @description 根据任务 id 来获取情报分析结果, 目前结果写死
     * @param {Number} task_id 
     * @returns {Object}
     */
    getIntelligenceResult(task_id) {
        let edges = []
        let nodes = []

        // 获取当前分析节点，并添加节点
        let src_node_name = this.getReposNameById(task_id)
        let social_attributes = []

        // 添加代码情报分析节点和边
        Object.entries(this.intelligence_result_list).forEach(([dst_node_name, dst_node_info]) => {
            // 添加目标节点
            nodes.push({
                id: dst_node_name,
                label: dst_node_name,
                social_attributes: dst_node_info.social_attributes
            })

            // 提取边的标签
            let edge_label = []
            for (let social_attribute of dst_node_info.social_attributes) {
                edge_label.push(social_attribute.key)
            }

            // 添加目标节点和分析节点的边
            edges.push({
                source: src_node_name,
                target: dst_node_name,
                label: edge_label.join(),
            })

            // 收集社会属性
            social_attributes.push(...dst_node_info.social_attributes)
        });

        // 添加额外的无关边
        this.getSimilarRepository(task_id).forEach((dst_node_info) => {
            nodes.push({
                id: dst_node_info.name,
                label: dst_node_info.name,
                social_attributes: []
            })

            edges.push({
                source: src_node_name,
                target: dst_node_info.name
            })
        })

        // 添加分析节点
        nodes.push({
            id: src_node_name,
            label: src_node_name,
            social_attributes: social_attributes,
            // 为分析节点单独设置颜色,覆盖 default 配置
            style: {
                fill: "#32E0C4"
            },
            labelCfg: {
                style: {
                    fill: "#32E0C4"
                }
            }
        })

        // 添加额外边,增加图形美感
        this.intelligence_edge_list.forEach((edge) => {
            edges.push(edge)
        })

        return {
            "nodes": nodes,
            "edges": edges
        }
    }

    /**
     * @description 根据任务 id 获取仓库名
     * @param {Number} task_id 
     */
    getReposNameById(task_id) {
        for (let i in this.trace_result_list) {
            if (this.trace_result_list[i].id === task_id) {
                return this.trace_result_list[i].repos_name
            }
        }
        return ""
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default ResultStore;