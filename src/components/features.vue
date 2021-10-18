<template>
  <div class="reveal py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Simple . Smart . Trusted</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Meet, chat, and call in just one place
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          The easiest way to meet over video, at any time, on any device – with no app or software download required.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt class="flex">
              <div class="absolute reveal fromLeft flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Icon :icon="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 reveal fromRight text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 reveal fromRight text-left text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

const features = [
  {
    name: 'Get a link you can share',
    description:
      'Click New meeting to get a link you can send to people you want to meet with no downloads necessary.',
    icon: 'ci:link-02'
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'cil:balance-scale'
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'radix-icons:lightning-bolt'
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'heroicons-outline:annotation'
  }
]

export default defineComponent({
  name: 'Features',
  components: { Icon },
  setup () {
    return {
      features
    }
  }
})
</script>
