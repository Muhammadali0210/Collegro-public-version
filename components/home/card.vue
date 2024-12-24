<script>
  // Import Swiper Vue.js components
  import { Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination]
      };
    },
    data() {
      return {
        isSaved: false,
        isLike: false
      };
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        }  

    }
  };
</script>

<template>
    <div class="rounded-[15px] bg-myLiteCardBg dark:bg-myDarkCardBg shadow p-[15px] w-full">
        <div class="flex justify-between items-center">
            <div class="flex justify-between items-center gap-[8px]">
                <div class="w-[32px] h-[32px] rounded-full overflow-hidden">
                    <img src="../../assets/images/user.avif" alt="" class="w-full h-full" style="object-fit: cover;">
                </div>
                <div>
                    <h2 class="text-myLightTextLg dark:text-myDarkTextLg font-bold text-[14px]">Jacob Washington</h2>
                    <h2 class="text-myLiteTextSm dark:text-myDarkTextSm font-medium text-[12px]">20m ago</h2>
                </div>
            </div>

            <div class="cursor-pointer">
                <UIcon name="ph:dots-three-outline-vertical-fill" size="md" class="text-black dark:text-myBlueText" />
            </div>
        </div>

        <h2 class="text-myLiteTextLg dark:text-myDarkTextLg font-regular text-[16px] mt-[16px]">
            “If you think you are too small to make a difference, try sleeping with a mosquito.” ~ Dalai Lama
        </h2>

        <div class="w-full max-sm:h-[220px] md:h-[340px] sm:h-[300px]  mt-[16px]">
            <swiper 
                class="mySwiper h-[100%] w-full rounded-[16px]"
                :space-between="10"    
                :pagination="{
                    type: 'fraction',
                }"
                :modules="modules"
            >
                <swiper-slide >
                    <div class="bg-gray-700 w-full h-full rounded-[16px] overflow-hidden">
                        <img src="../../assets/images/bg2.jpg" class="w-full h-full"  alt="" style="object-fit: cover;">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-gray-600 w-full h-full rounded-[16px] overflow-hidden">
                        <img src="../../assets/images/bg1.jpg" class="w-full h-full"  alt="" style="object-fit: cover;">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-gray-500 w-full h-full rounded-[16px] overflow-hidden">
                        <img src="../../assets/images/bg3.jpg" class="w-full h-full"  alt="" style="object-fit: cover;">
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="flex justify-between items-center mt-[22px]">
            <div class="flex gap-[20px]">
                <div class="flex gap-[8px] items-center cursor-pointer text-myBlueText" @click="isLike = !isLike">
                    <template v-if="!isLike">
                        <UIcon name="ant-design:like-outlined" size="16" />
                    </template>
                    <template  v-else>
                        <UIcon name="ant-design:like-filled" size="16" />
                    </template>
                    <span class="text-myLightTextLg dark:text-myDarkTextLg text-[12px] leading-[12px] mt-[4px]">8.998</span>
                </div>
                <NuxtLink to="/comments/comments">
                    <div class="flex gap-[8px] items-center cursor-pointer" >
                        <img src="../../assets/icons/Comment.svg" alt="like"> <span class="text-myLiteTextLg dark:text-myDarkTextLg text-[12px] leading-[12px] mt-[4px]">98</span>
                    </div>
                </NuxtLink>
                <div class="flex gap-[8px] items-center cursor-pointer">
                    <img src="../../assets/icons/Share.svg" alt="like"> <span class="text-myLiteTextLg dark:text-myDarkTextLg text-[12px] leading-[12px] mt-[4px]">18</span>
                </div>
            </div>
            <div class="flex  items-center cursor-pointer text-myBlueText" @click="isSaved = !isSaved">
                <UIcon name="material-symbols:bookmark-outline" size="20" v-if="!isSaved" />
                <UIcon name="material-symbols:bookmark" size="20" v-else />
            </div>
        </div>
    </div>
</template>