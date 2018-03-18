<template>
  <f7-page>
    <f7-navbar title="Resultados da busca" back-link="Back"></f7-navbar>

    <div class="block-title">Resultados da pesquisa para: <em><strong>{{ this.$f7route.params.searchText }}</strong></em></div>

    <f7-list>
      <f7-list-item
        v-for="servico in servicos"
        :key="servico.id"
        :link="`/servicos/${servico.id}`"
        :title="servico.titulo">
      </f7-list-item>
    </f7-list>

    <!-- <div class="list">
      <ul>
        <li class="accordion-item"
          v-for="grupo in grupos"
          :key="grupo.id"
        >
          <a href="" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title"><strong>{{ grupo.titulo }}</strong></div>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="block list links-list">
              <ul>
                <li v-for="servico in grupo.servicos" :key="servico.id">
                  <f7-link :href="`/servicos/${servico.id}`">{{ servico.titulo }}</f7-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div> -->

  </f7-page>
</template>

<script>
export default {
  name: 'SearchResults',
  data () {
    return {
      servicos: {}
    }
  },

  created () {
    this.$store.dispatch('getSearch', [ 'servicos', this.$f7route.params.searchText ])
      .then(results => {
        this.servicos = results
      })
      .catch( errors => {
        console.log(errors);
      })
  },

  computed: {

  }

}
</script>