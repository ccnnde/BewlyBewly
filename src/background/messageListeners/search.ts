import type { APIMAP } from '../utils'
import { AHS } from '../utils'
import API from '~/background/msg.define'

const API_SEARCH: APIMAP = {
  [API.SEARCH.GET_SEARCH_SUGGESTION]: {
    url: 'https://s.search.bilibili.com/main/suggest',
    _fetch: {
      method: 'get',
    },
    params: {
      term: '',
      highlight: '',
    },
    afterHandle: AHS.J_D,
  },
}

export default API_SEARCH
