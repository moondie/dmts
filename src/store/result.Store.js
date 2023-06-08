/**
 * 实现任务列表的增删改查操作
 */


import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class ResultStore {

    constructor() {
        makeAutoObservable(this)
    }
}

export default ResultStore;