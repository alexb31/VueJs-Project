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
    import Header from './Header.vue';
    import Servers from './Servers.vue'
    import ServerDetails from './ServerDetails.vue';
    import Footer from './Footer.vue';
    export default {
        components: {
            'app-header': Header,
            'servers': Servers,
            'server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>