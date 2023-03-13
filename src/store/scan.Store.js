import {makeAutoObservable, runInAction} from "mobx";
import {http} from "@/utils";

class ScanStore {
    getScanList = async () => {
        return await http.get("/scan/getScanList");
    };
    constructor() {
        makeAutoObservable(this)
    }
}

export default ScanStore;