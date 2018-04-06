<template>
    <vr-section id="education" section-class="bg-dark text-white">
        <template slot="header">
            <h2><i class="fa fa-graduation-cap"></i> Education</h2>
        </template>
        <template slot="body">
            <div class="row">
                <div class="col">
                    <h4>2005 - 2013</h4>
                    <h4>Automatic discovery of concepts in documents written in natural language</h4>
                    <div class="row">
                        <div class="col">
                            <h4>Doctor of Philosophy (PhD)</h4>
                        </div>
                        <div class="col">
                            <address class="text-right" style="font-size: 1rem;">
                                <a href="http://www.tuke.sk/">Technical University in Košice</a>, <br/>
                                <a href="http://www.fei.tuke.sk/">Faculty of electrical engineering and informatics</a>,<br/>
                                <a href="http://web.tuke.sk/kkui/en/">Department of cybernetics and artificial
                                    intelligence</a>,
                                Letná 9, 040 01 Košice
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>2000 - 2005</h4>
                    <h4>Artificial intelligence</h4>

                    <div class="row">
                        <div class="col">
                            <h4>Master of Science (MSc)</h4>
                        </div>
                        <div class="col">
                            <address class="text-right" style="font-size: 1rem;">
                                <a href="http://www.tuke.sk/">Technical University in Košice</a>, <br/>
                                <a href="http://www.fei.tuke.sk/">Faculty of electrical engineering and informatics</a>,<br/>
                                <a href="http://web.tuke.sk/kkui/en/">Department of cybernetics and artificial
                                    intelligence</a>,
                                Letná 9, 040 01 Košice
                            </address>
                        </div>
                    </div>
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
