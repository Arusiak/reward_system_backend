<template>
    <div class="row">
        <div class="col-sm-12">
            <h5 class='text-dark font-weight-bold'>Sign In</h5>
        </div>
        <div class="col-sm-12">
            <p>Don't have an account? <router-link to="/signup" className='text-warning'>Sign up free.</router-link></p>
        </div>
        <div class="col-sm-12">
            <form @submit.prevent="submit">
                <div class="row p-3 bg-white rounded border border-secondary boxBorder">
                    <div class="form-group" :class="{ 'form-group--error': $v.login.$error }">
                        <div class="col-sm-12 mt-3">
                            <label class="form__label">Login</label>
                        </div>
                        <div class="col-sm-12">
                            <input class="form__input form-control" type="text" name="login" v-model.trim="$v.login.$model"/>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="error" v-if="!$v.login.required">Login is required</div>
                    </div>
                    <div class="col-sm-12">
                        <div class="error" v-if="!$v.login.minLength">Login must have at least {{$v.login.$params.minLength.min}} letters.</div>
                    </div>

                    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                        <div class="col-sm-12 mt-3">
                            <label class="form__label">Password</label>
                        </div>
                        <div class="col-sm-12">
                            <input class="form__input form-control" type="password" name="password" v-model.trim="$v.password.$model"/>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="error" v-if="!$v.password.required">Password is required</div>
                    </div>
                    <div class="col-sm-12">
                        <div class="error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
                    </div>
                    <div class="col-sm-12 mt-3">
                        <button class="button btn btn-dark form-control" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
                        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import User from '../../models/user';
    import { required, minLength } from 'vuelidate/lib/validators'
    export default {
        name: 'SigninForm',
        data() {
            return {
                user: new User('', '','','',''),
                password: '',
                login: '',
                submitStatus: null
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        mounted() {
            console.log(this.currentUser)
            if (this.loggedIn && this.currentUser.user.role == 'admin') {
                    this.$router.push('/admin/usergifts');
                }else if(this.loggedIn && this.currentUser.user.role == 'user'){
                    this.$router.push('/user/rules');
                }
        },
        validations: {
            password: {
                required,
                minLength: minLength(5)
            },
            login: {
                required,
                minLength: minLength(5)
            }
        },
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    if (this.login && this.password) {
                        this.$store.dispatch('auth/login', {
                            login: this.login,
                            password: this.password
                        }).then(
                            () => {
                                if(this.currentUser.user.role == 'admin'){
                                    this.$router.push('/admin/usergifts');
                                }else if(this.currentUser.user.role == 'user'){
                                    this.$router.push('/user/rules');
                                }
                            },
                            error => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                            }
                        );
                    }
            this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 500)
                }
            },

    }
        }
</script>