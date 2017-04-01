import * as types from './mutation-types';

export const STORAGE_KEY = 'vuex-todolist';

export const state = {
  count: 0,
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};

export const mutations = {
  [types.ADD_TODO] (state, { text }) {
    let id = Date.now();
    let todo = {
      id,
      text,
      done: false
    };
    state.todos.push(todo);
  },

  [types.REMOVE_TODO] (state, { todo }) {
    let index = state.todos.indexOf(todo);
    if (index > -1) {
      state.todos.splice(index, 1);
    }
  },

  [types.TOGGLE_TODO] (state, { todo }) {
    let index = state.todos.indexOf(todo);
    if (index > -1) {
      state.todos[index].done = !state.todos[index].done;
    }
  },

  [types.SAVE_TODO] (state, { todo, text }) {
    todo.text = text;
  }
};
