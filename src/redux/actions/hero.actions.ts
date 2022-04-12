import {
  FETCHING_HERO_LIST,
  FETCH_HERO_LIST_SUCCEED,
  RESET_HERO_LIST,
} from '../types';

// APIs
import { fetchHeroList, HeroInfo, HeroListQuery } from '../../api/hero.api';
import { Action, Dispatch } from 'redux';

export type AddListHeroAction = {
  type: string;
  payload: Array<HeroInfo> | null;
  resetList: boolean;
};
export function addHeroes(query: HeroListQuery, reset = true) {
  return async (dispatch: Dispatch<AddListHeroAction>) => {
    dispatch({
      type: FETCHING_HERO_LIST,
      payload: null,
      resetList: reset,
    });
    const res = await fetchHeroList(query);
    dispatch({
      type: FETCH_HERO_LIST_SUCCEED,
      payload: res,
      resetList: reset,
    });
  };
}

export function resetHeroes(): Action {
  return {
    type: RESET_HERO_LIST,
  };
}
