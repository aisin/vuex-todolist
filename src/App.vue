<template>
  <div id="app">
    <c-header></c-header>
    <create></create>
    <lists></lists>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Create from '@/components/Create';
import Lists from '@/components/Lists';

export default {
  name: 'app',
  components: {
    cHeader: Header,
    Create,
    Lists
  }
};
</script>

<style>
html,
body{
  max-width: 640px;
  margin: 0 auto;
  background: #eee;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  padding: 10px;
  height: 100%;
}
</style>
