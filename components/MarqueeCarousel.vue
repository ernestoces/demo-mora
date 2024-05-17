<template>
    <NuxtMarquee v-if="images.length > 4">
        <div ref="marqueeItem" v-for="(image, index) in images" class="py-[10] ml-[88px]">
            <NuxtImg preload :key="image" :src="'./' + image + '.png'" :alt="'Image ' + (index + 1)"
                class="object-contain  max-h-[26px]" />
        </div>
    </NuxtMarquee>
</template>

<script setup lang="ts">
defineProps<{
    images: string[]
}>()
</script>