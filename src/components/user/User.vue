<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm a Awesome User!</p>
        <p>My Name is : {{ name }}</p>
        <p>Age is: {{ age }}</p>
        <button @click="changeName">Change My name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Alex',
                age: 23
            }
        },
        methods: {
            changeName() {
                this.name = 'Peter'
            },
            resetName() {
                this.name = 'Alex'
            },
            changeAge() {
                this.age = 24
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background: lightblue;
    }
</style>
