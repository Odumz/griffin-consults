<template>
<navbar />
  <register />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import register from '@/components/register.vue'

export default defineComponent({
  name: 'About',
  components: {
    register
  }
})
</script>
