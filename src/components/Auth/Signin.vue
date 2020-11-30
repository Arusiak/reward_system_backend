<template>
    <div class='container-fluid'>
        <div class="row d-flex justify-content-center bg-light align-items-center signinform">
            <div class="col-sm-6">
                <SigninForm/>
            </div>
        </div>
    </div>
</template>
<script>
    import SigninForm from './SigninForm'
    export default {
        components: {
            SigninForm
        }
    }
</script>
