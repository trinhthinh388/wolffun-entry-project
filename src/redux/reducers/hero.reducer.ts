import { isNil } from 'lodash';
import { HeroInfo } from '../../api/hero.api';
import { AddListHeroAction } from '../actions';
import {
  FETCH_HERO_LIST_SUCCEED,
  FETCHING_HERO_LIST,
  RESET_HERO_LIST,
} from '../types';

export type HeroReducer = {
  list: Array<HeroInfo> | null;
  fetchState: {
    list: boolean;
  };
};

const defaultState: HeroReducer = {
  list: [],
  fetchState: {
    list: false,
  },
};

export default function heroReducer(
  state: HeroReducer = defaultState,
  { type, payload, resetList }: AddListHeroAction
): HeroReducer {
  switch (type) {
    case FETCHING_HERO_LIST:
      if (resetList) {
        return {
          ...state,
          list: null,
          fetchState: { ...state.fetchState, list: true },
        };
      }
      return {
        ...state,
        fetchState: { ...state.fetchState, list: true },
      };
    case FETCH_HERO_LIST_SUCCEED:
      if (!isNil(payload))
        return {
          list: [...(state.list ?? []), ...payload],
          fetchState: { ...state.fetchState, list: false },
        };
      else
        return { ...state, fetchState: { ...state.fetchState, list: false } };
    case RESET_HERO_LIST: {
      return {
        ...state,
        list: null,
      };
    }
    default:
      return state;
  }
}
