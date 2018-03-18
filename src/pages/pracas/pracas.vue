<template>
  <f7-page>
    <f7-navbar title="Praças" back-link="Back"></f7-navbar>

    <div class="list accordion-list">
      <ul>
        <li class="accordion-item"
          v-for="praca in pracas"
          :key="praca.id"
        >
          <a href="" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title"><strong>{{ praca.nome }}</strong></div>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="block list links-list">
              <ul>
                <li v-for="orgao in praca.orgaos" :key="orgao.id">
                  <f7-link :href="`/orgaos/${orgao.id}`">{{ orgao.nome }}</f7-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </f7-page>
</template>

<script>
import API from '../../config/http'
export default {
  name: 'OrgaosPage',
  data () {
    return {
      pracas: []
    }
  },

  created () {
    API.get('pracas?include=orgaos')
      .then(response => {
        this.pracas = response.data.results
      })
      .catch( errors => {
        console.log(errors);
      })
  }
}
</script>