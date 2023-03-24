import { AxiosPromise } from 'axios'

import {
  GetDeleteUserResponse,
  GetMajorsResponse,
  GetUniversitiesResponse,
  GetUserInfoResponse,
  PostUserAlarmReponse,
  PostUserInfoResponse,
  UserInfo,
} from '../types/axios'
import Axios from '../utils/axios'

export default {
  /**
   * 회원 탈퇴 api
   */
  deleteUser(): AxiosPromise<GetDeleteUserResponse> {
    return Axios({
      method: 'get',
      url: '/api/v1/oauth2/delete',
    })
  },

  /**
   * name으로 검색한 학과를 가져오는 api
   * @param name 검색할 학과
   * @returns
   */
  getMajorList(name: string): AxiosPromise<GetMajorsResponse> {
    return Axios({
      method: 'get',
      params: { name },
      url: '/api/v1/major-management/majors',
    })
  },

  /**
   * name으로 검색한 대학을 가져오는 api
   * @param name 검색할 대학
   * @returns
   */
  getUniversityList(name: string): AxiosPromise<GetUniversitiesResponse> {
    return Axios({
      method: 'get',
      params: { name },
      url: '/api/v1/university-management/universites',
    })
  },

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
  getUserInfo(): AxiosPromise<GetUserInfoResponse> {
    return Axios({
      method: 'get',
      url: '/api/v1/user',
    })
  },

  /**
   * 개인별 동의 여부를 수정하는 api
   * @returns
   */
  postUserAlarm(): AxiosPromise<PostUserAlarmReponse> {
    return Axios({
      method: 'post',
      url: '/api/v1/user/alarm',
    })
  },

  /**
   * 유저 추가 정보를 입력하는 api
   * @returns
   */
  postUserInfo(data: UserInfo): AxiosPromise<PostUserInfoResponse> {
    return Axios({
      data: { ...data },
      method: 'post',
      url: '/api/v1/user',
    })
  },
}
