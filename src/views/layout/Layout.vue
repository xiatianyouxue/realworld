<template>
<div>
  <Header></Header>
  <!--这里不能写死-->
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: "Layout",
    components:{
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>
