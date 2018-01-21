<template>
  <div class="someClass col-md-offset-1 col-md-10">
    <h1 class="">Detalhes de {{animal.Nome}}
       <span class="pull-right">
         <router-link class="btn btn-primary" :to="'/animal/editar/'+animal.ID">Editar</router-link>
         <button class="btn btn-danger" type="button" v-on:click="deletarAnimal(animal.ID)">Deletar</button>
       </span>
    </h1>

    <ul class="list-group">
      <li class="list-group-item">{{animal.Nome}}</li>
      <li class="list-group-item">{{animal.Raca}}</li>
      <li class="list-group-item">{{animal.Peso}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detalhes',
  data () {
    return {
      animal: ''
    }
  },
  methods: {
    fetchAnimal(id){
      this.$http.get('http://localhost/SimplesVet_Desafio/public/api/animal/'+id)
      .then(function(response){
        this.animal = response.body;
      });
    },
    deletarAnimal(id){
      this.$http.delete('http://localhost/SimplesVet_Desafio/public/api/animal/deletar/'+id)
      .then(function(response){
        this.$router.push({path: '/', query: {alert: 'Animal deletado com sucesso'} })
      });
    }
  },
  created: function(){
    this.fetchAnimal(this.$route.params.id);
  }
}
</script>

</style>
