<template>
  <UiBaseModal
    :open="showTerms"
    title-text="Términos y Condiciones"
    title-id="terms-modal-title"
    @close="closeTerms()"
  >
    <template #title>Términos y Condiciones</template>

    <p class="text-gray-500 text-xs mb-4">Última actualización: marzo 2026</p>

    <h3>1. Aceptación de los términos</h3>
    <p>
      El acceso y uso de este sitio web constituye la aceptación de los presentes Términos y Condiciones.
      Si no está de acuerdo, le pedimos que discontinúe su uso.
    </p>

    <h3>2. Objeto del sitio</h3>
    <p>
      Este sitio web tiene como objetivo proporcionar <strong>información general sobre los servicios médicos
      geriátricos</strong> del Dr. Jorge Eduardo Pacheco Ponce y facilitar el contacto para agendar consultas.
      El contenido publicado es de carácter informativo y <strong>no sustituye la consulta médica presencial</strong>.
    </p>

    <h3>3. Responsabilidad sobre el contenido</h3>
    <p>
      La información médica incluida en este sitio es de carácter general y educativo. El Responsable no se
      hace responsable de decisiones médicas tomadas con base en el contenido del sitio sin supervisión
      profesional.
    </p>

    <h3>4. Propiedad intelectual</h3>
    <p>
      Todos los contenidos del sitio (textos, imágenes, logotipos y diseño) son propiedad del Dr. Jorge Eduardo
      Pacheco Ponce o cuentan con las licencias correspondientes. Queda prohibida su reproducción sin
      autorización previa por escrito.
    </p>

    <h3>5. Uso del servicio de mensajería (WhatsApp)</h3>
    <p>
      El contacto vía WhatsApp es exclusivamente para coordinar citas y orientación general. No se proporcionarán
      diagnósticos médicos a través de este canal.
    </p>

    <h3>6. Aviso COFEPRIS</h3>
    <p>
      El Dr. Jorge Eduardo Pacheco Ponce se encuentra en proceso de obtención del registro de publicidad sanitaria
      ante la <strong>COFEPRIS</strong>. Este sitio cumple con los lineamientos de publicidad de servicios médicos
      establecidos por la Secretaría de Salud de México.
    </p>

    <h3>7. Ley aplicable</h3>
    <p>
      Los presentes Términos y Condiciones se rigen por las leyes vigentes en los <strong>Estados Unidos Mexicanos</strong>.
      Cualquier controversia será resuelta ante los tribunales competentes del Estado de México.
    </p>
  </UiBaseModal>
</template>

<script setup lang="ts">
const { showTerms, closeTerms } = useModals()
</script>
