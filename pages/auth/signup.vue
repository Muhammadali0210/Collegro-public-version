<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const activePage = ref(0)
const router = useRouter()
</script>

<template>
        <AuthLogo />
        <div class="mt-[20px]">
            <template v-if="activePage == 0">
                <div class="auth-subtitle">Who are you?</div>
                <div class="flex flex-col gap-[20px] mt-[42px]">
                    <AuthButton @click="activePage++">I’m a Student</AuthButton>
                    <AuthButton @click="activePage++">I’m a Teacher</AuthButton>
                    <AuthButton @click="activePage++">I’m an Institute</AuthButton>
                </div>
            </template>
            <template v-if="activePage == 1">
                <div class="auth-title">Sign Up</div>
                <div class="flex flex-col gap-[20px] mt-[42px]">
                        <div class="flex gap-[14px]">
                            <AuthInput placeholder="First Name" />
                            <AuthInput placeholder="Last Name" />
                        </div>
                        <AuthInput placeholder="Email" />
                        <AuthInput placeholder="Password" />
                        <div class="auth-label">*email must be of an educational Institute.</div>
                        
                        <AuthButton @click="activePage++">Sign Up</AuthButton>

                        <NuxtLink to="/auth/login">
                            <div class="auth-label w-full text-center inline-block link">I already have an account.</div>
                        </NuxtLink>
                </div>
            </template>
            <template v-if="activePage == 2">
                <div class="auth-title">Verify Email</div>
                <div class="auth-subtitle">Please, enter the verification codeyou’ve received on your email.</div>
                
                <AuthInput placeholder="xxxx" class="mt-[32px] mb-[20px]" />
                <AuthButton @click="activePage++">Verify</AuthButton>

                <div class="auth-label mt-[21px]" >I didn’t receive any code. Please, Re-send code.</div>
            </template>
            <template v-if="activePage == 3">
                <div class="auth-subtitle px-[30px] mb-[56px]">Congratulations! your email has been verified.</div>
                <AuthButton @click="activePage++">Next</AuthButton>
            </template>

            <template v-if="activePage == 4">
                <div class="auth-label px-[30px] mb-[56px] text-center">Please, select your country, institute, and 
                    the degree you are having at that institute.
                </div>
                <div class="flex flex-col gap-[10px] mb-[30px]">
                    <AuthSelect />
                    <AuthSelect />
                    <AuthSelect />
                </div>
                <AuthButton @click="router.push('/auth/login')">Next</AuthButton>
            </template>
        </div>
</template>