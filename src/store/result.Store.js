/**
 * 实现任务列表的增删改查操作
 */


import { http } from "@/utils";
import { Button } from "antd";
import { makeAutoObservable } from "mobx";

class ResultStore {

    /**
     * @description 代码归属测试数据
     */
    traceResultList = [
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
     * @description 代码情报分析测试数据
     */
    intelligenceResultList = [
        {
            id: "1",
            name: "身份追溯 1",
            nodes: [
                {
                    id: "github.com/0x00-0x00/ctf_tools",
                    label: "github.com/0x00-0x00/ctf_tools",
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: [
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
                    socialAttributes: []
                },
                {
                    id: "github.com/nurupo/nfk-lobby",
                    label: "github.com/nurupo/nfk-lobby",
                    socialAttributes: []
                },
                {
                    id: "github.com/Rapptz/jsonpp",
                    label: "github.com/Rapptz/jsonpp",
                    socialAttributes: []
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

    outlineTableData = {
        feature: {
            columns: [
                {
                    key: "index",
                    dataIndex: "index",
                    title: "序号",
                    width: 100,
                },
                {
                    key: "type",
                    dataIndex: "type",
                    title: "特征类型",
                    width: 400,
                    align: "center",
                    render: (value, row) => {
                        return {
                            children: <Button type="link" href={row.url}>{value}</Button>,
                            props: { rowSpan: row.featureSpan },
                        };
                    },
                },
                {
                    key: "description",
                    dataIndex: "description",
                    title: "特征描述",
                },
            ],
            data: [
                {
                    key: "1",
                    index: "1",
                    type: "工程事务特征",
                    description: "代码研发周期",
                    featureSpan: 3,
                    url: "/result/intelligence/feature/engineer",
                },
                {
                    key: "2",
                    index: "2",
                    type: "工程事务特征",
                    description: "研发规模",
                    featureSpan: 0,
                },
                {
                    key: "3",
                    index: "3",
                    type: "工程事务特征",
                    description: "研发管理水平",
                    featureSpan: 0,
                },
                {
                    key: "4",
                    index: "4",
                    type: "团队成员特征",
                    description: "团队规模",
                    featureSpan: 5,
                    url: "/result/intelligence/feature/team",
                },
                {
                    key: "5",
                    index: "5",
                    type: "团队成员特征",
                    description: "团队技术水平",
                    featureSpan: 0,
                },
                {
                    key: "6",
                    index: "6",
                    type: "团队成员特征",
                    description: "团队成员差异",
                    featureSpan: 0,
                },
                {
                    key: "7",
                    index: "7",
                    type: "团队成员特征",
                    description: "团队核心成员",
                    featureSpan: 0,
                },
                {
                    key: "8",
                    index: "8",
                    type: "团队成员特征",
                    description: "团队可信程度",
                    featureSpan: 0,
                },
                {
                    key: "9",
                    index: "9",
                    type: "社会态特征（社会属性）",
                    description: "年龄",
                    featureSpan: 12,
                    url: "/result/intelligence/feature/social",
                },
                {
                    key: "10",
                    index: "10",
                    type: "社会态特征（社会属性）",
                    description: "性别",
                    featureSpan: 0,
                },
                {
                    key: "11",
                    index: "11",
                    type: "社会态特征（社会属性）",
                    description: "地域",
                    featureSpan: 0,
                },
                {
                    key: "12",
                    index: "12",
                    type: "社会态特征（社会属性）",
                    description: "社交程度",
                    featureSpan: 0,
                },
                {
                    key: "13",
                    index: "13",
                    type: "社会态特征（社会属性）",
                    description: "受教育程度",
                    featureSpan: 0,
                },
                {
                    key: "14",
                    index: "14",
                    type: "社会态特征（社会属性）",
                    description: "文化背景",
                    featureSpan: 0,
                },
                {
                    key: "15",
                    index: "15",
                    type: "社会态特征（社会属性）",
                    description: "独立合作",
                    featureSpan: 0,
                },
                {
                    key: "16",
                    index: "16",
                    type: "社会态特征（社会属性）",
                    description: "社会地位",
                    featureSpan: 0,
                },
                {
                    key: "17",
                    index: "17",
                    type: "社会态特征（社会属性）",
                    description: "经济地位",
                    featureSpan: 0,
                },
                {
                    key: "18",
                    index: "18",
                    type: "社会态特征（社会属性）",
                    description: "宗教背景",
                    featureSpan: 0,
                },
                {
                    key: "19",
                    index: "19",
                    type: "社会态特征（社会属性）",
                    description: "职业特征",
                    featureSpan: 0,
                },
                {
                    key: "20",
                    index: "20",
                    type: "社会态特征（社会属性）",
                    description: "语言特征",
                    featureSpan: 0,
                },
                {
                    key: "21",
                    index: "21",
                    type: "心理态特征（大五人格）",
                    description: "开放性",
                    featureSpan: 5,
                    url: "/result/intelligence/feature/five",
                },
                {
                    key: "22",
                    index: "22",
                    type: "心理态特征（大五人格）",
                    description: "神经质",
                    featureSpan: 0,
                },
                {
                    key: "23",
                    index: "23",
                    type: "心理态特征（大五人格）",
                    description: "宜人性",
                    featureSpan: 0,
                },
                {
                    key: "24",
                    index: "24",
                    type: "心理态特征（大五人格）",
                    description: "尽责性",
                    featureSpan: 0,
                },
                {
                    key: "25",
                    index: "25",
                    type: "心理态特征（大五人格）",
                    description: "外倾性",
                    featureSpan: 0,
                },
                {
                    key: "26",
                    index: "26",
                    type: "空间态特征（代码词汇特征）",
                    description: "词汇分布",
                    featureSpan: 21,
                    url: "/result/intelligence/feature/lexical",
                },
                {
                    key: "27",
                    index: "27",
                    type: "空间态特征（代码词汇特征）",
                    description: "关键字分布",
                    featureSpan: 0,
                },
                {
                    key: "28",
                    index: "28",
                    type: "空间态特征（代码词汇特征）",
                    description: "三元运算符分布",
                    featureSpan: 0,
                },
                {
                    key: "29",
                    index: "29",
                    type: "空间态特征（代码词汇特征）",
                    description: "注释分布",
                    featureSpan: 0,
                },
                {
                    key: "30",
                    index: "30",
                    type: "空间态特征（代码词汇特征）",
                    description: "注释类型分布",
                    featureSpan: 0,
                },
                {
                    key: "31",
                    index: "31",
                    type: "空间态特征（代码词汇特征）",
                    description: "字面量分布",
                    featureSpan: 0,
                },
                {
                    key: "32",
                    index: "32",
                    type: "空间态特征（代码词汇特征）",
                    description: "函数分布",
                    featureSpan: 0,
                },
                {
                    key: "33",
                    index: "33",
                    type: "空间态特征（代码词汇特征）",
                    description: "预处理器指令分布",
                    featureSpan: 0,
                },
                {
                    key: "34",
                    index: "34",
                    type: "空间态特征（代码词汇特征）",
                    description: "函数参数分布",
                    featureSpan: 0,
                },
                {
                    key: "35",
                    index: "35",
                    type: "空间态特征（代码词汇特征）",
                    description: "行长度分布",
                    featureSpan: 0,
                },
                {
                    key: "36",
                    index: "36",
                    type: "空间态特征（代码词汇特征）",
                    description: "行字符数量分布",
                    featureSpan: 0,
                },
                {
                    key: "37",
                    index: "37",
                    type: "空间态特征（代码词汇特征）",
                    description: "命名规范分布",
                    featureSpan: 0,
                },
                {
                    key: "38",
                    index: "38",
                    type: "空间态特征（代码词汇特征）",
                    description: "变量位置分布",
                    featureSpan: 0,
                },
                {
                    key: "39",
                    index: "39",
                    type: "空间态特征（代码词汇特征）",
                    description: "函数调用类型分布",
                    featureSpan: 0,
                },
                {
                    key: "40",
                    index: "40",
                    type: "空间态特征（代码词汇特征）",
                    description: "新旧函数分布",
                    featureSpan: 0,
                },
                {
                    key: "41",
                    index: "41",
                    type: "空间态特征（代码词汇特征）",
                    description: "危险函数分布",
                    featureSpan: 0,
                },
                {
                    key: "42",
                    index: "42",
                    type: "空间态特征（代码词汇特征）",
                    description: "函数长度分布",
                    featureSpan: 0,
                },
                {
                    key: "43",
                    index: "43",
                    type: "空间态特征（代码词汇特征）",
                    description: "英语水平分布",
                    featureSpan: 0,
                },
                {
                    key: "44",
                    index: "44",
                    type: "空间态特征（代码词汇特征）",
                    description: "内存申请方式分布",
                    featureSpan: 0,
                },
                {
                    key: "45",
                    index: "45",
                    type: "空间态特征（代码词汇特征）",
                    description: "变量类型分布",
                    featureSpan: 0,
                },
                {
                    key: "46",
                    index: "46",
                    type: "空间态特征（代码词汇特征）",
                    description: "权限控制符分布",
                    featureSpan: 0,
                },
                {
                    key: "47",
                    index: "47",
                    type: "空间态特征（代码布局特征）",
                    description: "制表符分布",
                    featureSpan: 6,
                    url: "/result/intelligence/feature/layout",
                },
                {
                    key: "48",
                    index: "48",
                    type: "空间态特征（代码布局特征）",
                    description: "空白符分布",
                    featureSpan: 0,
                },
                {
                    key: "49",
                    index: "49",
                    type: "空间态特征（代码布局特征）",
                    description: "空白行分布",
                    featureSpan: 0,
                },
                {
                    key: "50",
                    index: "50",
                    type: "空间态特征（代码布局特征）",
                    description: "空格分布",
                    featureSpan: 0,
                },
                {
                    key: "51",
                    index: "51",
                    type: "空间态特征（代码布局特征）",
                    description: "基本块换行分布",
                    featureSpan: 0,
                },
                {
                    key: "52",
                    index: "52",
                    type: "空间态特征（代码布局特征）",
                    description: "行缩进分布",
                    featureSpan: 0,
                },
                {
                    key: "53",
                    index: "53",
                    type: "空间态特征（代码语法特征）",
                    description: "树最大深度",
                    featureSpan: 6,
                    url: "/result/intelligence/feature/syntax",
                },
                {
                    key: "54",
                    index: "54",
                    type: "空间态特征（代码语法特征）",
                    description: "规则节点分布",
                    featureSpan: 0,
                },
                {
                    key: "55",
                    index: "55",
                    type: "空间态特征（代码语法特征）",
                    description: "控制结构分布",
                    featureSpan: 0,
                },
                {
                    key: "56",
                    index: "56",
                    type: "空间态特征（代码语法特征）",
                    description: "词汇节点分布",
                    featureSpan: 0,
                },
                {
                    key: "57",
                    index: "57",
                    type: "空间态特征（代码语法特征）",
                    description: "控制结构深度分布",
                    featureSpan: 0,
                },
                {
                    key: "58",
                    index: "58",
                    type: "空间态特征（代码语法特征）",
                    description: "缩写结构分布",
                    featureSpan: 0,
                },
            ],
        },
        psychological: {
            columns: [
                {
                    key: "index",
                    dataIndex: "index",
                    title: "序号",
                    width: 100,
                },
                {
                    key: "type",
                    dataIndex: "type",
                    title: "特征类型",
                    width: 400,
                    align: "center",
                    render: (value, row) => {
                        return {
                            children: <Button type="link" href={row.url}>{value}</Button>,
                            props: { rowSpan: row.featureSpan },
                        };
                    },
                },
                {
                    key: "description",
                    dataIndex: "description",
                    title: "特征描述",
                },
            ],
            data: [
                {
                    key: "1",
                    index: "1",
                    type: "社会属性",
                    description: "年龄",
                    featureSpan: 12,
                    url: "/result/intelligence/psychological/social",
                },
                {
                    key: "2",
                    index: "2",
                    type: "社会属性",
                    description: "性别",
                    featureSpan: 0,
                },
                {
                    key: "3",
                    index: "3",
                    type: "社会属性",
                    description: "地域",
                    featureSpan: 0,
                },
                {
                    key: "4",
                    index: "4",
                    type: "社会属性",
                    description: "社交程度",
                    featureSpan: 0,
                },
                {
                    key: "5",
                    index: "5",
                    type: "社会属性",
                    description: "受教育程度",
                    featureSpan: 0,
                },
                {
                    key: "6",
                    index: "6",
                    type: "社会属性",
                    description: "文化背景",
                    featureSpan: 0,
                },
                {
                    key: "7",
                    index: "7",
                    type: "社会属性",
                    description: "独立合作",
                    featureSpan: 0,
                },
                {
                    key: "8",
                    index: "8",
                    type: "社会属性",
                    description: "社会地位",
                    featureSpan: 0,
                },
                {
                    key: "9",
                    index: "9",
                    type: "社会属性",
                    description: "经济地位",
                    featureSpan: 0,
                },
                {
                    key: "10",
                    index: "10",
                    type: "社会属性",
                    description: "宗教背景",
                    featureSpan: 0,
                },
                {
                    key: "11",
                    index: "11",
                    type: "社会属性",
                    description: "职业特征",
                    featureSpan: 0,
                },
                {
                    key: "12",
                    index: "12",
                    type: "社会属性",
                    description: "语言特征",
                    featureSpan: 0,
                },
                {
                    key: "13",
                    index: "13",
                    type: "多重空间",
                    description: "工程事务空间",
                    featureSpan: 10,
                    url: "/result/intelligence/psychological/multispaces",
                },
                {
                    key: "14",
                    index: "14",
                    type: "多重空间",
                    description: "团体成员空间",
                    featureSpan: 0,
                },
                {
                    key: "15",
                    index: "15",
                    type: "多重空间",
                    description: "社会属性空间",
                    featureSpan: 0,
                },
                {
                    key: "16",
                    index: "16",
                    type: "多重空间",
                    description: "性格特质空间",
                    featureSpan: 0,
                },
                {
                    key: "17",
                    index: "17",
                    type: "多重空间",
                    description: "互联网社交空间",
                    featureSpan: 0,
                },
                {
                    key: "18",
                    index: "18",
                    type: "多重空间",
                    description: "互联网娱乐空间",
                    featureSpan: 0,
                },
                {
                    key: "19",
                    index: "19",
                    type: "多重空间",
                    description: "互联网学习空间",
                    featureSpan: 0,
                },
                {
                    key: "20",
                    index: "20",
                    type: "多重空间",
                    description: "互联网隐私空间",
                    featureSpan: 0,
                },
                {
                    key: "21",
                    index: "21",
                    type: "多重空间",
                    description: "互联网工作空间",
                    featureSpan: 0,
                },
                {
                    key: "22",
                    index: "22",
                    type: "多重空间",
                    description: "时间管理空间",
                    featureSpan: 0,
                },
                {
                    key: "23",
                    index: "23",
                    type: "社交跟踪范围",
                    description: "社会属性空间->互联网社交空间",
                    featureSpan: 10,
                    url: "/result/intelligence/psychological/trace",
                },
                {
                    key: "24",
                    index: "24",
                    type: "社交跟踪范围",
                    description: "社会属性空间->互联网工作空间",
                    featureSpan: 0,
                },
                {
                    key: "25",
                    index: "25",
                    type: "社交跟踪范围",
                    description: "性格特质空间->互联网学习空间",
                    featureSpan: 0,
                },
                {
                    key: "26",
                    index: "26",
                    type: "社交跟踪范围",
                    description: "性格特质空间->互联网工作空间",
                    featureSpan: 0,
                },
                {
                    key: "27",
                    index: "27",
                    type: "社交跟踪范围",
                    description: "互联网娱乐空间->互联网社交空间",
                    featureSpan: 0,
                },
                {
                    key: "28",
                    index: "28",
                    type: "社交跟踪范围",
                    description: "互联网社交空间->互联网娱乐空间",
                    featureSpan: 0,
                },
                {
                    key: "29",
                    index: "29",
                    type: "社交跟踪范围",
                    description: "互联网社交空间->互联网隐私空间",
                    featureSpan: 0,
                },
                {
                    key: "30",
                    index: "30",
                    type: "社交跟踪范围",
                    description: "互联网社交空间->时间管理空间",
                    featureSpan: 0,
                },
                {
                    key: "31",
                    index: "31",
                    type: "社交跟踪范围",
                    description: "互联网社交空间,娱乐空间->社会属性空间",
                    featureSpan: 0,
                },
                {
                    key: "32",
                    index: "32",
                    type: "社交跟踪范围",
                    description: "互联网社交空间,娱乐空间->性格特质空间",
                    featureSpan: 0,
                },
            ],
        },
        behavior: {
            columns: [
                {
                    key: "index",
                    dataIndex: "index",
                    title: "序号",
                    width: 100,
                },
                {
                    key: "type",
                    dataIndex: "type",
                    title: "特征类型",
                    width: 400,
                    align: "center",
                    render: (value, row) => {
                        return {
                            children: <Button type="link" href={row.url}>{value}</Button>,
                            props: { rowSpan: row.featureSpan },
                        };
                    },
                },
                {
                    key: "description",
                    dataIndex: "description",
                    title: "特征描述",
                },
            ],
            data: [
                {
                    key: "1",
                    index: "1",
                    type: "编码行为模式",
                    description: "系统调用习惯",
                    featureSpan: 10,
                    url: "/result/intelligence/behavior/coding",
                },
                {
                    key: "2",
                    index: "2",
                    type: "编码行为模式",
                    description: "代码注释习惯",
                    featureSpan: 0,
                },
                {
                    key: "3",
                    index: "3",
                    type: "编码行为模式",
                    description: "输出的字符串信息",
                    featureSpan: 0,
                },
                {
                    key: "4",
                    index: "4",
                    type: "编码行为模式",
                    description: "子函数的大小",
                    featureSpan: 0,
                },
                {
                    key: "5",
                    index: "5",
                    type: "编码行为模式",
                    description: "是否喜欢多文件引用",
                    featureSpan: 0,
                },
                {
                    key: "6",
                    index: "6",
                    type: "编码行为模式",
                    description: "导入的模块函数是否有针对性",
                    featureSpan: 0,
                },
                {
                    key: "7",
                    index: "7",
                    type: "编码行为模式",
                    description: "关键函数的调用方式",
                    featureSpan: 0,
                },
                {
                    key: "8",
                    index: "8",
                    type: "编码行为模式",
                    description: "资源引用方式",
                    featureSpan: 0,
                },
                {
                    key: "9",
                    index: "9",
                    type: "编码行为模式",
                    description: "函数与变量命名方式",
                    featureSpan: 0,
                },
                {
                    key: "10",
                    index: "10",
                    type: "编码行为模式",
                    description: "异常处理习惯",
                    featureSpan: 0,
                },
                {
                    key: "11",
                    index: "11",
                    type: "社会行为模式",
                    description: "恶意攻击模式",
                    featureSpan: 8,
                    url: "/result/intelligence/behavior/social",
                },
                {
                    key: "12",
                    index: "12",
                    type: "社会行为模式",
                    description: "信息窃取模式",
                    featureSpan: 0,
                },
                {
                    key: "13",
                    index: "13",
                    type: "社会行为模式",
                    description: "社交模式",
                    featureSpan: 0,
                },
                {
                    key: "14",
                    index: "14",
                    type: "社会行为模式",
                    description: "娱乐模式",
                    featureSpan: 0,
                },
                {
                    key: "15",
                    index: "15",
                    type: "社会行为模式",
                    description: "学习模式",
                    featureSpan: 0,
                },
                {
                    key: "16",
                    index: "16",
                    type: "社会行为模式",
                    description: "工作模式",
                    featureSpan: 0,
                },
                {
                    key: "17",
                    index: "17",
                    type: "社会行为模式",
                    description: "时间管理模式",
                    featureSpan: 0,
                },
                {
                    key: "18",
                    index: "18",
                    type: "社会行为模式",
                    description: "隐私保护模式",
                    featureSpan: 0,
                },
            ],
        },
    }

    /**
     * @description 根据任务ID获得代码归属的结果
     * @param {Number} task_id 
     * @returns 
     */
    getTaskResultByTaskID = async (taskID) => {
        return await http.post("/taskmanage/getDetail", { taskId: taskID })
    }

    /**
     * @description 根据任务 id 来获取情报分析结果, 目前结果写死
     * @param {Number} taskID 
     * @returns {Object}
     */
    getIntelligenceResult = (taskID) => {
        let rtn = {
            nodes: [],
            edges: []
        }
        for (let i in this.intelligenceResultList) {
            if (this.intelligenceResultList[i].id == taskID) {
                rtn.edges = this.intelligenceResultList[i].edges
                rtn.nodes = this.intelligenceResultList[i].nodes
                break
            }
        }
        return rtn
    }

    /**
     * @description 根据任务 id 获取仓库名
     * @param {Number} taskID 
     */
    getReposNameById(taskID) {
        for (let i in this.traceResultList) {
            if (this.traceResultList[i].id === taskID) {
                return this.traceResultList[i].repos_name
            }
        }
        return ""
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default ResultStore;