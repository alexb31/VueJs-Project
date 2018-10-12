<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <server-details></server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';
    import ServerDetails from './components/server/ServerDetails.vue';
    import Servers from './components/server/Servers.vue'
    import Footer from './components/shared/Footer.vue';
    export default {
        components: {
            'app-header': Header,
            'server-details': ServerDetails,
            'servers': Servers,
            'app-footer': Footer
        }
    }
</script>