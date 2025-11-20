<template>
  <router-view />
  <main>
    <p>
      Temperature:
      {{ temp ? temp.value + '°C' : '-' }}
    </p>

    <p>
      Updated:
      {{ temp?.time ? new Date(temp.time).toLocaleTimeString() : '-' }}
    </p>

    <section class="stats">
      <h5>{{ formattedDate }}</h5>
      <p>Min: {{ stats.min?.toFixed(1) ?? '-' }}°C</p>
      <p>Average: {{ stats.avg?.toFixed(1) ?? '-' }}°C</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

interface Temp {
  value: number;
  time: string;
}

const temp = ref<Temp | null>(null);
const stats = ref({ min: 0, max: 0, avg: 0 });

// ==============================
// Fetch temperature
// ==============================
async function fetchTemp() {
  try {
    const res = await fetch('/api/temp');
    if (!res.ok) throw new Error('Failed to fetch temperature');
    const data = await res.json();

    const isNew = !temp.value || temp.value.time !== data.time;
    temp.value = data;

    if (isNew) void fetchStats();
  } catch (err) {
    console.error('Error fetching temperature:', err);
  }
}

// ==============================
// Fetch all stats (min, max, avg)
// ==============================
async function fetchStats() {
  try {
    const [avgRes, minmaxRes] = await Promise.all([
      fetch('/api/average-today'),
      fetch('/api/stats-today'),
    ]);

    const avgData = await avgRes.json();
    const minmaxData = await minmaxRes.json();

    stats.value = {
      min: minmaxData.minTemp,
      max: minmaxData.maxTemperature,
      avg: avgData.average,
    };
  } catch (err) {
    console.error('Error fetching stats:', err);
  }
}

// ==============================
// Date headline
// ==============================
const formattedDate = computed(() =>
  new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
);

onMounted(() => {
  void fetchTemp();
  setInterval(() => void fetchTemp(), 5000);
});
</script>

<style scoped>
.stats {
  margin-top: 1em;
  text-align: center;
  line-height: 1.5;
}
.stats h2 {
  font-weight: 600;
  margin-bottom: 0.4em;
}
</style>
