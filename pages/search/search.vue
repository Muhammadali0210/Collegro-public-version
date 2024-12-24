<script setup lang="ts">
import { searchTabs } from "@/const";
const isActive = ref(0);
</script>

<template>
  <div class="bg-transparent w-full min-h-screen pb-[18px]">
    <div class="container">
      <CommonSearch />
    </div>

    <div class="mt-[24px] container">
      <h2
        class="font-bold text-[16px] leading-[24px] text-myLightTextLg dark:text-myDarkTextLg"
      >
        Popular
      </h2>
    </div>

    <!-- tab1 -->
    <div class="w-full overflow-x-auto scroll-0 container mb-[12px]">
      <div
        class="w-max flex gap-[12px] bg-myLiteCardBg dark:bg-myDarkCardBg rounded-[100px] p-[7px]"
      >
        <div
          class="py-[6px] px-[10px] rounded-[50px] border-x border-y border-myDarkCardBg dark:border-myLiteCardBg"
          v-for="(item, index) in searchTabs"
          :key="index"
          @click="isActive = index"
            :class="[{ 'bg-myDarkCardBg': isActive === index }, { 'dark:bg-myLiteCardBg': isActive === index },{ 'dark:bg-myDarkCardBg': isActive != index }, { 'bg-myLiteCardBg': isActive != index },] "
        >
          <h1 
            class="font-regular dark:text-myDarkTextLg"
            :class="[{ 'text-myDarkTextLg font-semibold': isActive === index },{ 'dark:text-myLightTextLg': isActive === index }, { 'text-myLightTextLg': isActive != index }]">
            {{ item.name }}
          </h1>
        </div>
      </div>
    </div>

    <div class="container flex flex-col gap-[18px]">
        <HomeCard v-for="(item, index) in 5" :key="index"/>   

        <br><br><br><br> 
    </div>
  </div>
</template>
