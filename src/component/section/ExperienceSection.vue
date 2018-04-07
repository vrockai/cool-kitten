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

            Responsible for the front-end development, deployment and QA. Building complex SPAs in domain of genomics.
            Automating the BE and FE deployment with Bash scripts. Jenkins installation, administration and maintenance.

            <badge-list :badges="accumulateBadges(experience[0].portfolio)"></badge-list>

            <!--badge-list
                :badges="['Angular', 'AngularJS', 'Bootstrap', 'D3.js', 'Gulp', 'ReactJS', 'Wordpress', 'Webpack',
                'Jenkins', 'Cypress.io',  'Docker', 'Keycloak', 'MySQL']"></badge-List-->
        </company>

        <company logoUrl="img/logo/redhat.png"
                 :projects="experience[1].portfolio"
                 class="vr-company-redhat">
            <h4>2012 - 2015</h4>
            <h3>Senior Front-End Engineer</h3>

            <p>
                Responsible for both the FE (AngularJS) and BE (J2EE) development on several Redhat projects using
                mostly Redhat technologies.
            </p>

            <badge-list :badges="accumulateBadges(experience[1].portfolio)"></badge-list>
            <!--badge-list :badges="['AngularJS', 'JSF', 'RichFaces', 'J2EE', 'JBoss AS', 'Wildfly']"></badge-List-->

            <span class="mt-4">&nbsp;</span>

            <h4 class="mt-4">2008 - 2012</h4>
            <h3>QA Engineer</h3>
            <p>
                Responsible for the QA (automated UI and performance testing) of the JBoss Portal project (later GateIn)
                and related projects. Covered the whole JBoss Portal project with UI tests (Selenium). Improved the
                performance of the Picketlink project by tweaking Hibernate settings as a part of performance QA.
            </p>
            <badge-list :badges="['Jenkins', 'J2EE']"></badge-List>
        </company>

        <company logoUrl="img/logo/acision.png"
                 class="vr-company-acision">
            <h4>2006 - 2008</h4>
            <h3>Software Engineer</h3>

            <p>
                Junior BE developer working on an in-house projects based on JBoss Portal. First experience with agile
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

            <badge-list :badges="['Bash', 'Oracle']"></badge-List>
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
                        thumbnail: 'img/project/dnastack.png',
                        url: 'https://app.dnastack.com',
                        title: 'DNAstack Platform',
                        description: 'DNAstack is an advanced platform for genomics data storage, bioinformatics, and sharing on the cloud.',
                        role: 'Core application architecture, UX, design, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'D3.js', 'Gulp', 'Jenkins', 'Cypress.io', 'Docker', 'Keycloak']
                    }, {
                        thumbnail: 'img/project/dnastack-website.png',
                        url: 'https://dnastack.com',
                        title: 'DNAstack Website',
                        description: 'Company website.',
                        role: 'Core application architecture, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'Gulp', 'Jenkins']
                    }, {
                        thumbnail: 'img/project/bn.png',
                        url: 'https://app.dnastack.com',
                        title: 'Beacon Network',
                        description: 'A search engine across the world\'s public beacons. It enables global discovery of genetic mutations, federated across a large and growing network of shared genetic datasets.',
                        role: 'Core application architecture, UX, design, development, tooling and deployment.',
                        badges: ['AngularJS', 'Bootstrap', 'D3.js', 'Gulp', 'Jenkins', 'Cypress.io', 'Docker', 'Keycloak']
                    }, {
                        thumbnail: 'img/project/cogr.png',
                        url: 'https://app.dnastack.com',
                        title: 'COGR',
                        description: 'A unified Canadian clinical genomic database and community resource for standardizing and sharing genetic interpretations.',
                        role: 'Redesign of an existing COGR page and its extension with customized <a href="http://brcaexchange.org/">BRCA exchange</a> application.</p>',
                        badges: ['ReactJS', 'Wordpress', 'Webpack', 'Jenkins', 'Docker', 'MySQL']
                    }, {
                        thumbnail: 'img/project/pgp.png',
                        url: 'https://app.dnastack.com',
                        title: 'Personal Genomes Project Canada',
                        description: 'A comprehensive public data resource that integrates whole genome sequencing data and health information.',
                        role: '.',
                        badges: ['Angular', 'Bootstrap', 'Webpack', 'Jenkins', 'Docker', 'Keycloak']
                    }]
                }, {
                    name: 'Redhat',
                    portfolio: [{
                        thumbnail: 'img/project/hawkular.png',
                        url: 'https://www.hawkular.org/',
                        title: 'Hawkular',
                        description: 'Hawkular is a set of Open Source (Apache License v2) projects designed to be a generic solution for common monitoring problems.',
                        role: 'FE development and tooling.',
                        badges: ['AngularJS', 'Gulp']
                    }, {
                        thumbnail: 'img/project/keycloak.jpeg',
                        url: 'https://www.keycloak.org/about.html',
                        title: 'Keycloak',
                        description: 'Keycloak is an open source Identity and Access Management solution aimed at modern applications and services. It makes it easy to secure applications and services with little to no code.',
                        role: 'BE and FE development, UX and tooling. Started as a BE developer with supporting (Freemarker) templating to the theme engine and transitioned to FE developer working on the web console.',
                        badges: ['AngularJS', 'J2EE', 'Wildfly']
                    }, {
                        thumbnail: 'img/project/liveoak.png',
                        url: 'https://developers.redhat.com/video/vimeo/95383726/',
                        title: 'LiveOak',
                        description: 'LiveOak is a an open-source MBaaS (Mobile Backend as a Service).',
                        role: 'FE application development and tooling.',
                        badges: ['AngularJS']
                    }, {
                        thumbnail: 'img/project/gatein.png',
                        url: 'http://gatein.jboss.org/',
                        title: 'GateIn',
                        description: 'GateIn aims at providing an intuitive user-friendly portal, and a framework to address the needs of Web 2.0 applications.',
                        role: 'FE and BE development.',
                        badges: ['JSP', 'JSF', 'J2EE', 'JBoss AS']
                    }, {
                        thumbnail: 'img/project/portal.png',
                        url: 'http://jbossportal.jboss.org/',
                        title: 'JBoss Portal',
                        description: 'JBoss Portal provides an open source platform for hosting and serving a portal\'s Web interface, publishing and managing its content, and customizing its experience.',
                        role: 'QA engineer responsible for automating the UI and performance testing of JBoss Portal and it\'s related projects (i.e. PicketLink) in many different configurations (database, OS, browser, &hellip).',
                        badges: ['Jenkins', 'Selenium', 'JBoss AS']
                    }]
                }]
            }
        }, methods: {
            accumulateBadges: function(portfolio) {
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
