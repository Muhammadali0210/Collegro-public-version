<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Message {
  type: "sent" | "received";
  createdAt: string;
  text: string;
}

const messages = ref<Message[]>([
  { type: "sent", createdAt: "10:33", text: "Hi" },
  { type: "received", createdAt: "10:35", text: "How are you?" },
  { type: "sent", createdAt: "10:36", text: "I am fine" },
  { type: "received", createdAt: "10:37", text: "What is your name?" },
  { type: "sent", createdAt: "10:38", text: "Nematjonov" },
  { type: "received", createdAt: "10:39", text: "Nice to meet you" },
  { type: "sent", createdAt: "10:40", text: "Same to you" },
  { type: "received", createdAt: "10:41", text: "What do you do?" },
  {
    type: "sent",
    createdAt: "10:42",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta maiores ",
  },
  { type: "sent", createdAt: "10:36", text: "I am fine" },
  { type: "received", createdAt: "10:37", text: "What is your name?" },
  { type: "sent", createdAt: "10:38", text: "Nematjonov" },
  { type: "received", createdAt: "10:39", text: "Nice to meet you" },
  { type: "sent", createdAt: "10:40", text: "Same to you" },
  { type: "received", createdAt: "10:41", text: "What do you do?" },
  {
    type: "sent",
    createdAt: "10:42",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta maiores ",
  },
]);

const state = ref({
  type: "sent",
  createdAt: "",
  text: "",
});


async function onSubmit(event: any) {
  if (event.data.text != "") {
    const now = new Date();
    const time = `${now
      .getHours()
      .toString()
      .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    messages.value.push({
      type: "sent",
      createdAt: time,
      text: event.data.text,
    });
    state.value = {
      type: "sent",
      createdAt: "",
      text: "",
    };
  }
}
</script>

<template>
  <div class="bg-transparent w-full min-h-screen">
    <MessageChatNavbar />

    <div class="h-[100vh] relative p-0 z-5 pb-[51px]">
      <div
        class="w-full max-h-[100vh] h-full overflow-y-auto flex flex-col-reverse p-4 chat-container"
      >
        <div class="w-full flex flex-col pt-[60px] pb-[20px] gap-[7px]">
          <div
            class="w-full flex flex-col"
            v-for="(message, index) in messages"
            :key="index"
            :class="[
              {
                'items-end': message.type == 'sent',
              },
              {
                'items-start': message.type == 'received',
              },
            ]"
          >
            <div
              class="inline-block max-w-[86%] px-[12px] py-[8px] mb-[7px] shadow rounded-[15px]"
              :class="[
                { 'dark:bg-myDarkCardBg': message.type == 'received' },
                { 'bg-myLiteCardBg': message.type == 'received' },
                { 'dark:bg-myDarkChat': message.type == 'sent' },
                { 'bg-myLightChat': message.type == 'sent' },
              ]"
            >
              <h1
                class="text-myLightTextLg dark:text-myDarkTextLg text-[12px] leading-[20px] font-medium"
                :class="[{ 'text-white': message.type == 'sent' }]"
              >
                {{ message.text }}
              </h1>
            </div>
            <h2 class="text-[12px] leading-[16px] text-myLiteTextSm dark:text-myLiteTextSm">
              {{ message.createdAt }}
            </h2>
          </div>
        </div>
      </div>

      <UForm :state="state" @submit="onSubmit">
          <div class="absolute pb-[25px] px-[12px] bottom-0 right-0 left-0 z-50">
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
  </div>
</template>
