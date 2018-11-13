import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';

Vue.component('app-servers', Home);

export const serverBus = new Vue({
  methods: {
    serverDetail() {
      this.$emit('serverselected', this.id);
    }
  }
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
