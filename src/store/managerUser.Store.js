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
            this.userList = []
            users.map(user => {
                this.userList.push({
                    name: user.name,
                    role: user.role,
                    description: user.description
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export default ManagerUserStore