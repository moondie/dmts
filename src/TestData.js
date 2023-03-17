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


// /task 页面的数据
export const plan_list_task = [
    {
        id: 1,
        name: '分析计划 1',

        // 分析任务列表
        tasks: [
            // 存疑，是直接将分析任务写在分析计划中还是另写用序号连外键
            {
                id: 1,
                name: 'Web分析任务 1',
                type: 'web',
                content: {
                    create_time: '2022-11-29 12:00:00',
                    status: 'success',
                },
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

            }, {
                id: 2,
                name: 'CGI分析任务 1',
                type: 'cgi',
                content: {
                    create_time: '2022-11-29 12:00:00',
                    status: 'waiting',
                },
                config: {},
            }
        ],

    },
    {
        id: 2,
        name: '分析计划 2',
        tasks: [
            {
                id: 1,
                name: '删库跑路任务 1',
                type: 'web',
                content: {
                    create_time: '2022-11-29 12:00:00',
                    status: 'failed',
                },
                config: {
                    // 是每次运行web分析的时候重新扫描一遍url并探测漏洞，还是预先进行爬取工作并有选择地分析漏洞
                    scan_urls: [
                        'https://www.baidu.com',
                    ],
                    vulnerabilities: [
                        'xss',
                    ]
                },

            }, {
                id: 2,
                name: '删库跑路任务 2',
                type: 'cgi',
                content: {
                    create_time: '2022-11-29 12:00:00',
                    status: 'running',
                },
                config: {},
            }
        ]
    },
]


export const vulns = [{
    attributes: {
        db: 'MySQL database',
        error: 'You have an error in your SQL syntax;'
    },
    cwe_ids: ['89'],
    cwe_urls: ['https://cwe.mitre.org/data/definitions/89.html'],
    desc: 'SQL injection in a MySQL database was found at: "http://192.168.50.12:8088/vul/sqli/sqli_str.php", using HTTP method GET. The sent data was: "name=a%27b%22c%27d%22&submit=%E6%9F%A5%E8%AF%A2" The modified parameter was "name".',
    fix_effort: 50,
    fix_guidance: 'The only proven method to prevent against SQL injection attacks while\n' +
        'still maintaining full application functionality is to use\n' +
        'parameterized queries (also known as prepared statements). When\n' +
        'utilising this method of querying the database, any value supplied by\n' +
        'the client will be handled as a string value rather than part of the\n' +
        'SQL query.\n' +
        '\n' +
        'Additionally, when utilising parameterized queries, the\n' +
        'database engine will automatically check to make sure the string being\n' +
        'used matches that of the column. For example, the database engine will\n' +
        'check that the user supplied input is an integer if the database\n' +
        'column is configured to contain integers.',
    highlight: ['You have an error in your SQL syntax;'],
    href: '/scans/0/kb/0',
    id: 0,
    long_description: "Due to the requirement for dynamic content of today's web\n" +
        'applications, many rely on a database backend to store data that will\n' +
        'be called upon and processed by the web application (or other\n' +
        'programs). Web applications retrieve data from the database by using\n' +
        'Structured Query Language (SQL) queries.\n' +
        '\n' +
        'To meet demands of many\n' +
        'developers, database servers (such as MSSQL, MySQL, Oracle etc.) have\n' +
        'additional built-in functionality that can allow extensive control of\n' +
        'the database and interaction with the host operating system itself.\n' +
        "An SQL injection occurs when a value originating from the client's\n" +
        'request is used within a SQL query without prior sanitisation. This\n' +
        'could allow cyber-criminals to execute arbitrary SQL code and steal\n' +
        'data or use the additional functionality of the database server to\n' +
        'take control of more server components.\n' +
        '\n' +
        'The successful exploitation\n' +
        'of a SQL injection can be devastating to an organisation and is one of\n' +
        'the most commonly exploited web application vulnerabilities.\n' +
        '\n' +
        'This\n' +
        'injection was detected as the tool was able to cause the server to\n' +
        'respond to the request with a database related error.',
    name: 'SQL injection',
    owasp_top_10_references: [
        {
            link: 'https://www.owasp.org/index.php/Top_10_2013-A1',
            owasp_version: '2013',
            risk_id: 1
        }
    ],
    plugin_name: 'sqli',
    references: [
        {
            title: 'SecuriTeam',
            url: 'http://www.securiteam.com/securityreviews/5DP0N1P76E.html'
        },
        {
            title: 'Wikipedia',
            url: 'http://en.wikipedia.org/wiki/SQL_injection'
        },
        {
            title: 'OWASP',
            url: 'https://www.owasp.org/index.php/SQL_Injection'
        },
        {
            title: 'WASC',
            url: 'http://projects.webappsec.org/w/page/13246963/SQL%20Injection'
        },
        {
            title: 'W3 Schools',
            url: 'http://www.w3schools.com/sql/sql_injection.asp'
        },
        {
            title: 'UnixWiz',
            url: 'http://unixwiz.net/techtips/sql-injection.html'
        }
    ],
    response_ids: [193],
    severity: 'High',
    tags: ['web', 'sql', 'injection', 'database', 'error'],
    traffic_hrefs: ['/scans/0/traffic/193'],
    uniq_id: 'b70d043f-43db-4b7d-8798-a6a7257271f4',
    url: 'http://192.168.50.12:8088/vul/sqli/sqli_str.php',
    var: 'name',
    vulndb_id: 45,
    wasc_ids: [],
    wasc_urls: []
}]