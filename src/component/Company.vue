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
            <div class="card-columns">
                <card v-for="project in projects" :key="project.title" :project="project"></card>
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
