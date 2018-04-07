<template>
    <vr-section id="publications">
        <template slot="header">
            <h2><i class="fa fa-file"></i> Publications</h2>
        </template>
        <template slot="body">
            <div class="row">
                <div class="col-6" v-for="column in publications">
                    <ul>
                        <li v-for="year in column" v-key="year.year" class="mt-4 mb-2">
                            <h4>{{year.year}}</h4>

                            <ul class="fa-ul">
                                <li v-for="paper in year.papers" v-key="paper.name">
                                    <i v-if="year.url" class="fa-li fa fa-file-pdf-o"></i>
                                    <i v-else class="fa-li fa fa-file-o"></i>

                                    <a v-if="paper.url" :href="paper.url">{{paper.name}}</a>
                                    <span v-else>{{paper.name}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </vr-section>
</template>

<script>
    import VrSection from '../VrSection.vue';

    export default {
        components: {VrSection},
        data: function () {
            return {
                publications: [
                    [{
                        year: '2013',
                        papers: [{
                            name: 'Ročkai V., Mach M.: Automatic concept identification in slovak texts, SCYR 2012'
                        }]
                    }, {
                        year: '2012',
                        papers: [{
                            name: 'Ročkai V., Mach M.: Concept Mining from Natural Language Texts, SAMI 2012'
                        }]
                    }, {
                        year: '2011',
                        papers: [{
                            name: 'Ročkai V., Mach M.: Dolovanie konceptov z textov v prirodzenom jazyku, WIKT 2011',
                            url: 'https://www.dropbox.com/s/x79qhqbzdlcjvhv/wikt2011.pdf?dl=0'
                        }]
                    }, {
                        year: '2010',
                        papers: [{
                            name: 'Ročkai V.: Computing of related concepts in a context, SAMI 2010'
                        }, {
                            name: 'Ročkai V.: Context empowered computing of related concepts, Zanlosti 2010'
                        }]
                    }, {
                        year: '2009',
                        papers: [{
                            name: 'Ročkai V.: Context for concepts. Proc. of the 9th Scientific Conference of Young Researchers, FEI, Košice, 2009'
                        }]
                    }
                    ],
                    [{
                        year: '2008',
                        papers: [{
                            name: 'Ročkai V.: Konceptuálne znalostné siete; Tvorba a využitie, Písomna práca k dizertačnej skúške, FEI TU, Košice (2008)',
                            url: 'https://www.dropbox.com/s/4tb8ssk75xu0vws/minimova_praca.pdf?dl=0'
                        }, {
                            name: 'Ročkai V.: Asociatívne učenie konceptov, Znalosti 2008',
                            url: 'https://www.dropbox.com/s/txvf3268tcxp71w/znalosti.pdf?dl=0'
                        }]
                    }, {
                        year: '2007',
                        papers: [{
                            name: 'Ročkai V.: Automatické generovanie slov patriacich do jednej syntakticko-sémantickej triedy, WIKT, Košice (2007)',
                            url: 'https://www.dropbox.com/s/59edhuhl1h7kenh/genpodslo.pdf?dl=0'
                        }, {
                            name: 'Ročkai V., KENDE R.: Associative learning of concepts, AI METH 2007, CAMES, Gliwice (2007)',
                            url: 'https://www.dropbox.com/s/gdpgz7yu7w9ov4f/assleacon.pdf?dl=0'
                        }]
                    }, {
                        year: '2006',
                        papers: [{
                            name: 'Ročkai V.: Quatifying semantic relatedness; Zborník 6. doktorandskej konferencie FEI TU, Košice (2006)',
                            url: 'https://www.dropbox.com/s/6t9qryc2r98u5sh/dokkon2006.pdf?dl=0'
                        }]
                    }, {
                        year: '2005',
                        papers: [{
                            name: 'Ročkai V.: Dolovanie konceptov a sémantických relácií z textov v prirodzenom jazyku. Košice: FEI TU, 2005. Diplomová práca.',
                            url: 'https://www.dropbox.com/s/fe81m9z3ltgsheq/diplomovka.pdf?dl=0'
                        }]
                    }]
                ]
            }
        }
    }
</script>

<style>
    #publications ul {
        list-style: none;
        padding: 0;
    }

    .fa-ul {
        margin-left: 1.9rem;
    }
</style>
