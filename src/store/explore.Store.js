import { makeAutoObservable } from "mobx";


class ExploreStore {

    genderData = {
        keywordGenderData: [
            {
                key: "number",
                property: "数字",
                male: "7(10进制)+2(16进制)",
                female: "11(10进制)+1(16进制)"
            },
            {
                key: "keyword",
                property: "关键字",
                male: "30",
                female: "24"
            },
            {
                key: "singleVariable",
                property: "单字符变量",
                male: "16",
                female: "17"
            },
            {
                key: "multiVariable",
                property: "多字符变量",
                male: "7",
                female: "13"
            },
            {
                key: "bool",
                property: "布尔变量",
                male: "2",
                female: "2"
            }
        ],
        allFeatureData: [
            {
                key: "localVariableRateAvg",
                property: "局部变量频率平均值",
                male: "0.0912",
                female: "0.12"
            },
            {
                key: "localVariableRateStd",
                property: "局部变量标准差",
                male: "0.0536",
                female: "0.0525"
            },
            {
                key: "keywordRateAvg",
                property: "关键词频率平均值",
                male: "0.17956",
                female: "0.178"
            },
            {
                key: "keywordRateStd",
                property: "关键词频率标准差",
                male: "0.07756",
                female: "0.06"
            },
            {
                key: "functionLengthAvg",
                property: "函数长度平均值",
                male: "0.027",
                female: "0.03"
            },
            {
                key: "functionLengthStd",
                property: "函数长度标准差",
                male: "0.024",
                female: "0.025"
            },
            {
                key: "controlCharRateAvg",
                property: "控制字符平均值",
                male: "20.105",
                female: "20.8"
            },
            {
                key: "controlCharRateStd",
                property: "控制字符标准差",
                male: "77.1303",
                female: "17.756"
            },
            {
                key: "englishLevelAvg",
                property: "英语水平",
                male: "4.6",
                female: "5.0"
            },
            {
                key: "ternaryRateAvg",
                property: "三元运算符数量平均值",
                male: "0.88",
                female: "0.594"
            },
            {
                key: "ternaryRateStd",
                property: "三元运算符数量标准差",
                male: "5.700",
                female: "3.248"
            },
            {
                key: "whiteSpaceRateAvg",
                property: "空白字符数量平均值",
                male: "0.184",
                female: "0.193"
            },
            {
                key: "whiteSpaceRateStd",
                property: "空白字符数量标准差",
                male: "0.089",
                female: "0.103"
            },
            {
                key: "OnLineBeforeOpenBranceNumberAvg",
                property: "大括号换行数量平均值",
                male: "0.168",
                female: "0.095"
            },
            {
                key: "OnLineBeforeOpenBranceNumberStd",
                property: "大括号换行数量标准差",
                male: "4.758",
                female: "0.081"
            },
            {
                key: "functionParamNumberAvg",
                property: "参数数量平均值",
                male: "0.168",
                female: "0.096"
            },
            {
                key: "functionParamNumberStd",
                property: "参数数量标准差",
                male: "4.758",
                female: "0.081"
            },
            {
                key: "blankLineNumberAvg",
                property: "空白行数量平均值",
                male: "0.152",
                female: "0.144"
            },
            {
                key: "blankLineNumberStd",
                property: "空白行数量标准差",
                male: "0.065",
                female: "0.068"
            },
            {
                key: "commentNumberAvg",
                property: "注释频率平均值",
                male: "28.375",
                female: "25.158"
            }
        ],
        codeStringForLayoutFeatureMale: `void check_access_denied(DWORD processID)
        {
            HANDLE hProcess = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, processID);
            if (!hProcess) {
                std::cerr << "-> Access denied. Try to run the scanner as Administrator." << std::endl;
                return;
            }
            process_integrity_t level = get_integrity_level(hProcess);
            switch (level) {
            case INTEGRITY_UNKNOWN:
                std::cerr << "-> Access denied. Could not query the process token." << std::endl;
                break;
            case INTEGRITY_SYSTEM:
                std::cerr << "-> Access denied. Could not access the system process." << std::endl;
                break;
            default:
                break;
            }
            CloseHandle(hProcess);
            hProcess = NULL;
        }`,
        codeStringForLayoutFeatureFemale: `int main() {
            int t;cin>>t;
            while(t--)
            {
                ll a,b,k=3;
                cin>>a>>b;
                if(a%3==0)
                    cout<<(b/k)-(a/k)+1>>endl;
                else
                    cout<<(b/k)-(a/k)>>endl;
            }
            return 0;
        }
        
        
        
        
        
        
        
        `,
    }

    aiData = {
        codeStringForCommentAi: `class Solution {
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
    
    
    
    `,
        codeStringForCommentHuman: `class Solution {
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
    };`,
        codeStringForNameAi: `class Solution {
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
    };`,
        codeStringForNameHuman: `class Solution {
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
    
    
    
    
    
    
    
    
    
    
    `,
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default ExploreStore