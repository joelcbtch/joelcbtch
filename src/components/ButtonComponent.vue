<template>
  <div class="button-wrapper-class">
    <q-btn
      :label="buttontext"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      class="button-primary"
      unelevated
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  buttontext: string;
  link: string;
}

defineProps<Props>();
</script>

<style lang="scss">
@import 'src/css/quasar.variables.scss';

.button-wrapper-class {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-primary {
  color: $primary;
  font-size: 28px;
  font-weight: bold;
}
</style>
