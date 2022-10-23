<template>
  <div class="d-flex flex-row overflow pa-10">
    <v-row>
      <v-col v-for="cart in unpaidcarts" :key="cart.id" cols="12" sm="3">
        <my-cart :cart="cart" class="pa-4" @update="updateCart" />
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
      unpaidcarts: {}
      /* isOpened: false,
        selected: 0, */
    }
  },

  async fetch () {
    const result = await fetch(
      'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart'
    ).then(response => response.json())
    this.carts = result
    this.unpaidcarts = this.carts.filter(cart => cart.paid === false)
  },

  /* async mounted () {
      const result = await fetch('https://634a16c333bb42dca4fe1722.mockapi.io/api/cart')
        .then(response => response.json())
      this.carts = result
    }, */
  methods: {
    async updateCart () {
      await this.$fetch()
    }
  }
}
</script>
