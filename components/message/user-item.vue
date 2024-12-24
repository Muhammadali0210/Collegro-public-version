<script setup lang="ts">
const router = useRouter()

const goToChat = () => {
  router.push('/message/chat');
}

</script>

<template>
  <div
    @click="goToChat"
    class="flex justify-between items-start p-[15px] mb-[10px] shadow rounded-[15px] max-h-[74px] bg-myLiteCardBg dark:bg-myDarkCardBg"
  >
    <div class="flex gap-[8px] items-center">
      <UAvatar
        size="md"
        alt="Muhammadali"
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
      />
      <div class="flex flex-col gap-[4px] justify-center">
        <h2
          class="font-bold text-[14px] text-myLightTextLg dark:text-myDarkTextLg leading-[20px]"
        >
          Jessica Thompson
        </h2>
        <h2 class="font-regular text-[14px] leading-[20px] text-myBlueText">
          Hey you! Are u there?
        </h2>
      </div>
    </div>
    <h2
      class="font-regular text-[12px] leading-[16px] text-myLiteTextSm dark:text-myDarkTextSm"
    >
      4h ago
    </h2>
  </div>
</template>
