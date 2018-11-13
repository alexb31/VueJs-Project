<template>
    <div class="component">
        <p>User Name: {{ myName }}</p>
        <h3>You may enter the user details here</h3>
        <p>Many details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>My age is: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name V2</button>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        props: {
            name: {
                type: String,
                default: "Alex"
            },
            resetFn: Function,
            userAge: Number
        },
        data: function() {
            return {
                myName: this.name
            }
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("")
            },
            resetName() {
                this.myName = "Alex";
                this.$emit('nameWasReset', this.myName);
            },
            editAge() {
                this.userAge = 25;
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                console.log(this.userAge);
                this.userAge = age;
                console.log(this.userAge);
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
