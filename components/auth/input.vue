<script setup lang="ts">
const props = defineProps(["placeholder"]);
</script>

<template>
  <div>
    <input
      type="text myauth-inpur"
      :placeholder="props.placeholder"
      class="w-full rounded-[10px] shadow bg-myLiteCardBg dark:bg-myDarkCardBg py-[18px] px-[24px] font-normal text-[16px] leading-[-0.5%] text-myBlueText placeholder:text-myBlueText"
    />
  </div>
</template>

<style scoped>
.myauth-inpur{
  outline: 1px solid #1DFBD3;
}
</style>
