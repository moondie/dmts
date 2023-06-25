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
    // intelligence_result_list = {
    //     "github.com/NotDSF/ServerSearch": {
    //         url: "https://github.com/NotDSF/ServerSearch",
    //         author: "dsf",
    //         social_attributes: [
    //             {
    //                 key: "独立合作",
    //                 value: "合作",
    //                 url: [
    //                     "https://github.com/NotDSF"
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/tedaditya/healthcare-kiosk": {
    //         url: "https://github.com/tedaditya/healthcare-kiosk",
    //         author: "Alvian Tedy Aditya",
    //         social_attributes: [
    //             {
    //                 key: "经济地位",
    //                 value: "中",
    //                 url: [
    //                     "https://twitter.com/tedaditya",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/untodeath/main": {
    //         url: "https://github.com/untodeath/main",
    //         author: "Unto Death",
    //         social_attributes: [
    //             {
    //                 key: "宗教背景",
    //                 value: "基督教",
    //                 url: [
    //                     "https://github.com/untodeath"
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/chfrank-cgn/Rancher": {
    //         url: "https://github.com/chfrank-cgn/Rancher",
    //         author: "Christian Frank",
    //         social_attributes: [
    //             {
    //                 key: "宗教背景",
    //                 value: "佛教",
    //                 url: [
    //                     "https://github.com/chfrank-cgn"
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/Jokas-null/Windows_RootKit": {
    //         url: "https://github.com/Jokas-null/Windows_RootKit",
    //         author: "Revathy VENUGOPAL",
    //         social_attributes: [
    //             {
    //                 key: "性别",
    //                 value: "女性",
    //                 url: [
    //                     "https://avatars.githubusercontent.com/u/74172574?v=4",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/WTFAcademy/ETHBeijing": {
    //         url: "https://github.com/WTFAcademy/ETHBeijing",
    //         author: "WTF.Academy",
    //         social_attributes: [
    //             {
    //                 key: "地域",
    //                 value: "北京",
    //                 url: [
    //                     "https://github.com/WTFAcademy/ETHBeijing#place",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/LiteSec/OneOS-X": {
    //         url: "https://github.com/LiteSec/OneOS-X",
    //         author: "LiteSec",
    //         social_attributes: [
    //             {
    //                 key: "社交程度",
    //                 value: "高",
    //                 url: [
    //                     "https://github.com/LiteSec/OneOS-X",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/professorisidro/IntegracaoBD": {
    //         url: "https://github.com/professorisidro/IntegracaoBD",
    //         author: "Professor Isidro",
    //         social_attributes: [
    //             {
    //                 key: "社会地位",
    //                 value: "高",
    //                 url: [
    //                     "https://github.com/professorisidro?tab=achievements",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/doctorn/micro-mitten": {
    //         url: "https://github.com/doctorn/micro-mitten",
    //         author: "Nathan Corbyn",
    //         social_attributes: [
    //             {
    //                 key: "职业特征",
    //                 value: "学生",
    //                 url: [
    //                     "https://nathancorbyn.com/",
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/Jiab77/libvirt-web": {
    //         url: "https://github.com/Jiab77/libvirt-web",
    //         author: "Doctor Who",
    //         social_attributes: [
    //             {
    //                 key: "语言特征",
    //                 value: "乐观",
    //                 url: [
    //                     "https://twitter.com/Jiab77"
    //                 ]
    //             }
    //         ]
    //     },
    //     "github.com/hartescout/ThreatHunt---Personal": {
    //         url: "https://github.com/hartescout/ThreatHunt---Personal",
    //         author: "ark",
    //         social_attributes: [
    //             {
    //                 key: "大五人格",
    //                 value: "开放性,情绪性",
    //                 url: [
    //                     "https://github.com/hartescout",
    //                 ]
    //             }
    //         ]
    //     },
    // }

    intelligence_result_list = [
        {
            id: "1",
            name: "身份追溯 1",
            nodes: [
                {
                    id: "github.com/0x00-0x00/ctf_tools",
                    label: "github.com/0x00-0x00/ctf_tools",
                    social_attributes: [
                        {
                            key: "性别",
                            value: "男",
                            url: ["https://avatars.githubusercontent.com/u/23364530?v=4"],
                        },
                        {
                            key: "地域",
                            value: "葡萄牙,努鲁波,意大利",
                            url: ["https://github.com/0x00-0x00"],
                        },
                    ],
                    // 为分析节点单独设置颜色,覆盖 default 配置
                    style: {
                        fill: "#32E0C4"
                    },
                    labelCfg: {
                        style: {
                            fill: "#32E0C4"
                        }
                    }
                },
                {
                    id: "github.com/nurupo/ProjectTox-Qt-GUI",
                    label: "github.com/nurupo/ProjectTox-Qt-GUI",
                    social_attributes: [
                        {
                            key: "地域",
                            value: "努鲁波",
                            url: ["https://github.com/nurupo"]
                        }
                    ]
                },
                {
                    id: "github.com/samyk/frisky",
                    label: "github.com/samyk/frisky",
                    social_attributes: [
                        {
                            key: "地域",
                            value: "意大利",
                            url: ["https://github.com/samyk"]
                        }
                    ]
                },
                {
                    id: "github.com/nurupo/nfk-lobby",
                    label: "github.com/nurupo/nfk-lobby",
                    social_attributes: [
                        {
                            key: "地域",
                            value: "努鲁波",
                            url: ["https://github.com/nurupo"]
                        }
                    ]
                }
            ],
            edges: [
                {
                    source: "github.com/0x00-0x00/ctf_tools",
                    target: "github.com/nurupo/ProjectTox-Qt-GUI",
                    label: "地域"
                },
                {
                    source: "github.com/0x00-0x00/ctf_tools",
                    target: "github.com/samyk/frisky",
                    label: "地域"
                },
                {
                    source: "github.com/0x00-0x00/ctf_tools",
                    target: "github.com/nurupo/nfk-lobby",
                    label: "地域"
                },
                {
                    source: "github.com/nurupo/ProjectTox-Qt-GUI",
                    target: "github.com/nurupo/nfk-lobby",
                }
            ]
        },
        {
            id: "2",
            name: "身份追溯 2",
            nodes: [
                {
                    id: "github.com/Rapptz/Gears",
                    label: "github.com/Rapptz/Gears",
                    social_attributes: [
                        {
                            key: "兴趣爱好",
                            value: "游戏和安全",
                            url: ["https://github.com/W4RH4WK/W4RH4WK/blob/main/README.md"]
                        },
                        {
                            key: "职业特征",
                            value: "红客",
                            url: ["https://camo.githubusercontent.com/2fbf8f2cf3daa06e08af8dfc9a6d60b25c82f2440baa5c804a634f3cf16178fe/68747470733a2f2f6d6574726963732e6c65636f712e696f2f6d6f6c6f63682d2d3f74656d706c6174653d636c617373696326616368696576656d656e74733d3126616368696576656d656e74732e7468726573686f6c643d4326616368696576656d656e74732e736563726574733d7472756526616368696576656d656e74732e646973706c61793d64657461696c656426616368696576656d656e74732e6c696d69743d3026636f6e6669672e74696d657a6f6e653d416d65726963612532464368696361676f"]
                        },
                        {
                            key: "社交程度",
                            value: "高",
                            url: ["https://twitter.com/jmhobbs"]
                        }
                    ],
                    // 为分析节点单独设置颜色,覆盖 default 配置
                    style: {
                        fill: "#32E0C4"
                    },
                    labelCfg: {
                        style: {
                            fill: "#32E0C4"
                        }
                    }
                },
                {
                    id: "github.com/W4RH4WK/Raygun",
                    label: "github.com/W4RH4WK/Raygun",
                    social_attributes: [
                        {
                            key: "兴趣爱好",
                            value: "游戏和安全",
                            url: ["https://github.com/W4RH4WK/W4RH4WK/blob/main/README.md"]
                        }
                    ]
                },
                {
                    id: "github.com/moloch--/Unzpaq-g",
                    label: "github.com/moloch--/Unzpaq-g",
                    social_attributes: [
                        {
                            key: "职业特征",
                            value: "红客",
                            url: ["https://camo.githubusercontent.com/2fbf8f2cf3daa06e08af8dfc9a6d60b25c82f2440baa5c804a634f3cf16178fe/68747470733a2f2f6d6574726963732e6c65636f712e696f2f6d6f6c6f63682d2d3f74656d706c6174653d636c617373696326616368696576656d656e74733d3126616368696576656d656e74732e7468726573686f6c643d4326616368696576656d656e74732e736563726574733d7472756526616368696576656d656e74732e646973706c61793d64657461696c656426616368696576656d656e74732e6c696d69743d3026636f6e6669672e74696d657a6f6e653d416d65726963612532464368696361676f"]
                        }
                    ]
                },
                {
                    id: "github.com/jmhobbs/libvcvideo",
                    label: "github.com/jmhobbs/libvcvideo",
                    social_attributes: [
                        {
                            key: "社交程度",
                            value: "高",
                            url: ["https://twitter.com/jmhobbs"]
                        }
                    ]
                },
                {
                    id: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
                    label: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
                    social_attributes: []
                },
                {
                    id: "github.com/nurupo/nfk-lobby",
                    label: "github.com/nurupo/nfk-lobby",
                    social_attributes: []
                },
                {
                    id: "github.com/Rapptz/jsonpp",
                    label: "github.com/Rapptz/jsonpp",
                    social_attributes: []
                }
            ],
            edges: [
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/Rapptz/jsonpp",
                },
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/W4RH4WK/Raygun",
                    label: "兴趣爱好"
                },
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/moloch--/Unzpaq-g",
                    label: "职业特征"
                },
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/jmhobbs/libvcvideo",
                    label: "社交程度"
                },
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
                },
                {
                    source: "github.com/Rapptz/Gears",
                    target: "github.com/nurupo/nfk-lobby",
                }
            ]
        }
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
    getIntelligenceResult = (task_id) => {
        console.log(task_id)
        let rtn = {
            nodes: [],
            edges: []
        }
        for (let i in this.intelligence_result_list) {
            console.log("s ", this.intelligence_result_list[i].id)
            if (this.intelligence_result_list[i].id === task_id) {
                console.log(this.intelligence_result_list[i].edges)
                rtn.edges = this.intelligence_result_list[i].edges
                rtn.nodes = this.intelligence_result_list[i].nodes
                break
            }
        }
        console.log(rtn)
        return rtn
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