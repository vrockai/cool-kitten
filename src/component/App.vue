<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-darker">
            <div class="container">
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
            </div>
        </nav>

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
    </div>
</template>

<script>
    import AboutSection from './section/AboutSection.vue';
    import SectionDivider from './SectionDivider.vue';
    import HobbiesSection from './section/HobbiesSection.vue';
    import ExperienceSection from "./section/ExperienceSection.vue";
    import EducationSection from "./section/EducationSection.vue";
    import ContactSection from "./section/ContactSection.vue";
    import PublicationsSection from "./section/PublicationsSection.vue";

    export default {
        name: 'app',
        components: {
            EducationSection,
            ContactSection,
            PublicationsSection,
            ExperienceSection,
            HobbiesSection,
            AboutSection,
            SectionDivider,
        },
    }
</script>

<style>
</style>
