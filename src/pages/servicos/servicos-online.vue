<template>
  <f7-page>
    <f7-navbar title="Serviços Online" back-link="Back"></f7-navbar>

    <div class="block">
      <h4>Pensando em proporcionar melhor comodidade, listamos para você, cidadão, serviços que podem ser realizados pela internet.</h4>
    </div>

    <div class="list accordion-list">
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
    </div>

  </f7-page>
</template>

<script>
import API from '@/config/http'
export default {
  name: 'ServicosOnline',
  data () {
    return {
      grupos: []
    }
  },

  created () {
    API.get('categorias/11?include=grupos.servicos')
      .then(response => {
        this.grupos = response.data.grupos
      })
      .catch( errors => {
        console.log(errors);
      })
  }
}
</script>