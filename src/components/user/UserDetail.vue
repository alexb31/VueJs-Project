<template>
    <div class="component">
        <h3>You may enter the user details here</h3>
        <p>Many details</p>
        <p>User Name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            myName: String,
            default: 'Max'
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
