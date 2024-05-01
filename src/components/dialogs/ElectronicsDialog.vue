<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        min-width="1000"
        title="Create a new electronic"
      >

        <v-card-text>
          <ElectronicForm />
        </v-card-text>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Bekor qilish"
            @click="$store.commit('electronics/SET_DIALOG', false)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ElectronicForm from '../forms/ElectronicForm.vue';

  export default {
    name: "LaptopDialog",

    components: {
      ElectronicForm
    },

    data: () => ({
    }),
    computed: {
      dialog() {
        return this.$store.state.electronics.dialog  
      }
    }
  }
</script>

<style scoped>

</style>
