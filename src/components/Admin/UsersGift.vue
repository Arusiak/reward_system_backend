<template>
    <div>
        <AdminPage/>
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
    import Notification from './Notification'
    import AdminPage from './AdminPage'

    export default {
        components: {
            Notification,
            AdminPage
        }
    }
</script>