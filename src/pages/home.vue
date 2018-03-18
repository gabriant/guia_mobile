<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Guia OCA</f7-nav-title>
      <!-- <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right> -->


    </f7-navbar>

    <div class="block">
      <form class="searchbar">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" v-model="searchText" placeholder="Qual serviço você procura?">
            <i class="searchbar-icon"></i>
            <span class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button">Cancel</span>
        </div>
      </form>
      <button class="button button-raised button-fill" @click="search()">Buscar</button>
    </div>

    <!-- <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar> -->
    <f7-block-title>Sobre o Guia</f7-block-title>
    <f7-block strong>
      <h3>Agora você não precisa mais ir a vários lugares para se informar sobre procedimentos e requisitos dos serviços públicos que deseja solicitar. Tudo isso você encontrará aqui, no Guia de Serviços Públicos. </h3>
    </f7-block>
    <f7-block-title>Serviços</f7-block-title>
    <f7-list>
      <f7-list-item link="/orgaos/" title="Serviços por Órgãos"></f7-list-item>
      <f7-list-item link="/pracas/" title="Serviços por Praças"></f7-list-item>
      <f7-list-item link="/servicos-online/" title="Serviços Online"></f7-list-item>
    </f7-list>
    <!-- <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block> -->
    <!-- <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block> -->
    <!-- <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
    </f7-list> -->

  </f7-page>
</template>
<script>
// import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
// var app = new Framework7();

export default {
  data () {
    return {
      searchText: undefined,
    }
  },

  methods: {
    search () {
      if (this.searchText == undefined) {
        // var toastBottom = app.toast.create({
        //   text: 'Insira o termo da busca',
        //   closeTimeout: 2000,
        // });
        // toastBottom.open();
      } else {
        this.$f7router.navigate('/busca/' + this.searchText + '/')
        this.searchText = undefined

      }

    }

  }
}
</script>
