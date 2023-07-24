import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import {Table} from "antd";

const FeatureSocialPage = () => {
    const ageData = {
        nodes: [
            {
                id: "github.com/calaylin",
                label: "github.com/calaylin",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "",
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
                id: "年龄",
                label: "年龄",
                socialAttributes: [
                    {
                        key: "年龄分布",
                        value: "大学生",
                        url: ["https://github.com/calaylin"]
                    }
                ]
            },
            {
                id: "性别",
                label: "性别",
                socialAttributes: [
                    {
                        key: "性别识别结果",
                        value: "女性",
                        url: ["https://avatars.githubusercontent.com/u/1504187?v=4"]
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "西雅图，华盛顿",
                        url: ["https://github.com/calaylin"]
                    }
                ]
            },
            {
                id: "受教育程度",
                label: "受教育程度",
                socialAttributes: [
                    {
                        key: "教育程度",
                        value: "大学生",
                        url: ["https://github.com/calaylin"],
                    },
                    {
                        key: "学校名称",
                        value: "华盛顿大学（University of Washington）",
                        url: ["https://github.com/calaylin"],
                    }
                ]
            },
            {
                id: "独立合作",
                label: "独立合作",
                socialAttributes: [
                    {
                        key: "编写代码协作习惯",
                        value: "倾向个人",
                        url: ["https://github.com/calaylin"],
                    },
                    {
                        key: "合作案例数量",
                        value: "1",
                        url: ["https://github.com/calaylin/CodeStylometry/graphs/contributors"],
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/calaylin",
                target: "年龄",
            },
            {
                source: "github.com/calaylin",
                target: "性别",
            },
            {
                source: "github.com/calaylin",
                target: "地域",
            },
            {
                source: "github.com/calaylin",
                target: "受教育程度",
            },
            {
                source: "github.com/calaylin",
                target: "独立合作",
            },
        ]
    }

    const careerData = {
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

    const socialStatusData = {
        nodes: [
            {
                id: "github.com/professorisidro",
                label: "github.com/professorisidro",
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
                id: "社会地位",
                label: "社会地位",
                socialAttributes: [
                    {
                        key: "粉丝数量",
                        value: "613",
                        url: ["https://github.com/professorisidro?tab=followers"]
                    },
                    {
                        key: "被点赞数量",
                        value: "119",
                        url: ["https://camo.githubusercontent.com/568836cc0470869f813aaef7ea45632a0c8aa2fbc9cd56a754bc10c451feb9df/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d70726f666573736f7269736964726f2673686f775f69636f6e733d74727565267468656d653d64726163756c6126696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565"]
                    },
                    {
                        key: "总结",
                        value: "受编程爱好者喜爱，被接纳度高"
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "巴西",
                        url: ["https://github.com/professorisidro"]
                    },
                ]
            },
            {
                id: "职业特征",
                label: "职业特征",
                socialAttributes: [
                    {
                        key: "兴趣爱好偏向",
                        value: "游戏开发，Java",
                        url: ["https://github.com/professorisidro"]
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/professorisidro",
                target: "社会地位",
            },
            {
                source: "github.com/professorisidro",
                target: "地域",
            },
            {
                source: "github.com/professorisidro",
                target: "职业特征",
            },
        ]
    }

    const economicData = {
        nodes: [
            {
                id: "github.com/tedaditya",
                label: "github.com/tedaditya",
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
                id: "经济地位",
                label: "经济地位",
                socialAttributes: [
                    {
                        key: "购物偏向",
                        value: "物联网设备",
                        url: ["https://twitter.com/tedaditya/status/1632955286959927297"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/tedaditya",
                target: "经济地位",
            },
        ]
    }

    const religionData = {
        nodes: [
            {
                id: "github.com/agbolade667",
                label: "github.com/agbolade667",
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
                id: "宗教背景",
                label: "宗教背景",
                socialAttributes: [
                    {
                        key: "宗教倾向",
                        value: "基督教",
                        url: ["https://github.com/agbolade667"]
                    }
                ]
            },
            {
                id: "性别",
                label: "性别",
                socialAttributes: [
                    {
                        key: "性别",
                        value: "男",
                        url: ["https://avatars.githubusercontent.com/u/24415969?v=4"]
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "尼日利亚拉各斯",
                        url: ["https://github.com/agbolade667"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/agbolade667",
                target: "宗教背景",
            },
            {
                source: "github.com/agbolade667",
                target: "性别",
            },
            {
                source: "github.com/agbolade667",
                target: "地域",
            },
        ]
    }

    const languageFeatureData = {
        nodes: [
            {
                id: "github.com/Jiab77",
                label: "github.com/Jiab77",
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
                id: "语言特征",
                label: "语言特征",
                socialAttributes: [
                    {
                        key: "语言习惯倾向",
                        value: "倾向于开心、笑哭的表情",
                        url: ["https://twitter.com/Jiab77"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/Jiab77",
                target: "语言特征",
            },
        ]
    }

    const tableData =  [
        {
            key: "1",
            type: "社会属性(年龄)",
            description: "用于反映源代码作者所处的年龄段。",
            mapping: "(1)社工分析：查找github账号与推特等社交账号的联系；\n" +
                "(2)代码注释信息，年轻人可能喜欢使用网络热梗或者表情来注释代码，老一代的程序员可能注释信息会使用技术术语；\n" +
                "(3)编程语言类型：使用Fortran可能是年龄大一些的程序员，Swift可能是年轻的程序员；\n" +
                "(4)库和框架：不同的库和框架在不同的年代和年龄段流行，使用的依赖库管理工具或者语言版本低可能程序员年龄大，使用最新的库和框架可能意味着作者年轻；\n" +
                "(5)代码结构样式：结构好、易于维护的代码和编写混乱、难以理解的代码，前一种大部分为年龄大的程序员。",
        },
        {
            key: "2",
            type: "社会属性(性别)",
            description: "用于反映源代码作者的生理性别。",
            mapping: "（1）代码注释信息：女程序员可能倾向于注释中使用表达情感的词汇，男程序员可能倾向于使用技术性词汇；\n" +
                "（2）社工分析：动态、头像、信息栏；\n" +
                "（3）变量名和函数名：作者可能在命名中使用性别相关的词汇或者命名习惯，女程序员可能使用与女性有关的词汇，男程序员可能使用与男性有关的词汇。",
        },
        {
            key: "3",
            type: "社会属性(地域)",
            description: "用于反映源代码作者所在的地理位置。",
            mapping: "（1）代码注释信息：汉语 英语 俄语等；\n" +
                "（2）社工分析，根据具体的源代码作者社工作者GitHub等的账号信息，时区信息，ip信息，分辨地域；\n" +
                "（3）程序员可能会使用本地语言或方言来命名变量或函数名。例如，在中国，程序员可能会使用拼音或者汉字来命名变量和函数名，而在英语国家，程序员可能会使用英语单词或者缩写来命名变量和函数名；\n" +
                "（4）时间和日期格式：源代码中可能包含有关时间和日期的信息，例如代码提交的时间戳、代码中使用的日期格式等。这些信息可能与特定地区的时间和日期格式有关，从而可以暗示代码作者所在的地域信息；\n" +
                "（5）使用的库和框架：程序员可能会在代码中使用特定地区的库和框架。例如，在中国，程序员可能更倾向于使用国内的开源库和框架，而在美国，程序员可能更倾向于使用美国的开源库和框架；\n" +
                "（6）特定的文化和传统：在代码中可能包含特定地域文化和传统的引用，例如特定的电影、音乐、体育和历史事件等。这些信息可能会暗示代码作者的地域信息。",
        },
        {
            key: "4",
            type: "社会属性(社交程度)",
            description: "反映作者与他人互动和交往的频率。",
            mapping: "（1）社工分析：GitHub上fork操作的数量，个人社交账号的关注数与被关注数，社交媒体信息；\n" +
                "（2）代码贡献量：代码贡献量可以反映出作者在社交圈中的影响力。如果作者提交了大量代码或者参与了多个项目，可能表明作者在社交圈中比较活跃，并且与其他程序员或者社区成员有良好的互动；\n" +
                "（3）代码审核反馈：如果作者的代码被其他程序员或者社区成员频繁审核、修改或者评论，可能表明作者在社交圈中比较活跃；\n" +
                "（4）代码讨论记录：如果代码存储库中包含有与作者相关的讨论记录，例如讨论代码实现方法、问题解决方案等，可能表明作者在社交圈中比较活跃；\n" +
                "（5）代码的风格和习惯可以反映作者在社交圈中的影响力。如果作者的代码风格和习惯被其他程序员或者社区成员广泛采纳或者引用，可能表明作者在社交圈中比较活跃。",
        },
        {
            key: "5",
            type: "社会属性(受教育程度)",
            description: "用于反映作者的技术能力和专业知识水平。",
            mapping: "（1）代码注释信息，如果代码中包含有清晰、详尽的注释，说明作者具备一定的技术能力和专业知识，可能是受过高等教育的人;\n" +
                "（2）源代码中函数与变量命名内容，其具有代表性的变量使用的命名内容，例如在求和中，使用为Sum，Add还是qiuhe，S等；\n" +
                "（3）使用六级词汇与四级词汇的多少，以及拼写是否有问题；\n" +
                "（4）代码复杂度：代码的复杂度可以反映出作者的技术能力和专业知识。如果代码的结构清晰、逻辑严密，可能表明作者有一定的技术能力和专业知识，受过高等教育的可能性较大;\n" +
                "（5）时间复杂度：对同一个可优化的问题，所写出的代码时间复杂度越低可能受教育程度越高;\n" +
                "（6）代码中使用的技术和算法：代码中使用的技术和算法也可以反映出作者的技术能力和专业知识。如果作者在代码中使用了较为高级的技术和算法，可能表明作者受过高等教育，有较高的专业知识和技术水平。\n",
        },
        {
            key: "6",
            type: "社会属性(文化背景)",
            description: "用于反映作者文化背景。",
            mapping: "（1）注释和文档：注释和文档可以帮助我们理解代码的意图和功能。如果注释和文档中使用了特定的词汇、短语或文化背景中的引用，可能表明作者来自这个文化背景;\n" +
                "（2）变量、函数和类的命名：变量、函数和类的命名可以反映出作者的文化背景。例如，如果作者使用了某种特定的语言或文化背景中的词汇，可能表明作者来自这个文化背景;\n" +
                "（3）代码中使用的数据结构和算法：代码中使用的数据结构和算法也可以反映出作者的文化背景。例如，某些文化背景可能更加注重算法的优化和效率，而其他文化背景可能更加注重算法的可读性和易用性。\n",
        },
        {
            key: "7",
            type: "社会属性(独立合作)",
            description: "用于反映个人是否与其他人进行协同完成同一个任务，侧面体现该用户在工作上的偏好习惯，间接反应人物个性。",
            mapping: "独立合作属性可以通过作者是否加入组织，作者是否与其他人共同编写代码来推断；其次，也可以通过作者在社交账号上个人信息来判断，如艾特他人，点赞朋友等信息能够反映作者趋向于合作的属性。",
        },
        {
            key: "8",
            type: "社会属性(社会地位)",
            description: "用于反映个人在组织中的威望，在组织中处于活跃者的身份表明其在组织中具有一定的地位，对于组织十分重要。",
            mapping: "社会地位属性可以通过个人在组织中的活跃程度（活跃时间、活跃相对频率）来推断，也可以通过个人参与组织的个数、参加组织的频率来推断；其次，也可以通过作者在社交账号上个人信息来判断，如作者被关注数量，曝光度等越高反映作者的社会接纳度越高，越容易被人认可。",
        },
        {
            key: "9",
            type: "社会属性(经济地位)",
            description: "用于反应个人的经济水平。",
            mapping: "经济地位属性可以通过个人在网络中所遗留的资产来体现，如会员、虚拟货币、消费清单等。",
        },
        {
            key: "10",
            type: "社会属性(宗教背景)",
            description: "用于反应个人接收到的文化熏陶，反应个人在未来中的行为导向、倾向活跃方向以及爱好习惯。",
            mapping: "通过建立主流宗教对应的地点、代表言论等字典信息，通过特征字符串识别的方法，收集作者在网络平台上的 IP 地址、经过地点、发表言论等信息来反映作者的宗教倾向；其次，通过建立主流宗教代表言论，匹配代码中的词法信息，提取作者的宗教倾向。",
        },
        {
            key: "11",
            type: "社会属性(职业特征)",
            description: "用于反映个人的职业行为信息，通过职业特征信息能够推断其在社会所担任的角色，间接反映其可能接触到的事物。",
            mapping: "职业特征属性可以通过个人编写的代码种类（游戏、前后端、大数据、爬虫），个人定义的标签来反映，也可以通过其参加的组织的种类，标签来体现；其次，通过追踪作者社交网络中的个人信息、发表言论、经过地点等信息，设计职业特征对应的语料库，识别作者的职业信息。",
        },
        {
            key: "12",
            type: "社会属性(语言特征（语种）)",
            description: "用于反映个人的行为习惯，通过语言特征能够推断作者对重大事件的态度，从而反映个人心理特征。",
            mapping: "语言特征信息初步划分为保守型和激进型，通过收集代码中的注释信息和字符串信息，作者在互联网平台上所发表的评论、点赞、转发情况，利用语言心理学知识，建立特殊情感词汇，敏感词汇对应的个人行为倾向映像图像，推断作者的语言特征倾向。",
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
            title="社会态特征（社会属性）"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard title="年龄、地域、性别、受教育程度和独立合作">
                <AttributeGraph data={ageData}></AttributeGraph>
            </ProCard>
            <ProCard title="社交程度、兴趣爱好和职业特征">
                <AttributeGraph data={careerData}></AttributeGraph>
            </ProCard>
            <ProCard title="社会地位、地域和职业特征">
                <AttributeGraph data={socialStatusData}></AttributeGraph>
            </ProCard>
            <ProCard title="经济地位">
                <AttributeGraph data={economicData}></AttributeGraph>
            </ProCard>
            <ProCard title="宗教背景、性别和地域">
                <AttributeGraph data={religionData}></AttributeGraph>
            </ProCard>
            <ProCard title="语言特征">
                <AttributeGraph data={languageFeatureData}></AttributeGraph>
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

export default FeatureSocialPage