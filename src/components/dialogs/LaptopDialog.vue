<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        min-width="1000"
        title="Create a new laptop"
      >

        <v-card-text>
          <LaptopForm />
        </v-card-text>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Bekor qilish"
            @click="$store.commit('laptops/SET_DIALOG', false)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LaptopForm from '../forms/LaptopForm.vue';

  export default {
    name: "LaptopDialog",

    components: {
      LaptopForm
    },

    data: () => ({
    }),
    computed: {
      dialog() {
        return this.$store.state.laptops.dialog  
      }
    }
  }
</script>

<style scoped>

</style>
