import { makeAutoObservable } from "mobx";


class ExploreStore {

    genderData = {
        ksData: [
            {
                key: "data",
                property: "数值",
                statistics: "0.277",
                freedom: "104",
                significant: "0.001"
            }
        ],
        accuracyCPPData: [
            {
                key: "RandomForest",
                model: "RandomForest",
                male: "95",
                female: "100",
                total: "98"
            },
            {
                key: "KNN",
                model: "KNN",
                male: "76",
                female: "90",
                total: "83"
            },
            {
                key: "LogisticRegression",
                model: "LogisticRegression",
                male: "92",
                female: "94",
                total: "93"
            },
            {
                key: "Kmeans",
                model: "Kmeans",
                male: "68",
                female: "88",
                total: "78"
            },
            {
                key: "AdaBoost",
                model: "AdaBoost",
                male: "90",
                female: "98",
                total: "95"
            }
        ],
        accuracyJavaData: [
            {
                key: "RandomForest",
                model: "RandomForest",
                male: "92",
                female: "92",
                total: "92"
            },
            {
                key: "KNN",
                model: "KNN",
                male: "68",
                female: "68",
                total: "66"
            },
            {
                key: "LogisticRegression",
                model: "LogisticRegression",
                male: "70",
                female: "67",
                total: "70"
            },
            {
                key: "Kmeans",
                model: "Kmeans",
                male: "75",
                female: "42",
                total: "59"
            },
            {
                key: "AdaBoost",
                model: "AdaBoost",
                male: "93",
                female: "94",
                total: "94"
            }
        ],
        accuracyDifferentFeatureData: [
            {
                key: "C/C++",
                data: "C/C++",
                noLayout: "79.9",
                noLexical: "78.6",
                noSyntax: "81.2",
            },
            {
                key: "Java",
                data: "Java",
                noLayout: "82.9",
                noLexical: "84.2",
                noSyntax: "86.2",
            }
        ],
        codeStringForNestingDepthMale: `if (choice == '3')
{
    system("cls");
    FILE *fp2 = fopen(".\\data\\log.txt", "a"); /* 写入操作日志 */
    printf("/---补卡---/");
    printf("请输入学号:");
    scanf("%s", input_user);
    if (inquire(input_user))
    {
        num = search(input_user); /* 学号位置 */
        printf("是否补卡？ [Y/N]");
        choice = _getch();
        if (choice == 'y')
        {
            if (num == -1)
            {
                printf("学号无效!");
                break;
            }
            sup_card(input_user);
            printf("补卡成功！");
            ca = max_stu[num].first;
            while (ca->next != NULL)
                ca = ca->next;
            fprintf(fp2, "学号:%s 姓名:%s 操作:补卡成功 卡号:3%d%d", 
                input_user, max_stu[num].name, ca->se_num, ca->check_num);
        }
        else
        {
            fprintf(fp2, "学号:%s 姓名:%s 操作:补卡失败", input_user, 
                max_stu[num].name);
            break;
        }
    }
    fclose(fp2);
    choice = getchar();
    choice = getchar();
}`,
        codeStringForNestingDepthFemale: `void fk(int i, int c, int *c1, kh &data)
/* 发卡，i:开户人数,c:总补卡次数，c1:下一次发卡的起始位置，data:学生基本信息数组 */
{
    int b1, b2, b3, b4, b5, j, k, b;
    FILE *fp;
    fp = fopen("D:\\fk.txt", "a");
    for (j = (*c1); j <= i - 1; j++)
    {
        b = c + j;
        b1 = 312346 + b;
        b2 = b1;
        b3 = 100000;
        b5 = 0; /* 校验码 */
        for (k = 0; k < 6; k++)
        {
            b4 = b2 / b3;
            data[j].cnum[k] = b4 + '0';
            b2 = b2 - b3 * b4;
            b3 = b3 / 10;
            b5 += b4;
        }
        b5 = b5 % 10;
        b5 = 9 - b5;
        data[j].cnum[6] = b5 + '0'; /*  */
        printf("学号%s，姓名%s，发卡成功，卡号为%s！", data[j].snum, 
            data[j].name, data[j].cnum);
        fprintf(fp, "学号%s，姓名%s，发卡成功，卡号为%s！", 
            data[j].snum, data[j].name, data[j].cnum);
    }
    (*c1) = j;
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