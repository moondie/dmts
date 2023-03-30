import {Collapse, Space, Tag} from "antd";
import {observer} from "mobx-react-lite";
import {ProTable} from "@ant-design/pro-components";
import React from "react";
import {useStore} from "@/store";
import EChartsReact from "echarts-for-react";

const {Panel} = Collapse;
const columns = [
    {
        title: "方法",
        dataIndex: "method",
        key: "method",
        render: (method) => (
            <Tag key={method} color={method_color[method]}>
                {method}
            </Tag>
        )
    },
    {
        title: "URL",
        dataIndex: "url",
        key: "url",
        render: (url) => (
            <a key={url} href={url} target="_blank">{url}</a>
        )
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type",
        render: (type) => (
            <Tag key={type}>{type_CN[type]}</Tag>
        )
    },
];
const method_color = {
    GET: "green",
    POST: "blue",
    HEAD: "volcano",
    PUT: "orange",
    DELETE: "lime",
    OPTIONS: "cyan",
    CONNECT: "geekblue",
    TRACE: "purple",
};

const type_CN = {
    webpage: "网页",
    interface: "接口",
    static: "静态资源",
};
const RequestList = (props) => {
    const {details} = props.props;
    const {requestDetails} = details;
    console.log(requestDetails);
    const {scanStore,chartStore} = useStore();
    //chartStore.setChartOptionData(chartOptionData);
    //console.log(chartStore.option.series[0].data);//=chartOptionData
    // console.log();
    let chartElement;
    return (<div style={{
        margin: 8,
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "auto",
    }}>
        <h2>请求详情</h2>
        <EChartsReact option={chartStore.option} ref={(e) => chartElement = e} notMerge={true}/>
        <Collapse>
            <Panel header={`请求列表 共${requestDetails.urls.length}条请求`} key="1">
                <ProTable
                    columns={columns}
                    dataSource={requestDetails.urls}
                    rowKey="id"
                    pagination={{
                        showQuickJumper: true,
                    }}
                    search={false}
                    dateFormatter="string"
                    //headerTitle="URL列表"
                />
            </Panel>
        </Collapse>
    </div>);
};
export default observer(RequestList);