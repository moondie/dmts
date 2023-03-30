import {useParams} from "react-router-dom";
import {Spin} from "antd";
import {useEffect, useState} from "react";
import {useStore} from "@/store";
import moment from "moment-timezone";
import BasicDescriptions from "@/pages/Layout/Plan/PlanDetails/BasicDescriptions";
import VulnDetails from "@/pages/Layout/Plan/PlanDetails/VulnDetails";
import RequestList from "@/pages/Layout/Plan/PlanDetails/RequestList";

const getVulnsStatistics = (vulns) => {
    let res = {
        high: 0,
        medium: 0,
        low: 0
    };
    for (let vuln of vulns) {
        switch (vuln.severity) {
            case "Severe":
                ++res.high;
                break;
            case "High":
                ++res.high;
                break;
            case "Medium":
                ++res.high;
                break;
            case "Low":
                ++res.high;
                break;
            default:
                ++res.high;
        }
    }

    return res;
};

const getRequestDetails = (urls0) => {
    const urls = [];
    const resMap = new Map();
    for (let urlString of urls0) {
        const urlObj = new URL(urlString);
        const {pathname} = urlObj;
        const resName = pathname.split("/").slice(-1)[0];
        let resType = resName.split(".").slice(-1)[0];
        if (!resMap.has(resType)) {
            resMap.set(resType, 1);
        } else {
            const cnt = resMap.get(resType);
            resMap.set(resType, cnt + 1);
        }
        if (resType === "html" || resType === "" || resType === "php" || resType === "htm" || resType === "jsp") {
            resType = "webpage";
        } else {
            resType = "static";
        }
        let urlItem = {
            "url": urlString,
            method: "GET",
            type: resType
        };
        urls.push(urlItem);
    }
    const chartOptionData = [];
    for (let pair of Array.from(resMap)) {
        let item = {
            name: pair[0] === "" ? "网页" : pair[0],
            value: pair[1]
        };
        chartOptionData.push(item);
    }
    return {
        "urls": urls,
        "chartOptionData": chartOptionData
    };
};
const PlanDescriptions = (props) => {
    const {scanId, setLoading} = props.props;
    const {scanStore,chartStore} = useStore();
    const [details, setDetails] = useState({
        result: {logs: [], urls: [], vulns: []},
        scanId: "加载中",
        startTime: "加载中",
        status: "加载中",
        targetUrl: "加载中",
        userName: "加载中",
        vulnsStatistics: {
            high: 0,
            medium: 0,
            low: 0
        }, requestDetails: {
            "urls": [],
            "chartOptionData": []
        }
    });
    const statusDict = {
        "Stopped": "正常停止",
        "Halted": "用户手动停止",
        "Timeout": "超时停止"
    };
    useEffect(() => {
        scanStore.getScanDetails(scanId).then(res => {//在这里更新所有漏洞详细信息
            res.startTime = moment.tz(Number(res.startTime), "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
            res.status = statusDict[res.status];
            res.vulnsStatistics = getVulnsStatistics(res.result.vulns);
            res.requestDetails = getRequestDetails(res.result.urls);
            chartStore.setChartOptionData(res.requestDetails.chartOptionData)
            //console.log(res);
            setDetails(res);
            setLoading(false);
        });
    }, []);
    return (
        <>
            <BasicDescriptions props={{"details": details}}/>
            <VulnDetails props={{"details": details}}/>
            <RequestList props={{"details": details}}/>
        </>
    );
};

const PlanDetails = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const {scanId} = params;
    return (
        <Spin spinning={loading}>
            <PlanDescriptions props={{"scanId": scanId, "setLoading": setLoading}}/>
        </Spin>);
};
export default PlanDetails;
