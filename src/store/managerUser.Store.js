import {makeAutoObservable, values} from 'mobx'
import {http} from '@/utils'

class ManagerUserStore {//管理员用户的用户管理接口
    userList = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllUsers = () => {//管理员获得所有用户信息
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
    changeDescription = async (values) => {//管理员修改用户描述
        return await http.post('/users/changeDescription', values)
    }
    changePassword = async (values) => {
        return await http.post('/users/changePassword', values)
    }
    addUser= async (values) => {
        return await http.post('/users/addUser', values)
    }
    removeUser= async (values) => {
        return await http.post('/users/removeUser', values)
    }
}

export default ManagerUserStore