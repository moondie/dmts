/**
 * 此页面实现不同性别代码特征差异分析
 * 展示内容：
 * 不同性别编写代码风格差异的柱状图、解释性文字和总结
 */

import React from "react";
import { ProCard } from "@ant-design/pro-components"
import { Image, Table, Typography, Space } from 'antd';
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./index.scss"

const GenderFeature = () => {
    const { exploreStore } = useStore()
    return (
        <ProCard
            title="不同性别代码特征差异展示"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard
                title="不同性别代码差异合理性分析"
                subTitle="从统计学角度，学生课设代码+问卷形式的性别与特征关联度分析"
                split="vertical"
            >
                <ProCard>
                    <Table
                        dataSource={exploreStore.genderData.ksData}
                    >
                        <Table.ColumnGroup title="方法">
                            <Table.Column title="指标" dataIndex="property" key="property"></Table.Column>
                        </Table.ColumnGroup>
                        <Table.ColumnGroup title="科尔莫戈洛夫-斯米诺夫检验">
                            <Table.Column title="统计" dataIndex="statistics" key="statistics"></Table.Column>
                            <Table.Column title="自由度" dataIndex="freedom" key="freedom"></Table.Column>
                            <Table.Column title="显著性" dataIndex="significant" key="significant"></Table.Column>
                        </Table.ColumnGroup>
                    </Table>
                </ProCard>
                <ProCard>
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Typography.Paragraph>针对心理语言分析,设置了相应问卷投放到学校不同班级,问卷包含 34 个有关源代码与心理情感的问题,对于得到的样本信息,我们通过假设检验的方式,测试是否具有可行性</Typography.Paragraph>
                        <Typography.Paragraph>柯尔莫戈洛夫-斯米诺夫检验（Kolmogorov-Smirnov test）,一般又称K-S检验,是一种基于累计分布函数的非参数检验,用以检验两个经验分布是否不同或一个经验分布与另一个理想分布是否不同</Typography.Paragraph>
                        <Typography.Paragraph>从正态性检验得知数据的K-S结果为0.01,S-W结果为0.011.正态性检验包含了K-S结果与S-W结果,根据K-S结果,其显著性为0.001＜0.05,拒绝原假设,证明<Typography.Text mark>不同性别其特征存在差异性</Typography.Text></Typography.Paragraph>
                    </Space>
                </ProCard>
            </ProCard>
            <ProCard
                title="性别分类效果展示"
                subTitle="在 Java 和 C/C++ 的数据集上评估性别分类效果"
                split="vertical"
            >
                <ProCard
                    title="C/C++"
                >
                    <Table
                        dataSource={exploreStore.genderData.accuracyCPPData}
                        rowClassName={(record) => (record.model === "RandomForest" ? "diff" : "odd")}
                    >
                        <Table.Column title="模型" dataIndex="model" key="model"></Table.Column>
                        <Table.ColumnGroup title="准确率 (%)">
                            <Table.Column title="女性" dataIndex="male" key="male"></Table.Column>
                            <Table.Column title="男性" dataIndex="female" key="female"></Table.Column>
                            <Table.Column title="总计" dataIndex="total" key="total"></Table.Column>
                        </Table.ColumnGroup>
                    </Table>
                </ProCard>
                <ProCard
                    title="Java"
                >
                    <Table
                        dataSource={exploreStore.genderData.accuracyJavaData}
                        rowClassName={(record) => (record.model === "AdaBoost" ? "diff" : "odd")}
                    >
                        <Table.Column title="模型" dataIndex="model" key="model"></Table.Column>
                        <Table.ColumnGroup title="准确率 (%)">
                            <Table.Column title="女性" dataIndex="male" key="male"></Table.Column>
                            <Table.Column title="男性" dataIndex="female" key="female"></Table.Column>
                            <Table.Column title="总计" dataIndex="total" key="total"></Table.Column>
                        </Table.ColumnGroup>
                    </Table>
                </ProCard>
            </ProCard>
            <ProCard
                title="各部分特征对性别分类影响大小"
                subTitle="布局特征和词频信息在源代码性别识别任务中占相对更大的作用"
            >
                <Table
                    dataSource={exploreStore.genderData.accuracyDifferentFeatureData}
                >
                    <Table.Column title="数据集" dataIndex="data" key="data"></Table.Column>
                    <Table.ColumnGroup title="准确率 (%)" >
                        <Table.Column title="去除布局特征" dataIndex="noLayout" key="noLayout"></Table.Column>
                        <Table.Column title="去除词法特征" dataIndex="noLexical" key="noLexical"></Table.Column>
                        <Table.Column title="去除语法特征" dataIndex="noSyntax" key="noSyntax"></Table.Column>
                    </Table.ColumnGroup>
                </Table>
            </ProCard>
            <ProCard
                title="词频分布图"
                layout="center"
            >
                <Image
                    src={require("@/assets/Gender/wordRate.jpg")}
                />
            </ProCard>
            <ProCard
                title="布局特征分布图"
                subTitle="女性相对男性更愿意使用空格、回车等来增进代码观感"
                layout="center"
            >
                <Image
                    src={require("@/assets/Gender/layoutFeature.jpg")}
                />
            </ProCard>
            <ProCard
                title="布局特征代码示例"
                subTitle="男性更喜欢用制表符,而女性更喜欢用空格"
                split="vertical"
            >
                <ProCard title="男性">
                    <Image
                        src={require("@/assets/Gender/tab和空格-男.png")}
                    />
                </ProCard>
                <ProCard title="女性">
                    <Image
                        src={require("@/assets/Gender/tab和空格-女.png")}
                    />
                </ProCard>
            </ProCard>
            <ProCard
                title="语法特征分布图"
                subTitle="男性代码嵌套深度大,而女性习惯于编写注释和使用整数"
                layout="center"
            >
                <Image
                    src={require("@/assets/Gender/lexicalFeature.jpg")}
                />
            </ProCard>
            <ProCard
                title="语法特征代码示例"
                subTitle="男性相对于女性代码嵌套深度更大"
                split="vertical"
            >
                <ProCard title="男性">
                    <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                        {exploreStore.genderData.codeStringForNestingDepthMale}
                    </SyntaxHighlighter>
                </ProCard>
                <ProCard title="女性">
                    <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                        {exploreStore.genderData.codeStringForNestingDepthFemale}
                    </SyntaxHighlighter>
                </ProCard>
            </ProCard>
        </ProCard >
    )
}

export default observer(GenderFeature)