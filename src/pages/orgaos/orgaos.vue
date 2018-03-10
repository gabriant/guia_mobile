<template>
  <f7-page>
    <f7-navbar title="Órgãos e Entidades" back-link="Back"></f7-navbar>

      <f7-list>
        <f7-list-item
          v-for="orgao in orgaos"
          :key="orgao.id"
          :link="`/orgaos/${orgao.id}`"
          :title="orgao.nome">
        </f7-list-item>
        <!-- <f7-list-item link="/servicos-online/" title="Serviços Online"></f7-list-item> -->
      </f7-list>

      <!-- <f7-accordion>

        <f7-accordion-item
          v-for="orgao in orgaos"
          :key="orgao.id">
          <f7-accordion-toggle>Item 1</f7-accordion-toggle>
          <f7-accordion-content>
            Item 1 content...
          </f7-accordion-content>
        </f7-accordion-item>

      </f7-accordion> -->
  </f7-page>
</template>

<script>
import API from '../../config/http'
export default {
  name: 'OrgaosPage',
  data () {
    return {
      orgaos: []
    }
  },

  created () {
    API.get('orgaos?include=grupos.servicos')
      .then(response => {
        this.orgaos = response.data.results
      })
      .catch( errors => {
        console.log(errors);
      })
  }
}
</script>