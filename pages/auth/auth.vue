<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>
<template>
    <div class="w-full h-full bg-transparent">
        <AuthLogo />
        <div class="auth-title mt-[44px] mb-[40px]">Let's</div>
        <NuxtLink to="/auth/signup">
            <AuthButton >
                Sign Up
            </AuthButton>
        </NuxtLink>
        <br>
        <NuxtLink to="/auth/login">
            <AuthButton >
                Sign In
            </AuthButton>
        </NuxtLink>
    </div>
</template>