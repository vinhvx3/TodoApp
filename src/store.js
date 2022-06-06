import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {id: 1, title: 'Create Project', complete: true},
      {id: 2, title: 'Init Vuejs', complete: false}
    ],
    query: "",
  },
  mutations: {
    markTask (state, id) {
     let index =  state.todoList.findIndex((item)=> item.id ==id);
     if(index >= 0) {
       state.todoList[index].complete = true;
     }
    },

    unmarkTask (state, id) {
      let index =  state.todoList.findIndex((item)=> item.id ==id);
      if(index >= 0) {
        state.todoList[index].complete = false;
      }
     },

     removeTask (state, id) {
      state.todoList = state.todoList.filter(item => item.id != id);
     },

     addTask (state, task) {
       if(task) {
         state.todoList.push({
          id: Math.floor(Math.random() * 1000),
          title: task,
          complete: false
         })
       }
     }

  },
});
