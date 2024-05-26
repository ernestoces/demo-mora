<script setup lang="ts">
const services = ref([
    {
        index: 0,
        name: "Consultoría RPA", id: "consultoria", description: `Nuestra consultoría RPA está diseñada para <span class="font-semibold">identificar y evaluar procesos susceptibles de automatización</span>, colaborando estrechamente con las organizaciones para impulsar la transformación digital y mejorar la eficiencia operativa.`,
        keypoints: [
            { icon: "growth", title: "Modelos Sostenibles y Escalables para la Robotización" },
            { icon: "verified", title: "Calidad y Consistencia en la Entrega de Procesos" },
            { icon: "light", title: "Colaboración y Capacitación Continua" },
        ],
        highlightedServices: [
            { icon: "zoom", title: "Workshops de Descubrimiento", description: "Identificamos y evaluamos procesos candidatos para la automatización." },
            { icon: "checkboard", title: "Centros de Excelencia", description: "Refinamos la estructura operativa y la gobernanza del programa RPA." },
            { icon: "ecram", title: "Estrategia y Planificación", description: "Desarrollamos un plan de automatización personalizado y un caso de negocio." },
        ],
        dark: false
    },
    {
        index: 1,
        name: "Análisis, Desarrollo e Implementación de Robots",
        id: "analisis",
        description: `Ofrecemos servicios completos de <span class="font-semibold">análisis, diseño, desarrollo e implementación de robots</span> para automatizar procesos empresariales, nos comprometemos a proporcionar soluciones de calidad y garantizar la continuidad operativa de nuestros clientes.`,
        keypoints: [
            { icon: "clipboard", title: `Documentación Integral del Proyecto` },
            { icon: "airplane", title: `Despliegue y Marcha Blanca` },
            { icon: "support", title: `Soporte Post Producción` },
        ],
        highlightedServices: [
            {
                icon: "lupa", title: "Análisis de Procesos", description: `Realizamos pruebas con usuarios funcionales para validar su correcto funcionamiento`
            },
            {
                icon: "wheel", title: `Desarrollo de Bots`, description: `Diseñamos y creamos robots adaptados a las necesidades específicas de cada cliente.`
            },
            {
                icon: "play", title: `Certificación y Validación de Bots`, description: `Realizamos pruebas con usuarios funcionales para validar su correcto funcionamiento`
            },
        ],
        dark: true
    },
    {
        index: 2,
        name: "Servicio de Healthcheck Especializado",
        id: "healthcheck",
        description: `Nuestro servicio de Healthcheck <span class="font-semibold">mejora la eficiencia y estabilidad de los programas RPA</span> al identificar y abordar las causas fundamentales. Proporcionamos recomendaciones personalizadas para optimizar los programas de automatización y garantizar resultados consistentes.`,
        keypoints: [
            { icon: "chart", title: `Mejora de Eficiencia y Estabilidad` },
            { icon: "results", title: `Resultados consistentes` },
            { icon: "folder", title: `Cumplimiento Normativo` },
        ],
        highlightedServices: [
            {
                icon: "zoom", title: "Revisión de Configuración", description: `Evaluamos la configuración de automatización para identificar oportunidades de mejora.`
            },
            {
                icon: "increase", title: `Optimización de Procesos`, description: `Aumentamos la eficiencia y la estabilidad de los programas RPA.`
            },
            {
                icon: "vanguard", title: `Gobernanza y Cumplimiento`, description: `Estandarizamos la gobernanza del programa RPA para garantizar calidad y coherencia.`
            },
        ],
        dark: false
    },
    {
        index: 3,
        name: "Training y Certification RPA Customatizado",
        description: `Nuestro programa de entrenamiento y certificación en RPA está diseñado para equipar a los participantes con las habilidades técnicas necesarias para implementar robots robustos y escalables. Nuestros cursos proporcionan un profundo conocimiento de la plataforma y las mejores prácticas en la automatización de procesos de negocio.`,
        id: "training",
        keypoints: [
            { icon: "chart", title: `Mejora de Eficiencia y Estabilidad` },
            { icon: "results", title: `Resultados consistentes` },
            { icon: "folder", title: `Cumplimiento Normativo` },
        ],
        highlightedServices: [
            {
                icon: "laptop", title: "Implementación Práctica", description: `Los participantes desarrollan habilidades a través de ejercicios detallados y casos de uso proporcionados.`
            },
            {
                icon: "boomerang", title: `Metodología Estandarizada`, description: `Se enseña una metodología estándar para la implementación de proyectos de automatización.`
            },
            {
                icon: "code", title: `Desarrollo Independiente`, description: `Aprenden a desarrollar robots de complejidad baja a media de forma independiente, proporcionando una base sólida para futuros proyectos.`
            },
        ],
        dark: true
    },
])



const activeServiceIndex = ref(0)

interface SelectTabArgs {
    serviceIndex: number
}
function selectTab({ serviceIndex: index }: SelectTabArgs) {
    activeServiceIndex.value = index
}
</script>

<template>
    <div class="bg-dark scroll-smooth">
        <p class="text-center font-semibold font-raleway text-base leading-[21px] text-white bg-dark">Nuestros Servicios
        </p>
        <ServiceTabs @onTabClick="selectTab" v-bind:activeServiceIndex />
        <div class="snap-y snap-proximity pt-[200px] -mt-[200px]">
            <ServiceSection :service="service" v-for="service in services" />
        </div>
    </div>
</template>