import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class ChartStore {
    num = 0;
    ageOption = {
        // title: {
        //     text: "资源类型分布",
        //     //subtext: 'Fake Data',
        //     left: "center"
        // },

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
                    { value: 1048, name: "0-2" },
                    { value: 735, name: "2-4" },
                    { value: 580, name: "4-6" },
                    { value: 484, name: "6-8" },
                    { value: 300, name: ">8" },
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

    locationOption = {
        // title: {
        //     text: "资源类型分布",
        //     //subtext: 'Fake Data',
        //     left: "center"
        // },

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
                    { value: 1048, name: "亚洲" },
                    { value: 735, name: "北美洲" },
                    { value: 580, name: "欧洲" },
                    { value: 484, name: "南美洲" },
                    { value: 300, name: "非洲" }
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

    tendencyOption = [
        {
            "name": "Java",
            "year": "2000",
            "heat": 1211346869605.24
        },
        {
            "name": "Java",
            "year": "2001",
            "heat": 1339395718865.3
        },
        {
            "name": "Java",
            "year": "2002",
            "heat": 1470550015081.55
        },
        {
            "name": "Java",
            "year": "2003",
            "heat": 1660287965662.68
        },
        {
            "name": "Java",
            "year": "2004",
            "heat": 1955347004963.27
        },
        {
            "name": "Java",
            "year": "2005",
            "heat": 2285965892360.54
        },
        {
            "name": "Java",
            "year": "2006",
            "heat": 2752131773355.16
        },
        {
            "name": "Java",
            "year": "2007",
            "heat": 3550342425238.25
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 4594306848763.08
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 5101702432883.45
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 6087164527421.24
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 7551500425597.77
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 8532230724141.76
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 9570405758739.79
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 10438529153237.6
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 11015542352468.9
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 11137945669350.6
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 12143491448186.1
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 13608151864637.9
        },
        {
            "name": "JavaScript",
            "year": "2000",
            "heat": 10252345464000
        },
        {
            "name": "JavaScript",
            "year": "2001",
            "heat": 10581821399000
        },
        {
            "name": "JavaScript",
            "year": "2002",
            "heat": 10936419054000
        },
        {
            "name": "JavaScript",
            "year": "2003",
            "heat": 11458243878000
        },
        {
            "name": "JavaScript",
            "year": "2004",
            "heat": 12213729147000
        },
        {
            "name": "JavaScript",
            "year": "2005",
            "heat": 13036640229000
        },
        {
            "name": "JavaScript",
            "year": "2006",
            "heat": 13814611414000
        },
        {
            "name": "JavaScript",
            "year": "2007",
            "heat": 14451858650000
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 14712844084000
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 14448933025000
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 14992052727000
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 15542581104000
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 16197007349000
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 16784849190000
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 17521746534000
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 18219297584000
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 18707188235000
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19485393853000
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 20544343456936.5
        },
        {
            "name": "C/C++",
            "year": "2000",
            "heat": 1657816613708.58
        },
        {
            "name": "C/C++",
            "year": "2001",
            "heat": 1640246149417.01
        },
        {
            "name": "C/C++",
            "year": "2002",
            "heat": 1784473920863.31
        },
        {
            "name": "C/C++",
            "year": "2003",
            "heat": 2053018775510.2
        },
        {
            "name": "C/C++",
            "year": "2004",
            "heat": 2416931526913.22
        },
        {
            "name": "C/C++",
            "year": "2005",
            "heat": 2538680000000
        },
        {
            "name": "C/C++",
            "year": "2006",
            "heat": 2713749770009.2
        },
        {
            "name": "C/C++",
            "year": "2007",
            "heat": 3100882352941.18
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 2922667279411.76
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2410909799034.12
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 2475244321361.11
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 2659310054646.23
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 2704887678386.72
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 2786022872706.81
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 3063803240208.01
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 2928591002002.51
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 2694283209613.29
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 2666229179958.01
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 2855296731521.96
        },
        {
            "name": "Python",
            "year": "2000",
            "heat": 259710142196.94
        },
        {
            "name": "Python",
            "year": "2001",
            "heat": 306602070620.5
        },
        {
            "name": "Python",
            "year": "2002",
            "heat": 345470494417.86
        },
        {
            "name": "Python",
            "year": "2003",
            "heat": 430347770731.79
        },
        {
            "name": "Python",
            "year": "2004",
            "heat": 591016690742.8
        },
        {
            "name": "Python",
            "year": "2005",
            "heat": 764017107992.39
        },
        {
            "name": "Python",
            "year": "2006",
            "heat": 989930542278.7
        },
        {
            "name": "Python",
            "year": "2007",
            "heat": 1299705764823.62
        },
        {
            "name": "Python",
            "year": "2008",
            "heat": 1660846387624.78
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 1222644282201.86
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 1524917468442.01
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 2051661732059.78
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 2210256976945.38
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 2297128039058.21
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 2059984158438.46
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 1363594369577.82
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 1282723881134.01
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 1578624060588.26
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 1657554647149.87
        },
        {
            "name": "Golang",
            "year": "2000",
            "heat": 4887519660744.86
        },
        {
            "name": "Golang",
            "year": "2001",
            "heat": 4303544259842.72
        },
        {
            "name": "Golang",
            "year": "2002",
            "heat": 4115116279069.77
        },
        {
            "name": "Golang",
            "year": "2003",
            "heat": 4445658071221.86
        },
        {
            "name": "Golang",
            "year": "2004",
            "heat": 4815148854362.11
        },
        {
            "name": "Golang",
            "year": "2005",
            "heat": 4755410630912.14
        },
        {
            "name": "Golang",
            "year": "2006",
            "heat": 4530377224970.4
        },
        {
            "name": "Golang",
            "year": "2007",
            "heat": 4515264514430.57
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 5037908465114.48
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 5231382674593.7
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 5700098114744.41
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 6157459594823.72
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 6203213121334.12
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 5155717056270.83
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 4850413536037.84
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 4389475622588.97
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 4926667087367.51
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 4859950558538.97
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 4971323079771.87
        }
    ]

    setAgeOptionData = (data) => {
        this.ageOption.series[0].data = data;
    };

    setLocationOptionData = (data) => {
        this.locationOption.series[0].data = data;
    };

    setTendencyOptionData = (data) => {
        this.tendencyOption = data
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default ChartStore;