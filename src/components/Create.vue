<template>
  <div class="create">
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <input class="form-control" autofocus type="text" placeholder="想做点什么？" @keyup.enter="addTodo">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      addTodo (e) {
        let text = e.target.value;
        if (text.trim()) {
          this.$store.commit('addTodo', { text });
        }
        e.target.value = '';
      }
    }
  };
</script>

<style scoped>
  .create{
    width: 100%;
  }
</style>
