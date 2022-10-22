<!-- <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button> -->
<template>
  <!-- #card="{ cart }" -->
  <section>
    <template>
      <v-card class="my-auto mx-12" width="300" height="550">
        <v-img
          height="250"
          :src="&quot;https://cdn-icons-png.flaticon.com/512/34/34627.png&quot;"
        />

        <v-card-title>Cart number {{ cart.id }}</v-card-title>

        <!-- <v-card-text>
            <p>{{ cart.description }}</p>
          </v-card-text> -->

        <v-divider class="mx-4" />

        <v-card-text>
          <p><strong>Name: {{ cart.items[0].name }}</strong></p>
          <p><strong>Price: {{ cart.items[0].price }}</strong></p>
          <p><strong>Quantity: {{ cart.items[0].quantity }}</strong></p>
          <p><strong>Total: {{ cart.total }}</strong></p>
          <p v-if="cart.paid" class="green--text">
            <strong>Paid</strong>
          </p>
          <p v-else class="red--text">
            <strong>Unpaid</strong>
          </p>
        </v-card-text>
      </v-card>
    </template>
  </section>
</template>

<script>
export default {
  props: ['cart']
}
</script>

  <style></style>
