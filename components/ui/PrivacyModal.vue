<template>
  <UiBaseModal
    :open="showPrivacy"
    title-text="Política de Privacidad"
    title-id="privacy-modal-title"
    @close="closePrivacy()"
  >
    <template #title>Política de Privacidad</template>

    <p class="text-gray-500 text-xs mb-4">Última actualización: marzo 2026</p>

    <h3>1. Responsable del tratamiento</h3>
    <p>
      <strong>Dr. Jorge Eduardo Pacheco Ponce</strong> (en adelante "el Responsable"), con cédula profesional
      11603525 y cédula de especialidad 14012808, con consultorios ubicados en <strong>Centro Médico Esmeralda</strong>
      y <strong>Clínica Médica Arboledas</strong>, Estado de México, es el responsable del tratamiento de sus datos
      personales de conformidad con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los
      Particulares (LFPDPPP)</strong>.
    </p>

    <h3>2. Datos personales que recabamos</h3>
    <p>El Responsable podrá recabar los siguientes datos personales:</p>
    <ul>
      <li>Datos de identificación: nombre, teléfono, correo electrónico.</li>
      <li>Datos de salud (sensibles): condiciones médicas, motivo de consulta, historial clínico.</li>
    </ul>

    <h3>3. Finalidades del tratamiento</h3>
    <p>Sus datos serán utilizados para:</p>
    <ul>
      <li>Brindar y coordinar la atención médica solicitada.</li>
      <li>Comunicar el seguimiento de su consulta.</li>
      <li>Cumplir con obligaciones legales en materia de salud.</li>
    </ul>

    <h3>4. Transferencia de datos</h3>
    <p>
      El Responsable no transferirá sus datos personales a terceros sin su consentimiento previo, salvo en los
      casos previstos por la LFPDPPP o cuando sea requerido por autoridades sanitarias competentes.
    </p>

    <h3>5. Derechos ARCO</h3>
    <p>
      Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar y Oponerse</strong> al tratamiento de sus
      datos personales (Derechos ARCO). Para ejercerlos, comuníquese al teléfono <strong>5539203393</strong>.
    </p>

    <h3>6. Cookies</h3>
    <p>
      Este sitio web utiliza cookies técnicas y analíticas. Puede gestionar su consentimiento mediante el banner
      de cookies. Para más información, consulte la sección correspondiente en este aviso.
    </p>

    <h3>7. Cambios al aviso</h3>
    <p>
      Nos reservamos el derecho de modificar este aviso en cualquier momento. Los cambios serán publicados en
      este mismo sitio web con la fecha de actualización.
    </p>
  </UiBaseModal>
</template>

<script setup lang="ts">
const { showPrivacy, closePrivacy } = useModals()
</script>
