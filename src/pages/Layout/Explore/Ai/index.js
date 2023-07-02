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

const AiFeature = () => {
    const codeStringForCommentAi = `class Solution {
public:
    double myPow(double x, int n) {
        // 由于n的取值范围为-2^31到2^31-1，当n=-2^31时，-n将会溢出
        // 因此我们将n和x同时转化为long long类型，避免溢出
        long long N = n;
        if(N < 0) {
            x = 1 / x;
            N = -N;
        }
        double ans = 1;
        double current_product = x;
        for(long long i = N; i ; i /= 2) {
            if((i % 2) == 1){
                ans = ans * current_product;
            }
            current_product = current_product * current_product;
        }
        return ans;
    }
};



`
    const codeStringForCommentHuman = `class Solution {
public:
    double quickMul(double x, long long N) {
        double ans = 1.0;
        // 贡献的初始值为 x
        double x_contribute = x;
        // 在对 N 进行二进制拆分的同时计算答案
        while (N > 0) {
            if (N % 2 == 1) {
                // 如果 N 二进制表示的最低位为 1，那么需要计入贡献
                ans *= x_contribute;
            }
            // 将贡献不断地平方
            x_contribute *= x_contribute;
            // 舍弃 N 二进制表示的最低位，这样我们每次只要判断最低位即可
            N /= 2;
        }
        return ans;
    }

    double myPow(double x, int n) {
        long long N = n;
        return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);
    }
};`
    const codeStringForNameAi = `class Solution {
public:
    std::vector<int> goodIndices(std::vector<int>& nums, int k) {
        std::vector<int> result;
        int n = nums.size();
        
        for (int i = k; i < n - k; i++) {
            bool isGoodIndex = true;
            
            // Check if the previous k elements are non-increasing
            for (int j = i - 1; j >= i - k; j--) {
                if (nums[j] < nums[j + 1]) {
                    isGoodIndex = false;
                    break;
                }
            }
            
            if (!isGoodIndex) continue;
            
            // Check if the next k elements are non-decreasing
            for (int j = i + 1; j <= i + k; j++) {
                if (nums[j] < nums[j - 1]) {
                    isGoodIndex = false;
                    break;
                }
            }
            
            if (isGoodIndex) {
                result.push_back(i);
            }
        }
        
        return result;
    }
};        
    `
    const codeStringForNameHuman = `class Solution {
public:
    vector<int> goodIndices(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> left(n, 1);
        vector<int> right(n, 1);
        for (int i = 1; i < n; i++) {
            if (nums[i] <= nums[i - 1]) {
                left[i] = left[i - 1] + 1;
            }
            if (nums[n - i - 1] <= nums[n - i]) {
                right[n - i - 1] = right[n - i] + 1;
            }
        }

        vector<int> ans;
        for (int i = k; i < n - k; i++) {
            if (left[i - 1] >= k && right[i + 1] >= k) {
                ans.emplace_back(i);
            }
        }
        return ans;
    }
};











`
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
                            {codeStringForCommentAi}
                        </SyntaxHighlighter>
                    </ProCard><ProCard title="人类">
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {codeStringForCommentHuman}
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
                            {codeStringForNameAi}
                        </SyntaxHighlighter>
                    </ProCard><ProCard title="人类">
                        <SyntaxHighlighter language="cpp" style={docco} showLineNumbers>
                            {codeStringForNameHuman}
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