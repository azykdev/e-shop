<template>
  <LaptopDialog />
  <div class="d-flex align-center justify-space-between mb-5">
    <!-- title -->
    <h1>Kompyuterlar</h1>

    <!-- create button -->
    <VBtn
      color="success"
      @click="$store.commit('laptops/SET_DIALOG', true)"
    >
      Create Laptop
    </VBtn>
  </div>

  <LaptopTable v-if="laptops" :laptops="laptops" />


 </template>

<script>
import LaptopDialog from '@/components/dialogs/LaptopDialog.vue';
import LaptopTable from '@/components/tables/LaptopTable.vue';

  export default {
    name: "laptops",

    components: {
      LaptopDialog,
      LaptopTable
    },

    mounted() {
      this.$store.dispatch('laptops/getLaptops')
    },

    computed: {
      laptops() {
        return this.$store.state.laptops.laptops
      }
    }
  }
</script>

<style scoped>

</style>
