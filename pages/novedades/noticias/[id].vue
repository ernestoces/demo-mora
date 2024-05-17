<template>
    <article>
        <div class="bg-dark py-[88px]">
            <div class="flex gap-[48px] max-w-[1160px] mx-auto items-center">
                <div class="flex flex-col gap-[24px]">
                    <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-lightPurple">Noticia </h4>
                    <h1 class="font-montserrat font-semibold text-[50px] leading-[60px] text-white">¿Qué revela la
                        fusión de
                        la IA y
                        RPA
                        sobre el futuro de la eficiencia
                        empresarial?</h1>
                    <div class="flex gap-[24px]">
                        <p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Juan Perez</p>
                        <span class="font-raleway font-normal text-[18px] leading-[21px] text-lightPurple">15 de marzo
                            de
                            2024</span>
                    </div>
                </div>
                <div class="shrink-0 w-[485px] h-[315px]">
                    <NuxtImg preload :src="'./laptop.png'" alt="image of a laptop" />
                </div>
            </div>
        </div>
        <div class="bg-white pt-[64px] pb-[88px] px-[140px]">
            <div class="flex gap-[80px]  max-w-[1160px] mx-auto">
                <p class="font-raleway text-base leading-[21px] text-dark">Hoy en día, hacer las cosas de manera
                    eficiente es
                    clave en los negocios. Al combinar la Inteligencia
                    Artificial (IA) con la Automatización Robótica de Procesos (RPA), las empresas están logrando
                    grandes avances. La IA ayuda a las máquinas a pensar y aprender, mientras que RPA se encarga de
                    automatizar tareas repetitivas. Juntas, estas tecnologías están llevando la eficiencia empresarial a
                    otro nivel.

                    Como lo menciona Helena Isabel Lynch Salcedo en su artículo Integrando IA + RPA: el futuro de la
                    eficiencia empresarial: “Es importante entender que el RPA y la IA son tecnologías estrechamente
                    relacionadas, apasionantes e innovadoras que impulsan una rápida automatización integral de los
                    procesos empresariales y agilizan la transformación digital. Ambas tecnologías están remodelando el
                    mundo laboral al aumentar el número de empleados e inaugurar una nueva era de productividad.”

                    ¿Qué se viene para los próximos años?

                    Automatización Inteligente en todos los ámbitos: Veremos que más y más empresas adoptarán la
                    automatización inteligente en todas sus operaciones. Desde la gestión de datos hasta el servicio al
                    cliente, la IA y la RPA trabajarán juntas para hacer las cosas más eficientemente y reducir costos.

                    Mejoras en la experiencia del cliente: Con la ayuda de la IA y la RPA, las empresas podrán ofrecer a
                    sus clientes experiencias más personalizadas y mejores. Desde chatbots inteligentes hasta sistemas
                    de recomendación avanzados, la automatización inteligente hará que la interacción con los clientes
                    sea más satisfactoria.

                    Optimización interna: La IA y la RPA también ayudarán a mejorar los procesos internos de las
                    empresas. Desde la gestión de recursos humanos hasta la cadena de suministro, estas tecnologías
                    identificarán áreas para mejorar y automatizar tareas repetitivas, liberando tiempo para actividades
                    más importantes.

                    Mayor atención a la seguridad y privacidad de los datos: A medida que la automatización se vuelva
                    más común, la seguridad y la privacidad de los datos serán aún más importantes. Las empresas
                    invertirán en soluciones de IA y RPA que garanticen la protección de la información y cumplan con
                    las regulaciones de privacidad.

                    Al usar IA y RPA juntas, las empresas pueden hacer las cosas más rápido, más precisas y a menor
                    costo, mejorando la eficiencia en general. Aquellas empresas que adopten estas tecnologías estarán
                    en mejor posición para competir en un mercado cada vez más competitivo. La automatización
                    inteligente no solo mejora los procesos existentes, sino que también abre la puerta a nuevas
                    oportunidades de innovación y creación de nuevos negocios.</p>
                <div class="flex flex-col w-[324px] shrink-0">
                    <h3 class="font-montserrat font-semibold text-[22px] leading-[26px]">Recomendaciones</h3>
                    <div class="mt-[23px] flex flex-col space-y-[48px]">
                        <div v-for="article in ['seminario', 'automatizacion']">
                            <NuxtImg :src="'./' + article + '.png'" />
                            <h4 class="mt-4 font-montserrat font-semibold text-[18px] leading-[24px]">Seminario Web:
                                Automatización AI en la Práctica</h4>
                            <p class="mt-[8px] font-normal text-base leading-[21px]">Únete a nuestro seminario web para
                                explorar cómo la automatización con
                                inteligencia artificial está transformando la forma en que hacemos negocios. Desde la
                                automatización de tareas repetitivas hasta la mejora de la precisión...<a
                                    :href="'/novedades/noticias/' + article" class="font-semibold text-mora"> Seguir
                                    leyendo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.params)
</script>