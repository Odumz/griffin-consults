<template>
  <navbar />
  <conference-info mb-10 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConferenceInfo from '@/components/dashboard/conference-info.vue'
import navbar from '@/components/dashboard/navbar.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    ConferenceInfo,
    navbar
  }
})
</script>
