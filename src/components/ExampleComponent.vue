<template>
  <q-card class="q-pa-lg q-mx-auto text-center" style="max-width: 500px">
    <q-card-section>
      <div class="text-h5 text-primary q-mb-md">{{ title }}</div>
      <div class="text-subtitle1 text-secondary q-mb-md">{{ subtitle }}</div>
      <div class="text-body2 text-accent">{{ subsubtitle }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  subsubtitle: string;
}

defineProps<Props>();
</script>
