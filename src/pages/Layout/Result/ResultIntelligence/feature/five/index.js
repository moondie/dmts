import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import {Image, Table} from "antd";

const FeatureFivePage = () => {
    const data = {
        nodes: [
            {
                id: "github.com/hartescout",
                label: "github.com/hartescout",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "开放性较高，神经质(情绪稳定性)较低"
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
                id: "github.com/jaywcjlove",
                label: "github.com/jaywcjlove",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "宜人性和外倾性较高"
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
                id: "开放性",
                label: "开放性",
                socialAttributes: [
                    {
                        key: "公开仓库数量",
                        value: "176 高",
                        url: ["https://github.com/hartescout?tab=repositories"],
                    },
                    {
                        key: "标星数量",
                        value: "151 高",
                        url: ["https://github.com/hartescout?tab=stars"],
                    },
                    {
                        key: "总结",
                        value: "开放性较高，易于接受新鲜事物"
                    },
                ]
            },
            {
                id: "神经质",
                label: "神经质",
                socialAttributes: [
                    {
                        key: "敏感词汇数量",
                        value: "680",
                        url: ["https://github.com/search?q=owner%3Ahartescout%20fuck&type=code"],
                    },
                    {
                        key: "敏感词汇频率",
                        value: "较常见",
                        url: ["https://github.com/hartescout/exploitdb/blob/016ad02a70d942a7596e7b03164dc986fc38ac09/exploits/linux/remote/437.c#L106"],
                    },
                    {
                        key: "总结",
                        value: "情绪稳定性差"
                    },
                ]
            },
            {
                id: "尽责性",
                label: "尽责性",
                 socialAttributes: [
                     {
                         key: "仓库文档和链接",
                         value: "结构清晰、可读性高",
                         url:["https://github.com/jaywcjlove/awesome-mac"]
                     },
                     {
                        key: "参考备忘清单",
                        value: "为开发人员分享快速参考备忘清单(速查表)",
                        url:["https://github.com/jaywcjlove/reference"]
                    },
                 ]
             },
            {
                id: "宜人性",
                label: "宜人性",
                socialAttributes: [
                    {
                        key: "开发成员Mr-Un1k0d3r技术方向",
                        value: "红队、测试",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                ]
            },
            {
                id: "外倾性",
                label: "外倾性",
                socialAttributes: [
                    {
                        key: "社交账号残留",
                        value: "微博、推特、电子邮箱、主页",
                        url: ["https://github.com/jaywcjlove"],
                    },
                    {
                        key: "地域信息残留",
                        value: "中国上海",
                        url: ["https://github.com/jaywcjlove"],
                    },
                    {
                        key: "总结",
                        value: "外倾性高，互联网遗留大量个人信息"
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/hartescout",
                target: "开放性",
            },
            {
                source: "github.com/hartescout",
                target: "神经质",
            },
            {
                source: "github.com/jaywcjlove",
                target: "宜人性",
            },
            {
                 source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                 target: "尽责性",
             },
            {
                source: "github.com/jaywcjlove",
                target: "外倾性",
            }
        ]
    }
    const tableData =  [
        {
            key: "1",
            type: "大五人格(开放性)",
            description: "开放性描述一个人的认知风格，它被定义为为了自身的缘故对经验的前摄寻求和理解，以及对陌生情境的容忍和探索。",
            mapping: "在编码风格上，开放性可以通过：（1）函数\\库\\框架调用版本：如果代码中使用新版本的比例较高，可以推断此人愿意不断接受新事物，开放性较高；如果使用旧版本比例较高，说明此人对前摄经验依赖较高，开放性较低。\n在其他代码行为上：（1）讨论积极程度：如果对issues回复较及时，开放性较高。\n" +
                "（2）代码贡献量和提交频率：如果贡献量较高，提交频率较高，说明此人较为活跃，开放性倾向较高。\n" +
                "（3）使用语言的多样性/流行年份：如果仓库里语言多样性较高，或者使用语言流行年份较新，使用开放性较高。\n" +
                "（4）代码仓库实现功能差异较大：差异性较大，开放性较高。\n" +
                "（5）团队成员差异：团队成员差异较大，开放性较高。\n" +
                "此外，在社交网络上发言较为积极，好友较多，写文档较多的，一般比较开放。",
        },
        {
            key: "2",
            type: "大五人格(情绪性)",
            description: "情绪性反映个体情感调节过程，反映个体体验消极情绪的倾向和情绪不稳定性。高神经质个体更容易体验到诸如愤怒、焦虑、抑郁等消极的情绪。",
            mapping: "情绪性可以通过以下方式获取：\n" +
                "（1）代码布局：如果代码布局较为混乱，此人难以控制自己的情绪，得分较低。\n" +
                "（2）代码注释：如果注释中消极情绪性词汇较多，此人情绪性得分较低。\n" +
                "（3）变量命名\\位置\\长度：如果代码命名规范性较差，说明此人较易体现出烦躁的倾向，情绪性得分会较低。以函数为单位，如果函数内变量位置较为分散（即变量位置方差较大），而不是规范的在近邻位置统一定义，说明此人较易体现出情绪不稳定性，情绪性得分较低。如果变量命名都较短，以“i、ccc、zzz、s、a”此类命名，可以说明此人命名时较没有耐心，情绪性得分较低。\n" +
                "（4）代码/函数长度：代码/函数较长，不按功能分块，情绪性得分较低。\n" +
                "（5）文档\\回复情感倾向：readme里或者回复他人的消息里有消极词汇出现，此人情绪性得分较低。",
        },
        {
            key: "3",
            type: "大五人格(宜人性)",
            description: "宜人性是评估个体喜欢与他人一同出现的程度，它考察个体对其他人所持的态度，这些态度一方面包括亲近人的、有同情心的、信任他人的、宽大的，另一方面包括敌对的、愤世嫉俗的、复仇心重的、无情的。",
            mapping: "在编码行为上：\n" +
                "（1）代码注释：如果代码注释较为详尽，说明此人较考虑他人能否看懂他的代码，宜人性得分倾向较高；\n" +
                "（2）函数长度：如果函数较长，未模块化，宜人性倾向较低；\n" +
                "（3）匿名函数比例：匿名函数比例较高，宜人性倾向较低；\n" +
                "（4）异常处理方式：如果异常处理语句较多，具有针对性的异常处理语句较多，说明宜人性倾向较高；\n" +
                "（5）代码嵌套数量：如果代码嵌套数量较大，可读性较差，说明宜人性倾向较低；\n" +
                "（6）函数/变量/文件命名规范程度：如果规范度较高，宜人性得分倾向较高。\n" +
                "（7）代码的时间/空间复杂度：如果复杂度较低，说明代码优化良好，宜人性得分倾向较高。\n" +
                "在其他代码行为上：\n" +
                "（1）参与组织的积极程度：参与较多，代表愿意合作，宜人性得分较高。\n" +
                "（2）回复频率：回复频率较高，宜人性较高。\n" +
                "（3）fork频率：fork频率较高，宜人性较高。\n",
        },
        {
            key: "4",
            type: "大五人格(尽责性)",
            description: "尽责性指我们控制、管理和调节自身冲动的方式，评估个体在目标导向行为上的组织、坚持和动机。它反映个体自我控制的程度以及推迟需求满足的能力。",
            mapping: "在编码风格上：\n" +
                "（1）重复代码段数量：如果重复代码较多，尽责性倾向较低；\n" +
                "（2）调用函数的安全性：如果使用大量安全函数，尽责性倾向较高。\n" +
                "（3）函数/变量/文件命名规范性：规范度较高，尽责性倾向较高。\n" +
                "（4）异常处理方式：如果异常处理语句较多，具有针对性的异常处理语句较多，说明尽责性倾向较高；\n" +
                "（5）代码嵌套数量：如果代码嵌套数量较大，可读性较差，说明尽责性倾向较低；\n" +
                "（6）代码的时间/空间复杂度：如果复杂度较低，说明代码优化良好，尽责性得分倾向较高。\n" +
                "（7）代码注释：如果代码注释较为详尽，说明此人较考虑他人能否看懂他的代码，尽责性得分倾向较高。\n" +
                "（8）代码布局：如果布局较为规范，尽责性倾向较高。\n" +
                "（9）代码模块化程度：模块化程度较高，调用较为清晰，尽责性较高。\n" +
                "总而言之，代码编程水平较高，可以反映出尽责性较高。",
        },
        {
            key: "5",
            type: "大五人格(外倾性)",
            description: "外倾性表示人际互动的数量和密度、对刺激的需要以及获得愉悦的能力。这个方面可由两个品质加以衡量：人际的卷入水平和活力水平。前者评估个体喜欢他人陪伴的程度，而后者反映了个体个人的节奏和活力水平。",
            mapping: "在编码风格上：\n" +
                "代码注释数量/情感倾向：代码注释比例较高/情感倾向较为明显，外倾性相对较高。\n" +
                " 在其他代码行为上：\n" +
                "（1）账号信息详尽程度：如果github等平台账号个人真实信息较多，外倾性相对较高；\n" +
                "（2）讨论积极性：如果和他人互动较多（issues回复频率、fork数量、star数量、个人参与组织数量），外倾性相对较高。\n" +
                "     文档详尽程度/情感倾向：文档较为详尽，或者使用颜文字/emoji较多，外倾向相对较高。\n" +
                "（3）合作程度：参与组织频率较高、较多，外倾性较强。",
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
            title="团队成员特征"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard>
                <AttributeGraph data={data}></AttributeGraph>
            </ProCard>
            <ProCard>
                <Table
                    dataSource={tableData}
                    columns={columns}
                />
            </ProCard>
            <ProCard
                split="vertical"
            >
                <ProCard title={<p><a href="https://github.com/hartescout">github.com/hartescout</a>大五人格统计结果</p>}>
                    <Image
                        src={require("@/assets/Result/IntelligenceFeature/1.png")}
                    />
                </ProCard>
                <ProCard title={<p><a href="https://github.com/jaywcjlove">github.com/jaywcjlove</a>大五人格统计结果</p>}>
                    <Image
                        src={require("@/assets/Result/IntelligenceFeature/2.png")}
                    />
                </ProCard>
            </ProCard>
        </ProCard>
    )
}

export default FeatureFivePage