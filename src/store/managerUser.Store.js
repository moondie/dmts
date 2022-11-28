import {makeAutoObservable} from 'mobx'
import {http} from '@/utils'
import UserStore from "@/store/user.Store";

class ManagerUserStore {//管理员用户的用户管理接口
    userList = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllUsers = () => {//管理员获得所有
        http.get('/users/getAllUsers').then(users => {

        }).catch(err => {

        })
    }
}

export default ManagerUserStore