new Vue({
	el: '#app',
  data: {
  title: 'Hello World!!!!',
  link: 'http://google.com',
  finishedLink: '<a href="https://vuejs.org">VueJS</a>',
  counter: 0,
  x: 0,
  y: 0
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    },
    sayHello: function() {
      this.title = 'Hello';
      return this.title;
    },
    increase: function() {
      this.counter++;
    },
    updateCoordinates : function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});