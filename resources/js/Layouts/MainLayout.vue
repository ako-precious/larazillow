<template>
   
   <Link href="/">Main Pages</Link> &nbsp;
    <Link href="/show">Show Pages</Link>
    <div>
        This page with time {{timer}}
    </div>
    <slot></slot>
</template>
<script setup>

import {Link} from '@inertiajs/vue3'
import {ref} from 'vue'
const timer = ref(9000)
setInterval(() => timer.value--, 1000)
defineProps(['mesage'])
</script>

