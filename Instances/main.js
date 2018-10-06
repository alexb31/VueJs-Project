var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

var vm1 = new Vue({
    el: "#app1",
    data: data,
    beforeCreate() {
        console.log('beforeCreate()');
    },
    created() {
        console.log('Created()');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted()');
    },
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    updated() {
        console.log('updated()');
    },
    beforeDestroy() {
        console.log('beforeDestroy()');
    },
    destroyed() {
        console.log('destroyed()');
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('(Updated)');
            console.log(this.$refs.myButton);
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
        },
        destroy: function() {
            this.$destroy();
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount('#app1');

vm1.newProp = 'New';
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something Else';

var vm2 = new Vue({
    el: "#app2",
    data: {
        title: 'The second Instance!'
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed'
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);