<template>
    <div class="card rounded-4 border-0 mb-3" :class="cardClass">
        <img v-if="cardImg" :src="cardImg" class="card-img-top object-fit-cover rounded-top-4" alt="...">
        <div class="card-body" :class="bodyClass">
            <h4 v-if="cardTitle" :class="titleClass" class="card-title fw-bold mb-3">{{ cardTitle }}</h4>
            <p v-if="cardText" :class="textClass">{{ cardText }}</p>
            <ul v-if="$slots.list" class="list-style-none ps-0 mb-4">
                <slot name="list" />
            </ul>
            <slot />
            <a v-if="btnText" :href="btnLink" class="btn btn-dark rounded-4 fw-bold px-4 py-2" :class="btnClass">{{ btnText }}</a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardClass: String,
    bodyClass: String,
    btnClass: String,
    cardImg: String,
    cardTitle: String,
    titleClass: String,
    cardText: String,
    textClass: String,
    btnText: String,
    btnLink: String,
    showList: { type: Boolean, default: false },
})
</script>

<style scoped>
.card-img-top {
    height: 200px;
}
.card-body {
  min-height: auto;
}

@media (min-width: 1200px) {
  .card-body {
    min-height: clamp(30dvh, 42dvh, 50vh);
  }
}
</style>