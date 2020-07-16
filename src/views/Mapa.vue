<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h1 class="title">Mapa</h1>
        <div>
          <GChart :settings="{ packages: ['map'] }" 
           type="Map" :data="chartData" 
          :options="chartOptions" />
        </div>
      </div>  
    </div>
    
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
       ['Lat', 'Long', 'Name'],
       [5.684659, -76.660186,'Centro de Operaciones'],
       [5.684712, -76.660135,'Visita'],
       [5.684739, -76.660125,'Ñata']

      ],
      chartOptions: {
        mapType: 'styledMap',
        zoomLevel: 20,
        showTooltip: true,
        showInfoWindow: true,
        useMapTypeControl: true,
        maps: {
          // Your custom mapTypeId holding custom map styles.
          styledMap: {
            name: 'Styled Map', // This name will be displayed in the map type control.
            }}   
      }
    };
  }
};
</script>
