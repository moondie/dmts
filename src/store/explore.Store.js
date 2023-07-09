import { makeAutoObservable } from "mobx";


class ExploreStore {

    keywordGenderData = [
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
    ]

    allFeatureData = [
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
    ]

    constructor() {
        makeAutoObservable(this);
    }
}

export default ExploreStore