<script setup lang="ts">
defineProps<{
    clients: string[]
}>()

const container = ref(null);
const containerWidth = container.value?.clientWidth || 0;
const marquee = ref(null)
const marqueeWidth = marquee.value?.scrollWidth || 0;

const {
    isSupported,
    animate,

    // actions
    play,
    pause,
    reverse,
    finish,
    cancel,

    // states
    pending,
    playState,
    replaceState,
    startTime,
    currentTime,
    timeline,
    playbackRate,
} = useAnimate(marquee, [
    { transform: `translateX(${containerWidth}px)` },
    { transform: `translateX(-${marqueeWidth}px)` }
], {
    duration: 10000,
    iterations: Infinity,
    easing: 'linear'
})

</script>

<template>
    <div class="mt-[40px]" ref="container">
        <ul class="flex gap-[88px] max-w-[1160px] h-[47px] justify-center" ref="marquee">
            <li v-for="clientName in clients" class="h-[26px] w-auto">
                <NuxtImg class="h-[26px] w-auto object-contain" :src="'./' + clientName + '.png'"
                    :alt="clientName + ' logo'" />
            </li>
        </ul>
    </div>
</template>