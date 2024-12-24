<template>
    <div class="mt-[16px]">
      <CommonNavbar>
        <NuxtLink to="/">
          <div
            class="cursor-pointer w-[32px] h-[32px] rounded-full bg-[#181A1C] dark:bg-myDarkCardBg flex justify-center items-center"
          >
            <UIcon name="fa6-solid:arrow-left" class="text-myLightBg dark:text-myDarkBar" />
          </div>
        </NuxtLink>
        <h2
          class="font-bold text-myLightTextLg dark:text-myBlueText text-[14px] leading-[16px] tracking-[10%]"
        >
          MESSAGES
        </h2>
        <NuxtLink to="/">
          <div
            class="cursor-pointer w-[32px] h-[32px] rounded-full bg-myDarkBar dark:bg-myDarkCardBg flex justify-center items-center"
          >
            <img src="../../assets/icons/Settings.svg" alt="s"  />
          </div>
        </NuxtLink>
      </CommonNavbar>
    </div>
  </template>
  