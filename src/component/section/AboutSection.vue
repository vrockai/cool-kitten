<template>
    <vr-section section-class="bg-dark text-white">
        <template slot="body">
            <div class="row mt-4" id="info">
                <div class="col-xs-12 col">
                    <p>
                        I'm a full stack software engineer with a <a href="#experience">broad range</a> of experience
                        and a passion for writing good quality code. Instead of focusing on a single technology I
                        concentrate on solving the problems at hand and am not afraid of using whatever tools are
                        available to accomplish my current task. My <a href="#qaexperience">QA past</a> doesn't let me
                        trust any code before it is thoroughly tested and my <a href="#education">academic past</a>
                        makes me enjoy scientific papers, math equations, and rational skepticism. I'm a big fan of
                        open-source and a long-term Linux user.
                    </p>

                    <p class="mb-0">
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
                        Outside of work I enjoy playing indie games, watching movies, cooking and going deep into math
                        or physics. I compose music when I feel like it.
                    </p>

                    <p>
                        Over the last decade, I have been very lucky to enjoy a true passion for the projects and jobs
                        that I have been apart of, not just working on them to earn a living. I look for meaningful and
                        impactful challenges to pursue and it is my goal to make a real difference through the work that
                        I do. <b>Life is short, let's do stuff that matters</b>.
                    </p>
                </div>

                <div class="d-none d-md-block col-4">
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
