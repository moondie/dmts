import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { Line } from '@ant-design/plots';
import { Radio, Space } from 'antd';


const DemoLine = observer(() => {
    const { chartStore } = useStore()
    const [graphOrigin, setGraphOrigin] = useState('star');
    const config = {
        data: chartStore.getGraphOriginData(graphOrigin),
        xField: 'year',
        yField: 'heat',
        seriesField: 'name',
        legend: {
            position: 'bottom',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return (
        <>
            <Line {...config} />
            <div style={{ textAlign: 'center' }}>
                <Radio.Group value={graphOrigin} onChange={(e) => setGraphOrigin(e.target.value)} style={{ textAlign: "center" }}>
                    <Radio.Button value="star">Star</Radio.Button>
                    <Radio.Button value="fork">Fork</Radio.Button>
                    <Radio.Button value="watch">Watch</Radio.Button>
                    <Radio.Button value="open_issue">Open issue</Radio.Button>
                </Radio.Group>
            </div>
        </>
    )
}
)

export { DemoLine }