<template>
  <section id="app" class="scroll-y">
    <div class="d-flex flex-row overflow pa-10">
      <v-row>
        <v-col v-for="dish in dishes" :key="dish.id" cols="12" sm="3">
          <my-dish :dish="dish" class="pa-4" />
        </v-col>
      </v-row>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script>

export default {
  props: [],
  data () {
    return {
      dishes: {},
      carts: {}
      /* isOpened: false,
      selected: 0, */
    }
  },
  computed: {},
  /* async mounted() { */

  async created () {
    const result = await fetch(
      'https://634a16c333bb42dca4fe1722.mockapi.io/api/food'
    ).then(response => response.json())
    this.dishes = result

    console.log(this.dishes)
  },
  methods: {

    onScroll (e) {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }

  }
}
</script>

<style>
#myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #0563bb;
    color: white;
    cursor: pointer;
    padding: 15px 17px;
    border-radius: 50%;
  }

  #myBtn:hover {
    background-color: #628df3;
  }
</style>
