<script setup lang="ts">
const isActive = ref(0);
const buttons = ref([
  {
    name: "Posts",
  },
  {
    name: "Stories",
  },
  {
    name: "Liked",
  },
  {
    name: "Togged",
  },
]);
</script>

<template>
  <div class="w-full overflow-x-auto scroll-0 mt-[13px] ">
    <div class="flex gap-[10px] pr[5px] container  w-max">
      <div
        class="filter-button rounded-full px-[22px] py-[10px]  dark:bg-myDarkCardBg"
        v-for="(item, index) in buttons"
        :key="index"
        @click="isActive = index"
        :class="[{ 'bg-myDarkCardBg': isActive === index }, { 'dark:bg-myDarkCardBg': isActive === index }, { 'bg-myLiteCardBg': isActive != index },] "
      >
        <h1
          class="text-[14px] dark:text-myDarkTextLg"
          :class="[{ 'text-myGreen font-semibold': isActive === index },{ 'dark:text-myGreen': isActive === index }, { 'text-myLightTextLg': isActive != index }]"
        >
          {{ item.name }}
        </h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .filter-button.active {
  color: #1dfbd3;
} */
</style>
