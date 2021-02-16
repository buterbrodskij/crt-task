import {ActionContext} from 'vuex';
import { GetLolerem } from "@/api/GetLolerem";
import parseText from "@/utils/parseText";
import { ILorem, IStore } from "../../../interfaces/lorem.interface";
import { AxiosResponse } from "axios";
import { IAppState } from "../../../interfaces/app-state.interface";
type loremStore = ActionContext<IStore.IState, IAppState>;

export default {
  namespaced: true,

  state: {
    textHistory: []
  },

  mutations: {
    addText(state: IStore.IState, text: ILorem) {
      if (state.textHistory.length >= 2) {
        state.textHistory.shift();
        state.textHistory.push(text);
      } else {
        state.textHistory.push(text);
      }
    }
  },

  actions: {
    async getLorem({ commit }: loremStore, count: number) {
      try {
        const { data }: AxiosResponse<string> = await new GetLolerem().send(count);
        commit('addText', {parsed: parseText(data), original: data});
      } catch (error) {
        console.error(error);
      }
    }
  }
};
