<template>
    <vr-section id="hobbies" section-class="bg-dark text-white">
        <template slot="header">
            <h2><i class="fa fa-coffee"></i> Hobbies</h2>
        </template>
        <template slot="body">
            <div class="row">
                <!-- Music -->
                <div class="col-4 hobby">
                    <p>
                        <a href='http://bandzone.cz/marcelzrelictrio'>
                            <img class="hobbyPic"
                                 src="img/hobby/m_zrelic.jpg"
                                 alt="MZT">
                        </a>
                    </p>
                    <p>
                        <a href='http://bandzone.cz/marcelzrelictrio'>
                            Marcel Zrelič Trio
                        </a>
                    </p>
                    <p>
                        Jazz trio playing mostly our own tunes.
                    </p>
                </div>
                <div class="col-4 hobby">
                    <p>
                        <a href='http://bandzone.cz/sushibar'>
                            <img class="hobbyPic2"
                                 src="img/hobby/m_sushi.jpg"
                                 alt="Sushi bar">
                        </a>
                    </p>
                    <p>
                        <a href='http://bandzone.cz/sushibar'>Sushi Bar</a>
                    </p>
                    <p>
                        Solo IDM music project.
                    </p>
                </div>
                <div class="col-4 omega hobby">
                    <p>
                        <a href='http://bandzone.cz/balkai'>
                            <img class="hobbyPic"
                                 src="img/hobby/m_balkai.jpg"
                                 alt="Balkai">
                        </a>
                    </p>
                    <p>
                        <a href='http://bandzone.cz/balkai'>Balkai</a>
                    </p>
                    <p>
                        Another IDM project together with
                        <a href="https://soundcloud.com/pidi-sex">Mr.&nbsp;Pidi&nbsp;Sex</a>.
                    </p>
                </div>

                <!-- Graphics -->
                <div class="col-4 hobby">
                    <p>
                        <a href="https://www.facebook.com/viliam.rockai/media_set?set=a.1053477450662.2009659.1037574602&amp;type=3">
                            <img class="hobbyPic2"
                                 src="img/hobby/g_basa.png"
                                 alt="Drawing">
                        </a>
                    </p>
                    <p>
                        <a href="https://www.facebook.com/viliam.rockai/media_set?set=a.1053477450662.2009659.1037574602&amp;type=3">
                            Drawings gallery
                        </a>
                    </p>
                    <p>
                        Collection of my drawings, mostly strips.
                    </p>
                </div>
            </div>
        </template>
    </vr-section>
</template>

<script>
    import VrSection from '../VrSection.vue';

    export default {
        components: {VrSection}
    }
</script>

<style>
</style>
