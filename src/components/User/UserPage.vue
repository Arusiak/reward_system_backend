<template>
    <div>
        <div class="row d-flex justify-content-around align-items-center mt-1">
            <UserInfo/>
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
    import UserInfo from './UserInfo'
    import Navigation from './Navigation'
    import Logout from './../Auth/Logout'

    export default {
        components: {
            Navigation,
            Logout,
            UserInfo
        }
    }
</script>