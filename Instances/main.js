var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

var vm1 = new Vue({
    el: "#app1",
    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('(Updated)');
            console.log(this.$refs.myButton);
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
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
})