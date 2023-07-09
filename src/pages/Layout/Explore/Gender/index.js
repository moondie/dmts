/**
 * 此页面实现不同性别代码特征差异分析
 * 展示内容：
 * 不同性别编写代码风格差异的柱状图、解释性文字和总结
 */

import React from "react";
import { ProCard } from "@ant-design/pro-components"
import { Image, Table } from 'antd';
import { useStore } from "@/store";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

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
                title="关键字使用分布表"
                subTitle="男性对于关键字的使用较多，女性相对较少"
            >
                <Table dataSource={exploreStore.keywordGenderData}>
                    <Table.Column title="属性" dataIndex="property" key="property"></Table.Column>
                    <Table.Column title="男性特征" dataIndex="male" key="male"></Table.Column>
                    <Table.Column title="女性特征" dataIndex="female" key="female"></Table.Column>
                </Table>
            </ProCard>
            <ProCard
                title="各种代码特征分布表"
                subTitle=""
            >
                <Table dataSource={exploreStore.allFeatureData}>
                    <Table.Column title="属性" dataIndex="property" key="property"></Table.Column>
                    <Table.Column title="男性特征" dataIndex="male" key="male"></Table.Column>
                    <Table.Column title="女性特征" dataIndex="female" key="female"></Table.Column>
                </Table>
            </ProCard>
        </ProCard>
    )
}

export default observer(GenderFeature)