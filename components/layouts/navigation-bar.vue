<script setup lang="ts">
const router = useRouter();

const goPage = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div
    class="max-md:w-full max-md:rounded-full md:rounded-[18px] shadow max-md:h-[63px] md:gap-[20px] md:h-full flex md:flex-col max-md:justify-between md:justify-center max-md:items-center max-md:px-[54px] sm:p-[40px] bg-myLightBar dark:bg-myDarkBar"
  >
    <div class="cursor-pointer flex md:gap-[20px] items-center max-md:h-full" @click="goPage('/')">
      <div
        class=" acrive-block overflow-hidden w-[40px] max-sm:h-full sm:h-[60px] flex justify-center items-center relative"
        :class="{ active: $route.path === '/' }"
      >
        <img src="../../assets/icons/home.svg" alt="home" />
      </div>
      <h1 class="max-md:hidden">Home</h1>
    </div>

    <div
      class="cursor-pointer flex md:gap-[20px] items-center max-md:h-full"
      @click="goPage('/search/search')"
    >
      <div
        class=" acrive-block overflow-hidden w-[40px] max-sm:h-full sm:h-[60px] flex justify-center items-center relative"
        :class="{ active: $route.path === '/search/search' }"
      >
        <img src="../../assets/icons/search.svg" alt="search" />
      </div>

      <h1 class="max-md:hidden">Search</h1>
    </div>

    <div
      class="cursor-pointer flex md:gap-[20px] items-center max-md:h-full"
      @click="goPage('/create/create')"
    >
      <div
        class="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-myDarkCardBg dark:bg-myDarkCardBg"
        style="box-shadow: 0 4px 4px rgba(0, 32, 41, 0.25)"
      >
        <img src="../../assets/icons/Path.svg" alt="+" />
      </div>

      <h1 class="max-md:hidden">Create</h1>
    </div>

    <div
      class="cursor-pointer flex md:gap-[20px] items-center max-md:h-full"
      @click="goPage('/notification/notification')"
    >
      <div
        class=" acrive-block overflow-hidden w-[40px] max-sm:h-full sm:h-[60px] flex justify-center items-center relative"
        :class="[
          { active: $route.path === '/notification/notification' },
          { notification: true && $route.path != '/notification/notification' },
        ]"
      >
        <img src="../../assets/icons/notification.svg" alt="notification" />
      </div>
      <h1 class="max-md:hidden">Notification</h1>
    </div>

    <div
      class="cursor-pointer flex md:gap-[20px] items-center max-md:h-full"
      @click="goPage('/profile/profile')"
    >
      <div
        class=" acrive-block overflow-hidden w-[40px] max-sm:h-full sm:h-[60px] flex justify-center items-center relative"
        :class="[
          { active: $route.path === '/profile/profile' },
          { notification: true && $route.path != '/profile/profile' },
        ]"
      >
        <div
          class="flex items-center w-[26px] h-[26px] rounded-full overflow-hidden relative"
        >
          <img
            src="../../assets/images/user.avif"
            alt="user"
            class="w-full h-full"
            style="object-fit: cover"
          />
        </div>
      </div>

      <h1 class="max-md:hidden">Profile</h1>
    </div>
  </div>
</template>

<style scoped>
.acrive-block.active::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #002029;
}
.acrive-block.notification::after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 100%;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4141;
}
</style>
