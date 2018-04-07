<template>
    <vr-section id="hobbies" section-class="bg-dark text-white">
        <template slot="header">
            <h2><i class="fa fa-coffee"></i> Hobbies</h2>
        </template>
        <template slot="body">
            <div class="card">
                <div class="videoWrapper">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XwVlD6OJUMQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-xl-4 col-lg-6 col-sm-12 mb-4"
                     v-for="card in cards" :key="card.title">
                    <card :project="card"></card>
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
                        url: 'https://soundcloud.com/blurec',
                        title: 'Sushi Bar',
                        description: 'Solo IDM music project.'
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
    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
