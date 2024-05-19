<script setup lang="ts">
const route = useRoute()
const industries = ref([
    {
        id: "banca",
        heading: `<h1  class="font-montserrat text-white text-[50px] leading-[61px] font-bold ">Automatización Inteligente para <span class="block text-mora">Servicios Financieros</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Con la automatización
                        inteligente, los
                        bancos y las empresas de servicios financieros pueden
                        transformar las operaciones manuales que usan muchos datos, sin dejar de cumplir con los
                        requisitos
                        normativos en constante cambio.</p>`,
        imagePath: './banca.png',
        benefits: [
            {
                imagePath: './buck.png',
                title: `Disminuye Costos`,
                description: `Automatiza los procesos manuales, para así aumentar la productividad y disminuir los gastos de mano de obra`
            },
            {
                imagePath: './roi.png',
                title: `Optimiza tu ROI`,
                description: `Implementa la automatización robótica de procesos en tres meses y obtén un retorno de la inversión inmediato.`
            },
            {
                imagePath: './zoom.png',
                title: `Consolida el Cumplimiento`,
                description: `Accede directamente a los datos del cliente, automatiza la supervisión de transacciones y sigue los cambios normativos.`
            },
            {
                imagePath: './support.png',
                title: `Mejora el Servicio al Cliente`,
                description: `Accede en tiempo real a datos de clientes, acelera respuestas y detecta nuevas necesidades.`
            },
            {
                imagePath: './buck.png',
                title: `Reducción de Riesgos`,
                description: `Automatiza los procesos manuales, elimina los errores de procesamiento y disminuye los riesgos operativos.`
            },
            {
                imagePath: './buck.png',
                title: `Aumenta tus Recursos:`,
                description: `Implementa fuerza de trabajo digital para fortalecer empleados y manejar alto volumen de procesamiento.`
            },
        ],
        services: [
            {
                title: `Cumplimiento de Procesos <span class="text-mora">KYC/AML</span>`,
                description: `Garantiza el cumplimiento de regulaciones KYC (Know Your Customer) y AML (Anti-Money Laundering) con automatización inteligente. Desarrolla perfiles de riesgo precisos, identifica fraudes y supervisa cuentas de manera continua.`
            },
            {
                title: `Incorporación de <span class="text-mora">Clientes</span>`,
                description: `Automatiza la configuración de nuevas cuentas y optimiza la recopilación de datos para garantizar la diligencia debida de clientes. Distribuye paquetes de bienvenida y actualiza sistemas CRM con nuevos datos.`
            },
            {
                title: `Originación de  <span class="text-mora">Préstamos</span>`,
                description: `Utiliza la automatización inteligente para extraer documentos, solicitar informes de terceros y validar datos de préstamos. Optimiza las suscripciones y actualizaciones de préstamos.`
            },
            {
                title: `Asistencia para la <span class="text-mora">Atención al cliente</span>`,
                description: `Ofrece automatización asistida a los representantes de atención al cliente. Accede a datos de múltiples sistemas, gestiona solicitudes y concreta ventas cruzadas de productos financieros en tiempo real.`
            },
        ],
        successCase: {
            logo: { path: './bancolombia.png', sizes: [[201, 48]] },
            company: "Bancolombia",
            description: `La institución financiera galardonada necesitaba desarrollar una fuerza laboral virtual que combinara capacidades humanas, robóticas, cognitivas y analíticas, para mejorar la experiencia de los clientes, automatizar tareas repetitivas y aumentar la eficiencia en todos los ámbitos.`,
            cover: './bancolombiaSuccess.png',
            results: [
                {
                    imagePath: `./clock.png`,
                    title: `+740 hrs`,
                    description: `liberadas al año en sucursales`
                },
                {
                    imagePath: `./suitcase.png`,
                    title: `962%`,
                    description: `de retorno en inversión`,
                },
                {
                    imagePath: `./verified.png`,
                    title: `$14 millones`,
                    description: `en ahorro de costos`
                },
                {
                    imagePath: `./graph.png`,
                    title: `$5 millones`,
                    description: `de nuevos flujos de ingresos`
                },
            ]
        }
    },
    {
        id: "mineria",
        heading: `<h1  class="font-montserrat text-white text-[50px] leading-[61px] font-bold ">Automatización Inteligente para 
 <span class="block text-mora">la Industria Minera</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Desde la extracción hasta la logística, nuestra tecnología revoluciona los procesos, aumentando la eficiencia y la seguridad en un entorno normativo en constante evolución. Descubre cómo podemos llevar tu operación minera al siguiente nivel.</p>`,
        imagePath: './mineria.png',
        benefits: [
            {
                imagePath: './suministro.png',
                title: `Diseña una Cadena de Suministros Sólida`,
                description: `Optimiza tu cadena de suministros con automatización inteligente, agilizando procesos como la incorporación de nuevos proveedores.`
            },
            {
                imagePath: './tuerca.png',
                title: `Eficiencia y Precisión Mejoradas`,
                description: `Automatiza los procesos de atención para lograr un rendimiento superior y una precisión del 100%, reduciendo errores críticos y costos.`
            },
            {
                imagePath: './city.png',
                title: `Procesos de Producción Ágiles`,
                description: `Optimiza tus procesos de producción con nuestra automatización inteligente, eficientando la gestión de recursos y turnos.`
            },
            {
                imagePath: './calculadora.png',
                title: `Reducción de Costos Administrativos`,
                description: `Elimina errores humanos y mejora el cumplimiento en tus procesos, optimizando la logística y cadena de suministros para reducir costos administrativos.`
            },

        ],
        services: [
            {
                title: `Planificación de <span class="text-mora">Producción Minera</span>`,
                description: `Automatiza la planificación de la producción para optimizar recursos, monitorear maquinaria y programar turnos. Maximiza la eficiencia y reduce tiempos de inactividad.`
            },
            {
                title: `Gestión de Activos <span class="text-mora">y Mantenimiento</span>`,
                description: `Utiliza automatización inteligente y análisis de datos para monitorear y mantener tus activos. Realiza mantenimiento preventivo y detecta problemas antes de que afecten la producción.`
            },
            {
                title: `Logística y Cadena <span class="text-mora"> de Suministro</span>`,
                description: `Mejora la eficiencia de la logística y cadena de suministro. Automatiza la planificación de rutas, seguimiento de envíos y gestión de proveedores para reducir costos y garantizar un flujo continuo de materias primas.`
            },
            {
                title: `Seguridad y <span class="text-mora"> Cumplimiento Ambiental</span>`,
                description: `Asegura el entorno laboral y cumple con regulaciones. Utiliza automatización para gestionar inspecciones, informes y cumplimiento ambiental, minimizando riesgos y mejorando sostenibilidad.`
            },
        ],
        successCase: {
            logo: { path: './vale.png', sizes: [[121, 48]] },
            company: "Vale",
            description: `Una de las mayores empresas mineras del mundo quería permitir a sus empleados un mejor nivel de productividad y alcanzar sus objetivos, buscando que pudieran desempeñarse en su expertis y no en tareas administrativas, como el registro de facturas, que no están relacionados con su campo laboral.`,
            cover: './bancolombiaSuccess.png',
            results: [
                {
                    imagePath: `./suitcase.png`,
                    title: `+$12 millones`,
                    description: `en ahorro de costos`
                },
                {
                    imagePath: `./bots.png`,
                    title: `+1000 bots`,
                    description: `en producción`,
                },
                {
                    imagePath: `./verified.png`,
                    title: `+350 procesos`,
                    description: `automatizados`
                },
            ]
        }
    }
])
const industryId = route.params.id
const industry = ref(industries.value.find(industry => industry.id === industryId))
const doubleColumnClass = ref('grid-cols-2')
const tripleColumnClass = ref('grid-cols-3')
const successCaseHasLessThan4Results = ref(industry.value && industry.value.successCase.results.length < 4)
</script>

