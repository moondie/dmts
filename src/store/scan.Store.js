import {makeAutoObservable, runInAction} from "mobx";
import {http} from "@/utils";

class ScanStore {
    getProfiles = async () => {
        return await http.get("/scan/getProfiles");
    };

    getProfile = async (profile_name) => {
        return await http.get(`/scan/getProfile?name=${profile_name}`);
    };

    getScanList = async () => {
        return await http.get("/scan/getScanList");
    };

    newScan = async (values) => {
        return await http.post("/scan/newScan", values);
    };

    stopScan = async (values) => {
        return await http.post("/scan/stopScan", values);
    };

    getLogs = async () => {
        return await http.get("/scan/getLogs");
    };

    getStatus = async () => {
        return await http.get("/scan/status");
    };

    getScanDetails = async (scanId) => {
        return await http.get(`/scan/getScanDetails/?scanId=${scanId}`);
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default ScanStore;