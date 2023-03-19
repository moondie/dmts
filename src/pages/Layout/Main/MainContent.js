import {ProCard, StatisticCard} from "@ant-design/pro-components";
import {Button, Divider, Progress, Space, Tag} from "antd";
import RcResizeObserver from "rc-resize-observer";
import React, {useEffect, useState} from "react";
import CountUp from "react-countup";
import MainChart from "@/pages/Layout/Main/MainChart";
import moment from "moment";
import {useStore} from "@/store";

const {Statistic} = StatisticCard;
const formatter = (value) => <CountUp end={value} separator=","/>;


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
    <ProCard split="horizontal">

        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "已扫描网站",
                    value: 3,
                    suffix: "个",
                    description: <Statistic title="URL总数" value="500" suffix="个"
                                            formatter={formatter}/>,
                    formatter,
                }}

            />
            <StatisticCard
                statistic={{
                    title: "已发现漏洞",
                    value: 10,
                    suffix: "个",
                    description:
                        <Space size={[2, 8]} wrap>
                            <Tag color="red"><Statistic title="高危" value="2" suffix="个"
                                                        formatter={formatter}/></Tag>
                            <Tag color="yellow"><Statistic title="中危" value="3" suffix="个"
                                                           formatter={formatter}/></Tag>
                            <Tag color="default"><Statistic title="低危" value="5" suffix="个"
                                                            formatter={formatter}/></Tag>
                        </Space>,
                    formatter,
                }}
            />
        </ProCard>
        <ProCard split="vertical">
            <StatisticCard
                statistic={{
                    title: "运行中分析任务",
                    value: "无",
                }}
            />
            <StatisticCard
                statistic={{
                    title: "历史分析任务总数",
                    value: "10",
                    suffix: "个",
                    description:
                        <>
                            <Statistic title="URL分析" value="3" suffix="个"
                                       style={{display: "inline-block"}} formatter={formatter}/>
                            <Divider type="vertical"/>
                            <Statistic title="Web渗透" value="5" suffix="个"
                                       style={{display: "inline-block"}} formatter={formatter}/>
                            <Divider type="vertical"/>
                            <Statistic title="CGI分析" value="2" suffix="个"
                                       style={{display: "inline-block"}} formatter={formatter}/>
                        </>,
                    formatter,
                }}
            />
        </ProCard>
    </ProCard>

);

const DataChart = () => (
    <ProCard title="数据图示">
        <MainChart/>
    </ProCard>
);

const DataSystem = () => (
    <ProCard title="系统状态">
        <StatisticCard.Group direction="row">
            <StatisticCard
                statistic={{
                    title: "动态爬虫模块",
                    value: "运行中",
                    status: "processing",
                    valueStyle: {color: "blue"},
                }}
            />
            <StatisticCard.Divider type="vertical"/>
            <StatisticCard
                statistic={{
                    title: "渗透测试模块",
                    value: "已开启",
                    status: "success",
                    valueStyle: {color: "green"},
                }}
            />
            <StatisticCard.Divider type="vertical"/>
            <StatisticCard
                statistic={{
                    title: "CGI分析模块",
                    value: "未开启",
                    status: "default",
                    valueStyle: {color: "grey"},
                }}
            />
        </StatisticCard.Group>
        <StatisticCard.Divider type="horizontal"/>

        <StatisticCard.Group direction="column">

            <StatisticCard>
                <Statistic title="CPU占用" value="10" suffix="%"/>
                <Progress steps={80} strokeColor={"limegreen"} size="small" percent={10} showInfo={false}/>
            </StatisticCard>

            <StatisticCard.Divider type="horizontal"/>

            <StatisticCard>
                <Statistic title="内存占用" value="3.2 / 16.0" suffix="GB"/>
                <Progress steps={80} strokeColor={"blue"} size="small" percent={100 * 3.2 / 16.0} showInfo={false}/>
            </StatisticCard>

            <StatisticCard.Divider type="horizontal"/>

            <StatisticCard>
                <Statistic title="硬盘占用" value="10.5 / 40.0" suffix="GB"/>
                <Progress steps={80} strokeColor={"grey"} size="small" percent={100 * 10.5 / 40.0} showInfo={false}/>
            </StatisticCard>

        </StatisticCard.Group>
    </ProCard>
);


const MainContent = () => {
    const [responsive, setResponsive] = useState(false);
    return (
        <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 960);
            }}
        >
            <ProCard
                title="数据概览"
                extra={<TimeComponent/>}
                split={responsive ? "horizontal" : "vertical"}
                headerBordered
                bordered
            >
                <ProCard split="horizontal">
                    <ProCard split="vertical">
                        <DataStatistic/>
                    </ProCard>
                    <ProCard split="vertical">
                        <DataChart/>
                    </ProCard>
                </ProCard>

                <ProCard split="horizontal">
                    <DataSystem/>
                </ProCard>

            </ProCard>
        </RcResizeObserver>

    )
        ;
};

export default MainContent;

