<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Built-in Directives</h1>
      <p v-text="'Some Text'"></p>
    </div>
    <hr>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
      <hr>
      <div
        style="width: 100px; height: 100px; background-color: lightgreen"
        v-customOn:mouseenter="mouseEnter"
        v-customOn:mouseleave="mouseLeave"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value();
        // }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I was clicked");
    },
    mouseEnter() {
      console.log("Mouse enter");
    },
    mouseLeave() {
      console.log("Mouse Leave");
    }
  }
};
</script>

<style>
</style>
