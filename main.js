var data = { status: 'Critical' };

Vue.component('my-cmp', {
  data: function() {
    return data;
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
});

new Vue({
  el: '#app2'
});

new Vue({
	el: '#app',
  data: {
  show: true,
  name: 'Alex',
  title: 'Hello World!!!!',
  link: 'http://google.com',
  finishedLink: '<a href="https://vuejs.org">VueJS</a>',
  counter: 0,
  secondCounter: 0,
  x: 0,
  y: 0,
  attachRed: false,
  color: "gray",
  width: 100,
  ingredients: ['meat', 'fruit', 'cookies'],
  persons: [
    {name: "Max", age: 27, color: 'red'},
    {name: "Anna", age: "unknow", color: 'blue'}
  ]
  },
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    },
    divClasses: function() {
      return {
        red: attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    },
    sayHello: function() {
      this.title = 'Hello';
      return this.title;
    },
    updateCoordinates : function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('Alert');
    },
    result: function() {
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
});