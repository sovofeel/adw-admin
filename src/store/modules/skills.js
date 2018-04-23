const skills = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    skills: ({ data }) => (data)
  },
  mutations: {
    addNewSkill(state, skill) {
      state.data.push(skill)
    },
    removeSavedSkill(state, skillId) {
      state.data = state.data.filter(skill => (skill._id !== skillId))
    },
    changeSavedPercents(state, newObj) {
      state.data.forEach(skill => {
        console.log(newObj)
        skill.percents = (skill._id === newObj.id) ? newObj.new : skill.percents
      })
    }
  },
  actions: {
    fetchSkills({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/dist/About.json').then(response => {
        state.data = response.body
        // console.log(state.data)
      }, response => {
        // console.error(response)
      })
    },
    postSkills({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.post('/about', JSON.stringify(state.data))
        .then(() => {
          this.fetchSkills()
        })
    }
  }
}

export default skills
