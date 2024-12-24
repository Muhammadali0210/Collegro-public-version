<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col items-center gap-[8px] min-w-[78px] h-[92px] px-[15px] py-[10px] bg-myBlue300 dark:bg-myBlue300 rounded-[15px]">
        <UAvatar size="md" alt="user" :src="img" />
        <h1 class="font-semibold text-[12px]">{{ name }}</h1>
    </div>
</template>