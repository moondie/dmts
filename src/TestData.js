/**
 * 用于测试的数据。
 */
import React from "react";

// 分析计划列表总数据格式初步拟定
// 对每个不同的前端页面，数据形式可能不同，看看是后端统一接口前端处理信息还是后端定义不同接口返回不同数据
export const plan_list = [
    {
        id: 1,
        name: '分析计划 1',
        start_url: 'http://10.12.159.61:8888/',
        create_time: '2022-11-29 12:00:00',
        user: 'ewds',

        // 分析任务列表
        tasks: [
            // 存疑，是直接将分析任务写在分析计划中还是另写用序号连外键
            {
                id: 1,
                name: 'Web分析任务 1',
                type: 'web',
                config: {
                    // 是每次运行web分析的时候重新扫描一遍url并探测漏洞，还是预先进行爬取工作并有选择地分析漏洞
                    scan_urls: [
                        'http://10.12.159.61:8888/main/',
                        'http://10.12.159.61:8888/cgi-bin/'
                    ],
                    vulnerabilities: [
                        'xss',
                        'sqli',
                        'redos',
                    ]
                },

                // 数据列表，是每个分析任务单独存储数据还是一起存储
                // 单独存储 优点：方便分任务查看，方便删除分析任务
                // 单独存储 缺点：不方便查看总分析数据
                result: [
                    {
                        id: 1,
                        url: 'http://10.12.159.61:8888/main/',
                        type: 'xss',
                        description: 'An XSS Vulnerability',
                    }, {
                        id: 2,
                        url: 'http://10.12.159.61:8888/cgi-bin/',
                        type: 'sqli',
                        description: 'An SQL Injection Vulnerability',
                    }
                ]
            }, {
                id: 2,
                name: 'CGI分析任务 1',
                type: 'cgi',
                config: {
                    // 这里不是很确定需要什么参数，需要进行一些对接
                },
                result: [
                    // 这里同样不是很确定会扫描出什么结果，需要进行一些对接
                ]
            }
        ],

        // 分析计划数据
        data: {
            // 爬虫爬取的url结果列表
            urls: [
                {
                    method: 'GET',
                    url: 'http://10.12.159.61:8888/main/',
                    type: 'webpage',
                }, {
                    method: 'POST',
                    url: 'http://10.12.159.61:8888/login/',
                    post_data: 'username=ewds&password=ewds123',
                    type: 'interface',
                }, {
                    method: 'GET',
                    url: 'http://10.12.159.61:8888/statics/logo.png',
                    type: 'static',
                }
            ],

            // 分析任务数据，是每个分析任务单独存储数据还是一起存储
            // 一起存储 优点：方便查看分析计划总体数据
            // 一起存储 缺点：不方便单独查看，不方便删除分析任务
            vulnerabilities: [
                {
                    id: 1,
                    task_id: 1,
                    url: 'http://10.12.159.61:8888/main/',
                    type: 'xss',
                    description: 'An XSS Vulnerability',
                }, {
                    id: 2,
                    task_id: 1,
                    url: 'http://10.12.159.61:8888/cgi-bin/',
                    type: 'sqli',
                    description: 'An SQL Injection Vulnerability',
                }
            ],

            cgi: [
                // 待定
            ]

        }

    },
    {
        id: 2,
        name: '分析计划 2',
        start_url: 'https://www.baidu.com/',
        create_time: '2022-11-29 12:00:00',
        user: 'ewds',
    },
]

// /plan页面的数据
export const plan_list_general = [
    {
        id: 1,
        name: '分析计划 1',
        start_url: 'http://10.12.159.61:8888/',
        // 比较方便/plan页面的列表进行展示
        content: {
            create_time: '2022-11-29 12:00:00',
            user: 'ewds',
            task_count: 2,
        },
    },
    {
        id: 2,
        name: '分析计划 2',
        start_url: 'https://www.baidu.com/',
        content: {
            create_time: '2022-11-29 12:00:00',
            user: 'ewds',
            task_count: 0,
        }
    },
]

// /data header的数据
// 分析计划是否需要id作为主键
export const plan_list_header = [
    {
        id: 1,
        name: '分析计划 1',
    },
    {
        id: 2,
        name: '分析计划 2',
    },
]



// /data/url 页面的数据
// 问题：URL爬虫在什么时候进行，是否需要用户手动触发
// 如果在创建任务的时候自动运行，运行失败是否需要重新创建任务
// 如果用户手动运行，那是否存运行多次的不同结果，还是整合到全部url中
export const plan_list_url = [
    {
        id: 1,
        name: '分析计划 1',
        start_url: 'http://10.12.159.61:8888/',
        urls: [
            {
                method: 'GET',
                url: 'http://10.12.159.61:8888/main/',
                type: 'webpage',
            }, {
                method: 'POST',
                url: 'http://10.12.159.61:8888/login/',
                post_data: 'username=ewds&password=ewds123',
                type: 'interface',
            }, {
                method: 'GET',
                url: 'http://10.12.159.61:8888/statics/logo.png',
                type: 'static',
            }
        ]
    },
    {
        id: 2,
        name: '分析计划 2',
        start_url: 'https://www.baidu.com/',
        urls: [
            {
                method: 'GET',
                url: 'https://www.baidu.com/',
                type: 'webpage',
            }, {
                method: 'GET',
                url: 'https://www.baidu.com/s?wd=a',
                type: 'webpage',
            }, {
                method: 'GET',
                url: 'https://www.baidu.com/s?wd=a&rsv_spt=1&rsv_iqid=0xf7c5670c000072b3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=a&rsp=5&inputT=946&rsv_sug4=998',
                type: 'webpage',
            }
        ]
    }
]