import {ProTable, StatisticCard} from "@ant-design/pro-components";
import {Collapse, Space, Tag} from "antd";

const {Panel} = Collapse;
const columns = [
    {
        title: "漏洞类型",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "漏洞等级",
        dataIndex: "severity",
        key: "severity",
        render: (serverity) => (
            <Tag color="red">
                {serverity}
            </Tag>
        )
    },
    {
        title: "漏洞URL",
        dataIndex: "url",
        key: "url",
        render: (url) => (
            <a href={url} target="_blank">{url}</a>
        )
    },
    {
        title: "CWE_ID",
        dataIndex: "cwe_ids",
        key: "cwe_ids",
        render: (ids) => (
            ids.join(",")
        )
    },
];
const VulnDetails = (props) => {
    const {details} = props.props;
    const {vulns} = details.result;
    return (
        <div style={{
            margin: 8,
            padding: 8,
            backgroundColor: "#fff",
            borderRadius: 16,
            overflow: "auto",
        }}>
            <h2>漏洞信息</h2>
            <StatisticCard.Group>
                <StatisticCard
                    statistic={{
                        title: "高危漏洞",
                        value: details.vulnsStatistics.high,
                        suffix: "个",
                        valueStyle: {color: "red"},
                    }}
                />
                <StatisticCard.Divider type="vertical"/>
                <StatisticCard
                    statistic={{
                        title: "中危漏洞",
                        value: details.vulnsStatistics.medium,
                        suffix: "个",
                        valueStyle: {color: "darkorange"},
                    }}
                />
                <StatisticCard.Divider type="vertical"/>
                <StatisticCard
                    statistic={{
                        title: "低危漏洞",
                        value: details.vulnsStatistics.low,
                        suffix: "个",
                        valueStyle: {color: "grey"},
                    }}
                />
            </StatisticCard.Group>
            <Collapse>
                <Panel header="漏洞列表" key="1">
                    <ProTable
                        columns={columns}
                        dataSource={vulns}
                        rowKey="id"
                        pagination={{showQuickJumper: true,}}
                        search={false}
                        dateFormatter="string"
                        //headerTitle="漏洞列表"
                        expandable={{
                            expandedRowRender: (record) => (
                                <Space size={[0, 20]} wrap>
                                    <p style={{margin: 0,}}>
                                        <b>描述：</b>
                                        {record.desc}
                                    </p>

                                    <p style={{margin: 0,}}>
                                        <b>修复建议：</b>
                                        {record.fix_guidance}
                                    </p>
                                    <p style={{margin: 0,}}>
                                        <b>长描述：</b>
                                        {record.long_description}
                                    </p>
                                </Space>
                            ),
                            rowExpandable: (record) => true
                        }}
                    />
                </Panel>
            </Collapse>
        </div>
    );
};
export default VulnDetails;