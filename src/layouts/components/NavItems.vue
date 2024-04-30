<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
      :item="{
        title: 'Dashboard',
        to: '/dashboard',
        icon: 'ri-dashboard-line',
      }"
    />

  <VerticalNavSectionTitle
    :item="{
      heading: 'Mahsulotlar',
    }"
  />
  <VerticalNavLink
      :item="{
        title: 'Kompyuterlar',
        to: '/laptops',
        icon: 'ri-macbook-line',
      }"
    />
  <VerticalNavLink
      :item="{
        title: 'Telefonlar',
        to: '/smartphones',
        icon: 'ri-smartphone-line',
      }"
    />
  <VerticalNavLink
      :item="{
        title: 'Elektronika',
        to: '/electronics',
        icon: 'mdi mdi-flash',
      }"
    />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
  
  
  
</template>
