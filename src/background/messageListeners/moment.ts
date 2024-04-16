import type { APIMAP } from '../utils'
import { AHS } from '../utils'
import API from '~/background/msg.define'

const API_MOMENT: APIMAP = {
  [API.MOMENT.GET_TOP_BAR_NEW_MOMENTS_COUNT]: {
    url: 'https://api.bilibili.com/x/web-interface/dynamic/entrance',
    _fetch: {
      method: 'get',
    },
    params: {},
    afterHandle: AHS.J_D,
  },
  [API.MOMENT.GET_TOP_BAR_NEW_MOMENTS]: {
    url: 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new',
    _fetch: {
      method: 'get',
    },
    params: {
      uid: '',
      type_list: '268435455',
    },
    afterHandle: AHS.J_D,
  },
  [API.MOMENT.GET_TOP_BAR_HISTORY_MOMENTS]: {
    url: 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history',
    _fetch: {
      method: 'get',
    },
    params: {
      uid: '',
      type_list: '268435455',
      offset_dynamic_id: '',
    },
    afterHandle: AHS.J_D,
  },
  [API.MOMENT.GET_TOP_BAR_LIVE_MOMENTS]: {
    url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/FeedList',
    _fetch: {
      method: 'get',
    },
    params: {
      page: 1,
      pagesize: 10,
    },
    afterHandle: AHS.J_D,
  },
  [API.MOMENT.GET_MOMENTS]: {
    url: 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all',
    _fetch: {
      method: 'get',
    },
    params: {
      type: 268435455,
      offset: 0,
      update_baseline: 0,
    },
    afterHandle: AHS.J_D,
  },

}

export default API_MOMENT
