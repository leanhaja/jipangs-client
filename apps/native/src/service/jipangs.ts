import { AxiosPromise } from 'axios'

import { PostUserAlarm, PostUserInfo } from '../types/axios'
import Axios from '../utils/axios'

export default {
  /**
   * 개인별 동의 여부를 가저오는 api
   */
  getUserAlarm() {
    return Axios({
      method: 'get',
      url: '/api/v1/user/alarm',
    })
  },

  /**
   * 유저 정보를 가저오는 api
   * @returns 유저 정보
   */
  getUserInfo() {
    return Axios({
      method: 'get',
      url: '/api/v1/user',
    })
  },

  /**
   * 개인별 동의 여부를 수정하는 api
   * @returns
   */
  postUserAlarm(): AxiosPromise<PostUserAlarm> {
    return Axios({
      method: 'post',
      url: '/api/v1/user/alarm',
    })
  },

  /**
   * 유저 추가 정보를 입력하는 api
   * @returns
   */
  postUserInfo(): AxiosPromise<PostUserInfo> {
    return Axios({
      method: 'post',
      url: '/api/v1/user',
    })
  },
}
