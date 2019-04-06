import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  todoList: [
    {id: 1, text: "吃饭",complete:true},
    {id: 2, text: "睡觉",complete:false},
    {id: 3, text: "打豆豆",complete:false}
  ],
  index: 3
}

const getters = {

}

const mutations ={
  addList (state,payload) {
    state.todoList.push({
      id: ++state.index,
      text: payload.text,
      complete: false
    })
  }
}
const actions = {

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store