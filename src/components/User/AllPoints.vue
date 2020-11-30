<template>
    <div>
        <UserPage/>
        <div class='row'>
            <div class="col-sm-12">
                <h2 class='text-warning text-center font-weight-bold mt-3'>Notifications</h2>
                <div class="Notifications">
                    <Notification />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UserPage from './UserPage'
    import Notification from './Notification'

    export default {
        components: {
            UserPage,
            Notification
        }
    }
</script>