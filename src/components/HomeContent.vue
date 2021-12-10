<template>
  <div>
    <button-one></button-one>
    <section class="quotes_container">
    <page-quote v-for="quote in quotes" :key="quote._id" :quote="quote">
    </page-quote></section>
    <h6 @click="get_quote">Know Thy Self!</h6>
  </div>
</template>

<script>
import ButtonOne from "./ButtonOne.vue";
import PageQuote from "./PageQuote.vue";
export default {
  name: "home-content",
  components: {
    ButtonOne,
    PageQuote,
  },
  computed: {
    quotes() {
      return this.$store.state['quotes'];
    }
  },
  methods: {
    get_quote() {
      this.$store.dispatch('get_quote');
    }
}
}
</script>

<style scoped>
.quotes_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}
</style>