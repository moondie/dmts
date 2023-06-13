import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { observer } from 'mobx-react-lite'
import { Header } from "antd/es/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";
import { useStore } from "@/store";
import { useEffect } from "react";

const EWDSHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
        </Header>
    )
}
export default observer(EWDSHeader)