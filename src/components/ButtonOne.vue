<template>
    <div>
<button @click="get_quote">Get Quote</button>
    </div>
</template>

<script>

    export default {
        name: "button-one",
        methods: {
            get_quote() {
                this.$store.dispatch('get_quote');
            }
        },
    }
</script>

<style scoped>

</style>