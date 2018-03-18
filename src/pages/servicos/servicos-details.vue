<template>
  <f7-page>
    <f7-navbar title="Detalhes do serviço" back-link="Back">

      <!-- <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right> -->
    </f7-navbar>

    <div v-if="local && servico && !loading" class="block">

      <h2>{{ servicoNome }}</h2>

      <h3>{{ local.nome }}</h3>
      <p>{{ local.endereco }}</p>

      <!-- <div class="block-title">Separate Collapsibles</div> -->
        <div class="list">
          <ul>
            <li class="accordion-item"
              v-for="conteudo in local.conteudos"
              :key="conteudo.id"
            >
            <a href="#" class="item-content item-link">
                <div class="item-inner">
                  <div class="item-title">{{ conteudo.campoNome}}</div>
                </div></a>
              <div class="accordion-item-content">
                <div class="block">
                  <p v-html=" conteudo.texto"></p>
                </div>
              </div>
            </li>
          </ul>
        </div>


    </div>
    <div v-else-if="loading" class="block block-strong text-align-center">
      <div class="preloader color-multi"></div>
    </div>
    <div v-else class="block">
      <h2>{{ servico.titulo }}</h2>
      <p>Este serviço não possui conteúdo.</p>

    </div>

    <!-- <div class="list simple-list">
      <ul>
        <li v-for="local in servico.locais" :key="local.id">{{ local.nome }}</li>
      </ul>
    </div> -->

  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ServicoDetails',
  data () {
    return {
      servico: {
        grupo: {},
        locais: []
      },
      local: {}
    }
  },

  created () {
      this.$store.dispatch('fetchServicoCompleteDetails', this.$f7route.params.servicoId)
        .then(result => {
          this.servico = result
          this.selectLocal(_.find(this.servico.locais, _.matchesProperty('id', 1)))

          if (!this.local) {
            this.selectLocal(_.first(this.servico.locais))
          }
        })
        .catch( errors => {
          console.log(errors);
        })
  },

  computed: {
    ...mapGetters({
      loading: 'isLoading'
    }),

    servicoNome () {
      return this.servico.grupo.titulo + ' - ' + this.servico.titulo
    }
  },

  methods: {
      selectLocal(local) {
        this.local = local
      },
  }
}
</script>