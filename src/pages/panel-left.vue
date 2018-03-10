<template>
  <f7-page>
    <f7-navbar title="Menu"></f7-navbar>
    <f7-block strong>
      <p>Conteúdo de teste</p>
    </f7-block>
    <!-- <f7-block-title>Load page in panel</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list> -->
    <f7-block-title>Páginas</f7-block-title>
    <f7-list>
      <f7-list-item link="/orgaos/" title="Órgãos" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/servicos-online/" title="Serviços Online" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>