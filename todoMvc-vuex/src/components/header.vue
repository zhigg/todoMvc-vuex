<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="value">
  </header>
</template>

<script>
export default {
  data () {
    return {
      value:'',
    }
  }
}
</script>

<style>

</style>
