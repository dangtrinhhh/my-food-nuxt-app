<!-- <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button> -->
<template>
  <!-- #card="{ cart }" -->
  <section>
    <template>
      <v-card class="my-auto mx-12" width="300" height="600">
        <v-img
          height="250"
          :src="'https://cdn-icons-png.flaticon.com/512/34/34627.png'"
        />

        <v-card-title>Cart number {{ cart.id }}</v-card-title>

        <!-- <v-card-text>
            <p>{{ cart.description }}</p>
          </v-card-text> -->

        <v-divider class="mx-4" />

        <v-card-text>
          <p>
            <strong>Name: {{ cart.items[0].name }}</strong>
          </p>
          <p>
            <strong>Quantity: {{ cart.items.length }}</strong>
          </p>
          <p>
            <strong>Total: {{ cart.total }}</strong>
          </p>
          <p v-if="cart.paid" class="green--text">
            <strong>Paid</strong>
          </p>
          <p v-else class="red--text">
            <strong>Unpaid</strong>
          </p>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            class="white--text pay-btn"
            color="black"
            width="50%"
            @click="
              postData(
                'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart',
                {
                  paid: true,
                }
              )/* .then(() => {
                postData(
                  'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart',
                  {
                    paid: true,
                  }
                );
              }) */
            "
          >
            Pay
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </section>
</template>
<script>
export default {
  props: ['cart'],
  methods: {
    async postData (url = '', data = {}) {
      // Default options are marked with *
      const newurl = url + '/' + this.cart.id
      await fetch(newurl, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      this.$emit('update')
      // parses JSON response into native JavaScript objects
    }
  }
}
</script>

<style></style>
