<template>
  <li class="list-group-item" @click="serverDetail">
      Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from './../../main.js';

  export default {
    props: ['server'],
    methods: {
      serverDetail() {
        serverBus.$emit('serverSelected', this.server);
      }
    }
  }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
    .list-group-item {
      cursor: pointer;
    }
</style>
