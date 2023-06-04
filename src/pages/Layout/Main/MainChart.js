import React from "react";
import { observer } from "mobx-react-lite";
import EChartsReact from "echarts-for-react";
import { useStore } from "@/store";

const AgeChart = observer(() => {
    const { chartStore } = useStore();
    let chartElement;
    return (
        <div>
            <EChartsReact option={chartStore.ageOption} ref={(e) => chartElement = e} notMerge={true} />
        </div>
    )
}
)

const LocationChart = observer(() => {
    const { chartStore } = useStore();
    let chartElement;
    return (
        <div>
            <EChartsReact option={chartStore.locationOption} ref={(e) => chartElement = e} notMerge={true} />
        </div>
    )
}
)

export { AgeChart, LocationChart }