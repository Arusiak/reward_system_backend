import UserService from '../services/user.service';

const initialState = {
    available: []
};

export const user = {
    namespaced: true,
    state: initialState,
    actions: {
        getAvailableUsers({ commit }, id){
            UserService.getAvailableUsers(id)
                .then(
                    data => {
                        console.log('data',data)
                        commit('getAvailableUsers', data);
                        return Promise.resolve(data);
                    },
                )
        }
    },
    mutations: {
        getAvailableUsers(state,payload) {
            state.available = payload
        }
    }
};