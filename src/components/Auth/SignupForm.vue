<template>
    <div class="row">
        <div class="col-sm-12">
            <h5 class='text-dark font-weight-bold'>Sign Up</h5>
        </div>
        <div class="col-sm-12">
            <p>Sign up takes less than a minute. If you already have an account <router-link to="/" className='text-warning'>sign in.</router-link></p>
        </div>
        <div class="col-sm-12">
            <form @submit.prevent="submit">
                <div class="row p-3 bg-white rounded border border-secondary boxBorder">
                    <div class="col-sm-6">
                        <div class="form-group" :class="{ 'form-group--error': $v.firstName.$error }">

                            <input class="form__input form-control" type="text" placeholder='FirstName' name="firstName" v-model.trim="$v.firstName.$model"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group" :class="{ 'form-group--error': $v.lastName.$error }">
                            <input class="form__input form-control" type="text" placeholder='LastName' name="lastName" v-model.trim="$v.lastName.$model"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="error" v-if="!$v.firstName.required">FirstName is required</div>
                    </div>
                    <div class="col-sm-6">
                        <div class="error" v-if="!$v.lastName.required">LastName is required</div>
                    </div>
                    <div class="col-sm-6">
                        <div class="error" v-if="!$v.firstName.minLength">FirstName must have at least {{$v.firstName.$params.minLength.min}} letters.</div>
                    </div>
                    <div class="col-sm-6">
                        <div class="error" v-if="!$v.lastName.minLength">LastName must have at least {{$v.lastName.$params.minLength.min}} letters.</div>
                    </div>
                    <div class="form-group" :class="{ 'form-group--error': $v.bDay.$error }">
                        <div class="col-sm-12 mt-3">
                            <label htmlFor="impbday" class="form__label">Birthday</label>
                        </div>
                        <div class="col-sm-12">
                            <input class="form__input form-control" type="date" name="bDay" v-model.trim="$v.bDay.$model"/>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="error" v-if="!$v.bDay.required">Birthday is required</div>
                    </div>
                    <div class="form-group" :class="{ 'form-group--error': $v.login.$error }">
                        <div class="col-sm-12 mt-3">
                            <label htmlFor="inplogin" class="form__label">Login</label>
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
                            <label htmlFor="imppassword" class="form__label">Password</label>
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
        name: 'SignupForm',
        data() {
            return {
                user: new User('', '', '', '', ''),
                firstName: '',
                lastName: '',
                bDay: '',
                login: '',
                password: '',
                submitStatus: null
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/');
            }
        },
        validations: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            lastName: {
                required,
                minLength: minLength(3)
            },
            bDay: {
                required
            },
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
                    if (this.login && this.password) {
                        this.$store.dispatch('auth/register', {
                            fname: this.firstName,
                            lname: this.lastName,
                            bday: this.bDay,
                            login: this.login,
                            password: this.password
                        }).then(
                            () => {
                                this.$router.push('/');
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
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 500)
                }
            }
        }
    }
</script>