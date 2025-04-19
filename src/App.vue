<template>
  <Navbar />
  <router-view />
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MenuComponent
  },
  data() {
    return {
      message: 'Hello',
    }
  }
};
</script>
