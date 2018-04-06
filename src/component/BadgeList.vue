<template>
    <p>
        <template v-for="badge in badges" >
            <span  class="badge"
                   :class="badgeClass(badge)">{{badge}}</span>&#32;
        </template>
    </p>
</template>

<script>
    export default {
        props: ['badges'],
        computed: {

        },
        methods: {
            badgeClass: function (badge) {
                return {
                    'badge-primary': this.isFeBadge(badge),
                    'badge-info': this.isQaBadge(badge),
                    'badge-secondary' : this.isBeBadge(badge),
                    'badge-success': !this.isFeBadge(badge) && !this.isQaBadge(badge) && !this.isBeBadge(badge)
                }
            },
            isFeBadge: function(badge) {
                return ['Angular', 'AngularJS', 'React', 'Bootstrap', 'D3.js', 'Gulp', 'ReactJS', 'Wordpress', 'Webpack', 'JSF', 'RichFaces'].indexOf(badge) > -1;
            },
            isQaBadge: function(badge) {
                return ['Jenkins', 'Cypress.io'].indexOf(badge) > -1;
            },
            isBeBadge: function(badge) {
                return ['Docker', 'Keycloak', 'MySQL', 'J2EE', 'JBoss AS', 'Wildfly'].indexOf(badge) > -1;
            },
        }
    }
</script>

<style>
</style>
