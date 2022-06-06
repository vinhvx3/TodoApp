<template>
    <div class="add">
        <h2>Add Task</h2>
        <div class="group">
            <b-form-input class="key-input mb-2 mr-sm-2 mb-sm-0" placeholder="Todo" :value="input"
                @change="updateInput" />
            <b-button variant="success" @click="addTask">Add</b-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
        }
    },
    methods: {
        updateInput(value) {
            this.input = value;
        },

        addTask() {
            this.$store.commit('addTask', this.input);
            this.input = "";
        }
    }

}
</script>
<style lang="scss">
.group {
    display: flex;
    gap: 50px;
}
</style>