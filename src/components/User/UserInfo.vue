<template>
    <div class="col-sm-6">
        <h3>{{user.fname + ' ' + user.lname}}</h3>
        <p>Point: <span class='point'>34</span></p>
    </div>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        name: 'SigninForm',

        computed: {
            ...mapState({
                user: state => state.auth.user.user
            })
        },
        mounted() {

            // if (this.loggedIn && this.currentUser.user.role == 'admin') {
            //     this.$router.push('/admin/usergifts');
            // }else if(this.loggedIn && this.currentUser.user.role == 'user'){
            //     this.$router.push('/user/rules');
            // }
        }


    }
</script>