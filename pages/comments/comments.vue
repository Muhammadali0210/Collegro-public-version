<script setup lang="ts">
const router = useRouter();

const isLike = ref(false);
const comments = ref([
  {
    id: 1,
    name: "John Smith",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text:
      "This is amazing post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
    like: 10,
    time: "4h ago",
  },
  {
    id: 2,
    name: "Jessica Thompson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is good post!",
    like: 0,
    time: "1h ago",
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is awesom",
    like: 5,
    time: "23m ago",
  },
  {
    id: 4,
    name: "Emma Williams",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text:
      "This is interesting post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quaerat.",
    like: 0,
    time: "1d ago",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
    like: 15,
    time: "2d ago",
  },
  {
    id: 6,
    name: "William Davis",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is good",
    like: 0,
    time: "1w ago",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "Deleniti, vel!",
    like: 10,
    time: "2w ago",
  },
  {
    id: 8,
    name: "Daniel Lee",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is good post! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    like: 0,
    time: "1mo ago",
  },
  {
    id: 9,
    name: "Mia Wilson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "amazing post!",
    like: 5,
    time: "2mo ago",
  },
  {
    id: 10,
    name: "James Thompson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is good post! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    like: 0,
    time: "1yr ago",
  },
  {
    id: 11,
    name: "Amelia Johnson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text:
      "This is amazing post! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
    like: 10,
    time: "2yr ago",
  },
  {
    id: 12,
    name: "Oliver Wilson",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    text: "This is good post! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    like: 0,
    time: "5yr ago",
  },
]);

const state = ref({
  name: "",
  avatar:
    "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  text: "",
  like: 0,
  time: "",
});

/*
  This function handles the submission of a comment.
  It checks if the input text is not empty and if so, it creates a new comment object with the current time and the input text.
  The new comment object is then added to the comments array.
  Finally, the state object is reset to an empty comment object.
*/
async function onSubmit(event: any) {
  if (event.data.text != "") {
    const now = new Date();
    const time = `${now
      .getHours()
      .toString()
      .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    comments.value.push({
      id: comments.value.length + 1,
      name: "User",
      avatar:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: event.data.text,
      like: 0,
      time: time,
    });
    state.value = {
      name: "John Smith",
      avatar:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "",
      like: 0,
      time: "",
    };
  }
}
</script>

<template>
    <div class="bg-transparent w-full min-h-screen max-sm:pb-[150px]">
        <div class="container">
            <div class="flex justify-between items-center pt-[16px]">
                <NuxtLink to="/">
                    <div class="h-[32px] w-[32px] rounded-[10px] bg-myLiteCardBg dark:bg-myDarkCardBg text-myDarkCardBg dark:text-myDarkBar flex justify-center items-center">
                        <UIcon name="material-symbols:arrow-back-rounded" size="16" />
                    </div>
                </NuxtLink>
                <h1 class="font-medium text-myLightTextLg dark:text-myDarkBar text-[14px] leading-[16px] w-full text-center">View Post</h1>
            </div>

            <div class="mt-[16px] mb-[24px]">
                <HomeCard />
            </div>

            <div>
                <div>
                    <h2 class="font-regular text-[12px] leading-[16px] text-myLightTextLg dark:text-myDarkTextLg uppercase">Comments (45)</h2>
                </div>
                <div class="flex flex-col-reverse gap-[5px] py-[18px]">
                    <CommentsCommentItem v-for="comments in comments" :comments="comments"  />
                </div>
            </div>
        </div>
        <UForm :state="state" @submit="onSubmit">
        <div class="fixed pb-[25px] px-[12px] bottom-0 right-0 left-0 z-50">
          <div
            class="px-[24px] overflow-hidden input-shadow min-h-[52px] bg-myLightBar dark:bg-myDarkBar flex items-center gap-2 w-full rounded-[50px]"
          >
            <div class="w-full pr-[10px]">
              <input
                v-model="state.text"
                type="text"
                class="py-[10px] w-full bg-myLiteCardBg dark:bg-myDarkBar text-myLightTextLg dark:text-myLightTextLg"
                placeholder="Type your message here..."
                style="color: #002029;"
              />
            </div>
            <div class="flex items-center gap-[10px] text-myBlueText dark:text-myLightTextLg">
              <UIcon
                name="material-symbols:add"
                size="24"
              />
              <UIcon
                name="streamline:computer-voice-mail-mic-audio-mike-music-microphone"
                size="20"
              />
              <UButton type="submit" size="md" variant="link" class="p-0 bg-transparent" style="transform: rotate(-45deg);">
                  <UIcon size="24" name="carbon:send" class="text-myBlueText dark:bg-myDarkCardBg" />
              </UButton>
            </div>
          </div>
        </div>
      </UForm>
    </div>
</template>