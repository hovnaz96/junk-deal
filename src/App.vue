<template>
  <section id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </section>
</template>

<script>
  export default {
    data: () => ({

    }),
    computed : {
      layout() {
        return (this.$route.meta.layout || 'default') + '-layout';
      }
    }
  }
</script>