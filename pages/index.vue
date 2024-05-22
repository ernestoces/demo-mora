<template>
    <main class="w-full">
        <Hero />
        <Ally />
        <Solutions />
        <HowItWorks />
        <Services />
        <Brands>
            <template v-slot:header>
                <h3 class="text-dark font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-center"
                    slot="header">Conoce
                    algunas de las compañías que confían en nosotros.
                </h3>
            </template>
            <template v-slot:footer>
                <a href="/servicios"
                    class="text-white font-raleway font-semibold text-base leading-[27px] -tracking-[1%] bg-mora drop-shadow-sm py-[8px] px-[22px] xl:max-w-[250px] text-center w-full mx-auto rounded-[3px]">
                    Conoce
                    nuestros servicios</a>
            </template>
        </Brands>
        <!-- <Testimonies /> -->
        <TheNews />
        <CallToAction :light="false" />
    </main>
</template>