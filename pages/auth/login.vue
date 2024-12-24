<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
const router = useRouter()
</script>

<template>
    <AuthLogo />
    <div class="mt-[20px]">
        <div class="auth-title">Sign In</div>
            <div class="flex flex-col gap-[20px] mt-[42px]">
                    <AuthInput placeholder="Email" />
                    <AuthInput placeholder="Password" />
                    <NuxtLink to="/auth/forgetpassword">
                        <div class="auth-label">Forgot Password?</div>
                    </NuxtLink>
                    
                    <AuthButton @click="router.push('/')">Sign In</AuthButton>

                    <NuxtLink to="/auth/signup">
                        <div class="auth-label w-full text-center inline-block link">I don’t have any account. Let’s Sign Up</div>
                    </NuxtLink>
            </div>
    </div>
</template>