<template>
  <SmartphoneDialog />
  <div class="d-flex align-center justify-space-between mb-5">
    <!-- title -->
    <h1>Telefonlar</h1>

    <!-- create button -->
    <VBtn
      color="success"
      @click="$store.commit('smartphones/SET_DIALOG', true)"
    >
      Create Smartphone
    </VBtn>
  </div>

  <SmartphoneTable v-if="smartphones" :smartphones="smartphones" />
</template>

<script>
import SmartphoneDialog from '@/components/dialogs/SmartphoneDialog.vue';
import SmartphoneTable from '@/components/tables/SmartphoneTable.vue';

  export default {
    name: "telephones",

    components: {
      SmartphoneDialog,
      SmartphoneTable
    },

    mounted() {
      this.$store.dispatch('smartphones/getSmartphones')
    },

    computed: {
      smartphones() {
        return this.$store.state.smartphones.smartphones
      }
    }
  }
</script>

<style scoped>

</style>
