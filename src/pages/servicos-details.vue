<template>
  <f7-page>
    <f7-navbar title="Detalhes do serviço" back-link="Back">

      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div class="block">

      <h2>{{ servico.titulo }}</h2>

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
    </div>

    <!-- <div class="list simple-list">
      <ul>
        <li v-for="local in servico.locais" :key="local.id">{{ local.nome }}</li>
      </ul>
    </div> -->

  </f7-page>
</template>

<script>
import API from '../config/http'
export default {
  name: 'ServicoDetails',
  data () {
    return {
      servico: {
        locais: []
      }
    }
  },

  created () {
    API.get(`servicos/${this.$f7route.params.servicoId}?include=grupo.orgao,locais.conteudos`)
      .then(response => {
        this.servico = response.data
      })
      .catch( errors => {
        console.log(errors);
      })
  }
}
</script>