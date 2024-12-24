<script setup lang="ts">
// Example: Toggle dark mode on a button click
const router = useRouter();

</script>

<template>
  <div
    class=" min-h-[100vh] w-full max-sm:pb-[150px] scroll-0"
  >
    <div class="flex flex-col items-center w-full min-h-[100vh] py-[16px]" >
      <div class="home-navbar flex justify-between w-full items-center container">
        <h1
          class=" text-[18px] font-medium text-myLightTextLg dark:text-myDarkTextLg"
          @click="router.push('/auth/auth')"
        >
          Good Morning, Alex.
        </h1>
        <NuxtLink to="/message/message">
          <div>
            <img src="../assets/icons/message.svg" alt="message" />
          </div>
        </NuxtLink>
      </div>

      <HomeStoryBar />

      <div class="home-main w-full mt-[12px] container flex flex-col gap-[18px]">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>

    </div>

  </div>
</template>
