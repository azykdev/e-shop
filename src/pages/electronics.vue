<template>
  <ElectronicsDialog />
  <div class="d-flex align-center justify-space-between mb-5">
    <!-- title -->
    <h1>Elektronika</h1>

    <!-- create button -->
    <VBtn
      color="success"
      @click="$store.commit('electronics/SET_DIALOG', true)"
    >
      Create Laptop
    </VBtn>
  </div>

  <ElectronicTable v-if="electronics" :electronics="electronics" />
</template>

<script>
import ElectronicsDialog from '@/components/dialogs/ElectronicsDialog.vue';
import ElectronicTable from '@/components/tables/ElectronicTable.vue';

  export default {
    name: "electronics",

    components: {
      ElectronicsDialog,
      ElectronicTable
    },

    mounted() {
      this.$store.dispatch('electronics/getElectronics')
    },

    computed: {
      electronics() {
        return this.$store.state.electronics.electronics
      }
    }
  }
</script>

<style scoped>

</style>
