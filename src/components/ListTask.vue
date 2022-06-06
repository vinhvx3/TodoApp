<template>
    <div class="list-task my-5">
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center"
                :class="item.complete ? 'task-complete' : ''" v-for="(item, index) in list" :key="index">
                {{ item.title }}
                <b-button-group>
                    <b-form-checkbox size="lg" :checked="item.complete"
                        @change="(value) => { onChangeClick(item.id, value) }">
                    </b-form-checkbox>
                    <b-button variant="outline-danger" size="sm" class="mx-3" @click="removeTask(item.id)">Remove
                    </b-button>
                </b-button-group>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
export default {
    computed: {
        list() {
            return this.$store.state.todoList.filter((item) => {
                return item.title.toLowerCase().includes(this.$store.state.query.toLowerCase());
            });
        }
    },

    methods: {
        onChangeClick(id, value) {
            if (value) {
                this.$store.commit('markTask', id)
            } else {
                this.$store.commit('unmarkTask', id)
            }
        },
        removeTask(id) {
            this.$store.commit('removeTask', id)
        }
    }
};
</script>
<style lang="scss">
.task-complete {
    color: green;
}
</style>