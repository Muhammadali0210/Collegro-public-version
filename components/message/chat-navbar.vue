<template>
  <div class="pt-[16px] pb-[8px] fixed top-0 left-0 right-0 z-50 bg-myLightBg dark:bg-myDarkBg">
    <div class="container">
        <CommonNavbar>
            <NuxtLink to="/message/message">
                <div
                class="cursor-pointer w-[32px] h-[32px] rounded-full bg-[#181A1C] dark:bg-myDarkCardBg flex justify-center items-center"
                >
                <UIcon name="fa6-solid:arrow-left" class="text-myLightBg dark:text-myDarkBar" />
                </div>
            </NuxtLink>

            <div class="flex gap-[8px] items-center">
                <UAvatar
                size="sm"
                alt="Muhammadali"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                />
                <div class="flex flex-col gap-[0px] justify-center">
                <h2
                    class="font-bold text-[14px] text-myLightTextLg dark:text-myDarkTextLg leading-[20px]"
                >
                    Jessica Thompson
                </h2>
                <h2 class="font-regular text-[14px] leading-[20px] text-myLiteTextSm dark:text-myLiteTextSm">
                    SEP 14, 2021
                </h2>
                </div>
            </div>

            <NuxtLink to="/">
                <div
                class="cursor-pointer w-[32px] h-[32px] rounded-full bg-myDarkBar dark:bg-myDarkCardBg flex justify-center items-center text-white"
                >
                <UIcon name="ph:dots-three-outline-vertical-fill" size="md" />
                </div>
            </NuxtLink>
        </CommonNavbar>
    </div>
  </div>
</template>
