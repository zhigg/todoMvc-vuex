<template>
  <footer class="footer">
      <span class="todo-count"><strong>{{unComplete}}</strong> item left</span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clearCompletedAsync">Clear completed</button>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['unComplete']),
  methods: mapActions(['clearCompletedAsync'])
}
</script>

<style>

</style>
