<template>
  <div class="home">
    <Header />
    <Container />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/GameHeader.vue'
import Container from '../components/Container/Container.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Container
  }
}
</script>
