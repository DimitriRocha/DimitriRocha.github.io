<template>
  <div class="absoluteNonsense col-md-offset-1 col-md-10">
    <alerta v-if="alerta" v-bind:mensagem="alerta"/>
    <h1 class="">Gerenciar animais</h1>
    <input class="form-control" placeholder="Filtre os animais por raça" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <th>Nome</th>
        <th>Raça</th>
        <th>Peso</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="animal in filterBy(animais, filterInput)">
          <td>{{animal.Nome}}</td>
          <td>{{animal.Raca}}</td>
          <td>{{animal.Peso}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/animal/'+animal.ID">Detalhes</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alerta from './Alerta'

export default {
  name: 'chuvaDeMec',
  components: {
    alerta
  },
  data () {
    return {
      animais: [],
      alerta: '',
      filterInput: ''
    }
  },
  methods: {
    fetchAnimais(){
      this.$http.get('http://localhost/SimplesVet_Desafio/public/api/animais')
      .then(function(response){
        this.animais = response.body;
      });
    },
    filterBy(list , value){
      return list.filter(function(animal){
        return animal.Raca.indexOf(value) > -1;
      });
    }
  },
  created: function(){  //Faz a lista de animais aparecer quando o elemento é criado
    if (this.$route.query.alert) {
      console.log('Entrou no if')
      this.alerta = this.$route.query.alert;
    }
    this.fetchAnimais();
  },
  updated: function(){  //Garantir que a lista vai ser atualizada todo o tempo
    this.fetchAnimais();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
