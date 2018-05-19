<template>
    <div>
        <template v-for="badge in sortByBadgeType(badges)">
            <span class="badge"
                  :class="badgeClass(badge)">{{badge}}</span>&#32;
        </template>
    </div>
</template>

<script>
    import sortBy from 'lodash/sortBy';

    export default {
        props: ['badges'],
        computed: {},
        methods: {
            badgeClass: function (badge) {
                return {
                    'badge-primary': this.isFeBadge(badge),
                    'badge-info': this.isQaBadge(badge),
                    'badge-secondary': this.isBeBadge(badge),
                    'badge-success': !this.isFeBadge(badge) && !this.isQaBadge(badge) && !this.isBeBadge(badge)
                }
            },
            isFeBadge: function (badge) {
                return ['Angular', 'AngularJS', 'React', 'Bootstrap', 'D3.js', 'Gulp', 'ReactJS', 'WordPress', 'Webpack', 'JSF', 'JSP', 'RichFaces'].indexOf(badge) > -1;
            },
            isQaBadge: function (badge) {
                return ['Jenkins', 'Cypress.io', 'Selenium'].indexOf(badge) > -1;
            },
            isBeBadge: function (badge) {
                return ['Docker', 'Keycloak', 'MySQL', 'Java EE', 'JBoss AS', 'JBoss Portal', 'WildFly', 'Hibernate'].indexOf(badge) > -1;
            },
            sortByBadgeType: function (badgeList) {
                return sortBy(badgeList, (badge) => {
                    if (this.isFeBadge(badge)) {
                        return 1;
                    }

                    if (this.isQaBadge(badge)) {
                        return 2;
                    }

                    if (this.isBeBadge(badge)) {
                        return 3;
                    }

                    return 4;
                });
            }
        }
    }
</script>

<style>
</style>
