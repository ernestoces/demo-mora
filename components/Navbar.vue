<script setup lang="ts">
const links = [
    {label:"home", href:"/"},
    {label:"automation anywhere", href:"/"},
    {label:"industrias", href:"/"},
    {label:"servicios", href:"/"},
    {label:"nosotros", href:"/"},
    {label:"novedades", href:"/"},
    
]
</script>

<template>
    <nav class="px-[56px] z-10 sticky top-0 py-3 flex">
        <div>
            <img src="/logo.png" class="w-[161px] h-[44px]"/>
        </div>
        <ul class="flex space-x-[48px] text-white capitalize mx-auto items-center">
            <a :href="link.href" v-for="link in links" class="flex space-x-[4px] relative font-raleway">
                <span> {{ link.label }}</span> <nuxt-icon v-if="link.label === 'industrias'" name="chevron" class="mt-1"/> 
                <div v-if="link.label === 'industrias'" class="hidden absolute top-0 left-0">dropdown</div>
            </a>
        </ul>
        <button class="bg-mora rounded-[3px] py-[8px] px-[22px] text-white">Contacto</button>
    </nav>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
