import React from "react";
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const FeatureLexicalPage = () => {
    const code = `import java.util.*;

    public class A_Star_Search_Algorithm {

        PriorityQueue<Nodes> live_nodes_1;
        PriorityQueue<Nodes> live_nodes_2;

       // Vector<Nodes> dead_nodes;

        HashMap dead_nodes;
        HashMap search_live;

        int total_cost;
        int expanded_nodes_count;

        public A_Star_Search_Algorithm(Nodes primary)
        {
            live_nodes_1= new PriorityQueue<Nodes>(new Node_comparator_displacement());
            live_nodes_2= new PriorityQueue<Nodes>(new Node_comparator_Manhattan());

            //dead_nodes=new Vector<>();
            dead_nodes=new HashMap<>(1000000,.5f);
            dead_nodes.clear();

            search_live=new HashMap<>(1000000,.5f);
            search_live.clear();

            live_nodes_1.add(primary);
            live_nodes_2.add(primary);

            total_cost=0;
            expanded_nodes_count=0;

        }

        Nodes search_using_displacement_heuristics()
        {
            while(!live_nodes_1.isEmpty())
            {
                //System.out.println("hi there");
                Nodes node=live_nodes_1.poll();

                if(dead_nodes.containsKey(node))
                    continue;
                //System.out.println(live_nodes_1.size());

                //System.out.println(node.displacement_heuristics()+node.getG_cost());
                //System.out.println(node.displacement_heuristics());
                if(node.getParent_node()==null)
                {
                    node.setF_value(0);
                }
                /*else
                {
                    node.setF_value(node.getParent_node().getG_cost()+1+node.displacement_heuristics());
                }*/

                if(node.final_state_or_not())
                {
                    total_cost=node.getG_cost();
                    expanded_nodes_count=dead_nodes.size();
                    return node;
                }

                Vector<Nodes> children= node.create_children_nodes();

                int x=node.getG_cost();

                for(Nodes n: children)
                {
                    n.setG_cost(x+1);
                    n.setParent_node(node);
                    n.setF_value(n.getG_cost()+n.displacement_heuristics());

    /*
                    /*if(live_nodes_1.contains(n) )
                    {
                        Iterator value=live_nodes_1.iterator();
                        while (value.hasNext())
                        {
                            Nodes qnode=(Nodes) value.next();
                            if(qnode.equals(n) && qnode.getG_cost()<n.getG_cost())
                            {
                                break;
                            }
                        }

                    }
                    if(dead_nodes.containsKey(n))
                    {
                        int hashN=n.hashCode();
                        Nodes hnode=(Nodes) dead_nodes.get(hashN);
                        if(hnode.getG_cost()>n.getG_cost())
                        {
                            live_nodes_1.add(n);
                        }
                    }*/
                    /*
                    if(!live_nodes_1.contains(n) && !dead_nodes.containsKey(n))
                    {
                        live_nodes_1.add(n);

                    }
                    else if(live_nodes_1.contains(n) )
                    {
                        Iterator value=live_nodes_1.iterator();
                        while (value.hasNext())
                        {
                            Nodes qnode=(Nodes) value.next();
                            if(qnode.equals(n) && qnode.getG_cost()>n.getG_cost())
                            {
                                live_nodes_1.remove(qnode);
                                live_nodes_1.add(n);
                                break;
                            }
                        }

                    }
                    */

                    if(!dead_nodes.containsKey(n))
                    {
                        n.setG_cost(x+1);
                        n.setParent_node(node);
                        //if(!live_nodes_1.contains(n))
                        {
                            live_nodes_1.add(n);
                        }
                    }


                }
                dead_nodes.put(node,node.hashCode());
            }
            return null;
        }

        Nodes search_using_Manhattan_heuristics()
        {
            while(!live_nodes_2.isEmpty())
            {
                //System.out.println("hi there");
                Nodes node=live_nodes_2.poll();

                if(dead_nodes.containsKey(node))
                    continue;
                //System.out.println(live_nodes_1.size());

                //System.out.println(node.displacement_heuristics()+node.getG_cost());
                //System.out.println(node.displacement_heuristics());
                if(node.getParent_node()==null)
                {
                    node.setF_value(0);
                }
                /*else
                {
                    node.setF_value(node.getParent_node().getG_cost()+1+node.displacement_heuristics());
                }*/

                if(node.final_state_or_not())
                {
                    total_cost=node.getG_cost();
                    expanded_nodes_count=dead_nodes.size();
                    return node;
                }

                Vector<Nodes> children= node.create_children_nodes();

                int x=node.getG_cost();

                for(Nodes n: children)
                {
                    n.setG_cost(x+1);
                    n.setParent_node(node);
                    n.setF_value(n.getG_cost()+n.displacement_heuristics());

    /*
                    /*if(live_nodes_1.contains(n) )
                    {
                        Iterator value=live_nodes_1.iterator();
                        while (value.hasNext())
                        {
                            Nodes qnode=(Nodes) value.next();
                            if(qnode.equals(n) && qnode.getG_cost()<n.getG_cost())
                            {
                                break;
                            }
                        }

                    }
                    if(dead_nodes.containsKey(n))
                    {
                        int hashN=n.hashCode();
                        Nodes hnode=(Nodes) dead_nodes.get(hashN);
                        if(hnode.getG_cost()>n.getG_cost())
                        {
                            live_nodes_1.add(n);
                        }
                    }*/
                    /*
                    if(!live_nodes_1.contains(n) && !dead_nodes.containsKey(n))
                    {
                        live_nodes_1.add(n);

                    }
                    else if(live_nodes_1.contains(n) )
                    {
                        Iterator value=live_nodes_1.iterator();
                        while (value.hasNext())
                        {
                            Nodes qnode=(Nodes) value.next();
                            if(qnode.equals(n) && qnode.getG_cost()>n.getG_cost())
                            {
                                live_nodes_1.remove(qnode);
                                live_nodes_1.add(n);
                                break;
                            }
                        }

                    }
                    */

                    if(!dead_nodes.containsKey(n))
                    {
                        n.setG_cost(x+1);
                        n.setParent_node(node);
                        //if(!live_nodes_1.contains(n))
                        {
                            live_nodes_2.add(n);
                        }
                    }


                }
                dead_nodes.put(node,node.hashCode());
            }
            return null;
        }

        void print_everything(Nodes goal)
        {
            System.out.println("Path cost: "+total_cost);
            System.out.println("Expanded nodes count: "+expanded_nodes_count);
            System.out.println();
        }

        void print_path(Nodes goal)
        {
            if(goal==null) return;
            print_path(goal.getParent_node());
            goal.print_a_node();
            //Nodes s;
            //if(goal.equals(s.getFinal_puzzle_board()))
            System.out.println("   |");
            System.out.println("   |");
            System.out.println("   V");


            System.out.println();
        }


    }

    class Node_comparator_displacement implements Comparator<Nodes>
    {
        @Override
        public int compare(Nodes o1, Nodes o2) {

            int f1=o1.getG_cost()+o1.displacement_heuristics();
            int f2=o2.getG_cost()+o2.displacement_heuristics();

            if(f1<f2) return -1;
            else if(f1>f2) return 1;

            return 0;
        }
    }

    class Node_comparator_Manhattan implements Comparator<Nodes>
    {
        @Override
        public int compare(Nodes o1, Nodes o2) {

            int f1=o1.getG_cost()+o1.Manhattan_heuristics();
            int f2=o2.getG_cost()+o2.Manhattan_heuristics();

            if(f1<f2) return -1;
            else if(f1>f2) return 1;


            return 0;
        }
    }`
    const data = {
        nodes: [
            {
                id: "A_Star_Search_Algorithm.java",
                label: "A_Star_Search_Algorithm.java",
                socialAttributes: [
                ],
                // 为分析节点单独设置颜色,覆盖 default 配置
                style: {
                    fill: "#32E0C4"
                },
                labelCfg: {
                    style: {
                        fill: "#32E0C4"
                    }
                }
            },
            {
                id: "词汇分布",
                label: "词汇分布",
                socialAttributes: [
                    {
                        key: "import频率",
                        value: "1",
                    },
                    {
                        key: "live_nodes_1频率",
                        value: "1",
                    },
                    {
                        key: "live_nodes_2频率",
                        value: "1",
                    },
                    {
                        key: "",
                        value: ""
                    },
                ]
            },
            {
                id: "关键字分布",
                label: "关键字分布",
                socialAttributes: [
                    {
                        key: "import频率",
                        value: "1",
                    },
                    {
                        key: "public频率",
                        value: "4",
                    },
                    {
                        key: "class频率",
                        value: "3",
                    },
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "三元运算符分布",
                label: "三元运算符分布",
                socialAttributes: [
                    {
                        key: "三元运算符数量",
                        value: "0",
                    }
                ]
            },
            {
                id: "注释分布",
                label: "注释分布",
                socialAttributes: [
                    {
                        key: "注释字符数量",
                        value: "3912",
                    }
                ]
            },
            {
                id: "注释类型分布",
                label: "注释类型分布",
                socialAttributes: [
                    {
                        key: "单行注释",
                        value: "14",
                    },
                    {
                        key: "多行注释",
                        value: "0",
                    },
                    {
                        key: "文档性注释",
                        value: "0",
                    }
                ]
            },
            {
                id: "字面量分布",
                label: "字面量分布",
                socialAttributes: [
                    {
                        key: "字面量频率",
                        value: "28",
                    }
                ]
            },
            {
                id: "函数分布",
                label: "函数分布",
                socialAttributes: [
                    {
                        key: "函数数量",
                        value: "6",
                    },
                    {
                        key: "函数平均长度",
                        value: "39"
                    }
                ]
            },
            {
                id: "预处理器指令分布",
                label: "预处理器指令分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "函数参数分布",
                label: "函数参数分布",
                socialAttributes: [
                    {
                        key: "函数参数个数",
                        value: "6",
                    },
                    {
                        key: "函数参数平均个数",
                        value: "1"
                    }
                ]
            },
            {
                id: "行长度分布",
                label: "行长度分布",
                socialAttributes: [
                    {
                        key: "行长度 20 个数",
                        value: "4",
                    },
                    {
                        key: "行长度 1 个数",
                        value: "54",
                    },
                    {
                        key: "行长度 39 个数",
                        value: "5",
                    },
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
            {
                id: "行字符数量分布",
                label: "行字符数量分布",
                socialAttributes: [
                    {
                        key: "行长度 20 个数",
                        value: "4",
                    },
                    {
                        key: "行长度 1 个数",
                        value: "54",
                    },
                    {
                        key: "行长度 39 个数",
                        value: "5",
                    },
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
            {
                id: "命名规范分布",
                label: "命名规范分布",
                socialAttributes: [
                    {
                        key: "驼峰命名数量",
                        value: "12",
                    },
                    {
                        key: "下划线命名数量",
                        value: "10",
                    },
                ]
            },
            {
                id: "变量位置分布",
                label: "变量位置分布",
                socialAttributes: [
                    {
                        key: "行,列",
                        value: "41,38",
                    },
                    {
                        key: "行,列",
                        value: "65,26",
                    },
                    {
                        key: "行,列",
                        value: "67,16",
                    },
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "函数调用类型分布",
                label: "函数调用类型分布",
                socialAttributes: [
                    {
                        key: "匿名函数个数",
                        value: "0",
                    }
                ]
            },
            {
                id: "新旧函数分布",
                label: "新旧函数分布",
                socialAttributes: [
                    {
                        key: "新式调用次数",
                        value: "0",
                    },
                    {
                        key: "旧式调用次数",
                        value: "0",
                    }
                ]
            },
            {
                id: "危险函数分布",
                label: "危险函数分布",
                socialAttributes: [
                    {
                        key: "危险函数调用数量",
                        value: "0",
                    }
                ]
            },
            {
                id: "函数长度分布",
                label: "函数长度分布",
                socialAttributes: [
                    {
                        key: "函数平均长度",
                        value: "39"
                    }
                ]
            },
            {
                id: "英语水平分布",
                label: "英语水平分布",
                socialAttributes: [
                    {
                        key: "英文单词分布",
                        value: "live, nodes, search, ...",
                    },
                    {
                        key: "英语水平",
                        value: "3 (1-5)",
                    },
                ]
            },
            {
                id: "内存申请方式分布",
                label: "内存申请方式分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "变量类型分布",
                label: "变量类型分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "权限控制符分布",
                label: "权限控制符分布",
                socialAttributes: [
                    {
                        key: "default权限数量",
                        value: "2",
                    },
                    {
                        key: "public权限数量",
                        value: "4",
                    },
                    {
                        key: "private权限数量",
                        value: "0",
                    },
                    {
                        key: "protected权限数量",
                        value: "0",
                    }
                ]
            },
        ],
        edges: [
            {
                source: "A_Star_Search_Algorithm.java",
                target: "词汇分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "注释分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "关键字分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "三元运算符分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "注释类型分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "字面量分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "函数分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "预处理器指令分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "函数参数分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "行长度分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "行字符数量分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "命名规范分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "变量位置分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "函数调用类型分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "新旧函数分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "危险函数分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "函数长度分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "英语水平分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "内存申请方式分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "变量类型分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "权限控制符分布",
            }
        ]
    }
    return (
        <ProCard
            title="空间态特征（代码词汇特征）"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard>
                <AttributeGraph data={data}></AttributeGraph>
            </ProCard>
            <ProCard>
                <SyntaxHighlighter language="java" style={docco} showLineNumbers>
                    {code}
                </SyntaxHighlighter>
            </ProCard>
        </ProCard>
    )
}

export default FeatureLexicalPage