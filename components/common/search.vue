<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: "Search"
  }  
})
</script>


<template>
    <div class="bg-myLiteCardBg dark:bg-myDarkCardBg rounded-[100px] flex justify-between items-center px-[16px]  mt-[24px]">
            <div class="w-full pr-[10px]">
                <input type="text" class="py-[10px] w-full bg-myLiteCardBg dark:bg-myDarkCardBg"  :placeholder="placeholder">
            </div>
            <UIcon name="ic:outline-search" class="w[20px] text-myLightTextLg dark:text-myDarkTextLg" size="20" />
        </div>
</template>