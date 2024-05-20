<script setup lang="ts">
const products = ref([
    {
        id: 0,
        name: "Automation Co-Pilot",
        description: `En 2019, Automation Co-Pilot se convirtió en el primer producto lanzado al mercado por Automation Anywhere. Co-Pilot es un asistente generativo impulsado por IA que aumenta la productividad de los equipos en un 55%. Permite la interacción entre el usuario de negocio y el bot al ejecutar automatizaciones a demanda con variables customizadas.`,
        image: `./copilot.png`,
        items: [
            {
                icon: "team",
                heading: `Empodera los Equipos de Trabajo`,
                description: `Mejora la productividad del equipo con asistentes de automatización que abarcan una amplia gama de tareas parametrizadas.`
            },
            {
                icon: "areas",
                heading: `Interconexión entre Áreas`,
                description: `Permite a los usuarios realizar el seguimiento y/o aprobar sobre la ejecución de un apartado especifico de un proceso automatizado.`
            },
            {
                icon: "access",
                heading: `Acceso en Cualquier Aplicación`,
                description: `Integra el Automation Co-pilot directamente en las aplicaciones que utilizan tus equipos para que los usuarios puedan ejecutar sus asistentes desde estas.`
            }
        ]
    },
    {
        id: 1,
        name: "Document Automation",
        description: `Extrae datos de documentos a la velocidad de la luz con el procesamiento inteligente de documentos impulsado por IA conectado a la automatización e integre rápidamente estos en el flujo de trabajo. Todo de forma nativa con Automation Success Platform.`,
        image: `./automation.png`,
        items: [
            {
                icon: "gear",
                heading: `Preprocesamiento`,
                description: `Mejore la calidad de los documentos con técnicas de reducción de ruido, binarización y eliminación de sesgos.`
            },
            {
                icon: "version",
                heading: `Clasificación y División`,
                description: `Clasifique y separe los documentos de varias páginas para identificar las páginas relevantes.`
            },
            {
                icon: "extraction",
                heading: `Extracción`,
                description: `Utilice tecnologías avanzadas para extraer datos específicos de documentos.`
            },
            {
                icon: "validation",
                heading: `Validación de Datos`,
                description: `Realice la validación mediante reglas y técnicas impulsadas por la IA para mejorar los resultados de extracción.`
            }
        ]
    },
    {
        id: 2,
        name: "CoE Manager",
        description: `CoE Manager ofrece una solución integral para gobernar, registrar y medir el rendimiento del programa de automatización. Desde la conceptualización hasta el cumplimiento del valor.`,
        image: `./stats.png`,
        items: [
            {
                icon: null,
                heading: `Gane Visibilidad y Control`,
                description: `Gestione los procesos, el ROI y todo el ciclo de vida de la automatización mediante el seguimiento de los datos del programa, los objetivos y el progreso desde la conceptualización hasta el cumplimiento del valor.`
            },
            {
                icon: null,
                heading: `Aumente al Máximo la Creación de Valor`,
                description: `Defina y capture los indicadores clave de rendimiento (KPI), como el tiempo y los costos ahorrados, la agilidad operativa, el flujo de caja o la sostenibilidad, y ayude a los directivos a comprender las ganancias de alto rendimiento del programa de automatización.`
            },
            {
                icon: null,
                heading: `Acelere la Generación de Procesos`,
                description: `Permita a los usuarios empresariales compartir ideas de automatización que construyan los procesos de automatización.`
            },
            {
                icon: null,
                heading: `Tome Mejores Decisiones`,
                description: `Desarrolle una forma coherente y repetible de evaluar las oportunidades de automatización para agilizar la toma de decisiones.`
            }
        ]
    },
    {
        id: 3,
        name: "Process Discovery",
        description: `Process Discovery utiliza la inteligencia artificial para mostrar el flujo actual de los procesos y así permitir queñ las organizaciones tomen decisiones de reingeniería , estandarización, automatización, etc. Ofrece transparencia, escalabilidad segura y una visión clara para una optimización efectiva.`,
        image: `./discovery.png`,
        items: [
            {
                icon: "file",
                heading: `Transparencia y Precisión`,
                description: `Proporciona una visión precisa de los procesos empresariales para identificar ineficiencias y optimizar la automatización.`
            },
            {
                icon: "velocity",
                heading: `Documentación del Proceso`,
                description: `Permite elegir el proceso mas optimo para generar la documentación integral del proceso.`
            },
            {
                icon: "sensor",
                heading: `Escala Segura con IA`,
                description: `Amplía la transformación en toda la empresa con una arquitectura en la nube diseñada para recopilar y procesar big data, garantizando la seguridad y la precisión.`
            }
        ]
    },
])
const counter = useInterval(3500)
const currentSlideIndex = computed(() => counter.value % 4)
const activeSlideDotClass = "bg-[#FF5A10] opacity-100"
const root = ref<HTMLElement | null>(null)
</script>
<template>
    <div class="bg-white w-full">

        <h2 class="mt-[88px] text-dark font-montserrat font-bold text-[40px] leading-[53px] text-center">Conoce nuestros
            productos.</h2>
        <div class="xl:hidden flex flex-col xl:gap-6 gap-[50px] mt-[50px]">
            <ProductSlide v-for="product in products" :product="product" />
        </div>
        <div class="w-[1332px] mx-auto hidden">
            <div ref="root"
                class="gap-[90px] snap-x snap-mandatory overflow-hidden w-full shrink-0  mt-[50px] flex items-center justify-center pb-[62px]">
                <ProductSlide :product="products[currentSlideIndex]" />
            </div>
        </div>
        <div class="xl:flex gap-4 mt-[25px] justify-center hidden">
            <span v-for="n in 4" class="h-[12px] w-[12px] bg-[#666666] opacity-25 rounded-full cursor-pointer"
                @click="counter = n - 1" :class="{ [activeSlideDotClass]: n === currentSlideIndex + 1 }">
            </span>
        </div>
    </div>
</template>

<style scoped></style>