import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { observer } from 'mobx-react-lite'
import { Header } from "antd/es/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";
import { useStore } from "@/store";
import { useEffect } from "react";

const EWDSHeader = () => {
    const navigate = useNavigate()
    const onConfirm = () => {
        // 退出登录 删除token 跳回到登录
        loginStore.loginOut()
        navigate('/login')
    }
    const { userStore, loginStore } = useStore()
    useEffect(() => {
        userStore.getProfile().catch(err => console.log(err));
    }, [])
    return (
        <Header className="header">
            <div className="logo" />
            <div className="user-info">
                <span className="user-name">
                    <Link to='/user/settings' style={{ color: '#fff' }}>
                        <UserOutlined />
                        {userStore.userInfo.name}
                    </Link>
                </span>
                <span className="user-logout">
                    <Popconfirm placement="bottomRight" onConfirm={onConfirm} title="是否确认退出？" okText="退出"
                        cancelText="取消">
                        <LogoutOutlined />
                        退出
                    </Popconfirm>
                </span>
            </div>
        </Header>
    )
}
export default observer(EWDSHeader)