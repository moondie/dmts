/**
 *  分析任务列表页面的内容。用antd的高级列表ProList实现。
 *  列表标题：分析任务名 name
 *  列表描述：分析任务类型 WEB/CGI
 *  列表内容：
 *  列表操作：
 *
 */

import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from '@/store';
import TaskContentList from './TaskContentList';


const TaskContent = () => {
    const { taskStore } = useStore()
    useEffect(() => {
        taskStore.getTaskList()
    }, [])
    return (
        <>
            <div style={{
                margin: 8,
                padding: 8,
                backgroundColor: '#fff',
                borderRadius: 16,
                overflow: "auto",
            }}>
                <TaskContentList data={taskStore.getTaskListInfo()}></TaskContentList>
            </div>
        </>
    );
}

export default observer(TaskContent)