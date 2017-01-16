import * as types from './mutation-types'
import { router } from '../router'

import api from '../api/user'

export const loginUser = ({ commit }, user) => {
  console.log('i am in an login action')
  api.login(user)
    .then((user) => console.log('USER LOGGED IN : ', user))
    .catch((err) => console.error('Error logging in: ', err))
}
