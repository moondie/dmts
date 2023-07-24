import React from "react";
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import {Table} from "antd";


const PsychologicalMultiSpacesPage = () => {
    const socialData = {
        nodes: [
            {
                id: "github.com/arinerron",
                label: "github.com/arinerron",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://twitter.com/arinerron",
                        url: "https://twitter.com/arinerron"
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
                id: "互联网社交空间-社交匿名性",
                label: "互联网社交空间-社交匿名性",
                socialAttributes: [
                    {
                        key: "真实姓名",
                        value: "Aaron Esau",
                        url: "https://aaronesau.com/"

                    },
                    {
                        key: "推特",
                        value: "https://twitter.com/arinerron",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "匿名性",
                        value: "低",
                        url: "https://twitter.com/arinerron/status/1612206626207076352"
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
                        url: "https://twitter.com/arinerron/status/1642778873585872896"
                    },
                    {
                        key: "领域",
                        value: "计算机",
                        url: "https://twitter.com/arinerron/status/1448107828846026754"
                    },
                    {
                        key: "特点",
                        value: "守序、传统",
                        url: "https://twitter.com/arinerron/status/1626659413519134720"
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
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "与好友互动数",
                        value: "2.74",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "活跃程度",
                        value: "相对活跃",
                        url: "https://twitter.com/arinerron"
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
                    {
                        key: "地址",
                        value: "https://github.com/acedrew",
                        url: "https://github.com/acedrew"
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
                id: "github.com/Adriantega12",
                label: "github.com/Adriantega12",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://github.com/Adriantega12",
                        url: "https://github.com/Adriantega12"
                    }
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
                        url: "https://mastodon.social/@acedrew"
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
                        url: "https://twitter.com/Adriantega12/media"
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
                    {
                        key: "来源",
                        value: "github",
                        url: "https://github.com/acedrew"
                    }
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
                    {
                        key: "地址",
                        value: "https://github.com/petermartens98",
                        url:"https://github.com/petermartens98"
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
                id: "互联网工作空间-1",
                label: "互联网工作空间-代码领域",
                socialAttributes: [
                    {
                        key: "代码领域",
                        value: "机器学习、前端开发",
                        url: "https://github.com/petermartens98"
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
                        url: "https://github.com/petermartens98/GPT4-LangChain-Agents-Research-Web-App/commits/main"
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
                        url: "https://github.com/petermartens98"
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
                    {
                        key: "来源",
                        value: "个人主页",
                        url: "https://me.kiui.moe/"

                    }

                ],
            },
            {
                id: "divyanshu-mehta.gitbook.io/researchs/",
                label: "divyanshu-mehta.gitbook.io/researchs/",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "社交账号、个人照片",
                        url: "https://twitter.com/gh0st_r1d3r_0x9"
                    },
                    {
                        key: "危险等级",
                        value: "高",
                    },
                    {
                        key: "来源",
                        value: "个人主页",
                        url: "https://divyanshu-mehta.gitbook.io/researchs/"
                    }
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
                    {
                        key: "来源1",
                        value: "推特",
                        url: "https://twitter.com/sachinl0har"
                    },
                    {
                        key: "来源2",
                        value: "领英",
                        url: "https://www.linkedin.com/in/sachinl0har/"
                    },
                    {
                        key: "来源3",
                        value: "个人主页",
                        url: "https://www.sachinlohar.com/#about"
                    }
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
                    {
                        key: "地址",
                        value: "https://github.com/JehanKandy",
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
                id: "时间管理空间-1",
                label: "时间管理空间-提交时间",
                socialAttributes: [
                    {
                        key: "上午6：00~9：00",
                        value: "76%",
                        url: "https://github.com/JehanKandy"
                    },
                    {
                        key: "其他",
                        value: "24%",
                        url: "https://github.com/JehanKandy"
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
                        url: "https://github.com/JehanKandy"
                    },
                    {
                        key: "工作时间",
                        value: "白天",
                        url: "https://github.com/JehanKandy"
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

    const tableData =  [
        {
            key: "1",
            type: "互联网社交空间(社交匿名性)",
            description: "用于反映代码作者在互联网社交行为中保护隐私的倾向。",
            mapping: "在互联网社交平台是否有暴露自己个人信息的行为以及暴露程度。浏览用户推特平台发布的信息，过滤掉转推，分析其发言。",
        },
        {
            key: "2",
            type: "互联网社交空间(社交活跃程度)",
            description: "用于反映代码作者在互联网社交行为中的活跃程度。",
            mapping: "在单位时间内的发推数量、与别人互动的频繁程度。爬取、统计作者推特账号发的所有推特，统计其在单位时间内的发推数量；找到其互动最多的5个人，统计其在单位时间内与他们互动的数量。",
        },
        {
            key: "3",
            type: "互联网社交空间(社交言论分析)",
            description: "用于反映代码作者在互联网社交行为中的言论立场、情绪倾向。",
            mapping: "互动的领域（比如游戏、科技、体育等）、发言的情感倾向、对网络热点的立场倾向等。利用自然语言处理领域的方法处理前面爬到的推文，分析用户发言的语义，提取出发言相关的领域、情感、立场。",
        },
        {
            key: "4",
            type: "互联网娱乐空间",
            description: "用于反映代码作者在互联网的娱乐行为偏向的领域。",
            mapping: "代码作者在互联网主页、发言等透露出其在互联网娱乐行为偏好。爬取用户社交平台发布的信息，分析其发言、浏览其个人主页介绍，获取其在互联网娱乐的行为，比如看视频、摄影、游戏等。",
        },
        {
            key: "5",
            type: "互联网学习空间",
            description: "用于描述代码作者编程语言和应用场景熟练度，以及未来技术栈的变化趋势。",
            mapping: "技术栈由仓库标签进行对应，说明作者具备该标签对应的技术栈能力。仓库的工程量和提交频率说明了技术栈的熟练度，工程量和提交频率越多，越熟练。包含时间戳的代码提交信息则描述了技术方向变化梯度，单位时间内提交的文件数量越多，代表熟练度进步速度越快。计算仓库包含文件数量和编程语言占比，编程语言的熟练度通过对应语言的文件数量描述。熟练度分为新手（文件数量<10），初学者（10<文件数量<50）,熟手（50<文件数量<200）,老手（文件数>200）四个档次。统计单位时间（周，月）内的仓库提交信息，通过提交文件数量判断编程语言和应用场景技术熟练度变化方向，应用场景的熟练度判断规则与编程语言相同。",
        },
        {
            key: "6",
            type: "互联网隐私空间",
            description: "用于反映代码作者在互联网时代对自身隐私信息的保护和重视程度，侧面反映代码作者在现实中的隐私信息保护意识。",
            mapping: "通过代码作者在Github、推特、领英、个人博客等互联网平台上透露个人信息的多少以及同个作者各账号之间的关联程度来综合映射。针对本课题的研究目的，个人隐私信息可以大致分为两类：姓名、教育和工作经历、专业技术水平、联系方式等工作简历必要信息；性别、籍贯、爱好、宗教信仰、婚姻情况等非必要个人隐私信息。上述个人信息泄露越多，则其隐私保护意识相对越弱。工作简历常见信息，与隐私保护意识关联相对较低，权重占比低。互联网用户对其各平台账号之间关联程度的重视也能反映出其隐私保护意识的强弱，其各平台账号之间的关联程度越高，隐私保护意识相对越弱，反之越强。各平台账号之间存在联系，就可通过跨站社工分析得到账号作者的较为完整的个人信息，甚至能够对应到现实生活中的具体公民，在能够联系到该公民生活圈的情况下，可能对其产生直接的信息劫持威胁。",
        },
        {
            key: "7",
            type: "互联网工作空间",
            description: "用于刻画代码作者在程序员职业下的细分方向，如windows客户端开发工程师，web开发工程师或者游戏开发工程师等。",
            mapping: "互联网社交空间中自我介绍可能会包含专业名词，能够直接通过专业名词进行细分职业对应。互联网学习空间描述了个人的技术栈，技术栈则与细分职业存在着紧密的关系。工程事务空间描述个人的工作时间，提交时间与个人身份有着紧密的关系。",
        },
        {
            key: "8",
            type: "时间管理空间",
            description: "用于反映代码作者在自身时间管理方面的特征，比如学习时间区间、工作时间区间、娱乐时间区间、休息时间区间等。",
            mapping: "通过代码作者在Github、推特等平台上主要活跃时间区间判断。学习时间通过代码作者在其个人博客、Github等学习、整理平台上的活跃时间信息判断，比如其经常在19：00~21：00的时间区间内整理博客文章、上传、更新仓库，则可反映出其学习时间区间大致位于上述区间。",
        },

    ]
    const columns =  [

        {
            key: "type",
            dataIndex: "type",
            title: "指标项",
            width: 200,
        },
        {
            key: "description",
            dataIndex: "description",
            title: "指标说明",
        },
        {
            key: "mapping",
            dataIndex: "mapping",
            title: "指标映射",
        },
    ]

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
            <ProCard>
                <Table
                    dataSource={tableData}
                    columns={columns}
                />
            </ProCard>
        </ProCard>
    )
}

export default PsychologicalMultiSpacesPage