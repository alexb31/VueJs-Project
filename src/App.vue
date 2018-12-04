<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters</h1>
        <p>{{ text | reverseText }}</p>
        <p>{{ text | count }}</p>
        <h1>Mixins</h1>
        <p>{{ reverseText }}</p>
        <p>{{ calculateLength }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./textMixin.js";

export default {
  mixins: [textMixin],
  data() {
    return {
      text: "hello world!"
    };
  },
  filters: {
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
