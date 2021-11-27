<template>
  <div class="home overflow-hidden">
    <hero class="mb-10 " />
    <features class="mb-10 reveal fromTop " />
    <cta class="reveal fromLeft" />
    <subscribe class="md:py-14 py-7 reveal fromRight" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/hero.vue'
import Features from '@/components/features.vue'
import cta from '@/components/cta.vue'
import subscribe from '@/components/subscribe.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Hero,
    Features,
    cta,
    subscribe
  }
})
</script>
