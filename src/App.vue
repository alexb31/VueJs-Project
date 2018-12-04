<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | to-lowercase | capitalize }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin.js";

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "hello world!"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
      console.log(value);
    },
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  components: {
    appList: List
  }
};
</script>

<style>
</style>
