<template>
    <div>
        <AdminPage/>
        <div class='row'>
            <div class="col-sm-12">
                <h2 class='text-warning text-center font-weight-bold mt-3'>Users Points</h2>
                <UserAllPoints />
            </div>
        </div>
    </div>
</template>
<script>
    import UserAllPoints from './UserAllPoints'
    import AdminPage from './AdminPage'

    export default {
        components: {
            UserAllPoints,
            AdminPage
        }
    }
</script>