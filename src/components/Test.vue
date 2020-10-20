<template>
  <div>{{text}} - 123</div>
</template>

<script>
export default {
    props: {
        text: {
            default: 'this is text',
            type: String
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>