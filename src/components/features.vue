<template>
  <div class="reveal fromTop py-12">
    <div class="max-w-7xl mx-auto px-8 sm:px-20">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-900 font-semibold tracking-wide uppercase">Simple . Smart . Trusted</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Meet, chat, and call in just one place
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          The easiest way to meet over video, at any time, on any device – with no app or software download required.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 items-center">
          <div v-for="feature in features" :key="feature.name" class="relative hidden md:flex">
            <div v-if="feature.image">
              <img :src="feature.image" class="w-full delay object-fill reveal fromLeft rounded-md" />
            </div>
            <div v-else class="reveal">
              <dt class="flex">
                <div class="absolute reveal fromLeft flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">
                  <Icon :icon="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 reveal fromRight text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 reveal fromRight text-left text-base text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </div>
          <div v-for="feature in featuresMobile" :key="feature.name" class="relative md:hidden flex">
            <div class="reveal">
              <dt class="flex">
                <div class="absolute reveal fromLeft flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Icon :icon="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 reveal fromRight text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 reveal fromRight text-left text-base text-gray-500">
                {{ feature.description }}
              </dd>
                <img :src="feature.image" class="mt-3 w-full object-fill reveal fromLeft rounded-md" />
            </div>
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
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
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
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'heroicons-outline:annotation'
  }
]

const featuresMobile = [
  {
    name: 'Get a link you can share',
    description:
      'Click New meeting to get a link you can send to people you want to meet with no downloads necessary.',
    icon: 'ci:link-02',
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'cil:balance-scale',
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'radix-icons:lightning-bolt',
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'heroicons-outline:annotation',
    image: 'https://res.cloudinary.com/griffintech/image/upload/v1622216124/8fb01faa5d99faceb820e1b180fb7243_ccu0cd.jpg'
  }
]

export default defineComponent({
  name: 'Features',
  components: { Icon },
  setup () {
    return {
      features,
      featuresMobile
    }
  }
})
</script>
