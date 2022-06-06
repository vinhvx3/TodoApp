<template>
    <div class="search">
        <b-form-input class="key-input mb-2 mr-sm-2 mb-sm-0" placeholder="Key word" @change="search" />
        <b-button variant="info" @click="clear">Clear</b-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        search(value) {
            this.$store.state.query = value;
        },

        clear() {
            this.$store.state.query = "";
        }
    }
}
</script>
<style lang="scss">
.search {
    display: flex;
    gap: 50px;
}
</style>