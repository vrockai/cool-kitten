<template>
    <section class="container-fluid">
        <div v-if="$slots.header" class="row" :class="sectionClass">
            <div class="container">
                <div class="row">
                    <slot name="header"></slot>
                </div>
            </div>
        </div>
        <div class="row" :class="sectionClass">
            <div class="container vr-content">
                <slot name="body"></slot>
            </div>
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
