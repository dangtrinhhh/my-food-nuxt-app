<!-- <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button> -->
<template>
  <!-- #card="{ dish }" -->
  <section>
    <template>
      <v-card class="my-auto mx-12" width="300" height="450">
        <v-img
          height="250"
          :src="dish.image"
        />
        <v-card-title>{{ dish.name }}</v-card-title>

        <!-- <v-card-text>
          <p>{{ dish.description }}</p>
        </v-card-text> -->

        <v-divider class="mx-4" />

        <v-card-title>
          <h2>{{ dish.price + " $" }}</h2>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-btn color="black" width="50%">
            <nuxt-link :to="`/items/${dish.id}`">
              <!--  :to="localePath(`/items/${dish.id}`)"   -->
              Details
            </nuxt-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </section>
</template>
<script>
export default {
  props: ['dish']
}
</script>

<style></style>
