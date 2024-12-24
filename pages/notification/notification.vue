<template>
    <div class="bg-transparent w-full min-h-screen max-sm:pb-[150px]">
        <div class="container mt-[24px]">
            <div class="flex justify-between">
                <h2 class="font-bold text-[18px] leading-[24px] text-myLightTextLg dark:text-myDarkTextLg">Alerts</h2>
                <h2 class="font-bold text-[14px] leading-[24px] text-myBlueText cursor-pointer">Mark all as read</h2>
            </div>

            <div class="pb-[100px]">
                <h2 class="font-normal text-[13px] leading-[16px] uppercase mt-[24px] pb-[20px] text-myLiteTextSm dark:text-myLiteTextSm">Today</h2>

                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />

                <h2 class="font-normal text-[13px] leading-[16px] uppercase mt-[24px] pb-[20px] text-myLiteTextSm dark:text-myLiteTextSm">Yesterday</h2>

                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
                <CommonNotificationItem />
            </div>
        </div>
    </div>
</template>