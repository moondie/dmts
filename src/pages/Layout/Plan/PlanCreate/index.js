/**
 * 创建分析计划页面。
 */
import React, {useEffect, useState} from 'react';
import {Button, Divider, Form, Input, InputNumber, List, message, Select, Typography} from "antd";
import {useStore} from "@/store";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;
const {Option} = Select;
const {TextArea} = Input;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const PlanCreate = () => {
    const {scanStore} = useStore();
    const navigate = useNavigate();
    // TODO: 这里的user_name是否应该这样传参存疑。
    const {userStore} = useStore();

    const [profileList, setProfileList] = useState([]);
    const [profileContent, setprofileContent] = useState('');

    useEffect(() => {
        (async () => {
            userStore.getProfile().catch(err => message.error(err.response.data.msg));
            scanStore.getProfiles().catch(err => message.error(err.response.data.msg))
                .then(res => {
                    const profile_list = [];
                    for (const profile of res?.profiles) {
                        profile_list.push(<Select.Option value={profile}>{profile}</Select.Option>);
                    }
                    setProfileList(profile_list);
                });
        })();
    }, [])

    const onFinish = ({target_url, profile_name, max_scan_time}) => {
        scanStore.newScan({
            target_url,
            profile_name,
            max_scan_time,
        }).then(success => {
            message.success('添加成功，分析任务运行中……');
            navigate('/plan');
        }).catch(err => {
            message.error(err.response.data.msg)
        })

    }

    const onChangeProfile = (profile_name) => {
        scanStore.getProfile(profile_name).catch(err => message.error(err.response.data.msg))
            .then(res => {
                setprofileContent(res.data)
            })
    }

    return (
        <>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
            }}>
                <Title level={4} style={{
                    margin: 8,
                    padding: 8,
                }}>
                    新建Web扫描渗透分析任务：
                </Title>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    initialValues={{
                        max_scan_time: 600,
                    }}
                    colon={false}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Divider orientation="left" style={{fontWeight: 'bold'}}>基础设置</Divider>
                    <Form.Item
                        label="起始URL："
                        name="target_url"
                        rules={[{required: true, message: '请输入起始URL！'}]}>
                        <Input addonBefore={selectBefore}
                               placeHolder={'请输入待扫描网站域名/IP地址:端口，如：192.168.1.1:8000'}/>
                    </Form.Item>

                    <Form.Item
                        label="扫描时间上限："
                        name="max_scan_time"
                        rules={[{required: true, message: '请输入正确的扫描时间秒数！'}, {type: 'integer'}]}>
                        <InputNumber step="60" addonAfter={'秒'} min={0}
                                     placeHolder={'如：600'}/>
                    </Form.Item>

                    <Form.Item
                        label="扫描脚本选择："
                        name="profile_name"
                        rules={[{required: true, message: '请选择扫描脚本！'}]}>
                        <Select onChange={onChangeProfile}>
                            {profileList}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="扫描脚本预览："
                    >
                        <TextArea
                            style={{color: 'black'}}
                            value={profileContent} autoSize={{minRows: 6, maxRows: 12}} disabled={true}/>
                    </Form.Item>


                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">新建渗透分析任务并运行</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default PlanCreate;