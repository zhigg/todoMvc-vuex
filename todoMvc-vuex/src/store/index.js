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
  unComplete (state) {
    return state.todoList.filter(item => !item.complete).length
  }
}

const mutations ={
  addList (state,payload) {
    state.todoList.push({
      id: ++state.index,
      text: payload.text,
      complete: false
    })
  },
  deleteList (state,payload) {
    let index = state.todoList.findIndex(item => item.id == payload.id)
    state.todoList.splice(index,1)
  },
  changeState (state,payload) {
    let index = state.todoList.findIndex(item => item.id == payload.id)
    state.todoList[index].complete = !state.todoList[index].complete
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