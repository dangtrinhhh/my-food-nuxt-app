<template>
  <div class="d-flex flex-row overflow pa-10">
    <v-row>
      <v-col v-for="cart in paidcarts" :key="cart.id" cols="12" sm="3">
        <my-history :cart="cart" class="pa-4" />
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  /* async mounted() { */
  name: 'Cart',
  props: [],
  data () {
    return {
      carts: {},
      paidcarts: {},
      unpaidcart: {}
      /* isOpened: false,
          selected: 0, */
    }
  },
  async created () {
    const result = await fetch('https://634a16c333bb42dca4fe1722.mockapi.io/api/cart')
      .then(response => response.json())
    this.carts = result
    this.paidcarts = this.carts.filter(cart => (cart.paid === true))
  },
  /* async mounted () {
        const result = await fetch('https://634a16c333bb42dca4fe1722.mockapi.io/api/cart')
          .then(response => response.json())
        this.carts = result
      }, */
  methods: {

  }
}
</script>
