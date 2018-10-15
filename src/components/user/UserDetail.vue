<template>
    <div class="component">
        <h3>You may enter the user details here</h3>
        <p>Many details</p>
        <p>User Name: {{ name }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
