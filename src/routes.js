import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
import FormPage from './pages/form.vue'
import DynamicRoutePage from './pages/dynamic-route.vue'
import NotFoundPage from './pages/not-found.vue'

import PanelLeftPage from './pages/panel-left.vue'
import PanelRightPage from './pages/panel-right.vue'

import ServicosOnline from './pages/servicos-online.vue'

import OrgaosPage from './pages/orgaos/orgaos.vue'
import OrgaoDetails from './pages/orgaos/orgao-details.vue'

import ServicoDetails from './pages/servicos-details.vue'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },

  // Serviços Online
  {
    path: '/servicos-online/',
    component: ServicosOnline,
  },

  // Órgãos
  {
    path: '/orgaos/',
    component: OrgaosPage,
    // routes: [
    //   {
    //     path: ':orgaoId/',
    //     component: OrgaoDetails,
    //   }
    // ]
  },
  {
    path: '/orgaos/:orgaoId',
    component: OrgaoDetails,
  },

  // Servicos
  {
    path: '/servicos/:servicoId',
    component: ServicoDetails,
  },

  // Grupos
  // {
  //   path: '/grupos/:grupoId/',
  //   component: GruposPage,
  // },

  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
