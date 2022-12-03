import React from "react";
import {observer} from "mobx-react-lite";
import EChartsReact from "echarts-for-react";
import {useStore} from "@/store";

const URLChart = () => {
    const {chartStore} = useStore();
    let chartElement;
    return (
        <div>
            <EChartsReact option={chartStore.option} ref={(e) => chartElement = e} notMerge={true}/>
        </div>
    )
}
export default observer(URLChart)