/**
 * 此页面实现不同性别代码特征差异分析
 * 展示内容：
 * 不同性别编写代码风格差异的柱状图、解释性文字和总结
 */

import React from "react";
import { ProCard } from "@ant-design/pro-components"
import { Image, Table } from 'antd';
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./index.scss"

const getClassName = (record) => {
    let femaleValue = parseFloat(record.female)
    let maleValue = parseFloat(record.male)
    let diff = Math.abs(parseFloat(record.female) - parseFloat(record.male))
    console.log(record.property, femaleValue, maleValue, diff)
    if (record.property.indexOf("标准差") !== -1) {
        return diff > 1 ? "diff" : "even"
    } else {
        return diff > 0.1 ? "diff" : "even"
    }
}

const GenderFeature = () => {
    const { exploreStore } = useStore()
    return (
        <ProCard
            title="不同性别代码特征差异展示"
            split="horizontal"
            headerBordered
            bordered
        >
            {/* <ProCard
                title="单词使用分布图"
                layout="center"
            >
                <Image
                    src={require("@/assets/Gender/wordRate.jpg")}
                />
            </ProCard> */}
            <ProCard
                title="词法特征分布图"
                subTitle="男性代码嵌套深度大,而女性习惯于编写注释和使用整数"
                layout="center"
            >
                <Image
                    src={require("@/assets/Gender/lexicalFeature.jpg")}
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
                split="vertical"
            >
                <ProCard title="男性">
                    <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                        {exploreStore.genderData.codeStringForLayoutFeatureFemale}
                    </SyntaxHighlighter>
                </ProCard>
                <ProCard title="女性">
                    <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                        {exploreStore.genderData.codeStringForLayoutFeatureMale}
                    </SyntaxHighlighter>
                </ProCard>
            </ProCard>
            <ProCard
                title="各种代码特征分布表"
                subTitle=""
            >
                <Table
                    dataSource={exploreStore.genderData.allFeatureData}
                    rowClassName={getClassName}
                >
                    <Table.Column title="属性" dataIndex="property" key="property"></Table.Column>
                    <Table.Column title="男性特征" dataIndex="male" key="male"></Table.Column>
                    <Table.Column title="女性特征" dataIndex="female" key="female"></Table.Column>
                </Table>
            </ProCard>
        </ProCard>
    )
}

export default observer(GenderFeature)