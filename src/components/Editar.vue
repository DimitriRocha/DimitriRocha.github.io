<template>
  <div class="someRandomClass col-md-offset-1 col-md-10">
    <h1>Editar animal</h1>
    <form v-on:submit.prevent="atualizarAnimal">
      <div class="well">
        <div class="form-group">
          <label>Nome</label>
          <input class="form-control" type="text" placeholder="Nome" v-model="animal.Nome">
        </div>
        <div class="form-group">
          <label>Raça</label>
          <input class="form-control" type="text" placeholder="Raça" v-model="animal.Raca">
        </div>
        <div class="form-group">
          <label>Peso</label>
          <input class="form-control" type="text" placeholder="Peso" v-model="animal.Peso">
        </div>
        <button type="submit" class="btn btn-primary">Editar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'editar',
  data () {
    return {
      animal : {}
    }
  },
  methods: {
    fetchAnimal(id){
      console.log(id);
      this.$http.get('http://localhost/SimplesVet_Desafio/public/api/animal/'+id)
      .then(function(response){
        this.animal = response.body;
      });
    },
    atualizarAnimal(){
      if (!this.animal.Nome || !this.animal.Raca || !this.animal.Peso) {
        alert('Preencha todos os campos');
      }else {
        //Cria um objeto com as informações inseridas
        let attAnimal = {
          Nome: this.animal.Nome,
          Raca: this.animal.Raca,
          Peso: this.animal.Peso
        }

        this.$http.put('http://localhost/SimplesVet_Desafio/public/api/animal/atualizar/'+this.$route.params.id, attAnimal)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'Animal editado com sucesso'} });
          });
        console.log('Entrou');
      }
    }
  },
  created: function(){
    this.fetchAnimal(this.$route.params.id);
  }
}
</script>

</style>
