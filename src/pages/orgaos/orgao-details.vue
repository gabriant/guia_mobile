<template>
  <f7-page>
    <f7-navbar title="Serviços" back-link="Back"></f7-navbar>

    <div class="list accordion-list">
      <ul>
        <li class="accordion-item"
          v-for="grupo in grupos"
          :key="grupo.id"
        >
          <a href="" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title">{{ grupo.titulo }}</div>
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
    </div>

  </f7-page>
</template>

<script>
import API from '../../config/http'
export default {
  name: 'OrgaosDetails',
  data () {
    return {
      grupos: []
    }
  },

  created () {
    API.get(`orgaos/${this.$f7route.params.orgaoId}/grupos?include=servicos`)
      .then(response => {
        this.grupos = response.data.results
      })
      .catch( errors => {
        console.log(errors);
      })
  }
}
</script>