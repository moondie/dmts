import React from 'react';
import {Button} from "antd";
import {useStore} from "@/store";
import {Route, Routes} from "react-router-dom";

const MainContent = () => {
    const {userStore} = useStore()
    const onClickGetHandler = () => {
        userStore.getTestData()
    }
    const onClickPostHandler = () => {

    }

    return (
        <div>
            <Button type='primary' onClick={onClickGetHandler}>接口测试 get</Button>
            <Button type='primary'>接口测试 post</Button>
        </div>
    )
}
const Main = () => (
    <Routes>
        <Route path='' element={<MainContent/>}></Route>
    </Routes>
);
export default Main;