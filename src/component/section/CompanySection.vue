<template>
    <vr-section class="vr-company">
        <template slot="body">
            <div class="row">
                <div class="col-sm-12 col-md-8">
                    <slot></slot>
                </div>

                <div class="d-none d-md-block col-md-4 vr-company-logo">
                    <img :src="logoUrl">
                </div>
            </div>
            <div class="d-none d-md-block">
                <div class="row mt-4">
                    <div class="col-xl-4 col-md-6 col-sm-12 mb-4"
                         v-for="project in projects" :key="project.title">
                        <card :project="project"></card>
                    </div>
                </div>
            </div>
        </template>
    </vr-section>
</template>

<script>
    import VrSection from '../VrSection.vue';
    import Card from '../Card';

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
