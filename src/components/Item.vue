<template>
  <div v-if="editing" class="todo-item">
    <input class="form-control input-sm" type="text"
     v-focus="editing"
     :value="todo.text"
     @keyup.enter="doneEdit"
     @keyup.esc="cancelEdit"
     @blur="doneEdit">
  </div>
  <div v-else class="todo-item" @dblclick="editing = true">
    {{todo.text}}
    <button class="btn btn-default btn-xs dlt" @click="removeTodo(todo)">删除</button>
    <span class="btn btn-success btn-xs done" v-if="todo.done" @click="toggleTodo(todo)">已完成</span>
    <span class="btn btn-danger btn-xs done" v-else @click="toggleTodo(todo)">未完成</span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['todo'],
    data () {
      return {
        editing: false
      };
    },
    directives: {
      focus (el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            el.focus();
          });
        }
      }
    },
    methods: {
      ...mapActions([
        'removeTodo',
        'toggleTodo',
        'saveTodo'
      ]),
      doneEdit (e) {
        const text = e.target.value;
        const { todo } = this;
        if (!text) {
          this.removeTodo({
            todo
          });
        } else if (this.editing) {
          this.saveTodo({
            todo,
            text
          });
          this.editing = false;
        }
      },
      cancelEdit (e) {
        e.target.value = this.todo.value;
        this.editing = false;
      }
    }
  };
</script>

<style scoped>
.todo-item{
  font-size: 16px;
  /*line-height: 2em;*/
  padding: 8px 10px;
}
.todo-item:nth-child(odd){
  background: #f8f8f8;
}
/*.todo-item:hover{
  background: rgb(147, 153, 159);
  color: #fff;
}*/
.todo-item .done{
  float: right;
}
.todo-item .dlt{
  float: right;
  margin-left: 10px;
}
.todo-item::after{
  content: "";
  clear: both;
  display: table;
}
</style>
