<template>
  <div id="footer_widgets" class="md:flex p-3 px-8 sm:px-20 reveal fromBottom bg-indigo-900 text-white">
    <div id="about" class="md:w-2/5 reveal fromLeft md:flex justify-center items-center rounded-md m-2 shadow-md px-3 py-6">
      <div id="logo" class="md:w-1/3 reveal fromRight flex justify-center items-center pr-4 py-4">
        <img class="w-1/4 md:w-full" src="../assets/logo_white.png" alt="GriffinTech" />
      </div>
      <div id="about_text" class="md:w-2/3 reveal fromLeft px-3 py-1 flex text-left">
        <p>This is one of the most interesting projects I've had the opportunity of working on. It really got me inpsired and I was glad I jumped on it. </p>
      </div>
    </div>
    <div id="quicklinks" class="md:w-1/5 reveal fromTop flex justify-center rounded-md m-2 shadow-md px-3 py-6">
      <div>
        <h1 class="tracking-widest reveal fromBottom uppercase py-3 md:pt-1">Quicklinks</h1>
        <ul class="reveal fromTop text-left">
          <li>Demo</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>F.A.Q</li>
        </ul>
      </div>
    </div>
    <div id="contact" class="md:w-2/5 reveal grid lg:grid-cols-3 gap-4 fromRight rounded-md m-2 shadow-md px-3 py-6">
      <div id="footermap" class="reveal fromLeft flex justify-center items-center col-span-2">
        <footermap />
      </div>
      <div id="contact_info" class="reveal fromRight grid text-left col-span-1">
        <p>Phone</p>
        <p>Email</p>
        <p>Youtube</p>
        <p>LinkedIn</p>
      </div>
    </div>
  </div>
  <div id="copyright">
    <p class="flex justify-center py-4 text-indigo-900">&copy; GriffinTech 2021</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import footermap from '@/components/footer-map.vue'

export default defineComponent({
  components: { footermap },
  setup () {
    // const center = { lat: 40.689247, lng: -74.044502 } 6.5456657,3.3783681
    const center = { lat: 6.5456657, lng: 3.3783681 }

    const test = () => {
      console.log('test')
    }

    return { center, test }
  }
})
</script>
