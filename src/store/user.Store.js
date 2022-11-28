import {makeAutoObservable} from 'mobx'
import {http} from '@/utils'

class UserStore {
    userInfo = {}

    constructor() {
        makeAutoObservable(this)
    }

    getUserInfo = () => {
        // 调用接口获取数据
        http.get('/users/getProfile').then(user => {
            this.userInfo = {
                name: user.name,
                description: user.description
            }
        }).catch(err => {
            console.log(err)
        })
    }
    getTestData = () => {
        http.get('/getTestData').then(res => {
            // http.get('/tokenOvertime').then(res => {
            console.log(res)
        })
    }
}

export default UserStore