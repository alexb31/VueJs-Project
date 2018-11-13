<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-details v-for="server in servers" :server="server"></server-details>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Low' },
                    { id: 3, status: 'High' },
                    { id: 4, status: 'Danger' },
                    { id: 5, status: 'Critical' }
                ]
            };
        },
        components: {
            'server-details': Server
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
