<template>
    <vr-section id="hobbies" section-class="bg-dark text-white">
        <template slot="header">
            <h2><i class="fa fa-coffee"></i> Hobbies</h2>
        </template>
        <template slot="body">
            <div class="container vr-content">
                <div class="card-columns">
                    <card v-for="project in cards" :key="project.title" :project="project"></card>
                </div>
            </div>
        </template>
    </vr-section>
</template>

<script>
    import Card from '../Card';
    import VrSection from '../VrSection.vue';

    export default {
        components: {Card, VrSection},
        data: function () {
            return {
                cards: [
                    {
                        thumbnail: 'img/hobby/m_zrelic.jpg',
                        url: 'http://bandzone.cz/marcelzrelictrio',
                        title: 'Marcel Zrelič Trio',
                        description: 'Jazz trio playing mostly our own tunes.'
                    }, {
                        thumbnail: 'img/hobby/m_sushi.jpg',
                        url: 'http://bandzone.cz/sushibar',
                        title: 'Sushi Bar',
                        description: 'Solo IDM music project.'
                    }, {
                        thumbnail: 'img/hobby/m_balkai.jpg',
                        url: 'http://bandzone.cz/balkai',
                        title: 'Balkai',
                        description: 'IDM project together with <a href="https://soundcloud.com/pidi-sex">Mr.&nbsp;Pidi&nbsp;Sex</a>'
                    }, {
                        thumbnail: 'img/hobby/g_basa.png',
                        url: 'https://www.facebook.com/viliam.rockai/media_set?set=a.1053477450662.2009659.1037574602',
                        title: 'Drawings Gallery',
                        description: 'Collection of my drawings, mostly strips.'
                    }
                ]
            }
        }
    }
</script>

<style>
</style>
