<template>
  <f7-page>
    <f7-navbar :title="orgaoNome" back-link="Back"></f7-navbar>

    <div class="block-title">{{ orgao.nome }}</div>

    <div class="list accordion-list">
      <ul>
        <li class="accordion-item"
          v-for="grupo in orgao.grupos"
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
    </div>

  </f7-page>
</template>

<script>
import API from '../../config/http'
export default {
  name: 'OrgaosDetails',
  data () {
    return {
      orgao: {}
    }
  },

  created () {
    API.get(`orgaos/${this.$f7route.params.orgaoId}?include=grupos.servicos`)
      .then(response => {
        this.orgao = response.data
      })
      .catch( errors => {
        console.log(errors);
      })
  },

  computed: {
    orgaoNome ()
    {
      if (this.orgao.sigla) {
        return this.orgao.sigla
      }
      return this.orgao.nome
    }
  }

}
</script>