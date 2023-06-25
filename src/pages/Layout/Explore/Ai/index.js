/**
 * 此页面实现 ChatGPT 和人类代码特征区分分析课题
 * 展示内容：
 * ChatGPT 和人类编写代码风格差异的柱状图、解释性文字和总结
 */

import { Image } from 'antd';
import './index.scss'
import { ProCard } from "@ant-design/pro-components"

const AiFeature = () => {
    return (
        <ProCard
            title="AI和人类代码特征差异展示"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard
                title="注释使用差异图"
                split="vertical"
            >
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/c++_comment_50_jx.png")}
                    />
                </ProCard>
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Java_comment_50_jx.png")}
                    />
                </ProCard>
            </ProCard>
            <ProCard
                title="第三方库使用差异图"
                split="vertical"
            >
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/c++_library_50_jx.png")}
                    />
                </ProCard>
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Java_library_50_jx.png")}
                    />
                </ProCard>
            </ProCard>
            <ProCard
                title="关键字使用差异图"
                split="vertical"
            >
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/c++_keywords_50_jx.png")}
                    />
                </ProCard>
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Java_keywords_50_jx.png")}
                    />
                </ProCard>
            </ProCard>
            <ProCard
                title="命名习惯差异图"
                split="vertical"
            >
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/c++_name_50_jx.png")}
                    />
                </ProCard>
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Java_name_50_jx.png")}
                    />
                </ProCard>
            </ProCard>
            <ProCard
                title="消融实验图"
                split="vertical"
            >
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Cpp消融实验新.png")}
                    />
                </ProCard>
                <ProCard colSpan="50%">
                    <Image
                        src={require("@/assets/Ai/Java消融实验新.png")}
                    />
                </ProCard>
            </ProCard>
        </ProCard>
    )
}

export default AiFeature;