<template>
    <div class="quote_container">
        <p>{{ quote.quote }}</p>
        <h4>{{ quote.source }}</h4>
        <h6>{{ quote.philosophy }}</h6>

    </div>
</template>

<script>
    export default {
        name: "page-quote",
        props: {
           quote: Object

        },
    }
</script>

<style scoped>
.quote_container {
    width: 300px;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 3px 3px 6px gray;
}

</style>