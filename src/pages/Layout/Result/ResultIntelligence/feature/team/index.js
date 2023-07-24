import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import {Table} from "antd";

const FeatureTeamPage = () => {
    const data = {
        nodes: [
            {
                id: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                label: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "团体规模小，团体成员技术集中于红队、安全，代码可信程度极高"
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
                id: "团队规模",
                label: "团队规模",
                socialAttributes: [
                    {
                        key: "项目团体人数",
                        value: "6",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator/graphs/contributors"],
                    },
                ]
            },
            {
                id: "团队技术水平",
                label: "团队技术水平",
                socialAttributes: [
                    {
                        key: "研发使用技术",
                        value: "无",
                    },
                    {
                        key: "代码规范聚合度",
                        value: "高",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator/blob/master/TEMPLATE.md"],
                    }
                ]
            },
            {
                id: "团队成员差异",
                label: "团队成员差异",
                socialAttributes: [
                    {
                        key: "开发成员Mr-Un1k0d3r技术方向",
                        value: "红队、测试",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                    {
                        key: "开发成员infosecn1nja技术方向",
                        value: "安全研究、红队、对抗模拟、威胁情报收集",
                        url: ["https://github.com/infosecn1nja"],
                    },
                    {
                        key: "开发成员mr-sato技术方向",
                        value: "无",
                        url: ["https://github.com/mr-sato"],
                    },
                    {
                        key: "开发成员taherio技术方向",
                        value: "无",
                        url: ["https://github.com/taherio"],
                    },
                    {
                        key: "开发成员tothi技术方向",
                        value: "漏洞、代理劫持",
                        url: ["https://github.com/tothi"],
                    },
                    {
                        key: "总结",
                        value: "团体成员技术差异小、方向集中：安全、红队"
                    }
                ]
            },
            {
                id: "团队核心成员",
                label: "团队核心成员",
                socialAttributes: [
                    {
                        key: "开发成员1",
                        value: "Mr-Un1k0d3r",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                    {
                        key: "开发成员2",
                        value: "infosecn1nja",
                        url: ["https://github.com/infosecn1nja"],
                    },
                    {
                        key: "开发成员3",
                        value: "mr-sato",
                        url: ["https://github.com/mr-sato"],
                    },
                    {
                        key: "开发成员4",
                        value: "taherio",
                        url: ["https://github.com/taherio"],
                    },
                    {
                        key: "开发成员5",
                        value: "tothi",
                        url: ["https://github.com/tothi"],
                    },
                ]
            },
            {
                id: "团队可信程度",
                label: "团队可信程度",
                socialAttributes: [
                    {
                        key: "标星数量",
                        value: "804",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "分叉数量",
                        value: "209",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "关注数量",
                        value: "43",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "可信程度总得分",
                        value: "1517 (804+43*2+209*3) 极高",
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队规模",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队技术水平",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队成员差异",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队核心成员",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队可信程度",
            }
        ]
    }

    const tableData =  [
        {
            key: "1",
            type: "团队成员特征(团队规模)",
            description: "用于反映项目团队的人数。",
            mapping: "开源项目中代码提交记录的提交者。该指标通过情报收集工作直接得到，对于开源平台Github的团队规模分析，可以直接通过网页爬取得到。对于.git版本管理模块，可以通过调取它的提交记录得到提交者信息。",
        },
        {
            key: "2",
            type: "团队成员特征(团队技术水平)",
            description: "用于从代码标准化角度反映团队的技术水平高低。",
            mapping: "依据团队规模，项目工程量，文件风格向量，仓库风格向量映射。",
        },
        {
            key: "3",
            type: "团队成员特征(团队成员差异)",
            description: "用于反映项目团队成员在技术栈上的差异。",
            mapping: "依据团队成员中个人仓库的标签信息，关注仓库的标签信息映射。该指标主要通过情报收集工作直接得到，仓库的标签信息与技术栈呈对应关系。个人仓库的标签表示团队成员熟悉该技术，而关注仓库的标签则说明团队成员对该技术感兴趣。超过半数团队成员持有的仓库标签，视为共性标签。指标对应包含共性标签的团队成员比例，比例越高则认为团队成员差异越小。",
        },
        {
            key: "4",
            type: "团队成员特征(团队核心成员)",
            description: "用于反映项目团队中在工程量意义上贡献度大的成员。",
            mapping: "依据团队成员的提交记录，项目提交过程中的审核记录映射。该指标主要通过情报收集工作直接得到，在提交记录中，时间信息能够衡量参与度，涉及的文件数能够衡量工作量。在审核记录中，审核者的出现次数则对应了该成员的管理权限大小。指标计算：贡献度=（参与度+工作量）*权限大小。",
        },
        {
            key: "5",
            type: "团队成员特征(团队可信程度)",
            description: "用于反映项目团队在工程能力上的可信度。",
            mapping: "依据团队技术水平，团队知名度映射。该指标属于二级指标，通过团队在社区的收藏量，关注量和克隆数确定知名度，即1个收藏量算1分，1个克隆数算2分，1个关注量算5分。指标计算：可信度=ln(知名度)*团队技术水平。",
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
        </ProCard>
    )
}

export default FeatureTeamPage