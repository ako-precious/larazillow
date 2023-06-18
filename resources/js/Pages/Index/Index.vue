<template>
    <MainLayout>
        <div>Index</div>
        <Link href="/show">Show Pages</Link>
        <div>The message is {{ message }}</div>
    </MainLayout>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import MainLayout from "../../Layouts/MainLayout.vue";
defineProps(["mesage"]);
</script>
