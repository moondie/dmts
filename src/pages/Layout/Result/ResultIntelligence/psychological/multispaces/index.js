import React from "react";
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";


const PsychologicalMultiSpacesPage = () => {
    const socialData = {
        nodes: [
            {
                id: "github.com/arinerron",
                label: "github.com/arinerron",
                socialAttributes: [
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
                id: "互联网社交空间-社交匿名性",
                label: "互联网社交空间-社交匿名性",
                socialAttributes: [
                    {
                        key: "真实姓名",
                        value: "Aaron Esau",
                    },
                    {
                        key: "推特",
                        value: "https://twitter.com/arinerron",
                    },
                    {
                        key: "匿名性",
                        value: "低",
                    },
                    {
                        key: "",
                        value: ""
                    },
                ]
            },
            {
                id: "互联网社交空间-社交言论分析",
                label: "互联网社交空间-社交言论分析",
                socialAttributes: [
                    {
                        key: "社交面貌",
                        value: "乐观",
                    },
                    {
                        key: "领域",
                        value: "计算机",
                    },
                    {
                        key: "特点",
                        value: "守序、传统",
                    },
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "互联网社交空间-社交活跃程度",
                label: "互联网社交空间-社交活跃程度",
                socialAttributes: [
                    {
                        key: "每月发推",
                        value: "7.72",
                    },
                    {
                        key: "与好友互动数",
                        value: "2.74",
                    },
                    {
                        key: "活跃程度",
                        value: "相对活跃",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交匿名性",
            },
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交言论分析",
            },
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交活跃程度",
            },

        ]
    }
    const entertainmentData = {
        nodes: [
            {
                id: "github.com/acedrew",
                label: "github.com/acedrew",
                socialAttributes: [
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
                id: "github.com/Adriantega12",
                label: "github.com/Adriantega12",
                socialAttributes: [
                ],
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
                id: "互联网娱乐空间-1",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "摄影",
                    },
                    {
                        key: "来源",
                        value: "mastodon社交平台",
                    },
                ]
            },
            {
                id: "互联网娱乐空间-2",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "游戏",
                    },
                    {
                        key: "来源",
                        value: "推特",
                    },
                ]
            },
            {
                id: "互联网学习空间",
                label: "互联网学习空间",
                socialAttributes: [
                    {
                        key: "编程语言",
                        value: "C++->Python->Javascript",
                    },
                    {
                        key: "提交数",
                        value: "154提交(今年来)",
                    },

                    {
                        key: "进步情况",
                        value: "不明显",
                    },
                    {
                        key: "熟练程度",
                        value: "C++、python老手，javascript新手",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/Adriantega12",
                target: "互联网娱乐空间-1",
            },
            {
                source: "github.com/acedrew",
                target: "互联网娱乐空间-2",
            },
            {
                source: "github.com/acedrew",
                target: "互联网学习空间",
            },

        ]
    }
    const workData = {
        nodes: [
            {
                id: "github.com/petermartens98",
                label: "github.com/petermartens98",
                socialAttributes: [
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
                id: "互联网工作空间-1",
                label: "互联网工作空间-代码领域",
                socialAttributes: [
                    {
                        key: "代码领域",
                        value: "机器学习、前端开发",
                    },

                ],
            },
            {
                id: "互联网工作空间-2",
                label: "互联网工作空间-提交日期",
                socialAttributes: [
                    {
                        key: "提交日期",
                        value: "工作日",
                    },
                ]
            },
            {
                id: "互联网工作空间-3",
                label: "互联网工作空间-可能职业",
                socialAttributes: [
                    {
                        key: "可能职业",
                        value: "数据分析师",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-1",
            },
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-2",
            },
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-3",
            }
        ]
    }
    const privacyData = {
        nodes: [
            {
                id: "互联网隐私空间",
                label: "互联网隐私空间",
                socialAttributes: [
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
                id: "github.com/ashawkey",
                label: "github.com/ashawkey",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "姓名、学历",
                    },
                    {
                        key: "危险等级",
                        value: "中等",
                    },

                ],
            },
            {
                id: "divyanshu-mehta.gitbook.io/researchs/",
                label: "divyanshu-mehta.gitbook.io/researchs/",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "社交账号、个人照片",
                    },
                    {
                        key: "危险等级",
                        value: "高",
                    },
                ]
            },
            {
                id: "github.com/sachinl0har",
                label: "github.com/sachinl0har",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "姓名、学历、照片、各大平台账号",
                    },
                    {
                        key: "危险等级",
                        value: "超高",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "互联网隐私空间",
                target: "github.com/ashawkey",
            },
            {
                source: "互联网隐私空间",
                target: "divyanshu-mehta.gitbook.io/researchs/",
            },
            {
                source: "互联网隐私空间",
                target: "github.com/sachinl0har",
            }
        ]
    }
    const timeData = {
        nodes: [
            {
                id: "github.com/JehanKandy",
                label: "github.com/JehanKandy",
                socialAttributes: [
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
                id: "时间管理空间-1",
                label: "时间管理空间-提交时间",
                socialAttributes: [
                    {
                        key: "上午6：00~9：00",
                        value: "76%",
                    },
                    {
                        key: "其他",
                        value: "24%",
                    },

                ],
            },
            {
                id: "时间管理空间-2",
                label: "时间管理空间-学习工作习惯",
                socialAttributes: [
                    {
                        key: "学习时间",
                        value: "白天",
                    },
                    {
                        key: "工作时间",
                        value: "白天",
                    },
                ]
            },
            {
                id: "时间管理空间-3",
                label: "时间管理空间-管理能力",
                socialAttributes: [
                    {
                        key: "自律性",
                        value: "良好",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-1",
            },
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-2",
            },
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-3",
            }
        ]
    }

    return (
        <ProCard
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard
                split='vertical'
            >
                <ProCard title="互联网社交空间">
                    <AttributeGraph data={socialData}></AttributeGraph>
                </ProCard>
                <ProCard title="互联网娱乐空间、互联网学习空间">
                    <AttributeGraph data={entertainmentData}></AttributeGraph>
                </ProCard>
            </ProCard>
            <ProCard
                split='vertical'
            >
                <ProCard title="互联网工作空间">
                    <AttributeGraph data={workData}></AttributeGraph>
                </ProCard>
                <ProCard title="互联网隐私空间">
                    <AttributeGraph data={privacyData}></AttributeGraph>
                </ProCard>
            </ProCard>
            <ProCard
                split='vertical'
            >
                <ProCard title="时间管理空间">
                    <AttributeGraph data={timeData}></AttributeGraph>
                </ProCard>
            </ProCard>
        </ProCard>
    )
}

export default PsychologicalMultiSpacesPage