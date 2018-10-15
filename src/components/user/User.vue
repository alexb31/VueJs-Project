<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm a Awesome User!</p>
        <button @click="changeName">Change My name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
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
                name: 'Alex'
            }
        },
        methods: {
            changeName() {
                this.name = 'Peter'
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
