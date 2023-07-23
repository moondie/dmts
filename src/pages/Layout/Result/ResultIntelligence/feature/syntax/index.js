import React from "react";
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const FeatureSyntaxPage = () => {
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
                id: "树最大深度",
                label: "树最大深度",
                socialAttributes: [
                    {
                        key: "深度",
                        value: "",
                    },
                ]
            },
            {
                id: "规则节点分布",
                label: "规则节点分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
            {
                id: "控制结构分布",
                label: "控制结构分布",
                socialAttributes: [
                    {
                        key: "控制结构数量",
                        value: "17",
                    },
                    {
                        key: "条件判断语句数量",
                        value: "13"
                    },
                    {
                        key: "循环语句数量",
                        value: "4"
                    }
                ]
            },
            {
                id: "词汇节点分布",
                label: "词汇节点分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
            {
                id: "控制结构深度分布",
                label: "控制结构深度分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
            {
                id: "缩写结构分布",
                label: "缩写结构分布",
                socialAttributes: [
                    {
                        key: "",
                        value: "",
                    },
                ]
            },
        ],
        edges: [
            {
                source: "A_Star_Search_Algorithm.java",
                target: "树最大深度",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "规则节点分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "控制结构分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "词汇节点分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "控制结构深度分布",
            },
            {
                source: "A_Star_Search_Algorithm.java",
                target: "缩写结构分布",
            },
        ]
    }
    return (
        <ProCard
            title="空间态特征（代码布局特征）"
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

export default FeatureSyntaxPage