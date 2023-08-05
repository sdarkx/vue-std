<template>
    <div>
        <h3>Child</h3>
        <div>
            <p>{{ heritage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["heritage"],
}
</script>