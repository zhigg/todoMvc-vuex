<template>
  <div class="todomvc">
    <section class="todoapp">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </section>
    <footer style="text-align:center;margin-top:120px;font:italic 700 16px '微软雅黑'">
      Edit by <a href="https://github.com/zhigg" target="_blank">object_z@163.com</a>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
export default {
  name: 'todoHtml',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>