<template>
    <main>
        <div class="bg-dark py-[88px] px-[140px]" v-if="industry">
            <div class="flex gap-[56px] items-center justify-center">
                <div class="flex flex-col gap-6 max-w-[644px]">
                    <div v-html="industry.heading" />
                    <div v-html="industry.description" />
                </div>
                <div class="w-[460px] h-[355px] shrink-0">
                    <NuxtImg width="460px" height="355px" :src="industry.imagePath" class="object-contain " />
                </div>
            </div>
        </div>

        <div class="bg-white py-[88px] px-[140px]">
            <h2 class="text-montserrat font-bold text-[33px] leading-[40px] text-center">Beneficios Clave</h2>
            <ul class="grid grid-cols-3 gap-x-[37px] gap-y-[35px] mt-[48px] max-w-[1160px] mx-auto"
                :class="{ [doubleColumnClass]: industry?.id == 'mineria' }">
                <li class="py-6 px-4 bg-[#B8A2D633] rounded-[5px] flex flex-col gap-[25px] hover-shadow hover:-translate-y-[8px] transition-all"
                    v-for="benefit in industry?.benefits">
                    <NuxtImg width="40px" height="40px" :src="benefit.imagePath" />
                    <div class="flex flex-col gap-2">
                        <h3 v-html="benefit.title"
                            class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark" />
                        <p v-html="benefit.description"
                            class="font-raleway font-normal text-base leading-[21px] text-dark" />
                    </div>
                </li>
            </ul>
        </div>

        <div class="bg-dark py-[88px] px-[140px]">
            <h2 v-text="'Servicios Especificos'"
                class="font-montserrat font-bold text-[33px] leading-[40px] text-white text-center" />
            <ul class="grid grid-cols-4 gap-x-[33px] max-w-[1160px] mx-auto mt-12">
                <li class="lasso-border rounded-[5px] p-6 flex flex-col gap-[26px] max-w-[265px] justify-between"
                    v-for="service in industry?.services">
                    <h3 v-html="service.title"
                        class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-white" />
                    <p v-html="service.description"
                        class="font-raleway font-normal text-base leading-[21px] text-white" />
                </li>
            </ul>
        </div>

        <div class="bg-white px-[140px] py-[88px]">
            <div class="flex flex-col gap-[28px] max-w-[1160px] mx-auto">
                <div class="flex justify-between items-center">
                    <h2 class="font-montserrat font-bold text-[33px] leading-[40px]" v-text="'Caso de Éxito'" />
                    <div class="w-[201px] h-auto">
                        <NuxtImg :src="industry?.successCase.logo.path" class="object-cover" width="201px"
                            height="48px" />
                    </div>
                </div>
                <div class="flex gap-[48px] items-center ">
                    <div class="shrink-0">
                        <NuxtImg :src="industry?.successCase.cover" width="540px" height="359px" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <h3 class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark"
                            v-text="industry?.successCase.company" />
                        <p class="font-raleway font-normal text-base leading-[21px] text-dark"
                            v-text="industry?.successCase.description" />
                        <ul class="grid grid-cols-2 gap-x-[24px] gap-y-[16px] mt-8 justify-center"
                            :class="{ [tripleColumnClass]: successCaseHasLessThan4Results }">
                            <li v-for="result in industry?.successCase.results" class="flex gap-[8px] items-center"
                                :class="{ [`flex-col`]: successCaseHasLessThan4Results }">
                                <div class="w-[40px] h-[40px] shrink-0">
                                    <NuxtImg width="40px" height="40px" class="object-cover" :src="result.imagePath" />
                                </div>
                                <div class="flex flex-col gap-[2px] w-full"
                                    :class="{ [`text-center items-center`]: successCaseHasLessThan4Results }">
                                    <h3 class="font-semibold text-[22px] font-montserrat leading-[26px] -tracking-[1%] text-dark"
                                        v-text="result.title" />
                                    <p class="font-montserrat font-normal text-base leading-[17px] text-dark"
                                        v-text="result.description" />
                                </div>
                            </li>
                            <NuxtLink href="/"
                                class="flex gap-[8px] items-center p-[8px] w-full max-w-[186px] mx-auto self-center">
                                <span
                                    class="font-raleway font-semibold  text-base leading-[21px] text-purple shrink-0">Ver
                                    caso
                                    completo</span> <nuxt-icon name="chevronRight" filled />
                            </NuxtLink>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <CallToAction :light="false"
            text="¿Listo para comenzar a automatizar tu negocio y llevarlo al siguiente nivel?" />
    </main>
</template>

<style>
.lasso-border {
    /* Optional: makes the div round */
    position: relative;
}

.lasso-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    border: 2px solid;
    border-image: linear-gradient(0deg, #FFFFFF, #724ADA) 1;
    animation: lassoAnimation 2s linear infinite;
}

@keyframes lassoAnimation {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 200% 50%;
    }
}

.hover-shadow:hover {
    box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.2);
}
</style>