<template>
  <f7-page v-if="!loading">
    <f7-navbar title="Órgãos e Entidades" back-link="Back"></f7-navbar>

    <div class="block-title">Selecione o Órgão ou Entidade</div>

    <f7-list>
      <f7-list-item
        v-for="orgao in orgaos"
        :key="orgao.id"
        :link="`/orgaos/${orgao.id}`"
        :title="getOrgaoNome(orgao)">
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OrgaosPage',
  data () {
    return {}
  },

  created () {
    this.fetch()
  },

  computed: {
    ...mapGetters({
      orgaos: 'getOrgaos',
      loading: 'isLoading'
    })
  },

  methods: {
    fetch () {
      this.$store.dispatch('fetchOrgaos')
    },

    getOrgaoNome (orgao)
    {
      if (orgao.sigla) {
        return `${orgao.sigla} - ${orgao.nome}`
      }
      return orgao.nome
    }
  }
}
</script>