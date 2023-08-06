<template>
    
        <div>Index</div>
        <Link href="/show">Show Pages</Link>
        <div>The message is {{ message }}</div>
   
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
defineProps(["mesage"]);
</script>
<script>
import MainLayout from "../../Layouts/MainLayout.vue";
export default {
   layout: MainLayout
}
</script>