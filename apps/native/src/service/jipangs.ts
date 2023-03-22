import { AxiosPromise } from 'axios'

import { instance as Axios } from '../axios'
import { NonPageableResponse, PageableResponse } from '../axios/types'
import {
  GetDeleteUserResponse,
  GetMajorsResponse,
  GetUniversitiesResponse,
  GetUserInfoResponse,
  PostUserAlarmReponse,
  PostUserInfoResponse,
  UserInfo,
  GetCardParams,
} from '../types/axios'
import { createQuery } from '../utils'

import { Card } from 'src/types'

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
   * 활동 정보를 얻어오는 api
   * @returns 요청 완료된 pageable 카드(활동) 정보
   */
  getActivities({
    activityType,
    cardType,
    page = 0,
    size = 20,
  }: GetCardParams): AxiosPromise<PageableResponse<Card[]>> {
    const query = createQuery([
      ['page', `${page}`],
      ['size', `${size}`],
    ])

    return Axios({
      method: 'get',
      url: `/api/v1/card-management/card/${activityType}/${cardType}?${query}`,
    })
  },

  /** name으로 검색한 학과를 가져오는 api
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
   * 검색된 활동 정보를 얻어오는 api
   * @returns 요청 완료된 pageable 카드(활동) 정보
   */
  getSearchedCards(
    keyword: string,
    page = 0,
    size = 20
  ): AxiosPromise<PageableResponse<Card[]>> {
    const query = createQuery([
      ['page', `${page}`],
      ['size', `${size}`],
    ])

    return Axios({
      method: 'get',
      url: `/api/v1/card-management/card/keyword/${keyword}?${query}`,
    })
  },

  /** name으로 검색한 대학을 가져오는 api
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
   * 유저가 스크랩(북마크)한 정보를 가져오는 api
   * @returns 요청 완료된 pageable 카드(활동) 정보
   */
  getUserScarp({
    activityType,
    page = 0,
    size = 20,
  }: Omit<GetCardParams, 'cardType'>): AxiosPromise<PageableResponse<Card[]>> {
    const query = createQuery([
      ['page', `${page}`],
      ['size', `${size}`],
    ])

    return Axios({
      method: 'get',
      url: `/api/v1/card-management/card/${activityType}/scrap?${query}`,
    })
  },

  /**
   * 스크랩을 요청하는 api
   * @returns 요청 완료된 카드 정보
   */
  postBookMark(cardId: number): AxiosPromise<NonPageableResponse<Card>> {
    return Axios({
      data: { cardId },
      method: 'post',
      url: '/api/v1/scrap-management/scrap',
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
