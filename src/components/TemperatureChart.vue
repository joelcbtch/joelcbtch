<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import 'chartjs-adapter-date-fns';
import {
  Chart,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';

Chart.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Reading {
  time: string;
  value: number;
}

const readings = ref<Reading[]>([]);

const chartData = ref<ChartData<'line'>>({
  datasets: [],
});

const chartOptions = ref<ChartOptions<'line'>>({
  responsive: true,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'hour',
        tooltipFormat: 'HH:mm',
        displayFormats: { hour: 'HH:mm' },
      },
      title: { display: true, text: 'Time' },
    },
    y: {
      beginAtZero: false,
      title: { display: true, text: 'Temperature °C' },
    },
  },
});

async function fetchHistory() {
  const res = await fetch('/api/history-24h');
  if (!res.ok) throw new Error('History fetch failed');
  readings.value = await res.json();
  updateChart();
}

function updateChart() {
  const points = readings.value.map((r) => ({
    x: new Date(r.time).getTime(), // Chart.js accepts timestamps (number)
    y: r.value,
  }));

  chartData.value = {
    datasets: [
      {
        label: 'Temperature °C',
        data: points,
        borderColor: 'blue',
        fill: false,
      },
    ],
  };
}

onMounted(() => {
  void fetchHistory();
  setInterval(() => void fetchHistory(), 5000);
});
</script>
