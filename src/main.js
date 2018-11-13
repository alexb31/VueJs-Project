import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";

Vue.component("app-servers", Home);

export const eventBus = new Vue({
  methods: {
    changeAge() {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

