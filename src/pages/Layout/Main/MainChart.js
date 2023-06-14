import React from "react";
import { observer } from "mobx-react-lite";
import EChartsReact from "echarts-for-react";
import { useStore } from "@/store";

const AgeChart = observer(() => {
    const { chartStore } = useStore();

    return (
        <EChartsReact option={chartStore.ageOption} notMerge={true} />
    )
}
)

const LocationChart = observer(() => {
    const { chartStore } = useStore();
    return (
        <EChartsReact option={chartStore.locationOption} notMerge={true} />
    )
}
)

export { AgeChart, LocationChart }