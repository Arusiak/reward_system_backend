<template>
    <div class='container-fluid'>
        <div class="row d-flex justify-content-center bg-light align-items-center signinform">
            <div class="col-sm-6">
                <SignupForm/>
            </div>
        </div>
    </div>
</template>
<script>
    import SignupForm from './SignupForm'
    export default {
        components: {
            SignupForm
        }
    }
</script>
