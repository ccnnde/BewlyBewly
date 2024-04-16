import type { APIMAP } from '../utils'
import { AHS } from '../utils'
import API from '~/background/msg.define'

const API_NOTIFICATION: APIMAP = {
  [API.NOTIFICATION.GET_UNREAD_MSG]: {
    url: 'https://api.bilibili.com/x/msgfeed/unread',
    _fetch: {
      method: 'get',
    },
    params: {
      build: 0,
      mobi_app: 'web',
    },
    afterHandle: AHS.J_D,
  },
  [API.NOTIFICATION.GET_UNREAD_DM]: {
    url: 'https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread',
    _fetch: {
      method: 'get',
    },
    params: {
      build: 0,
      mobi_app: 'web',
      unread_type: 0,
    },
    afterHandle: AHS.J_D,
  },
}

export default API_NOTIFICATION
