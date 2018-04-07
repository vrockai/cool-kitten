<template>
    <section class="container-fluid" :class="sectionClass">
        <div v-if="$slots.header" class="container" >
            <div class="row">
                <slot name="header"></slot>
            </div>
        </div>
        <div v-if="$slots.body" class="container vr-content">
            <slot name="body"></slot>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['sectionClass']
    }
</script>

<style>
</style>
