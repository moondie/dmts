import React, { useEffect, useState } from "react";
import { ProCard, StatisticCard } from "@ant-design/pro-components";
import { Divider, Space, Tag } from "antd";
import CountUp from "react-countup";
import moment from "moment";
import { AgeChart, LocationChart } from "@/pages/Layout/Main/MainChart";
import { DemoLine } from "@/pages/Layout/Main/MainGraph";

const { Statistic } = StatisticCard;
const formatter = (value) => <CountUp end={value} separator="," />;


const TimeComponent = () => {
    const [timer, setTimer] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setRefresh((r) => r + 1);
            setTimer(moment(new Date().getTime()).format("YYYY年MM月DD日 HH时mm分ss秒"));
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [refresh]);

    // const {userStore} = useStore();
    // const onTestButton = () => {
    //     userStore.getTestData();
    // };
    return (
        <>
            {/*<Button onClick={() => onTestButton()}>测试按钮</Button>*/}
            {timer}
        </>
    );

};

const DataStatistic = () => (
    <ProCard split="horizontal" title="扫描结果">

        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "已扫描仓库",
                    value: 761116,
                    suffix: "个",
                    // description: <Statistic title="URL总数" value="500" suffix="个"
                    //     formatter={formatter} />,
                    formatter,
                }}
            />
            <StatisticCard
                statistic={{
                    title: "已发现恶意组织",
                    value: 26709,
                    suffix: "个",
                    description:
                        <Space size={[2, 8]} wrap>
                            <Tag color="red"><Statistic title="高危" value="1249" suffix="个"
                                formatter={formatter} /></Tag>
                            <Tag color="yellow"><Statistic title="中危" value="5390" suffix="个"
                                formatter={formatter} /></Tag>
                            <Tag color="default"><Statistic title="低危" value="20070" suffix="个"
                                formatter={formatter} /></Tag>
                        </Space>,
                    formatter,
                }}
            />
        </ProCard>
        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "运行中扫描任务数量",
                    value: "无",
                }}
            />
            <StatisticCard
                statistic={{
                    title: "历史扫描任务总数",
                    value: "10",
                    suffix: "个",
                    description:
                        <>
                            <Statistic title="代码归属分析" value="3" suffix="个"
                                style={{ display: "inline-block" }} formatter={formatter} />
                            <Divider type="vertical" />
                            <Statistic title="代码情报分析" value="5" suffix="个"
                                style={{ display: "inline-block" }} formatter={formatter} />
                            <Divider type="vertical" />
                            <Statistic title="全量分析" value="2" suffix="个"
                                style={{ display: "inline-block" }} formatter={formatter} />
                        </>,
                    formatter,
                }}
            />
        </ProCard>
    </ProCard>
);

const DataStatus = () => (
    <ProCard split="horizontal" title="系统状态">

        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "动态爬虫模块",
                    value: "运行中",
                    status: "processing",
                    valueStyle: { color: "blue" },
                    description:
                        <Space size={[2, 8]} wrap>
                            <Tag color="#19CAAD"><a href="https://github.com">GitHub</a></Tag>
                            <Tag color="#19CAAD"><a href="https://gitee.com">Gitee</a></Tag>
                            <Tag color="#19CAAD"><a href="https://about.gitlab.com/">Gitlab</a></Tag>
                        </Space>,
                }}
            />
            <StatisticCard
                statistic={{
                    title: "代码归属模块",
                    value: "已开启",
                    status: "success",
                    valueStyle: { color: "green" },

                }}
            />
        </ProCard>
        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "情报分析模块",
                    value: "已开启",
                    status: "success",
                    valueStyle: { color: "green" },
                    description:
                        <Space size={[2, 8]} wrap>
                            <Tag color="#19CAAD"><a href="https://weibo.com/">微博</a></Tag>
                            <Tag color="#19CAAD"><a href="https://twitter.com/">推特</a></Tag>
                            <Tag color="#19CAAD"><a href="https://www.github.com">GitHub</a></Tag>
                            <Tag color="#19CAAD"><a href="https://www.linkedin.com/">领英</a></Tag>
                            <Tag color="#19CAAD"><a href="https://www.facebook.com/">Facebook</a></Tag>
                        </Space>,
                }}
            />
            <StatisticCard
                statistic={{
                    title: "社会属性映射模块",
                    value: "已开启",
                    status: "success",
                    valueStyle: { color: "green" },
                    description:
                        <Space size={[2, 8]} wrap>
                            <Tag color="#19CAAD">性别</Tag>
                        </Space>,
                }}
            />
        </ProCard>
    </ProCard>
);


const MainContent = () => {
    return (
        <ProCard
            title="数据概览"
            extra={<TimeComponent />}
            split={"horizontal"}
            headerBordered
            bordered
        >
            <ProCard split="vertical">
                <ProCard split="horizontal">
                    <DataStatistic />
                </ProCard>
                <ProCard split="horizontal">
                    <DataStatus />
                </ProCard>
            </ProCard>
            <ProCard title="不同语言恶意代码仓库特征随时间的变化趋势图">
                <DemoLine />
            </ProCard>
            <ProCard split="vertical">
                <ProCard colSpan="50%">
                    <AgeChart />
                </ProCard>
                <ProCard colSpan="50%">
                    <LocationChart />
                </ProCard>
            </ProCard>
        </ProCard>
    );
};

export default MainContent;
