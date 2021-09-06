<template>
  <sign-in class="mb-10" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import signIn from '@/components/sign-in.vue'

export default defineComponent({
  name: 'Login',
  components: {
    signIn
  }
})
</script>
