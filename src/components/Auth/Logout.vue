<template>
    <div class="col-sm-1">
        <a class='btn btn-warning text-white' href @click.prevent="logOut">
            Logout
        </a>
    </div>
</template>
<script>
    export default {
        methods: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/');
            }
        }
    }
</script>