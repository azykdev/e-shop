<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        min-width="1000"
        title="Create a new smartphone"
      >

        <v-card-text>
          <SmartphoneForm />
        </v-card-text>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Bekor qilish"
            @click="$store.commit('smartphones/SET_DIALOG', false)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SmartphoneForm from '../forms/SmartphoneForm.vue';

  export default {
    name: "SmartphoneDialog",

    components: {
      SmartphoneForm
    },

    data: () => ({
    }),
    computed: {
      dialog() {
        return this.$store.state.smartphones.dialog  
      }
    }
  }
</script>

<style scoped>

</style>
