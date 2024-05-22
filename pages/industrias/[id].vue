<script setup lang="ts">
const route = useRoute()
const industries = ref([
    {
        id: "banca",
        heading: `<h1>Automatización Inteligente para <span class="block text-mora">Servicios Financieros</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Con la automatización
                        inteligente, los
                        bancos y las empresas de servicios financieros pueden
                        transformar las operaciones manuales que usan muchos datos, sin dejar de cumplir con los
                        requisitos
                        normativos en constante cambio.</p>`,
        imagePath: './bancaCover.png',
        benefits: [
            {
                imagePath: './wad.png',
                title: `Disminuye Costos`,
                description: `Automatiza los procesos manuales, para así aumentar la productividad y disminuir los gastos de mano de obra`
            },
            {
                imagePath: './roi.png',
                title: `Optimiza tu ROI`,
                description: `Implementa la automatización robótica de procesos en tres meses y obtén un retorno de la inversión inmediato.`
            },
            {
                imagePath: './magnifier.png',
                title: `Consolida el Cumplimiento`,
                description: `Accede directamente a los datos del cliente, automatiza la supervisión de transacciones y sigue los cambios normativos.`
            },
            {
                imagePath: './support.png',
                title: `Mejora el Servicio al Cliente`,
                description: `Accede en tiempo real a datos de clientes, acelera respuestas y detecta nuevas necesidades.`
            },
            {
                imagePath: './vanguard.png',
                title: `Reducción de Riesgos`,
                description: `Automatiza los procesos manuales, elimina los errores de procesamiento y disminuye los riesgos operativos.`
            },
            {
                imagePath: './settings.png',
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
            pdfPath: '/bancolombia.pdf',
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
        heading: `<h1>Automatización Inteligente para <span class="block text-mora">la Industria Minera</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Desde la extracción hasta la logística, nuestra tecnología revoluciona los procesos, aumentando la eficiencia y la seguridad en un entorno normativo en constante evolución. Descubre cómo podemos llevar tu operación minera al siguiente nivel.</p>`,
        imagePath: './mineriaCover.png',
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
                title: `Seguridad y <span class="text-mora"> Cumplimiento</span>`,
                description: `Asegura el entorno laboral y cumple con regulaciones. Utiliza automatización para gestionar inspecciones, informes y cumplimiento ambiental, minimizando riesgos y mejorando sostenibilidad.`
            },
        ],
        successCase: {
            pdfPath: '/vale.pdf',
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
    },
    {
        id: "salud",
        heading: `<h1>Automatización Inteligente para la <span class="block text-mora">Atención Sanitaria</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">La automatización inteligente impulsa la transformación digital en el sector de la atención médica, capacitando a las organizaciones para adaptarse, aumentar su capacidad y abordar los desafíos en toda la cadena de valor de los servicios médicos.</p>`,
        imagePath: './saludCover.png',
        benefits: [
            {
                imagePath: './estetoscopio.png',
                title: `Calidad Asistencial`,
                description: `Automatiza los protocolos de control de calidad con bots que comparan y aplican estándares como AHRQ, HEDIS y HCAHPS, garantizando una atención de calidad.`
            },
            {
                imagePath: './cinta.png',
                title: `Reducción de Riesgos`,
                description: `Prepárate para auditorías manteniendo registros precisos al 100% con bots que actualizan y gestionan la documentación.`
            },
            {
                imagePath: './botiquin.png',
                title: `Productividad y Bienestar`,
                description: `Optimiza tus procesos de producción con nuestra automatización inteligente, eficientando la gestión de recursos y turnos.`
            },
            {
                imagePath: './adn.png',
                title: `Eficiencia y Precisión`,
                description: `Automatiza procesos de atención para lograr mayor rendimiento y precisión del 100%, reduciendo errores críticos y costos operativos.`
            },
            {
                imagePath: './heart.png',
                title: `Experiencia del Paciente`,
                description: `Aliviar a los profesionales de tareas tediosas les permite brindar encuentros óptimos y exitosos con los pacientes, mejorando su experiencia global.`
            },
            {
                imagePath: './hospital.png',
                title: `Interoperabilidad`,
                description: `Los bots aseguran la extracción segura de datos y la comunicación entre sistemas, cumpliendo con normativas de privacidad y activación de procesos en cualquier entorno.`
            },

        ],
        services: [
            {
                title: `Procesamiento de <span class="text-mora">Reclamos</span>`,
                description: `Automatiza el procesamiento de reclamos de proveedores, desde la evaluación hasta el pago, asegurando una extracción de datos fluida, identificación de excepciones y procesamiento de facturas con precisión.`
            },
            {
                title: `Gestión del <span class="text-mora">Ciclo de Ingresos</span>`,
                description: `Optimiza todas las funciones del ciclo de ingresos, desde las citas de nuevos pacientes hasta la facturación, asegurando una extracción precisa de datos, procesamiento eficiente y transferencia sin errores a otros sistemas y formatos.`
            },
            {
                title: `Centros de <span class="text-mora">Contacto</span>`,
                description: `Agiliza el acceso a los datos de los pacientes y activa bots para procesar solicitudes en los centros de contacto, lo que permite una atención más centrada en el paciente, una resolución rápida de problemas y un seguimiento efectivo.`
            },
            {
                title: `Administración de <span class="text-mora">Inventarios</span>`,
                description: `Crea una fuerza de trabajo digital para gestionar inventarios médicos, proporcionando visibilidad constante, eliminando errores de informes y garantizando niveles óptimos de suministros críticos.`
            },
        ],
        successCase: {
            pdfPath: '/nhs.pdf',
            logo: { path: './nhs.png', sizes: [[121, 48]] },
            company: "Newcastle Hospital",
            description: `Uno de los hospitales más grandes del Reino Unido, tras años de enfrentar los desafíos de la pandemia, se propuso transformar la vida laboral de sus 16,000 empleados. El objetivo era liberarlos de tareas rutinarias y repetitivas para permitirles enfocarse en lo más importante: brindar una atención excepcional a los pacientes.`,
            cover: './nhsSuccess.png',
            results: [
                {
                    imagePath: `./solarcheck.png`,
                    title: `7000 hrs`,
                    description: `ahorradas anualmente`
                },
                {
                    imagePath: `./pilljar.png`,
                    title: `780 hrs/año`,
                    description: `ahorradas con el bot de referencia de cáncer`,
                },
                {
                    imagePath: `./jeringa.png`,
                    title: `700 hrs`,
                    description: `ahorradas en 2 meses con bot de vacunación`
                },
            ]
        }
    },
    {
        id: "retail",
        heading: `<h1>Automatización Inteligente para el<span class="block text-mora"> Comercio</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Optimiza tus operaciones comerciales con la automatización inteligente. Simplifica la gestión de inventarios, agiliza los pedidos en línea y mejora la experiencia del cliente en la tienda, todo mientras previenes pérdidas y garantizas la seguridad.</p>`,
        imagePath: './retailCover.png',
        benefits: [
            {
                imagePath: './wad.png',
                title: `Disminuye Costos`,
                description: `Automatiza los procesos manuales para aumentar la productividad y reducir los gastos de mano de obra, optimizando los recursos financieros.`
            },
            {
                imagePath: './heartline.png',
                title: `Mejora el Servicio al Cliente`,
                description: `Accede en tiempo real a la información del cliente, agiliza respuestas e identifica nuevas oportunidades para satisfacer sus necesidades de manera rápida y eficiente. `
            },
            {
                imagePath: './box.png',
                title: `Cadena Productiva`,
                description: `Agiliza los procesos de la cadena de suministro, desde la incorporación de nuevos proveedores hasta la gestión eficiente de inventarios.`
            },
            {
                imagePath: './vanguard.png',
                title: `Reducción de riesgos`,
                description: `Simplifica y automatiza los procesos manuales para eliminar los errores de procesamiento y reducir los riesgos operativos.`
            },
            {
                imagePath: './settings.png',
                title: `Mayor Uso de los Recursos`,
                description: `Aliviar a los profesionales de tareas tediosas les permite brindar encuentros óptimos y exitosos con los pacientes, mejorando su experiencia global.`
            },
            {
                imagePath: './decisiones.png',
                title: `Mejora la toma de Decisiones`,
                description: `La automatización inteligente proporciona insights valiosos que ayudan a optimizar procesos, identificar oportunidades y mitigar riesgos.`
            },

        ],
        services: [
            {
                title: `Gestión de <span class="text-mora">Inventarios</span>`,
                description: `Optimiza la gestión con automatización e analítica de datos. Monitoriza niveles en tiempo real, genera alertas y asegura un flujo constante de productos para minimizar pérdidas.`
            },
            {
                title: `Experiencia del <span class="text-mora">Cliente en Tienda</span>`,
                description: `Recopila datos sobre preferencias y hábitos de compra, entrega ofertas personalizadas en tiempo real y optimiza la administración de programas de fidelización para impulsar las ventas y la lealtad del cliente.`
            },
            {
                title: `Prevención de <span class="text-mora">Pérdidas</span>`,
                description: `Monitorea activos y recursos, detecta actividades sospechosas y genera alertas a la seguridad para mejorar la respuesta ante incidentes y reducir los riesgos de robo y fraude.`
            },
        ],
        successCase: {
            pdfPath: '/mindtree.pdf',
            logo: { path: './mindtree.png', sizes: [[172, 42]] },
            company: "Mindtree",
            description: `Una empresa estadounidense con ingresos superiores a 1.500 millones de dólares, buscaba mejorar la eficiencia operativa de sus procesos administrativos y de servicio al cliente, así como estandarizar y documentar sus procesos comerciales.`,
            cover: './mindtreeSuccess.png',
            results: [
                {
                    imagePath: `./moneybag.png`,
                    title: `+$2 millones`,
                    description: `ahorrados en 2 años`
                },
                {
                    imagePath: `./bill.png`,
                    title: `65K facturas`,
                    description: `Procesadas al año por IQ Bot`,
                },
                {
                    imagePath: `./document.png`,
                    title: `95% documentos`,
                    description: `automatizados con ai`
                },
                {
                    imagePath: `./phone.png`,
                    title: `85 segundos`,
                    description: `por atención de llamadas`
                },
            ]
        }
    },
    {
        id: "manufactura",
        heading: `<h1>Automatización Inteligente para la <span class="block text-mora"> Fabricación</span></h1>`,
        description: `<p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Los líderes de la industria manufacturera a nivel mundial están adoptando la automatización para optimizar sus procesos administrativos y operativos. Al eliminar el desperdicio y aumentar la agilidad, logran reducir costos y acelerar el tiempo de lanzamiento al mercado de sus productos.</p>`,
        imagePath: './manufacturaCover.png',
        benefits: [
            {
                imagePath: './wad.png',
                title: `Agiliza Procesos`,
                description: `Nuestra automatización inteligente simplifica los flujos de trabajo empresariales, eliminando el desperdicio y mejorando la eficiencia.`
            },
            {
                imagePath: './calculator.png',
                title: `Reduce Costos Administrativos`,
                description: `Elimina errores humanos y mejora la precisión en todos los procesos empresariales, desde Recursos Humanos hasta TI.`
            },
            {
                imagePath: './delivery.png',
                title: `Diseña una Cadena de Suministros Sólida`,
                description: `Aplica la automatización inteligente para optimizar la gestión de proveedores y fortalecer la cadena de suministro.`
            },
            {
                imagePath: './time.png',
                title: `Aumenta la Velocidad de Salida al Mercado`,
                description: `Implementa una fuerza de trabajo digital para acelerar la ejecución de procesos y garantizar una máxima productividad.`
            },
            {
                imagePath: './reloj.png',
                title: `Conecta Sistemas y Accede a Datos en Tiempo Real`,
                description: `Nuestra automatización inteligente funciona sin contratiempos en todos los sistemas y puede procesar datos de la IoT y analizar información al instante.`
            },
            {
                imagePath: './heartline.png',
                title: `Mejora la Experiencia Postventa del Cliente`,
                description: `Impulsa la lealtad del cliente mediante la entrega de asistencia técnica mejorada y la anticipación de las necesidades del cliente con datos en tiempo real.`
            },

        ],
        services: [
            {
                title: `Automatización de <span class="text-mora">Procesos de ERP</span>`,
                description: `Mejora la eficiencia mediante la aplicación de automatización inteligente en la gestión de informes, facturación, pagos y gestión de inventario del sistema ERP.`
            },
            {
                title: `Procesamiento de <span class="text-mora">Órdenes</span>`,
                description: `Automatiza el procesamiento de facturas de todos los proveedores, eliminando errores y demoras. Nuestra automatización inteligente extrae datos, solicita aprobaciones y supervisa el estado de los pagos.`
            },
            {
                title: `Administración de<span class="text-mora"> Inventarios</span>`,
                description: `Los bots de automatización inteligente hacen un seguimiento del inventario las 24 horas del día, proporcionando informes en tiempo real para ayudar a tu empresa a mantenerse al día con la demanda.`
            },
            {
                title: `Asistencia <span class="text-mora">Técnica</span>`,
                description: `Obtén automatización inteligente que trabaja junto a tu equipo de asistencia técnica. Los bots manejan datos y sistemas para que tus equipos se enfoquen en ofrecer un excelente servicio y construir relaciones con clientes y proveedores.`
            },
        ],
        successCase: {
            pdfPath: '/quad.pdf',
            logo: { path: './quad.png', sizes: [[172, 42]] },
            company: "Quad Graphics",
            description: `Esta empresa de servicios digitales e impresos, con ingresos de 4.000 millones de dólares, se propuso reducir la ineficiencia y mejorar la productividad. Su meta era liberar a sus empleados para que pudieran dedicarse a un trabajo más centrado en el cliente y con mayor valor agregado.`,
            cover: './quadSuccess.png',
            results: [
                {
                    imagePath: `./moneybag.png`,
                    title: `$1000 millones `,
                    description: `de flujo de caja optimizado`
                },
                {
                    imagePath: `./rosca.png`,
                    title: `26 procesos`,
                    description: `automatizados`,
                },
                {
                    imagePath: `./graph.png`,
                    title: `200% de ampliación`,
                    description: `de RPA en 12 meses `
                },
                {
                    imagePath: `./calendar.png`,
                    title: `10 semanas`,
                    description: `para implementar bots`
                },
            ]
        }
    },
])
const industryId = route.params.id
const industry = ref(industries.value.find(industry => industry.id === industryId))
const doubleColumnClass = ref('xl:!grid-cols-2')
const tripleColumnClass = ref('xl:!grid-cols-3')
</script>

<template>
    <main v-if="industry">
        <div class="bg-dark xl:py-[88px] py-[56px] xl:px-[140px] px-4">
            <div class="flex xl:gap-[56px] gap-[40px] xl:flex-row flex-col items-center justify-center">
                <div class="flex flex-col gap-6 max-w-[644px]">
                    <div class="font-montserrat text-white xl:text-[50px] text-[33px] leading-[40px] xl:leading-[61px] font-bold "
                        v-html="industry.heading" />
                    <div v-html="industry.description" />
                </div>
                <div class="xl:w-[460px] xl:h-[355px] w-full xl:px-0 xl:rounded-none rounded-[5px] shrink-0">
                    <NuxtImg :src="industry.imagePath"
                        class=" object-scale-down  w-full rounded-[5px] object-[center]" />
                </div>
            </div>
        </div>
        <div class=" bg-white xl:py-[88px] px-4 py-[56px] xl:px-[140px]">
            <h2 class="text-montserrat font-bold text-[33px] leading-[40px] text-center text-dark">
                Beneficios Clave</h2>
            <ul class="grid xl:grid-cols-3 grid-cols-1 gap-x-[37px] gap-y-[35px] xl:mt-[48px] mt-[32px] xl:max-w-[1160px] w-full mx-auto"
                :class="{ [doubleColumnClass]: industry.id == 'mineria' }">
                <li class="py-6 px-4 bg-[#B8A2D633] rounded-[5px] flex flex-col xl:items-start items-center gap-[25px] hover-shadow hover:-translate-y-[8px] transition-all"
                    v-for="benefit in industry?.benefits">
                    <NuxtImg width="40px" height="40px" :src="benefit.imagePath" />
                    <div class="flex flex-col gap-2">
                        <h3 v-html="benefit.title"
                            class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark text-center xl:text-left" />
                        <p v-html="benefit.description"
                            class="font-raleway font-normal text-base leading-[21px] text-dark text-center xl:text-left" />
                    </div>
                </li>
            </ul>
        </div>

        <div class="bg-dark xl:py-[88px] xl:px-[140px] py-[56px] px-4">
            <h2 v-text="'Servicios Especificos'"
                class="font-montserrat font-bold text-[33px] leading-[40px] text-white text-center" />
            <ul :class="{ [tripleColumnClass]: industry.services.length === 3 }"
                class="grid xl:grid-cols-4 grid-cols-1 gap-x-[33px] max-w-[1160px] mx-auto mt-12 gap-y-[41px]">
                <li :class="[{ ['first:xl:!gap-[80px] last:xl:!gap-[80px] xl:!gap-[48px]']: industry.services.length === 3 }]"
                    class="cool-border rounded-[5px] p-[24px] flex flex-col xl:gap-[24px] gap-[26px] xl:min-w-[265px] w-full"
                    v-for="service in industry?.services">
                    <h3 v-html="service.title"
                        class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-white" />
                    <p v-html="service.description"
                        class="font-raleway font-normal text-base leading-[21px] text-white" />
                </li>
            </ul>
        </div>

        <div class="bg-white xl:px-[140px] xl:py-[88px] px-4 py-[56px]">
            <div class="flex flex-col gap-[28px] max-w-[1160px] mx-auto">
                <div class="flex justify-between items-center">
                    <h2
                        class="text-dark font-montserrat xl:font-bold font-semibold xl:text-[33px] text-[22px] xl:leading-[40px] leading-[26px]">
                        Caso de Éxito<span v-text="': ' + industry?.successCase.company" /> </h2>
                    <div class="xl:w-[201px] w-full h-auto hidden xl:block">
                        <NuxtImg :src="industry?.successCase.logo.path" width="201px" />
                    </div>
                </div>
                <div class="flex xl:flex-row flex-col gap-[24px] xl:gap-[48px]  items-center ">
                    <div class="shrink-0">
                        <NuxtImg :src="industry?.successCase.cover" width="540px" height="359px"
                            class="rounded-[5px]" />
                    </div>
                    <div class="flex flex-col xl:gap-4 gap-[24px]">
                        <h3 class="xl:block hidden font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark"
                            v-text="industry?.successCase.company" />
                        <NuxtImg :src="industry?.successCase.logo.path" class="xl:hidden block object-cover"
                            width="100px" />
                        <p class="font-raleway font-normal text-base leading-[21px] text-dark"
                            v-text="industry?.successCase.description" />
                        <ul :class="[{ [tripleColumnClass]: industry.successCase.results.length === 3 }]"
                            class="grid xl:grid-cols-2 grid-cols-1 gap-x-[24px] xl:gap-y-[16px] gap-y-[24px] mt-8 justify-start xl:justify-center">
                            <li v-for="result in industry?.successCase.results" class="flex gap-[8px] items-center"
                                :class="[{ ['xl:flex-col xl:items-center items-start xl:text-center']: industry.successCase.results.length === 3 }]">
                                <div class="w-[40px] h-[40px] shrink-0">
                                    <NuxtImg width="40px" height="40px" class="object-cover" :src="result.imagePath" />
                                </div>
                                <div class="flex flex-col gap-[2px] w-full"
                                    :class="[{ ['xl:items-center ']: industry.successCase.results.length === 3 }]">
                                    <h3 class="font-semibold text-[22px] font-montserrat leading-[26px] -tracking-[1%] text-dark"
                                        v-text="result.title" />

                                    <p class="font-montserrat font-normal text-base leading-[17px] text-dark"
                                        v-text="result.description" />
                                </div>
                            </li>
                        </ul>
                        <div class="flex max-w-[186px] justify-center mx-auto self-center mt-[32px]">
                            <NuxtLink :to="industry.successCase.pdfPath" target="_blank"
                                class="flex gap-[8px] items-center p-[8px] w-full ">
                                <span
                                    class="font-raleway font-semibold  text-base leading-[21px] text-purple shrink-0">Ver
                                    caso
                                    completo</span>
                                <nuxt-icon color="black" class="text-[20px]" name="rightline" filled />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CallToAction :light="false"
            text="¿Listo para comenzar a automatizar tu negocio y llevarlo al siguiente nivel?" />
    </main>
</template>

<style>
@keyframes border-animation {
    0% {
        border-right-color: #FFFFFF;
        border-top-color: #481878;
    }

    25% {
        border-right-color: #724ADA;
        border-bottom-color: #FFFFFF;
        border-top-color: #FFFFFF;
    }

    75% {
        border-bottom-color: #724ADA;
        border-left-color: #724ADA;
    }

    100% {
        border-left-color: #c7bfdc;
        border-top-color: #724ADA;
    }
}

.cool-border {
    transition: all;
    border-width: 2px;
    animation: border-animation 2.1s infinite;
}

.hover-shadow:hover {
    box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.2);
}
</style>