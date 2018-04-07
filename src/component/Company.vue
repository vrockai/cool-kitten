<template>
    <vr-section class="vr-company">
        <template slot="body">
            <div class="row">
                <div class="col-8">
                    <slot></slot>
                </div>

                <div class="col-4 vr-company-logo">
                    <img :src="logoUrl">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-xl-4 col-lg-6 col-sm-12 mb-4"
                     v-for="project in projects" :key="project.title">
                    <card :project="project"></card>
                </div>
            </div>
        </template>
    </vr-section>
</template>

<script>
    import VrSection from './VrSection.vue';
    import Card from './Card';

    export default {
        components: {
            VrSection,
            Card
        },
        props: [
            'logoUrl',
            'projects'
        ]
    }
</script>

<style>
</style>
