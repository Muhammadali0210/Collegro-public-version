<script setup lang="ts">
import { defineComponent } from 'vue';
const isLike = ref(false);
// const onLike = () => {
//   isLike.value = !isLike.value;
// };

// export default defineComponent({
//   props: {
//     comments: {
//       type: Array,
//       required: true
//     }
//   },
//   data() {
//     return {
//       isLike: false
//     }  
//   },
//   methods: {
//     onLike() {
//         this.isLike = !this.isLike
//     }
//   },
  
// });
const props = defineProps(['comments'])


</script>

<template>
  <div
    
    class="flex justify-between items-start py-[10px] px-[12px] shadow rounded-[15px] bg-myLiteCardBg dark:bg-myDarkCardBg"
  >
    <div class="flex gap-[8px] items-start">
      <UAvatar
        size="sm"
        alt="Muhammadali"
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
      />
      <div class="flex flex-col gap-[4px] justify-center">
        <h2
          class="font-bold text-[13px] text-myLightTextLg dark:text-myDarkTextLg leading-[16px]"
        >
          {{ comments.name }}
        </h2>
        <h2
          class="font-normal text-[13px] leading-[16px] text-myLightTextLg dark:text-myDarkTextLg"
        >
          {{ comments.text }}
        </h2>
        <h2
          class="font-normal text-[12px] leading-[16px] text-myLiteTextSm dark:text-myLiteTextSm"
        >
          {{ comments.time }} <span class="text-myBlueText"> {{ comments.like }} Likes</span>
        </h2>
      </div>
    </div>
    <div class="text-myBlueText cursor-pointer" @click="isLike = !isLike">  
      <UIcon name="ant-design:like-outlined" size="16" v-if="!isLike" />
      <UIcon name="ant-design:like-filled" size="16" v-else />
    </div>
  </div>
</template>
