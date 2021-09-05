<template>
  <navbar />
  <settings class="mb-10" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settings from '@/components/dashboard/settings.vue'
import navbar from '@/components/dashboard/navbar.vue'

export default defineComponent({
  name: 'About',
  components: {
    settings,
    navbar
  }
})
</script>
