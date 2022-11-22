import {makeAutoObservable} from 'mobx'
import {http} from '@/utils'

class UserStore {
    userInfo = {}

    constructor() {
        makeAutoObservable(this)
    }

    getUserInfo = () => {
        // 调用接口获取数据
        // const res = await http.get('/user/profile')
        // this.userInfo = res.data
        this.userInfo = {
            'name': 'ewds'
        }
    }
}

export default UserStore