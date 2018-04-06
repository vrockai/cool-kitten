<template>
    <div class="card">
        <img class="card-img-top" :src="project.thumbnail" :alt="project.title">
        <div class="card-body">
        </div>

        <div class="card-img-overlay">
            <a class="pull-right" :href="project.url">
                <i class="fa fa-2x fa-external-link-square"></i>
            </a>
            <h5 class="card-title">{{ project.title }}</h5>

            <p class="card-text text-muted"
               v-html="project.description"></p>

            <p v-html="project.role"></p>

            <badge-list :badges="project.badges"></badge-List>
        </div>
    </div>
</template>

<script>
    import BadgeList from './BadgeList.vue';

    export default {
        components: {BadgeList},
        props: [
            'project'
        ]
    }
</script>

<style>
</style>
