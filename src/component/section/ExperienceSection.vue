<template>
    <div>
        <vr-section id="experience">
            <template slot="header">
                <h2><i class="fa fa-code"></i> Experience</h2>
            </template>
        </vr-section>

        <company logoUrl="img/logo/dnastack.png"
                 :projects="experience[0].portfolio"
                 class="vr-company-dnastack">
            <h4>2015 - </h4>
            <h3>Senior Front-End Engineer</h3>

            <p>
                Front-end development, deployment and QA. Building of complex SPAs in the domain of genomics. Automating
                the FE/BE deployment. Jenkins installation, administration and maintenance.
            </p>

            <badge-list :badges="accumulateBadges(experience[0].portfolio)"></badge-list>
        </company>

        <company logoUrl="img/logo/redhat.png"
                 :projects="experience[1].portfolio"
                 class="vr-company-redhat">
            <h4>2012 - 2015</h4>
            <h3>Senior Front-End Engineer</h3>

            <p>
                FE (AngularJS) and BE (J2EE) development on several Redhat projects using mostly Redhat technologies.
            </p>

            <badge-list :badges="accumulateBadges(experience[1].portfolio)"></badge-list>

            <span class="mt-4">&nbsp;</span>

            <h4 class="mt-4" id="qaexperience">2008 - 2012</h4>
            <h3>QA Engineer</h3>
            <p>
                QA (automated UI and performance testing) of the JBoss Portal project (later GateIn) and related
                projects. Covered the whole JBoss Portal project with UI tests (Selenium). Improved the performance of
                the Picketlink project by tweaking Hibernate settings as a part of performance QA.
            </p>
            <badge-list :badges="['Jenkins', 'J2EE', 'Selenium', 'Hibernate']"></badge-List>
        </company>

        <company logoUrl="img/logo/acision.png"
                 class="vr-company-acision">
            <h4>2006 - 2008</h4>
            <h3>Software Engineer</h3>

            <p>
                Junior BE developer working on in-house projects based on JBoss Portal. First experience with agile
                (pair) programming and test driven development.
            </p>

            <badge-list :badges="['J2EE', 'JBoss AS', 'JBoss Portal']"></badge-List>
        </company>

        <company logoUrl="img/logo/siemens.png"
                 class="vr-company-siemens">
            <h4>2005 - 2006</h4>
            <h3>Software Engineer</h3>

            <p>
                Software engineer responsible for development and maintenance of an Eigner-PLM product. The product was
                a very custom piece of technology (similar to SAP) highly reliable on an Oracle DB.
            </p>

            <badge-list :badges="['Bash', 'Oracle', 'Eigner-PLM']"></badge-List>
        </company>
    </div>
</template>

<script>
    import _ from 'lodash';
    import AboutSection from './AboutSection.vue';
    import BadgeList from '../BadgeList.vue';
    import Company from '../Company.vue';
    import VrSection from '../VrSection.vue';
    import Card from '../Card';
    import ExperienceSection from "./ExperienceSection";

    export default {
        components: {ExperienceSection, AboutSection, BadgeList, Company, VrSection, Card},
        data: function () {
            return {
                experience: [{
                    name: 'DNAstack',
                    portfolio: [{
                        title: 'DNAstack Platform',
                        thumbnail: 'img/project/dnastack.png',
                        url: 'https://app.dnastack.com',
                        description: 'An advanced platform for genomics data storage, bioinformatics, and sharing on the cloud.',
                        role: 'Core FE application architecture, UX, design, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'D3.js', 'Gulp', 'Jenkins', 'Cypress.io', 'Docker', 'Keycloak']
                    }, {
                        title: 'DNAstack Website',
                        thumbnail: 'img/project/dnastack-website.png',
                        url: 'https://dnastack.com',
                        description: 'Company website.',
                        role: 'Core FE application architecture, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'Gulp', 'Jenkins']
                    }, {
                        title: 'Beacon Network',
                        thumbnail: 'img/project/bn.png',
                        url: 'https://app.dnastack.com',
                        description: 'A search engine across the world\'s public beacons enabling global discovery of genetic mutations, federated across a network of shared genetic datasets.',
                        role: 'Core FE application architecture, UX, design, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'D3.js', 'Gulp', 'Jenkins', 'Cypress.io', 'Docker', 'Keycloak']
                    }, {
                        title: 'COGR',
                        thumbnail: 'img/project/cogr.png',
                        url: 'http://opengenetics.ca/',
                        description: 'A unified Canadian clinical genomic database and community resource for standardizing and sharing genetic interpretations.',
                        role: 'Redesign of an existing COGR page and its extension with customized <a href="http://brcaexchange.org/">BRCA exchange</a> application.</p>',
                        badges: ['ReactJS', 'WordPress', 'Webpack', 'Jenkins', 'Docker', 'MySQL']
                    }, {
                        title: 'Personal Genomes Project Canada',
                        thumbnail: 'img/project/pgp.png',
                        url: 'https://personalgenomes.ca/',
                        description: 'A comprehensive public data resource that integrates whole genome sequencing data and health information.',
                        role: 'FE development.',
                        badges: ['Angular', 'Bootstrap', 'Jenkins', 'Docker', 'Keycloak']
                    }]
                }, {
                    name: 'Redhat',
                    portfolio: [{
                        title: 'Hawkular',
                        thumbnail: 'img/project/hawkular.png',
                        url: 'https://www.hawkular.org/',
                        description: 'A set of Open Source projects designed to be a generic solution for common monitoring problems.',
                        role: 'FE development and tooling.',
                        badges: ['AngularJS', 'Gulp']
                    }, {
                        title: 'Keycloak',
                        thumbnail: 'img/project/keycloak.jpeg',
                        url: 'https://www.keycloak.org/about.html',
                        description: 'An open source Identity and Access Management solution.',
                        role: 'BE and FE development, UX and tooling. Started as a BE developer by introducing (Freemarker) templating to the theme engine and transitioned to the FE developer role.',
                        badges: ['AngularJS', 'J2EE', 'Wildfly']
                    }, {
                        title: 'LiveOak',
                        thumbnail: 'img/project/liveoak.png',
                        url: 'https://developers.redhat.com/video/vimeo/95383726/',
                        description: 'An open-source MBaaS (Mobile Backend as a Service).',
                        role: 'FE application development and tooling.',
                        badges: ['AngularJS']
                    }, {
                        title: 'GateIn',
                        thumbnail: 'img/project/gatein.png',
                        url: 'http://gatein.jboss.org/',
                        description: 'An intuitive user-friendly portal, and a framework addressing the needs of Web 2.0 applications.',
                        role: 'BE and FE development.',
                        badges: ['JSP', 'JSF', 'J2EE', 'JBoss AS']
                    }, {
                        title: 'JBoss Portal',
                        thumbnail: 'img/project/portal.png',
                        url: 'http://jbossportal.jboss.org/',
                        description: 'An open source platform for hosting and serving a portal\'s Web interface, publishing and content management.',
                        role: 'Automating the UI and performance testing of JBoss Portal and related technologies (i.e. PicketLink) in many different configurations.',
                        badges: ['Jenkins', 'Selenium', 'JBoss AS']
                    }]
                }]
            }
        }, methods: {
            accumulateBadges: function (portfolio) {
                return _.map(portfolio, project => project.badges)
                    .reduce((badgeList, badges) => {
                        return _.union(badgeList, badges);
                    }, {});
            }
        }
    }
</script>

<style>
</style>
