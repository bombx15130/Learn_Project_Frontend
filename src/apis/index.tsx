import utils from '@utils'
import {UserLogin} from '@types'

export default {
  login: (userLogin: UserLogin) => {
    const response = utils.request.instance.post('user/login', userLogin)
    return response
  }
}