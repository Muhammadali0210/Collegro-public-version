<script setup lang="ts">
const toggleDark = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<template>
    <div class="w-full h-[126px] relative mb-[75px]">
      <img src="../../assets/images/bg2.jpg" alt="background" class="w-full h-full" style="object-fit: cover;" />
      <div
        class="w-[150px] h-[150px] rounded-full p-[2px] absolute bottom-[-50%] left-[50%] translate-x-[-50%] "
        style="background-image: linear-gradient(135deg, #1DFBD3, #1245A4);"
      >
        <div class="w-full h-full p-[3px] bg-myDarkCardBg rounded-full overflow-hidden" @click="toggleDark">
          <div class="w-full h-full bg-white rounded-full overflow-hidden">
            <img
              src="../../assets/images/user.avif"
              alt="user"
              class="w-full h-full"
              style="object-fit: cover"
            />
          </div>
        </div>
      </div>
    </div>
</template>