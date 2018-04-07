<template>
    <div>
        <div id="navigation" class="container-fluid bg-darker">

                <div class="container vr-content">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="#">Dr. Viliam Ročkai, PhD.</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#experience">Experience</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#education">Education</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#publications">Publications</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#hobbies">Hobbies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
        </div>

        <!-- About -->
        <aboutSection></aboutSection>
        <sectionDivider class="divider-dark"></sectionDivider>

        <!-- Experience -->
        <experienceSection></experienceSection>
        <sectionDivider class="bg-dark divider-white"></sectionDivider>

        <!-- Education -->
        <educationSection></educationSection>
        <sectionDivider class="divider-dark"></sectionDivider>

        <!-- Publications -->
        <publicationsSection></publicationsSection>
        <sectionDivider class="bg-dark divider-white"></sectionDivider>

        <!-- Hobbies -->
        <hobbiesSection></hobbiesSection>
        <sectionDivider class="divider-dark"></sectionDivider>

        <!-- Contact -->
        <contactSection></contactSection>

        <footer class="text-white bg-darker">
            <div class="container">
                <div class="row p-4">
                    <div class="col text-center">
                        &copy; 2018 Viliam Ročkai,
                        Powered by <a href="https://vuejs.org/">Vue.js</a> and <a
                        href="http://chriskempson.com/projects/base16/">Base16</a>.
                        Feel free to grab <a href="https://github.com/vrockai/vrockai.github.io">page sources on
                        Github</a>.
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import VrSection from './VrSection.vue';
    import AboutSection from './section/AboutSection.vue';
    import SectionDivider from './SectionDivider.vue';
    import HobbiesSection from './section/HobbiesSection.vue';
    import ExperienceSection from "./section/ExperienceSection.vue";
    import EducationSection from "./section/EducationSection.vue";
    import ContactSection from "./section/ContactSection.vue";
    import PublicationsSection from "./section/PublicationsSection.vue";

    export default {
        components: {
            EducationSection,
            ContactSection,
            PublicationsSection,
            ExperienceSection,
            HobbiesSection,
            AboutSection,
            SectionDivider,
            VrSection
        },
    }
</script>

<style>
    #navigation  .navbar {
        padding: 0.5rem 0;
    }

    #navigation .container.vr-content {
        padding: 0;
    }
</style>
