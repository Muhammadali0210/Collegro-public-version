<script setup lang="ts">
const router = useRouter();

</script>

<template>
  <div class="w-full  bg-myLightBg dark:bg-myDarkBg z-10 overflow-hidden overflow-y-auto h-[100vh]">
    <div class="max-sm:w-full  relative sm:flex sm:justify-center ">
      <div
        class="lg:w-[400px] md:w-[300px] md:h-[100Vh]    bottom-0 left-0 md:top-0 max-md:right-0 z-50 p-[12px] max-md:fixed "
        v-if="
          router.currentRoute.value.name === 'profile-profile' ||
          router.currentRoute.value.name === 'index' ||
          router.currentRoute.value.name === 'notification-notification' ||
          router.currentRoute.value.name === 'search-search'
        "
      >
        <LayoutsNavigationBar />
      </div>

      <div class="w-[100%] md:max-h-[100vh] overflow-y-auto flex justify-center ">
        <div class="w-full lg:w-[500px] xl:w-[600px]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
