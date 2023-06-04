import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { Line } from '@ant-design/plots';


const DemoLine = observer(() => {
    const { chartStore } = useStore()

    const config = {
        data: chartStore.tendencyOption,
        xField: 'year',
        yField: 'heat',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
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

    return <Line {...config} />;
}
)

export { DemoLine }