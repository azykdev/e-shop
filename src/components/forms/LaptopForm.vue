/* stylelint-disable CssSyntaxError */
<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

// getting store
const store = useStore()

// DATA -------------------------------------------------
const refImgInput = ref()
const laptopForm = ref({
  image: 'https://www.shutterstock.com/image-vector/photo-camera-vector-icon-600nw-1345025204.jpg',
  model: '',
  brand: '',
  descr: '',
  star: '',
  price: '',
})

// METHODS ---------------------------------------------------
// Change avatar
const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') laptopForm.value.image = fileReader.result
    }
  }
}

// Submit form
const submitForm = () => {

  if (laptopForm.value.model && laptopForm.value.brand && laptopForm.value.descr && laptopForm.value.price) {

    if (store.state.laptops.laptop) {
      store.dispatch('laptops/putLaptop', laptopForm.value).then(() => {
        store.dispatch('laptops/getLaptops')
      })  
    } else {
      store.dispatch('laptops/postLaptop', laptopForm.value).then(() => {
        store.dispatch('laptops/getLaptops')
      })
    }


  } else {
    alert('Validation failed!')
  }
}

// COMPUTED --------------------------------------------------
const laptop = computed(() => {
  return store.state.laptops.laptop
})


// WATCH ------------------------------------------------
watch(() => {
  if (laptop.value) {
    laptopForm.value = JSON.parse(JSON.stringify(laptop.value))
  }
})
</script>

<template>
  <VForm @submit.prevent="submitForm">
    <VRow>
      <VCol
        cols="12"
      >
        <VRow>
          <!-- 👉 Avatar -->
          <VCol
            cols="12"
            class="d-flex"
          >
            <!-- 👉 Avatar img-->
            <VAvatar
              rounded="lg"
              size="100"
              class="me-6"
              :image="laptopForm.image"
            ></VAvatar>
            <!-- 👉 Upload avatar img -->
            <div>
              <v-tooltip text="Rasm tanlash">
                <template v-slot:activator="{ props }">
                  <VBtn
                    v-bind="props"
                    color="primary"
                    @click="refImgInput?.click()"
                  >
                    <VIcon
                      icon="mdi-cloud-upload-outline"
                      class="d-sm-none"
                    />
                    <span class="d-none d-sm-block">Rasm tanlash</span>
                  </VBtn>
                </template>
              </v-tooltip>

              <input
                ref="refImgInput"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              />
              <p class="text-caption my-2">Allowed JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </VCol>

          <!-- 👉 Model -->
          <VCol cols="12">
            <VTextField
              label="Model"
              variant="outlined"
              density="comfortable"
              clearable
              v-model="laptopForm.model"
            />
          </VCol>

          <!-- 👉 Brand -->
          <VCol cols="12">
            <VTextField
              label="Brand"
              variant="outlined"
              density="comfortable"
              clearable
              v-model="laptopForm.brand"
            />
          </VCol>

          <!-- 👉 Description -->
          <VCol cols="12">
            <VTextField
              label="Description"
              variant="outlined"
              density="comfortable"
              clearable
              v-model="laptopForm.descr"
            />
          </VCol>

          <!-- 👉 Star -->
          <VCol cols="12">
            <VTextField
              label="Star"
              variant="outlined"
              density="comfortable"
              clearable
              v-model="laptopForm.star"
              type="number"
              
            />
          </VCol>

          <!-- 👉 Price -->
          <VCol cols="12">
            <VTextField
              label="Price"
              variant="outlined"
              density="comfortable"
              clearable
              v-model="laptopForm.price"
              type="number"
            />
          </VCol>

          <VCol
            cols="12"
            class="d-flex gap-4"
          >
            <VSpacer />
            <VBtn
              type="submit"
              color="success"
              size="small"
            >
              Yuborish
            </VBtn>

            <VBtn
              color="secondary"
              type="reset"
              variant="tonal"
              size="small"
            >
              Tozalash
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
      
    </VRow>

  </VForm>
</template>
