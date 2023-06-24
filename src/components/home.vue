<template>
    <h1>Home Page</h1>
    <!-- <div class="row justify-content-center">
        <div class="col-md-9 col-lg-7">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5> ایجاد حساب کاربری</h5>
                    <div><small>قبلاً ثبت‌نام کرده‌ام! <a href="/login">ورود به حساب کاربری </a></small></div>
                </div>
                <div class="card-body px-md-5">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="name" class="col-form-label text-md-right">نام با حروف فارسی</label>
                                <input id="name" type="text" class="form-control" name="name" required v-model="form.name"
                                    :class="errors.name ? 'is-invalid' : ''" autofocus autocomplete="name">

                                <div v-if="errors.name">
                                    <ul class="mt-3 list-disc list-inside text-sm text-danger">
                                        <li style="font-size: 14px;">{{ errors.name[0] }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                                <label for="last_name" class="col-form-label text-md-right">نام‌خانوادگی با حروف
                                    فارسی</label>

                                <input id="last_name" type="text" class="form-control" name="last_name" required
                                    v-model="form.last_name" :class="errors.last_name ? 'is-invalid' : ''" autofocus
                                    autocomplete="last_name">

                                <div v-if="errors.last_name">
                                    <ul class="mt-3 list-disc list-inside text-sm text-danger">
                                        <li style="font-size: 14px;">{{ errors.last_name[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="email" class="col-form-label text-md-right">آدرس ایمیل</label>
                                <input id="email" type="text" dir="ltr" class="form-control" name="email" required
                                    v-model="form.email" :class="errors.email ? 'is-invalid' : ''" autofocus
                                    autocomplete="email">

                                <div v-if="errors.email">
                                    <ul class="mt-3 list-disc list-inside text-sm text-danger">
                                        <li style="font-size: 14px;">{{ errors.email[0] }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                                <label for="phone" class="col-form-label text-md-right">شماره موبایل</label>
                                <input id="phone" type="text" dir="ltr" class="form-control" name="phone" required
                                    v-model="form.phone" :class="errors.phone ? 'is-invalid' : ''" autofocus
                                    autocomplete="phone" placeholder="09...">

                                <div v-if="errors.phone">
                                    <ul class="mt-3 list-disc list-inside text-sm text-danger">
                                        <li style="font-size: 14px;">{{ errors.phone[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="password" class="col-form-label text-md-right">رمز عبور</label>
                                <span class="mx-1" @click="showPassword = !showPassword" role="button">
                                    <i class="text-primary" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                                </span>

                                <input id="password" dir="ltr" :type="showPassword ? 'text' : 'password'"
                                    class="form-control" name="password" required v-model="form.password"
                                    :class="errors.password ? 'is-invalid' : ''" autocomplete="new-password" />

                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                                <label for="password-confirm" class="col-form-label text-md-right">تکرار رمز عبور</label>

                                <input id="password-confirm" dir="ltr" :type="showPassword ? 'text' : 'password'"
                                    class="form-control" v-model="form.password_confirmation" name="password_confirmation"
                                    required autocomplete="new-password">
                            </div>

                            <small>
                                رمز عبور باید حداقل 8 کاراکتر و به زبان انگلیسی و تنها شامل حروف، اعداد و علائم نگارشی
                                @$!%*#?& باشد.
                            </small>
                            <div v-if="errors.password">
                                <ul class="mt-3 list-disc list-inside text-sm text-danger">
                                    <li style="font-size: 14px;">{{ errors.password[0] }}</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="form-row mt-2">
                        <button class="btn btn-primary btn-block" @click="register">تأیید</button>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row justify-content-center">
                        <div>
                            <span class="small">ثبت‌نام از طریق حساب کاربری گوگل</span>
                            <div class="d-flex justify-content-center mt-2">
                                <a title="Google" class="border rounded px-4 py-2" href="/auth/google/redirect">
                                    <img class="d-block" height="24" src="/logos/google.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
import Swal from 'sweetalert2'
import apiTask from '../api/apiTask.js'

export default {

    // data() {
    //     return {
    //         errors: [],
    //         form: {},
    //         showPassword: false,
    //         disabledValidating: false,
    //     }
    // },
    // methods: {
    //     register() {
    //         this.errors = []
    //         apiTask
    //             .post('/register', this.form)
    //             .then(response => {
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'ثبت‌نام شما با موفقیت انجام شد.',
    //                     showConfirmButton: false,
    //                     showClass: {
    //                         popup: 'animate__animated animate__fadeInDown'
    //                     },
    //                     hideClass: {
    //                         popup: 'animate__animated animate__fadeOutUp'
    //                     },
    //                     timer: 2000,
    //                 }).then((result) => {
    //                     window.location.replace('/verify-username')
    //                 })
    //             })
    //             .catch(error => {
    //                 if (error.response.status === 422)
    //                     this.errors = error.response.data.errors
    //                 // console.log(this.errors)
    //                 else {
    //                     Swal.fire({
    //                         icon: 'warning',
    //                         text: 'سیستم با اختلال مواجه شد. دوباره امتحان کنید.',
    //                         showConfirmButton: false,
    //                         timer: 2000,
    //                     }).then((result) => {
    //                         window.location.reload();
    //                     })
    //                 }
    //             });
    //     }
    // }
}

</script>