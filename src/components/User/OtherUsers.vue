<template>
    <div>
        <UserPage/>
        <OtherUserBox v-for="user in users" :key="user.id" :user="user"/>

    </div>
</template>
<script>
    import UserPage from './UserPage'
    import OtherUserBox from './OtherUserBox'
    import {mapState} from "vuex";

    export default {
        components: {
            UserPage,
            OtherUserBox
        },
        computed: {
            ...mapState({
                // user: state => state.auth.user.user,
                users: state => state.user.available
            })
        },
        created() {
            this.$store.dispatch('user/getAvailableUsers');
        }
    }
</script>

