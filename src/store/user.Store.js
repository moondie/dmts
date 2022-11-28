import {makeAutoObservable, runInAction} from 'mobx'
import {http} from '@/utils'

class UserStore {
    userInfo = {}

    constructor() {
        makeAutoObservable(this)
    }

    getUserInfo = async () => {
        // 调用接口获取数据
        const user = await http.get('/users/getProfile')
        this.userInfo = {
            name: user.name,
            role: user.role,
            description: user.description
        }
    }

    getTestData = () => {
        http.get('/getTestData').then(res => {
            // http.get('/tokenOvertime').then(res => {
            console.log(res)
        })
    }
}

export default UserStore