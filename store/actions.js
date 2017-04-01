import * as types from './mutation-types';

export const addTodo = ({ commit }, text) => {
  commit({
    type: types.ADD_TODO,
    text
  });
};

export const removeTodo = ({ commit }, todo) => {
  commit({
    type: types.REMOVE_TODO,
    todo
  });
};

export const toggleTodo = ({ commit }, todo) => {
  commit({
    type: types.TOGGLE_TODO,
    todo
  });
};

export const saveTodo = ({ commit }, { todo, text }) => {
  commit({
    type: types.SAVE_TODO,
    todo,
    text
  });
};
