<template>
  <div id="app">
    <navbarComponent/>
    <router-view id="routerView"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import main from './components/Main'
import about from './components/About'
import navbarComponent from './components/Navbar'
import adicionar from './components/Adicionar'
import detalhes from './components/Detalhes'
import editar from './components/Editar'

Vue.use(VueRouter)
Vue.use(vueResource)

//Instacia o elemento router e define-se suas características e os paths
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    //Ao lado dos paths mostra-se os componentes que cada um vai carregar. Esses foram importados acima
    {path: '/', component: main},
    {path: '/about', component: about},
    {path: '/adicionar', component: adicionar},
    {path: '/animal/:id', component: detalhes},
    {path: '/animal/editar/:id', component: editar}
  ]
})

export default {
  router,
  name: 'App',
  components: {
    navbarComponent
  }
}
</script>

<style>
  #routerView{
    margin-top: 65px;
  }
</style>
