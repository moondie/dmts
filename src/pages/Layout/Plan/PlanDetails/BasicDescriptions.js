import {Collapse, Descriptions} from "antd";

const {Panel} = Collapse;
const BasicDescriptions = (props) => {
    const {details} = props.props;
    return (<div style={{
        margin: 8,
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "auto",
    }}>
        <h2>扫描基本信息</h2>
        <Descriptions column={3} bordered>
            <Descriptions.Item label="目标URL">{details.targetURL}</Descriptions.Item>
            <Descriptions.Item label="开启时间">{details.startTime}</Descriptions.Item>
            <Descriptions.Item label="结束状态">{details.status}</Descriptions.Item>
            <Descriptions.Item label="scanId">{details.scanId}</Descriptions.Item>
            <Descriptions.Item label="用户">{details.userName}</Descriptions.Item>
            <Descriptions.Item label=" "> </Descriptions.Item>
            <Descriptions.Item span={3} label="日志列表">
                <Collapse>
                    <Panel header={`日志详情 共${details.result.logs.length}条日志信息`} key="1">
                        {details.result.logs.map(item =>
                            <p key={item.id}>{`${item.message} - ${item.type} - ${item.time}`}</p>)}
                    </Panel>
                </Collapse>
            </Descriptions.Item>
        </Descriptions>
    </div>);

};
export default BasicDescriptions;