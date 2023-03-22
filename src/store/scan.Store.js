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

    getStatus = async () => {
        return await http.get("/scan/status");
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default ScanStore;