import { makeAutoObservable } from "mobx";

class ChartStore {
    num = 0;
    ageOption = {
        title: {
            text: '恶意代码年龄分布表',
            subtext: '以 20 岁作为基准',
            x: 'center'
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
                name: "年龄",
                type: "pie",
                radius: "50%",
                data: [
                    { name: 20, value: 556 },
                    { name: 21, value: 2565 },
                    { name: 22, value: 3400 },
                    { name: 23, value: 3006 },
                    { name: 24, value: 2967 },
                    { name: 25, value: 2900 },
                    { name: 26, value: 2588 },
                    { name: 27, value: 2166 },
                    { name: 28, value: 1867 },
                    { name: 29, value: 1593 },
                    { name: 30, value: 1176 },
                    { name: 31, value: 871 },
                    { name: 32, value: 516 },
                    { name: 33, value: 314 },
                    { name: 34, value: 186 },
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
        title: {
            text: '恶意代码地域分布表',
            subtext: '以国家为单位',
            x: 'center'
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
                name: "国家",
                type: "pie",
                radius: "50%",
                data: [
                    { name: "USA", value: 1182 },
                    { name: "India", value: 299 },
                    { name: "Brazil", value: 186 },
                    { name: "UK", value: 174 },
                    { name: "China", value: 128 },
                    { name: "Germany", value: 100 },
                    { name: "France", value: 75 },
                    { name: "Canada", value: 72 },
                    { name: "Indonesia", value: 59 },
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

    // USA,1400
    // India,1222
    // Brazil,519
    // UK,174
    // China,363
    // Germany,640
    // France,510
    // Canada,387
    // Indonesia,310
    // "Korea, Republic of",59
    // Czech Republic,117
    // Bangladesh,182
    // Spain,242
    // South Africa,82
    // Russian Federation,41
    // Italy,330
    // Pakistan,132
    // Mexico,138
    // Sri Lanka,99
    // Poland,245
    // Argentina,123
    // Netherlands,158
    // Philippines,103
    // New Zealand,92
    // "Taiwan, Province of China",30
    // Turkey,234
    // Japan,126
    // Ukraine,161
    // Sweden,123
    // Australia,221
    // Colombia,87
    // Israel,184
    // Kenya,54
    // Romania,103
    // Finland,81
    // Islamic Republic of Iran,20
    // Hong Kong,18
    // Portugal,91
    // Denmark,87
    // Egypt,111
    // Venezuela,15
    // Norway,92
    // Belgium,102
    // Serbia,38
    // Greece,95
    // Thailand,65
    // Nepal,40
    // Georgia,47
    // Uruguay,18
    // Switzerland,77
    // Morocco,51
    // Malaysia,48
    // Bulgaria,35
    // Singapore,124
    // Viet Nam,9
    // Saudi Arabia,21
    // Ethiopia,23
    // Croatia,29
    // Belarus,23
    // Nicaragua,8
    // United Arab Emirates,30
    // Azerbaijan,20
    // Algeria,46
    // Lebanon,21
    // Hungary,44
    // Ireland,59
    // Tunisia,49
    // Puerto Rico,8
    // Austria,58
    // Uzbekistan,5
    // Guatemala,14
    // Ghana,20
    // Angola,5
    // Lithuania,30
    // Sudan,6
    // Estonia,6
    // Paraguay,7
    // Ecuador,9
    // Dominican Republic,7
    // Latvia,13
    // Rwanda,10
    // Slovakia,29
    // El Salvador,4
    // Cyprus,9
    // Armenia,8
    // Kazakhstan,12
    // "Tanzania, United Republic of",3
    // Bosnia and Herzegovina,6
    // Cambodia,4
    // Jersey,2
    // Uganda,5
    // Myanmar,10
    // Sierra Leone,2
    // Yemen,2
    // Bolivia,9
    // Nigeria,16
    // Maldives,3
    // C?te D'ivoire (Ivory Coast),2
    // Chile,42
    // Costa Rica,9
    // Zambia,3
    // Cameroon,4
    // Panama,4
    // Jordan,4
    // Iceland,14
    // "Moldova, Republic of",1
    // Luxembourg,17
    // Albania,7
    // Bahama,1
    // Peru,22
    // Kyrgyzstan,5
    // Antarctica,1
    // Zimbabwe,7
    // Mali,1
    // Congo-Kinshasa,1
    // Sao Tome & Principe,1
    // Iraq,4
    // Xtra Klean,1
    // Libyan Arab Jamahiriya,1
    // Macau,1
    // Macedonia,1
    // United Kingdom,402
    // People's Republic of China,75
    // Russia,212
    // Vietnam,100
    // Taiwan,108
    // Iran,114
    // South Korea,149
    // Slovenia,11
    // Jamaica,10
    // Honduras,3
    // Mozambique,3
    // Seychelles,3
    // Moldova,7
    // Tanzania,9
    // Syria,2
    // Madagascar,4
    // Eswatini,2
    // Malta,2
    // Afghanistan,4
    // Somalia,2
    // Kuwait,1
    // Monaco,1
    // Bahrain,2
    // Oman,2
    // Vatican City,1
    // Laos,1
    // Gabon,1
    // Togo,1
    // Mauritius,1
    // Greenland,1
    // Senegal,1
    // Andorra,2
    // The Bahamas,1
    // North Korea,2
    // United States,445
    // Palestine,6
    // Benin,3
    // Saint Kitts and Nevis,1
    // Ivory Coast,1
    // Kosovo,1
    // Republic of Congo,1
    // Montenegro,1


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

    watchTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 869
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 3226
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 8409
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 16205
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 17844
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 26976
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 66395
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 71822
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 50320
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 154433
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 88185
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 68196
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 51252
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 34404
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 11932
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 542
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 1557
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 1512
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 3856
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1911
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 2969
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 4933
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 7542
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 6845
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 5289
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 6985
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 5681
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 1600
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 1530
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 447
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2112
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 6321
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 28514
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 14572
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 31427
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 17498
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 42763
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 53150
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 49381
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 38899
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 32465
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 23325
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 23368
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 10435
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 2596
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 2585
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 8739
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 7117
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 6497
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 18028
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 8805
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 12447
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 25485
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19203
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 19708
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 17034
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 11079
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 13523
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 3740
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 9
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 425
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 175
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 2777
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 8995
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 9071
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 10555
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 30602
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 16470
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 40845
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 27700
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 11963
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 17500
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 7222
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 10485
        }
    ]

    starTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 869
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 3226
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 8409
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 16205
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 17844
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 26976
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 66395
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 71822
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 50320
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 154433
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 88185
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 68196
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 51252
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 34404
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 11932
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 542
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 1557
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 1512
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 3856
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1911
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 2969
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 4933
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 7542
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 6845
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 5289
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 6985
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 5681
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 1600
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 1530
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 447
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2112
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 6321
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 28514
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 14572
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 31427
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 17498
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 42763
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 53150
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 49381
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 38899
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 32465
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 23325
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 23368
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 10435
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 2596
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 2585
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 8739
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 7117
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 6497
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 18028
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 8805
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 12447
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 25485
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19203
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 19708
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 17034
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 11079
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 13523
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 3740
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 9
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 425
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 175
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 2777
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 8995
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 9071
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 10555
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 30602
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 16470
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 40845
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 27700
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 11963
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 17500
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 7222
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 10485
        }
    ]

    openIssueTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 22
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 188
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 360
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 633
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 747
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 1065
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 2157
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 3907
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 2814
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 3145
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 2904
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 3756
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 2753
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 1239
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 567
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 27
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 16
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 36
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 93
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 378
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 230
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 241
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 3523
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 1107
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 1205
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 1139
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 1040
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 669
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 229
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 201
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 5
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 107
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 211
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 847
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 383
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 788
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 610
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 6053
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 3095
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 1172
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 754
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 805
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 911
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 615
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 214
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 19
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 109
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 208
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 395
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 506
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 980
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 1196
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 2712
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 1962
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 2972
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 3890
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 10301
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 8867
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 1106
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 468
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 0
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 4
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 4
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 108
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 371
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 114
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 186
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 977
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 668
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 765
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 641
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 721
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 1010
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 550
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 235
        }
    ]

    forkTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 183
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 720
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 1891
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 3919
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 5290
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 7306
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 16859
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 22428
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 17652
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 38217
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 24567
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 21332
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 13830
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 7634
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 2701
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 436
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 221
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 403
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 1806
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1438
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 1283
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 2376
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 3115
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 2683
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 3654
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 2172
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 1305
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 591
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 471
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 87
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 709
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 1569
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 6715
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 3886
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 7272
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 6262
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 14933
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 20041
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 14224
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 11418
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 8780
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 6269
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 5190
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 1946
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 684
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 350
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 1421
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 2157
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 1705
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 3873
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 2158
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 4044
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 5637
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 5035
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 4929
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 2904
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 4352
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 4246
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 1005
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 2
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 80
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 31
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 192
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 1565
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 1262
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 1194
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 5162
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 3079
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 5083
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 2997
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 2330
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 3487
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 1677
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 1160
        }
    ]

    datasetInfo = [
        {
            name: "恶意代码仓库数据集",
            dataName: ["malicious"],
            description: {
                usage: "用于探索恶意代码的语义特征，为后期的恶意代码识别工作做准备",
                origin: "自建"
            },
            source: [
                `1.识别Github恶意仓库: 
                通过分析仓库的介绍信息，文件名等字段信息，采用了5种文本表示方法、6个非集中模型、5个集中模型和10折交叉验证进行对比实验，获得了37805个恶意软件仓库，通过进一步筛选，最终获得33609个恶意软件源代码仓库。（/MaliciousCode/test.jsonl）
                `,
                `2.反推恶意仓库作者: 
                对上述33609个恶意软件源代码仓库进行作者溯源，由于同一个作者可能有多个仓库被统计到，最终获得约25000个的GitHub账号的信息，包括账号作者的个人注册信息，所有仓库以及仓库中所有文件的信息；
                初步清洗过滤，在仓库维度，首先去除所有“fork”类型的仓库，这些都是直接从其他人账号下的仓库复制过来的；然后通过文件名和文件内容等信息，去除重复的仓库和源代码文件。 
                多进程爬取，下载清洗后的所有仓库到本地，方便后续进行源代码提取和数据清洗。
                `,
                `3.构造标签数据集: 
                根据一定的标签规则，进一步过滤精选出一部分作者及其源代码。
                为了避免同一作者由于自身学习成长导致的不同时间段内创建的代码的特征差异带来误干扰，首先根据账号创建时间对所有个人账号进行分类，从2008年到2022年，共计15个类别；
                然后根据仓库的创建时间和最后更新时间等信息，挑选出作者近一年内创建的所有源代码文件，如果存在相同文件名，则加上其储存路径。这样不仅提取出的代码能代表其作者一定时间内的编程特征，还具有时间标签的特性。因为根据统计分析，大多数程序员会在22岁左右创建Github账号，如此根据账号创建年份即可大致推断出账号作者的年龄，即使存在一定的偏差，也能侧面反映出作者从业时间的长短和技术水平的高低。
                为了保证同一作者源代码的纯洁性，遵循已公开发表论文中数据集的清洗规则，剔除由系统自动生成的模板代码文件、第三方库中的源代码文件以及各种测试用例源代码文件。为了保证有效性，对代码的数量进行了筛选，只挑选源代码文件大于1K和总数不少于100个文件的作者作为研究对象。
                通过社会工程学等策略，从Github个人账号主页介绍、关联个人博客、Twitter、Linkedin等多个平台上为作者的进行个人画像，目前统计信息主要包括性别、年龄、国籍、职业、教育经历、工作经历、社会地位、成长地域等，通过这些信息，即可大致判断出账号主人的人格特征，再通过与其在Github上的创建的源代码进行关联，即可生成研究所需的特征丰富、标签明确的高质量数据集
                `,
            ],
            scheme: [
                {
                    title: "代码作者视图",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "author",
                            property: "作者",
                            description: "代码作者账号注册名"
                        },
                        {
                            key: "year",
                            property: "年份",
                            description: "代码作者GitHub账号注册年份"
                        },
                        {
                            key: "nationality",
                            property: "国籍",
                            description: "代码作者国籍"
                        },
                        {
                            key: "gender",
                            property: "性别",
                            description: "代码作者性别"
                        },
                        {
                            key: "occupation",
                            property: "职业",
                            description: "代码作者职业"
                        },
                        {
                            key: "education",
                            property: "教育经历",
                            description: "代码作者教育经历"
                        },
                        {
                            key: "socialStatus",
                            property: "社会地位",
                            description: "代码作者社会地位"
                        },
                        {
                            key: "region",
                            property: "地域",
                            description: "代码作者成长区域"
                        },
                        {
                            key: "htmlURL",
                            property: "主页",
                            description: "代码作者账号首页地址"
                        },
                        {
                            key: "type",
                            property: "类型",
                            description: "代码作者账号类型"
                        },
                        {
                            key: "infoPath",
                            property: "路径",
                            description: "代码作者详细信息文件存储路径"
                        },
                    ]
                },
                {
                    title: "恶意代码仓库试图",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "repoName",
                            property: "仓库名",
                            description: "恶意源代码仓库名"
                        },
                        {
                            key: "author",
                            property: "作者",
                            description: "恶意代码仓库隶属的作者名"
                        },
                        {
                            key: "description",
                            property: "描述信息",
                            description: "恶意代码仓库的简要介绍"
                        },
                        {
                            key: "htmlURL",
                            property: "主页",
                            description: "恶意代码仓库的主页"
                        },
                        {
                            key: "contributors",
                            property: "贡献者",
                            description: "恶意代码仓库所有贡献者账号姓名"
                        },
                        {
                            key: "createAt",
                            property: "创建时间",
                            description: "恶意代码仓库创建时间"
                        },
                        {
                            key: "updatedAt",
                            property: "更新时间",
                            description: "恶意代码仓库最后更新时间"
                        },
                        {
                            key: "pushAt",
                            property: "上传时间",
                            description: "恶意代码仓库最后上传时间"
                        },
                        {
                            key: "size",
                            property: "大小",
                            description: "恶意代码仓库占存储字节数"
                        },
                        {
                            key: "star",
                            property: "标星数量",
                            description: "恶意代码仓库被标星数量"
                        },
                        {
                            key: "fork",
                            property: "分叉数量",
                            description: "恶意仓库被分叉数量"
                        },
                        {
                            key: "topic",
                            property: "话题",
                            description: "恶意代码仓库创建的话题"
                        },
                        {
                            key: "path",
                            property: "路径",
                            description: "仓库详细信息存储路径"
                        },
                    ]
                },
                {
                    title: "恶意源代码文件视图",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "fileName",
                            property: "文件名",
                            description: "恶意代码文件名"
                        },
                        {
                            key: "author",
                            property: "作者",
                            description: "恶意代码文件作者名"
                        },
                        {
                            key: "repo",
                            property: "仓库",
                            description: "恶意代码文件隶属的仓库名"
                        },
                        {
                            key: "description",
                            property: "介绍",
                            description: "恶意代码文件简要介绍"
                        },
                        {
                            key: "htmlURL",
                            property: "主页",
                            description: "恶意代码文件主页地址"
                        },
                        {
                            key: "createAt",
                            property: "创建时间",
                            description: "恶意代码文件创建时间"
                        },
                        {
                            key: "updatedAt",
                            property: "更新时间",
                            description: "恶意代码文件最后更新时间"
                        },
                        {
                            key: "pushedAt",
                            property: "上传时间",
                            description: "恶意代码文件最后上传时间"
                        },
                        {
                            key: "size",
                            property: "大小",
                            description: "恶意代码文件占存储字节数"
                        },
                        {
                            key: "language",
                            property: "语言",
                            description: "恶意代码文件使用的编程语言类型"
                        },
                        {
                            key: "path",
                            property: "路径",
                            description: "恶意代码文件详细信息存储的路径"
                        },
                    ]
                }
            ],
            count: {
                column: [
                    {
                        key: "property",
                        dataIndex: "property",
                        title: "属性"
                    },
                    {
                        key: "number",
                        dataIndex: "number",
                        title: "数量分布"
                    }
                ],
                data: [
                    {
                        key: "author",
                        property: "恶意代码作者数量",
                        number: "26709",
                    },
                    {
                        key: "repos",
                        property: "恶意代码仓库数量",
                        number: "33609"
                    },
                    {
                        key: "allRepos",
                        property: "恶意代码作者所有仓库数量",
                        number: "761116"
                    },
                    {
                        key: "size",
                        property: "恶意代码文件数据容量",
                        number: "7T"
                    },
                    {
                        key: "languages",
                        property: "恶意代码仓库语言分布",
                        number: `'python': 103059, 'java': 35672, 'c/c++': 72675, 'javascript': 63427, 'go': 20306`,
                    }
                ]
            }
        },
        {
            name: "代码心理属性数据集",
            dataName: ["Psychological Attributes Dataset"],
            description: {
                usage: "统计代码以及作者心理属性信息，用于验证分析方案可行性",
                origin: "自建",
            },
            source: [
                `1. 在华中科技大学网安学院2020级，共计270余名学生中开展心理属性调研工作；`,
                `2. 与华中科技大学《软件安全》课设老师进行合作，共收集到270余名同学的课程实验代码。课程实验代码能够保证作者与代码的对应关系。与此同时，将心理调研结果交由华中师范大学心理学院分析，最终归纳出被试者的人格属性、情感属性和认知属性；`,
                `3. 通过编号属性建立心理属性调研结果和课程实验代码的映射关系，具体可以表示为（编号，代码，心理属性）的三元组，由此完成心理特征标签数据集的初步制作；`,
                `4. 由于课程实验代码中可能存在过于重复的代码信息，因此使用函数粒度的代码查重和去重分析。首先对所有的代码文件，提取其中的函数，之后根据函数来建立数据库，进行函数级别的查重分析，查重的标准设置为Type2，即允许存在变量名、函数名等变化和空格、换行和空白字符等变化，根据查重结果，对于不同作者的克隆对，进行去重操作，移除该数据，而对于同一个作者的克隆对，则进行保留。`
            ],
            scheme: [
                {
                    title: "源代码文件视图",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "file",
                            property: "文件名",
                            description: "源代码文件路径"
                        },
                        {
                            key: "author",
                            property: "作者",
                            description: "源代码文件作者"
                        },
                        {
                            key: "size",
                            property: "大小",
                            description: "源代码文件占存储字节数"
                        }
                    ]
                },
                {
                    title: "心理属性视图",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "zongjiao",
                            property: "宗教信仰",
                            description: "是否有宗教信仰",
                        },
                        {
                            key: "gender",
                            property: "性别",
                            description: "代码作者性别",
                        },
                        {
                            key: "zhuanye",
                            property: "专业",
                            description: "代码作者大学专业",
                        },
                        {
                            key: "rank",
                            property: "成绩排名",
                            description: "代码作者上学期年纪排名比例",
                        },
                        {
                            key: "lianai",
                            property: "恋爱情况",
                            description: "代码作者校园阶段谈过几次恋爱",
                        },
                        {
                            key: "shengfen",
                            property: "省份",
                            description: "代码作者出生在中国的省份",
                        },
                        {
                            key: "cet6",
                            property: "英语水平",
                            description: "代码作者的英语六级分数",
                        },
                        {
                            key: "language",
                            property: "编程语言",
                            description: "代码作者擅长的编程语言",
                        },
                        {
                            key: "language-",
                            property: "倾向编程语言",
                            description: "代码作者还能够擅长哪些编程语言",
                        },
                        {
                            key: "changzhu",
                            property: "长居地域",
                            description: "除了出生所在省份以外，在哪一个省份度过最长的时间",
                        },
                        {
                            key: "naming",
                            property: "命名变量规范",
                            description: "习惯使用哪种格式命名变量",
                        },
                        {
                            key: "naming-",
                            property: "命名变量习惯",
                            description: "习惯使用哪种方式命名变量？拼音、英文缩写、英文全称",
                        },
                        {
                            key: "timing",
                            property: "工作时间",
                            description: "哪个时间段编写代码效率最高",
                        },
                        {
                            key: "fuyong",
                            property: "代码复用方式",
                            description: "编写程序出现曾经编写过的代码，会使用什么处理方式？复制粘贴、重构、直接编写",
                        },
                        {
                            key: "paiban",
                            property: "排版格式习惯",
                            description: "是否关注编码过程中代码的排版格式",
                        },
                        {
                            key: "moshi",
                            property: "编码习惯",
                            description: "编写代码之前是否愿意将所有步骤想清楚",
                        },
                        {
                            key: "biaoshi",
                            property: "个人信息残留",
                            description: "是否会在代码中残留个人信息",
                        },
                        {
                            key: "cankao",
                            property: "编码学习方式",
                            description: "面对编程的基础问题时，是否习惯参考网上的代码",
                        },
                        {
                            key: "yichang",
                            property: "异常处理习惯",
                            description: "编码时是否使用异常处理来增强代码的健壮性",
                        },
                        {
                            key: "new",
                            property: "编码新特性了解习惯",
                            description: "是否主动了解编程语言的新特性",
                        },
                        {
                            key: "new-",
                            property: "编码新特性使用习惯",
                            description: "是否主动使用编程语言的新特性",
                        },
                        {
                            key: "beifen",
                            property: "协作习惯",
                            description: "是否会周期性将日常编写的代码上传到云端",
                        },
                        {
                            key: "zixin",
                            property: "编程学习情况",
                            description: "是否在本学年编程能力得到大幅提升",
                        },
                        {
                            key: "friend",
                            property: "社交程度",
                            description: "平时有多少个知心朋友",
                        },
                        {
                            key: "yilai",
                            property: "独立合作",
                            description: "平常遇到困难，是否依赖个人独立思考解决问题",
                        },
                        {
                            key: "shejiao",
                            property: "开放程度",
                            description: "是否主动的结交朋友",
                        },
                        {
                            key: "zhiye",
                            property: "职业情况",
                            description: "未来的理想职业",
                        },
                        {
                            key: "xinxian",
                            property: "新鲜感",
                            description: "是否喜欢追求新鲜感",
                        },
                        {
                            key: "zeren",
                            property: "责任心",
                            description: "是否觉得自己是有责任心的人",
                        },
                        {
                            key: "kailang",
                            property: "开朗乐观",
                            description: "是否觉得自己是开朗乐观的人",
                        },
                        {
                            key: "shanliang",
                            property: "善良",
                            description: "是否觉得自己是善良的人",
                        },
                        {
                            key: "qingxuhua",
                            property: "情绪化",
                            description: "是否觉得自己是情绪化的人",
                        }
                    ]
                }
            ],
            count: {
                column: [
                    {
                        key: "property",
                        dataIndex: "property",
                        title: "属性"
                    },
                    {
                        key: "description",
                        dataIndex: "number",
                        title: "数量"
                    }
                ],
                data: [
                    {
                        key: "author",
                        property: "作者数量",
                        number: "62",
                    },
                    {
                        key: "function",
                        property: "函数个数",
                        number: "1366",
                    },
                    {
                        key: "line",
                        property: "代码总行数",
                        number: "45086",
                    },
                    {
                        key: "avgFunction",
                        property: "作者平均函数数量",
                        number: "22",
                    },
                    {
                        key: "avgLine",
                        property: "作者平均代码行数",
                        number: "727",
                    },
                ]
            }
        },
        {
            name: "AI代码数据集",
            dataName: ["Codes Generated From ChatGPT"],
            description: {
                usage: "区分ChatGPT和人类写的代码",
                origin: "自建"
            },
            source: [
                "由ChatGPT的gpt3.5-turbo模型和gpt4模型生成,共有三种生成方式:代码翻译/功能重现/功能定制",
            ],
            scheme: [
                {
                    title: "",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "path",
                            property: "文件路径",
                            description: "文件存储的路径"
                        },
                        {
                            key: "model",
                            property: "生成模型",
                            description: "生成文件使用的大语言模型"
                        },
                        {
                            key: "language",
                            property: "生成语言",
                            description: "该文件使用的编程语言类型"
                        },
                        {
                            key: "pattern",
                            property: "生成方式",
                            description: "对大语言模型使用的提示性话语"
                        },
                    ]
                }
            ],
            count: {
                column: [
                    {
                        key: "model",
                        title: "生成模型",
                        dataIndex: "model"
                    },
                    {
                        key: "language",
                        title: "编程语言",
                        dataIndex: "language"
                    },
                    {
                        key: "pattern",
                        title: "生成模式",
                        dataIndex: "pattern"
                    },
                    {
                        key: "number",
                        title: "数量",
                        dataIndex: "number"
                    }
                ],
                data: [
                    {
                        key: "java_gpt3.5-turbo_代码翻译",
                        language: "Java",
                        model: "ChatGPT 3.5-turbo",
                        pattern: "代码翻译",
                        number: 261
                    },
                    {
                        key: "java_gpt4_代码翻译",
                        language: "Java",
                        model: "ChatGPT 4",
                        pattern: "代码翻译",
                        number: 282
                    },
                    {
                        key: "c++_gpt3.5-turbo_功能重现",
                        language: "C/C++",
                        model: "ChatGPT 3.5-turbo",
                        pattern: "功能重现",
                        number: 233
                    },
                    {
                        key: "c++_gpt4_功能重现",
                        language: "C/C++",
                        model: "ChatGPT 4",
                        pattern: "功能重现",
                        number: 200
                    },
                    {
                        key: "c++_gpt4_功能定制",
                        language: "C/C++",
                        model: "ChatGPT 4",
                        pattern: "功能定制",
                        number: 36
                    },
                    {
                        key: "c++_gpt4_代码翻译",
                        language: "C/C++",
                        model: "ChatGPT 4",
                        pattern: "代码翻译",
                        number: 130
                    },
                ]
            }
        },
        {
            name: "性别区分数据集",
            dataName: ["GitHub-gender-Java", "GitHub-gender-C/C++"],
            description: {
                usage: "用于分析作者源代码特征和性别的关系",
                origin: "自建"
            },
            source: [
                "GitHub-gender-Java数据集：通过抓取2008-2022年期间GitHub网站的Java开源代码,通过人为社工分析的方式,例如社交账号、头像照片等信息,选取了其中可以明确确定源代码作者性别信息的源代码文件",
                "GitHub-gender-C/C++数据集：同样抓取了与GitHub-gender-Java数据集同年间GitHub网站的C/C++开源代码,通过人为社工分析的方式明确源代码作者的性别,构建准确的性别标签"
            ],
            scheme: [
                {
                    title: "",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称"
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述"
                        }
                    ],
                    data: [
                        {
                            key: "id",
                            property: "id",
                            description: "文件序号"
                        },
                        {
                            key: "name",
                            property: "姓名",
                            description: "作者姓名"
                        },
                        {
                            key: "sex",
                            property: "性别",
                            description: "作者性别"
                        },
                        {
                            key: "number",
                            property: "代码数量",
                            description: "该文件代码字符长度"
                        },
                    ]
                }
            ],
            count: {
                column: [
                    {
                        key: "dataset",
                        dataIndex: "dataset",
                        title: "数据集"
                    },
                    {
                        key: "gender",
                        dataIndex: "gender",
                        title: "性别"
                    },
                    {
                        key: "authorNumber",
                        dataIndex: "authorNumber",
                        title: "作者数量"
                    },
                    {
                        key: "fileNumber",
                        dataIndex: "fileNumber",
                        title: "文件数量"
                    },
                ],
                data: [
                    {
                        key: "1",
                        dataset: "GitHub-gender-Java",
                        gender: "男性",
                        authorNumber: "248",
                        fileNumber: "174748",
                    },
                    {
                        key: "2",
                        dataset: "GitHub-gender-Java",
                        gender: "女性",
                        authorNumber: "152",
                        fileNumber: "57279",
                    },
                    {
                        key: "3",
                        dataset: "GitHub-gender-C/C++",
                        gender: "男性",
                        authorNumber: "85",
                        fileNumber: "47513",
                    },
                    {
                        key: "4",
                        dataset: "GitHub-gender-C/C++",
                        gender: "女性",
                        authorNumber: "101",
                        fileNumber: "11431",
                    },
                ]
            }
        },
        {
            name: "代码归属数据集",
            dataName: ["GitHub-C", "GitHub-Java", "GCJ-C++"],
            description: {
                usage: "用于代码作者归属实验测试模型性能效果",
                origin: "论文"
            },
            source: [
                `GitHub-C数据集源自论文 Z. Li, Q. G. Chen, C. Chen, Y. Zou, and S. Xu, “Ropgen:Towards robust code authorship attribution via automatic coding style transformation,” in 44th IEEE/ACM 44th International Conference on Software Engineering, ICSE 2022, Pittsburgh, PA, USA, May 25-27, 2022. ACM, 2022, pp. 1906–1918.`,
                `GitHub-Java数据集源自论文 X. Yang, G. Xu, L. Qi, Y. Guo, and Z. Miao, “Authorship attribution of
                source code by using back propagation neural network based on particle
                swarm optimization,” Plos One, vol. 12, no. 11, p. e0187204, 2017
                `,
                `GCJ-C++数据集源自论文E. Quiring, A. Maier, and K. Rieck, “Misleading authorship
                attribution of source code using adversarial learning,” in 28th
                USENIX Security Symposium, USENIX Security 2019, Santa Clara,
                CA, USA, August 14-16, 2019, N. Heninger and P. Traynor, Eds.
                USENIX Association, 2019, pp. 479–496
                `,
            ],
            scheme: [
                {
                    title: "",
                    column: [
                        {
                            key: "property",
                            dataIndex: "property",
                            title: "字段名称",
                        },
                        {
                            key: "description",
                            dataIndex: "description",
                            title: "字段描述",
                        }
                    ],
                    data: [
                        {
                            key: "path",
                            property: "路径",
                            description: "文件存储路径",
                        },
                        {
                            path: "length",
                            property: "长度",
                            description: "文件所拥有的字符长度"
                        },
                        {
                            path: "lineNumber",
                            property: "行数量",
                            description: "文件所拥有的行数"
                        },
                        {
                            path: "datasetName",
                            property: "数据集名",
                            description: "文件归属的数据集名称"
                        },
                        {
                            path: "author",
                            property: "作者",
                            description: "文件归属的作者名称"
                        },
                    ]
                }
            ],
            count: {
                column: [
                    {
                        key: "dataset",
                        dataIndex: "dataset",
                        title: "数据集"
                    },
                    {
                        key: "authorNumber",
                        dataIndex: "authorNumber",
                        title: "作者数量"
                    },
                    {
                        key: "fileNumber",
                        dataIndex: "fileNumber",
                        title: "文件数量"
                    },
                    {
                        key: "avgLineNumber",
                        dataIndex: "avgLineNumber",
                        title: "平均代码行数"
                    },
                ],
                data: [
                    {
                        key: "1",
                        dataset: "GitHub-C",
                        authorNumber: "67",
                        fileNumber: "2072",
                        avgLineNumber: "88"
                    },
                    {
                        key: "2",
                        dataset: "GitHub-Java",
                        authorNumber: "40",
                        fileNumber: "2827",
                        avgLineNumber: "76"
                    },
                    {
                        key: "3",
                        dataset: "GCJ-C++",
                        authorNumber: "204",
                        fileNumber: "1632",
                        avgLineNumber: "74"
                    },
                ]
            }
        },

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

    getGraphOriginData = (graphOrigin) => {
        switch (graphOrigin) {
            case "star":
                return this.starTendencyOption
            case "fork":
                return this.forkTendencyOption
            case "watch":
                return this.watchTendencyOption
            case "open_issue":
                return this.openIssueTendencyOption
            default:
                return [];
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default ChartStore;