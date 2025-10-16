<template>
    <div class="d-flex">
        <button v-if="btnText" class="btn btn-dark rounded-4 fw-bold px-4 py-2 me-2" :class="btnClass">{{ btnText }}</button>
        <a v-if="linkText" class="btn btn-dark rounded-4 fw-bold px-4 py-2" 
        :class="linkClass" 
        :href="linkUrl">{{ linkText }}</a>
    </div>
</template>

<script setup>
const props = defineProps({
    btnText: String,
    linkText: String,
    btnClass: String,
    linkClass: String,
    linkUrl: String
})
</script>