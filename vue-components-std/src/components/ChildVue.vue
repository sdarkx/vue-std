<template>
    <div>
        <h3>Child</h3>
        <div>
            <p>{{ heritage }}</p>
            <p>{{ age }}</p>
        </div>
        <div>
            <ul>
                <li v-for="(val, index) of names" :key="index">{{ val }}</li>
            </ul>
        </div>
        <div>
            <p>Name: {{ userInfo.name }}</p>
            <p>Phone: {{ userInfo.phone }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["heritage", "age", "names", "userInfo"],
}
</script>