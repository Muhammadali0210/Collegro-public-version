<template>
    <div class="bg-transparent w-full min-h-screen container">
        <MessageNavbar />

        <CommonSearch placeholder="Who do you want to chat with?" />

        <div class="flex flex-col p-[15px] py-[10px] rounded-[15px] bg-myLiteCardBg dark:bg-myDarkCardBg mt-[24px]">
            <h2 class="font-medium text-myLiteTextSm dark:text-myDarkTextSm text-[14px]">Pinned</h2>
            <div class="w-full flex gap-[10px] overflow-x-auto scroll-0 mt-[7px]">
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
                <MessagePinnedItem name="Alex" img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" /> 
            </div>
        </div>

        <div class="w-full py-[14px]">
            <MessageUserItem v-for="(item, index) in 10" :key="index" />
        </div>

    </div>
</template>

