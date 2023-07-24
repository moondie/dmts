import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

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
        </ProCard>
    )
}

export default FeatureEngineerPage