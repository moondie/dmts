import {makeAutoObservable} from "mobx";
import {http} from "@/utils";

class ChartStore {
    num = 0;
    option = {
        title: {
            text: "资源类型分布",
            //subtext: 'Fake Data',
            left: "center"
        },

        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            left: "left"
        },
        series: [
            {
                name: "资源类型分布",
                type: "pie",
                radius: "50%",
                data: [
                    {value: 1048, name: "html"},
                    {value: 735, name: "js"},
                    {value: 580, name: "css"},
                    {value: 484, name: "多媒体"},
                    {value: 300, name: "其他"}
                ],
                label: {
                    show: true,
                    formatter: "{b} {d}%"
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };
    setChartOptionData = (data) => {
            this.option.series[0].data = data;
    };
    getCpuUsage = async () => {
        return await http.get("/getCpuUsage");
    };
    getMemUsage = async () => {
        return await http.get("/getMemUsage");
    };
    getDiskUsage = async () => {
        return await http.get("/getDiskUsage");
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default ChartStore;