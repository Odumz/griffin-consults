<template>
  <!-- <div class="map">
    Hid
  </div> -->
  <GoogleMap
    api-key="AIzaSyDDR-5mWBAYzEzLy1vvxxNBc9fqfYb2wMQ"
    style="width: 100%; height: 200px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup () {
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  }
})
</script>
