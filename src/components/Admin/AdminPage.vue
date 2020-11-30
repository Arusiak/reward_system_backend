<template>
    <div class='container-fluid'>
        <div class="row d-flex justify-content-around align-items-center mt-1">
            <div class="col-sm-6">
                <h3>{{user.fname }}</h3>
            </div>
            <Logout/>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <Navigation/>
            </div>
        </div>
    </div>
</template>
<script>
    import Navigation from './Navigation'
    import Logout from './../Auth/Logout'
    import { mapState } from 'vuex'

    export default {
        components: {
            Navigation, Logout
        },
        computed: {
            ...mapState({
                user: state => state.auth.user.user
            })
        }
    }
</script>