import { observer } from 'mobx-react-lite'
import { Header } from "antd/es/layout/layout";

const DMTSHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
        </Header>
    )
}
export default observer(DMTSHeader)