<template>
    <vr-section section-class="bg-dark text-white">
        <template slot="body">
            <div class="row mt-4" id="info">
                <div class="col">
                    <p>
                        I'm a software engineer with <a href="#experience">broad experience</a> all over the stack.
                        Instead of focusing on a single technology I concentrate on problem-solving and am not
                        afraid of
                        new tools as far as they support debugging. My <a href="#experience">QA past</a> doesn't let
                        me
                        trust any code before it is thoroughly tested and my <a href="#experience">academic past</a>
                        makes me enjoy scientific papers, math equations, and rational skepticism. I'm a big fan of
                        open-source and a long-term Linux user.
                    </p>

                    <p class="preurl">
                        I'm interested in the domain of genomics, artificial intelligence and front-end development.
                        I specifically care about:
                    </p>
                    <ul>
                        <li>Getting things done ("stop starting, start finishing").</li>
                        <li>Code readability.</li>
                        <li>Learning new stuff from various areas.</li>
                        <li>Documentation.</li>
                    </ul>

                    <p>
                        Outside of work I enjoy
                        playing indie games, watching movies, cooking and going deep into math or physics. I compose
                        music when I feel like it.
                    </p>

                    <p>
                        Over the last decade, I was very lucky to be passionate about my jobs and not just do them
                        to
                        earn a
                        living. I would be grateful never have to change this. <b>Life is short, let's do stuff that
                        matters.</b>
                    </p>
                </div>

                <div class="col-4">
                    <div class="row">
                        <div class="col">
                            <img class="img-circle" src="img/face.svg" width="100%">
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
