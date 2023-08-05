<template>
    <div>
        <h2>Main</h2>
        <p>{{ msg }}</p>
        <div>
            <ModelEventSearch @MainEvent="MainEventHandle"   />
        </div>
</div>
</template>

<script>
import ModelEventSearch from './ModelEventSearch.vue'

export default {
    data() {
        return {
            msg: '',
        }
    },
    components: {
        ModelEventSearch,
    },
    methods: {
        MainEventHandle(data) {
            this.msg = data;
        },
    },
}
</script>