import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import {Table} from "antd";

const FeatureEngineerPage = () => {
    const data = {
        nodes: [
            {
                id: "github.com/TufayelLUS/LinkedIn-Scraper",
                label: "github.com/TufayelLUS/LinkedIn-Scraper",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "研发规模小，代码研发周期长，具有多种研发技术的恶意代码仓库"
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
                id: "代码研发周期",
                label: "代码研发周期",
                socialAttributes: [
                    {
                        key: "研发开始时间",
                        value: "2020-09-28",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    },
                    {
                        key: "研发结束时间",
                        value: "2023-07-17",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    },
                    {
                        key: "代码研发时长",
                        value: "2年9个月",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
            {
                id: "代码研发规模",
                label: "代码研发规模",
                socialAttributes: [
                    {
                        key: "参与开发人数",
                        value: "1",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper/graphs/contributors"],
                    },
                    {
                        key: "代码存储大小",
                        value: "39",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
            {
                id: "研发管理水平",
                label: "研发管理水平",
                socialAttributes: [
                    {
                        key: "参与开发人数",
                        value: "1",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper/graphs/contributors"],
                    },
                    {
                        key: "研发使用技术",
                        value: "crawler scraper linkedin leads email-marketing digital-marketing scraper-engine linkedin-bot scrape-email linkedin-scraper email-scraper scrape-emails",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "代码研发周期",
            },
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "代码研发规模",
            },
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "研发管理水平",
            }
        ]
    }
    const tableData =  [
        {
            key: "1",
            type: "工程事务特征(代码研发周期)",
            description: "用于反映项目研发耗时，与项目规模、技术水平、复杂度有关。",
            mapping: "代码注释、文件修改保存记录中附带的时间信息，以及Github仓库自带的创建、更新等时间信息。",
        },
        {
            key: "2",
            type: "工程事务特征(研发规模)",
            description: "用于反映项目的研发规模，侧面反映研发人数、文件数量、代码量等信息。",
            mapping: "参与研发的人数，源代码文件、可执行文件等原创性文件数量，代码行数等用于反映代码量的指标。",
        },
        {
            key: "3",
            type: "工程事务特征(研发管理水平)",
            description: "用于反映项目研发过程中参与研发、管理等工作的技术工作者的专业水平。",
            mapping: "参与研发过程的技术工作者自身的经济、社会地位，以及能反映专业技术水平的相关指标，如掌握的技术多寡、证书等，可通过跨平台社工分析得到。",
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
            title="工程事务特征"
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

export default FeatureEngineerPage