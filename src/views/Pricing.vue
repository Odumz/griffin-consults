<template>
  <pricing />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pricing from '@/components/pricing.vue'

export default defineComponent({
  name: 'About',
  components: {
    pricing
  }
})
</script>
