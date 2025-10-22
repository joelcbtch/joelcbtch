<template>
  <q-page class="row items-center justify-center">
    <q-card class="q-pa-lg q-mx-auto q-my-xl text-center" style="max-width: 500px">
      <q-card-section class="column items-center q-gutter-md">
        <ExampleComponent
          title="Hello World"
          subtitle="Cavatech Tutorial"
          subsubtitle="Tutorial"
          active
        />
        <TemperatureChart />
        <TemperatureDisplay />
        <ButtonComponent buttontext="Click here" link="https://quasar.dev/introduction-to-quasar" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
//import ExampleComponent from 'src/components/ExampleComponent.vue';
//import ButtonComponent from 'src/components/ButtonComponent.vue';
import TemperatureDisplay from 'src/components/TemperatureDisplay.vue';
import TemperatureChart from 'src/components/TemperatureChart.vue';
</script>
