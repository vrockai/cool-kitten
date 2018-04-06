<template>
    <vr-section id="contact">
        <template slot="header">
            <h2><i class="fa fa-phone-square"></i> Contact</h2>
        </template>
        <template slot="body">
            <div class="row">
                <div class="col-12">
                    <p>You can reach me at viliam.rockai(at)gmail.com</p>
                    <p>You can follow me here:</p>
                    <p>
                        <a href="http://www.linkedin.com/in/rockaiv" class="icon icon-linkedin"
                           title="LinkedIn">
                            <i class="fa fa-3x fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/vrockai" target="_blank" class="icon icon-github"
                           title="Github">
                            <i class="fa fa-3x fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://plus.google.com/u/0/+ViliamRockai" target="_blank"
                           class="icon icon-google"
                           title="Google+">
                            <i class="fa fa-3x fa-google" aria-hidden="true"></i>
                        </a>

                        <a href="https://twitter.com/blurec" target="_blank" class="icon icon-twitter"
                           title="Twitter">
                            <i class="fa fa-3x fa-twitter" aria-hidden="true"></i>
                        </a>
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
