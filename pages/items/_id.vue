<template>
  <section>
    <template>
      <v-card
        class="mx-auto my-12"
        width="350"
        height="650"
        @update="updateDish"
      >
        <v-img height="250" :src="dishes.length && dishes[nums].image" />
        <v-card-title>{{ dishes.length && dishes[nums].name }}</v-card-title>

        <v-card-text>
          <p>{{ dishes.length && dishes[nums].description }}</p>
        </v-card-text>

        <v-divider class="mx-4" />

        <v-card-title>
          <h2>{{ dishes.length && dishes[nums].price + " $" }}</h2>
        </v-card-title>

        <v-card-text>
          <!-- <v-text-field label="Quantity" single-line outlined /> -->
          Quantity
          <v-text-field
            ref="input"
            v-model.number="number"
            type="number"
            step="any"
            min="1"
            :rules="[numberRule]"
          />
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="black"
            class="white--text"
            width="50%"
            @click="
              if (unpaidcarts.length > 0) {
                postData(
                  'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart',
                  {}
                );
              } else {
                createData(
                  'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart',
                  {}
                );
              }
              handleClick();
            "
          >
            Add to cart
          </v-btn>
        </v-card-actions>
        <v-alert
          color="green"
          dense
          type="success"
          height="40px"
          width="170px"
          class="d-fixed mx-auto mt-5"
          :value="alert"
        >
          Success!
        </v-alert>
      </v-card>
    </template>
  </section>
</template>

<script>
/* import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VuetifyFloatingMessage from 'vuetify'
Vue.use(VuetifyFloatingMessage, { Vuetify }) */
export default {
  props: ['name', 'image', 'description', 'price'],
  data () {
    return {
      slug: this.$route.params,
      dishes: [],
      nums: this.$route.params.id - 1,
      carts: {},
      unpaidcarts: {},
      tquantity: 0,
      titems: [],
      ttotal: 0,
      alert: false,
      number: 1,
      enteredValue: ''
    }
  },
  async fetch () {
    const result = await fetch(
      'https://634a16c333bb42dca4fe1722.mockapi.io/api/cart'
    ).then(response => response.json())
    this.carts = result
    this.unpaidcarts = this.carts.filter(cart => cart.paid === false)
  },
  async created () {
    const result = await fetch(
      'https://634a16c333bb42dca4fe1722.mockapi.io/api/food'
    ).then(response => response.json())
    this.dishes = result
  },
  /* mkdata (element) {
    element.push(this.dishes[this.nums])
  }, */

  methods: {
    /* mkdata (element) {
      element.push(this.dishes[this.nums])
    }, */
    async postData (url = '', data = {}) {
      if (this.dishes.length) {
        // this.$message.success('a message') // shows a success
        // this.tquantity = Number(this.unpaidcarts[0].quantity) + 1

        this.titems = this.unpaidcarts[0].items
        /* for(item in titems) {
          if(this.dishes[this.nums])
        } */

        this.titems.push(this.dishes[this.nums])
        this.ttotal =
          parseInt(this.unpaidcarts[0].total) +
          parseInt(this.dishes[this.nums].price) * parseInt(this.number)
        this.tquantity = parseInt(this.unpaidcarts[0].quantity) + parseInt(this.number)
      }
      data = {
        items: this.titems,
        total: this.ttotal,
        quantity: this.tquantity
      }
      // Default options are marked with *
      const newurl = url + '/' + this.unpaidcarts[0].id
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
    },

    async createData (url = '', data = {}) {
      if (this.dishes.length) {
        // this.$message.success('a message') // shows a success

        this.titems.push(this.dishes[this.nums])
        this.ttotal =
          parseInt(this.ttotal) + parseInt(this.dishes[this.nums].price) * parseInt(this.number)
        /*           parseInt(this.unpaidcarts[0].total) +
          parseInt(this.dishes[this.nums].price) */
        this.tquantity = parseInt(this.tquantity) + parseInt(this.number)
      }
      data = {
        items: this.titems,
        total: this.ttotal,
        quantity: this.tquantity
      }
      // Default options are marked with *
      const newurl = url
      await fetch(newurl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      this.$emit('update')
      // parses JSON response into native JavaScript objects
    },
    async updateDish () {
      await this.$fetch()
    },
    /* handleClick () {
      if (this.unpaidcarts.length > 0) {
        postData('https://634a16c333bb42dca4fe1722.mockapi.io/api/cart', {})
      } else {
        createData('https://634a16c333bb42dca4fe1722.mockapi.io/api/cart', {})
      }
    } */
    handleClick () {
      this.alert = !this.alert
      setTimeout(() => (this.alert = !this.alert), 1000)
    },
    numberRule: (val) => {
      if (val < 0) {
        return 'Please enter a positive number'
      }
      return true
    },
    addNum () {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    }
  }
}
</script>

<style></style>
