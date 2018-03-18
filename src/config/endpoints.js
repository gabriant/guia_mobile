import { API_URL } from './http'

const ENDPOINTS = {

  // OAUTH
  REQUEST_TOKEN: API_URL + '/oauth/token',
  VALIDATE: API_URL + '/oauth/usuario',

  // ENTIDADES
  ARQUIVOS: API_URL + '/arquivos',
  CAMPOS: API_URL + '/campos',
  CATEGORIAS: API_URL + '/categorias',

  GRUPOS: API_URL + '/grupos',
  GRUPOS_SEARCH: API_URL + '/grupos?include=orgao,servicos&search=',

  LOCAIS: API_URL + '/locais',
  MUNICIPIOS: API_URL + '/municipios',
  ORGAOS: API_URL + '/orgaos',
  PRACAS: API_URL + '/pracas',

  SERVICOS: API_URL + '/servicos',
  SERVICOS_SEARCH: API_URL + '/servicos?include=grupo.orgao&search=',

  TAGS: API_URL + '/tags',
  USUARIOS: API_URL + '/usuarios',
}

export default ENDPOINTS