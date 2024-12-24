<template>
    <div class="w-full story-wrapper relative overflow-x-auto  mt-[19px] container scroll-0 " >
        <div class=" w-max story-content flex  gap-[7px]  p-[15px] bg-myLiteCardBg dark:bg-myDarkCardBg rounded-[100px] shadow">
          <div v-for="i in 10" class=" w-[58px]  h-[58px] rounded-full  p-[2px]" :style="{ backgroundImage: 'linear-gradient(#1DFBD3, #1245A4)' }">
            <div class="w-full h-full  p-[4px] bg-myDarkCardBg rounded-full overflow-hidden">
              <div class="w-full h-full bg-white rounded-full overflow-hidden">
                <img src="../../assets/images/user.avif" alt="user" class="w-full h-full" style="object-fit: cover;" />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>