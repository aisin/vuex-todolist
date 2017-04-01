<template>
  <div class="lists">
    <item v-for="item in todosRes" :key="item.id" :todo="item"></item>
  </div>
</template>

<script>
  import { sortBy } from 'lodash';
  import { mapGetters } from 'vuex';
  import Item from '@/components/Item';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapGetters({
        'todos': 'getTodos'
      }),
      todosRes () {
        return sortBy(sortBy(this.todos, item => -item.id));
      }
    },
    components: {
      Item
    }
  };
</script>

<style>
  .lists{
    margin: 20px 0 0;
  }
</style>
