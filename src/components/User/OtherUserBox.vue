<template>
    <div class="row userbox mt-2 p-3 justify-content-between align-items-center">
        <div class="col-sm-6">
            <span class='userName'>{{user.fname + " " +user.lname}}</span>
        </div>
        <div class="col-sm-2">
            <a href="#" class='btn btn-warning giftbtn'>Send Gift</a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'OtherUserBox',
        props: [
            'user'
        ],
        created() {
            console.log(this.user)
        }
    }
</script>