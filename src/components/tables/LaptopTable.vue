<template>
  <v-table>
    <thead>
      <tr>
        <th style="width: 50px;"></th>
        <th class="text-left">
          Model
        </th>
        <th class="text-left">
          Brand
        </th>
        <th class="text-left">
          Star
        </th>
        <th class="text-left">
          Price
        </th>
        <th style="width: 100px;"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in laptops"
        :key="item.id"
      >
        <td><img :src="item.image" alt="" width="40" class="rounded-full mt-2"></td>
        <td> {{ item.model }}</td>
        <td>{{ item.brand }}</td>
        <td>
          <span class="mdi mdi-star text-warning text-h6 " v-for="item in Number(item.star % 6)" :key="item"></span>
        </td>
        <td>{{ item.price }}$</td>
        <td>
          <span class="mdi mdi-square-edit-outline text-primary text-h4" style="cursor: pointer;" @click="getLaptop(item.id)"></span>
          <span class="mdi mdi-delete text-error text-h4 ms-3" style="cursor: pointer;" @click="deleteLaptop(item.id)"></span>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import laptops from '@/store/modules/laptops'

  export default {
    name: "LaptopTables",
    props: {
      laptops: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {
      deleteLaptop(id) {
        this.$store.dispatch('laptops/deleteLaptop', id).then(() => {
          this.$store.dispatch('laptops/getLaptops')
        })
      },

      getLaptop(id) {
        this.$store.dispatch('laptops/getLaptop', id).then(() => {
          this.$store.commit('laptops/SET_DIALOG', true)
        })
      }
    },
  }
</script>

<style scoped>

</style>
