import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth.module';
import { user } from './user.module';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    },
    getters: {},
    mutations: {

    },
    actions: {

    },

    modules: {
        auth,
        user
    }
});