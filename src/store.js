import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        peopleList: [{profileName: "Joice", profilePictureURL: "https://avatars2.githubusercontent.com/u/23100392?s=460&u=39ef99a6a5bee8145036e5142cb927e8faf60c1c&v=4"},
        {profileName: "Samir", profilePictureURL: "https://avatars2.githubusercontent.com/u/3485190?s=460&u=01b4f7808a7dbfccf0748d311067cb19e8bfa11b&v=4"}]
    },
    mutations: {
        addPerson(state, person) {
            state.peopleList.push(person)
        }
    }
});