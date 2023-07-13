/**
 * 此页面实现 ChatGPT 和人类代码特征区分分析课题
 * 展示内容：
 * ChatGPT 和人类编写代码风格差异的柱状图、解释性文字和总结
 */

import { Image } from 'antd';
import './index.scss'
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useStore } from '@/store';

const AiFeature = () => {
    const { exploreStore } = useStore()
    return (
        <ProCard
            title="AI 和人类代码特征差异展示"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard
                title="消融实验图"
                subTitle="单独使用任何一个特征集达到的准确率都不理想，而所有特征集的组合产生了最高的分类精度"
                split="vertical"
                wrap
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
            <ProCard
                title="注释使用差异图"
                subTitle="ChatGPT 生成的代码有时类似于样本或模板代码，其注释往往提示需要自定义实现的区域，而人类的代码注释用于解释代码的作用"
                split="horizontal"
            >
                <ProCard split="vertical">
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
                <ProCard split="vertical">
                    <ProCard title="ChatGPT">
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {exploreStore.aiData.codeStringForCommentAi}
                        </SyntaxHighlighter>
                    </ProCard><ProCard title="人类" subTitle={<a href='https://leetcode.cn/problems/powx-n/solution/powx-n-by-leetcode-solution/' target='_blank'>查看来源</a>}>
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {exploreStore.aiData.codeStringForCommentHuman}
                        </SyntaxHighlighter>
                    </ProCard>
                </ProCard>
            </ProCard>
            <ProCard
                title="第三方库使用差异图"
                subTitle="ChatGPT 生成的代码通常不会表现出文件间的依赖性，这与人类编写的代码不同，后者通常在多个文件间有高度的耦合性"
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
                title="命名习惯差异图"
                subTitle="ChatGPT 强调可读性，使用有意义的单词作为标识符，而人类可能使用缩写或含义模糊的字母"
                split="horizontal"
            >
                <ProCard split="vertical">
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
                <ProCard split="vertical">
                    <ProCard title="ChatGPT">
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {exploreStore.aiData.codeStringForNameAi}
                        </SyntaxHighlighter>
                    </ProCard>
                    <ProCard title="人类" subTitle={<a href='https://leetcode.cn/problems/find-all-good-indices/solution/zhao-dao-suo-you-hao-xia-biao-by-leetcod-w5ar/' target='_blank'>查看来源</a>}>
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {exploreStore.aiData.codeStringForNameHuman}
                        </SyntaxHighlighter>
                    </ProCard>
                </ProCard>
            </ProCard>
            <ProCard
                title="关键字使用差异图"
                subTitle={`ChatGPT 更有可能利用较新的语言特性。例如，在 Java 中，它偏爱 foreach 循环，在 C/C++ 中，它经常使用 auto 关键字进行类型推理`}
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
        </ProCard>
    )
}

export default AiFeature;