<template>
  <div class="container m-auto h-screen">
    <Header />
    <Container />
  </div>
</template>

<script>
import Header from '../components/header/GameHeader.vue'
import Container from '../components/container/Container.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Container
  }
}
</script>
