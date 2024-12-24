<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
const router = useRouter()

const activePage = ref(0)
</script>

<template>
    <AuthLogo />
    <div class="mt-[20px]">
        <template v-if="activePage == 0">
            <div class="auth-title w-[80%] mx-auto">Forgot Password?</div>
            <div class="auth-subtitle">Please, enter your email below.</div>

            <div class="flex flex-col gap-[20px] mt-[42px]">
                    <AuthInput placeholder="Email" />
                    
                    <AuthButton @click="activePage++">Next</AuthButton>
            </div>
        </template>

        <template v-if="activePage == 1">
            <div class="auth-title w-[80%] mx-auto">Verify Code.</div>
            <div class="auth-subtitle">Please, enter the verification code you’ve received on your email.</div>

            <div class="flex flex-col gap-[20px] mt-[42px]">
                    <AuthInput placeholder="xxxx" />
                    
                    <AuthButton @click="activePage++">Next</AuthButton>
            </div>
            <dir class="auth-label mt-[32px]">I didn’t receive any code. Please, Re-send code.</dir>
        </template>
        
        <template v-if="activePage == 2">
            <div class="auth-title w-[80%] mx-auto">Set New Password.</div>

            <div class="flex flex-col gap-[20px] mt-[42px]">
                    <AuthInput placeholder="Old Password" />
                    <AuthInput placeholder="New Password" />
                    <AuthInput placeholder="Confirm New Password" />
                    
                    <AuthButton @click="activePage++">Next</AuthButton>
            </div>
        </template>

        <template v-if="activePage == 3">
            <div class="auth-subtitle w-[80%] mx-auto">Congratulations! Your password has been successfully changed. Try Signing in now.</div>

            <div class="flex flex-col gap-[20px] mt-[42px]">
                <NuxtLink to="/auth/login">
                    <AuthButton @click="activePage++">Sign In</AuthButton>
                </NuxtLink>
            </div>
        </template>
    </div>
</template>