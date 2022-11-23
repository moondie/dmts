// login module
import {makeAutoObservable} from 'mobx'
import {http, setToken, getToken, removeToken} from '@/utils'

class LoginStore {
    token = getToken() || ''

    constructor() {
        // 响应式
        makeAutoObservable(this)
    }

    getToken = async ({name, password}) => {
        // 调用登录接口
        const res = await http.post('/auth/login', {
            name, password
        })
        this.token = res.data.token
        // this.token = '123'
        // 存入ls
        setToken(this.token)
    }
    // 退出登录
    loginOut = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore