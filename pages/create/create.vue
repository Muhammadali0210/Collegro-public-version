<script setup lang="ts">
const router = useRouter();
const isAddFile = ref(false);

const isPost = ref(true);
const isStory = ref(false);
</script>

<template>
  <div class="w-[100%] min-h-[100vh] bg-transparent pt-[12px]">
    <div class="container">
      <CommonNavbar>
        <h2
          class="font-bold text-[14px] leading-[16px] text-myBlueText dark:text-myBlueText"
          @click="router.back()"
        >
          Discard
        </h2>
        <h2
          class="font-bold text-[14px] leading-[16px] text-myLightTextLg dark:text-myBlueText uppercase"
        >
          Create
        </h2>
        <div
          class="py-[4px] px-[12px] rounded-[50px] bg-myDarkCardBg dark:bg-myDarkBar flex justify-center items-center"
        >
          <h2
            class="font-bold text-[14px] leading-[16px] text-myDarkTextLg dark:text-myDarkTextLg"
          >
            Create
          </h2>
        </div>
      </CommonNavbar>

      <div
        class="mt-[24px] w-full rounded-[24px] p-[15px] flex gap-[12px] bg-myLiteCardBg dark:bg-myDarkCardBg relative"
      >
        <UAvatar
          size="md"
          alt="Muhammadali"
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        />

        <textarea
          name="post"
          id="post"
          placeholder="What’s on your mind?"
          class="text-myLightTextLg dark:text-myDarkTextLg"
        ></textarea>

        <div
          class="absolute bottom-[-16px] right-[15px] flex"
          :style="{ gap: isAddFile ? '12px' : '8px' }"
        >
          <div
            @click="isAddFile = !isAddFile"
            :class="isAddFile ? 'transform rotate-[-45deg]' : 'transform rotate-0'"
            style="transition: all 0.3s"
            class="w-[32px] h-[32px] rounded-full bg-myDarkCardBg dark:bg-myDarkBar text-myLiteCardBg flex justify-center items-center"
          >
            <UIcon name="material-symbols:add" />
          </div>

          <div
            :style="{
              width: isAddFile ? 'auto' : '0px',
              paddingLeft: isAddFile ? '16px' : '0px',
              paddingRight: isAddFile ? '16px' : '0px',
            }"
            style="transition: all ease-out 0.5s"
            class="h-[32px] px-[16px] rounded-full bg-myDarkCardBg dark:bg-myDarkBar text-myLiteCardBg flex gap-[16px] items-center"
          >
            <UIcon name="material-symbols:imagesmode-outline" />
            <UIcon name="fluent:gif-16-regular" />
            <UIcon name="material-symbols:android-camera-outline" />
            <UIcon name="material-symbols-light:attach-file" />
          </div>
        </div>
      </div>

      <div
        class="w-full pb-[32px] justify-center items-center fixed bottom-0 left-0 right-0"
      >
        <div
          class="mx-auto w-min rounded-[100px] py-[6px] px-[10px] bg-myLiteCardBg dark:bg-myDarkCardBg flex gap-[10px] items-center"
        >
          <div @click="isStory = false ; isPost = true" class="rounded-[16px] py-[3px] px-[20px] cursor-pointer"
            :class="isPost ? 'bg-myDarkCardBg dark:bg-myDarkBar text-myDarkTextLg dark:text-myDarkTextLg' : 'bg-transparent dark:bg-transparent text-myLightTextLg dark:text-myDarkTextLg' "
          >
            <h2 class="text-bold text-[13px]">
              POST
            </h2>
          </div>

          <div 
          @click="isStory = true ; isPost = false"
          class="rounded-[16px] py-[3px] px-[20px] cursor-pointer"
          :class="isStory ? 'bg-myDarkCardBg dark:bg-myDarkBar text-myDarkTextLg dark:text-myDarkTextLg' : 'bg-transparent dark:bg-transparent text-myLightTextLg dark:text-myDarkTextLg'"
          >
            <h2 class="text-bold text-[13px]">
              STORY
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
textarea {
  outline: none;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-top: 0;
  min-height: 120px;
  color: #002029;
  background-color: transparent;
}
</style>
