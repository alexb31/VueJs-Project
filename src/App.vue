<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Built-in Directives</h1>
      <p v-text="'Some Text'"></p>
    </div>
    <hr>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p v-highlight:background.delayed="'red'">Color this</p>
      <p
        v-locale-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
      >Color this</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "locale-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          });
        } else {
        }
        setTimeout(() => {}, delay);
      }
    }
  }
};
</script>

<style>
</style>
