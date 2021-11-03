import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        teamList: [

            {
                id: 1,
                logo: null,
                name: 'NaVi'
            },
            {
                id: 2,
                logo: null,
                name: 'Team Spirit'
            },
            {
                id: 3,
                logo: null,
                name: 'Virtus Pro'
            },
            {
                id: 4,
                logo: null,
                name: 'Neproleteam'
            },
            {
                id: 5,
                logo: null,
                name: 'RandomTEam'
            },
            {
                id: 6,
                logo: null,
                name: 'M5'
            },
            {
                id: 7,
                logo: null,
                name: 'Seven'
            },
            {
                id: 8,
                logo: null,
                name: 'ArtStyle'
            },
        ]
        ,
    },
    mutations: {
        addNewTeam(state, payload) {
            state = state.teamList.push(payload);
        }
    },
    getters: {
        teamList: state => {
            return state.teamList
        }
    }
})