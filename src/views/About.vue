<template>
<navbar />
  <div class="about mb-10">
    <h1>This is an about page</h1>
  </div>
  <conference-info mb-10 />
  <settings class="mb-10" />
  <modal class="mb-10" />
  <pagination class="mb-10" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConferenceInfo from '@/components/dashboard/conference-info.vue'
import settings from '@/components/dashboard/settings.vue'
import navbar from '@/components/dashboard/navbar.vue'
import pagination from '@/components/pagination.vue'
import modal from '@/components/modal.vue'

export default defineComponent({
  name: 'About',
  components: {
    ConferenceInfo,
    settings,
    navbar,
    pagination,
    modal
  }
})
</script>
