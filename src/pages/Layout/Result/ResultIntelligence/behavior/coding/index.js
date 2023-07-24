import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const BehaviorCodingPage = () => {
    const dataSystemCallHabits = {
        nodes: [
            {
                id: "https://github.com/dangeabunea",
                label: "https://github.com/dangeabunea",
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
                id: "系统调用习惯",
                label: "系统调用习惯",
                socialAttributes: [
                    {
                        key: "系统调用习惯",
                        value: "使用Java8新特性的forEach语法",
                        url: ["https://github.com/dangeabunea/pluralsight-refactoring-solid-java17/blob/main/1-srp/demo/complete/src/main/java/atm/CoordinateOutputFormatter.java"]
                    },
                    {
                        key: "总结",
                        value: "偏向于使用前沿特性，学习能力较强"
                    }
                ],
            }
        ],
        edges:[
            {
                source: "https://github.com/dangeabunea",
                target: "系统调用习惯"
            }
        ]
    }

    const dataCodeCommentHabits = {
        nodes: [
            {
                id: "https://github.com/amilyxy",
                label: "https://github.com/amilyxy",
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
                id: "代码注释习惯",
                label: "代码注释习惯",
                socialAttributes: [
                    {
                        key: "代码注释习惯",
                        value: "注释记录了文件名、功能简介、创建时间和作者等信息",
                        url: ["https://github.com/amilyxy/Leecode_summary/blob/master/Array.py"],
                    },
                    {
                        key: "总结",
                        value: "比较符合规范，生活态度偏向于认真尽责"
                    }
                ]
            },
        ],
        edges:[
            {
                source: "https://github.com/amilyxy",
                target: "代码注释习惯"
            }
        ]
    }

    const dataStringInfo = {
        nodes: [
            {
                id: "https://github.com/SynthRose",
                label: "https://github.com/SynthRose",
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
                id: "输出的字符串信息",
                label: "输出的字符串信息",
                socialAttributes: [
                    {
                        key: "输出的字符串信息",
                        value: "打招呼语句输出'Hello Fabric world!',可能是游戏《我的世界》爱好者",
                        url: ["https://github.com/SynthRose/damage-types/blob/master/src/main/java/net/fabricmc/example/ExampleMod.java"],
                    },
                    {
                        key: "总结",
                        value: "代码作者不经意间输出的字符串可能透露出其文化特征、爱好习惯、性别、国籍、宗教信仰等"
                    }
                ]
            },
            {
                id: "Debug方式",
                label: "Debug方式",
                socialAttributes: [
                    {
                        key: "Debug方式",
                        value: "使用日志方式进行debug",
                        url: ["https://github.com/SynthRose/tealbricks/blob/master/src/main/java/net/synthrose/tealbricks/TealBricks.java"],
                    },
                    {
                        key: "总结",
                        value: "编程习惯较好，生活态度更偏向正式、认真"
                    }
                ]
            }
        ],
        edges:[
            {
                source: "https://github.com/SynthRose",
                target: "输出的字符串信息"
            },
            {
                source: "https://github.com/SynthRose",
                target: "Debug方式"
            }
        ]
    }

    const dataSubFunction = {
        nodes: [
            {
                id: "https://github.com/anaolisilva",
                label: "https://github.com/anaolisilva",
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
                id: "子函数大小",
                label: "子函数大小",
                socialAttributes: [
                    {
                        key: "子函数大小",
                        value: "注释、函数分布都比较适中均衡",
                        url: ["https://github.com/anaolisilva/Bloco02-Generation/blob/main/Spring-boot/lista01-helloWorld/atividade01/.mvn/wrapper/MavenWrapperDownloader.java"],
                    },
                    {
                        key: "总结",
                        value: "通常编程水平越高，性格越细心、有规划，子函数的分布越适中、均衡"
                    }
                ]
            },
            {
                id: "导入的模块函数是否有针对性",
                label: "导入的模块函数是否有针对性",
                socialAttributes: [
                    {
                        key: "导入的模块函数是否有针对性",
                        value: "一股脑导入模块函数",
                        url: ["https://github.com/anaolisilva/Bloco02-Generation/blob/main/Spring-boot/lista01-helloWorld/atividade01/.mvn/wrapper/MavenWrapperDownloader.java"],
                    },
                    {
                        key: "总结",
                        value: "编程习惯不规范，性格偏向于大咧，图方便"
                    }
                ]
            },
            {
                id: "全局变量比例及使用频率",
                label: "全局变量比例及使用频率",
                socialAttributes: [
                    {
                        key: "全局变量比例及使用频率",
                        value: "全局变量使用频率较低，占比较高",
                        url: ["https://github.com/anaolisilva/Bloco02-Generation/blob/main/Spring-boot/lista01-helloWorld/atividade01/.mvn/wrapper/MavenWrapperDownloader.java"],
                    },
                    {
                        key: "总结",
                        value: "全局变量的规划不够合理，生活偏向于较差规划性"
                    }
                ]
            }
        ],
        edges:[
            {
                source: "https://github.com/anaolisilva",
                target: "子函数大小"
            },
            {
                source: "https://github.com/anaolisilva",
                target: "导入的模块函数是否有针对性"
            },
            {
                source: "https://github.com/anaolisilva",
                target: "全局变量比例及使用频率"
            }
        ]
    }

    const dataNameSytle = {
        nodes: [
            {
                id: "https://github.com/Ananya01Agrawal",
                label: "https://github.com/Ananya01Agrawal",
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
                id: "函数与变量命名方式",
                label: "函数与变量命名方式",
                socialAttributes: [
                    {
                        key: "函数与变量命名方式",
                        value: "变量命名随意，注释偏口语话，不规范",
                        url: ["https://github.com/Ananya01Agrawal/Hackerblocks-Solution/blob/main/Print%20Series.java"],
                    },
                    {
                        key: "总结",
                        value: "编程习惯不够良好规范，性格偏向于大咧"
                    }
                ]
            },
            {
                id: "删除代码的方式",
                label: "删除代码的方式",
                socialAttributes: [
                    {
                        key: "删除代码的方式",
                        value: "使用注释的方式删除代码",
                        url: ["https://github.com/Ananya01Agrawal/Java-Codes/blob/main/switch_elif.java"],
                    },
                    {
                        key: "总结",
                        value: "性格偏向保守谨慎型"
                    }
                ]
            }
        ],
        edges:[
            {
                source: "https://github.com/Ananya01Agrawal",
                target: "函数与变量命名方式"
            },
            {
                source: "https://github.com/Ananya01Agrawal",
                target: "删除代码的方式"
            }
        ]
    }

    const dataMulFiles = {
        nodes: [
            {
                id: "https://github.com/scrapy",
                label: "https://github.com/scrapy",
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
                id: "是否喜欢多文件引用",
                label: "是否喜欢多文件引用",
                socialAttributes: [
                    {
                        key: "是否喜欢多文件引用",
                        value: "多个函数或接口分布到对应的多个文件中，通过文件引用调用",
                        url: ["https://github.com/scrapy/scrapy/blob/master/scrapy/crawler.py"],
                    },
                    {
                        key: "总结",
                        value: "编程水平越高，代码安排规范、层次分明、条理清晰"
                    }
                ]
            }
        ],
        edges: [
            {
                source: "https://github.com/scrapy",
                target: "是否喜欢多文件引用"
            }
        ]
    }
    return (
        <ProCard
            title="编码行为模式"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard title="系统调用习惯">
                <AttributeGraph data={dataSystemCallHabits}></AttributeGraph>
            </ProCard>
            <ProCard title="代码注释习惯">
                <AttributeGraph data={dataCodeCommentHabits}></AttributeGraph>
            </ProCard>
            <ProCard title="输出的字符串信息">
                <AttributeGraph data={dataStringInfo}></AttributeGraph>
            </ProCard>
            <ProCard title="子函数分布、导入模块针对性">
                <AttributeGraph data={dataSubFunction}></AttributeGraph>
            </ProCard>
            <ProCard title="函数、变量命名方式；删除代码方式">
                <AttributeGraph data={dataNameSytle}></AttributeGraph>
            </ProCard>
            <ProCard title="模块文件引用风格">
                <AttributeGraph data={dataMulFiles}></AttributeGraph>
            </ProCard>
        </ProCard>
    )
}

export default BehaviorCodingPage