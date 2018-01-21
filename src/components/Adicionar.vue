<template>
  <div class="someRandomClass col-md-offset-1 col-md-10">
    <h1>Adicionar animal</h1>
    <form v-on:submit.prevent="adicionarAnimal">
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
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'randomName',
  data () {
    return {
      animal : {}
    }
  },
  methods: {
    adicionarAnimal(){
      if (!this.animal.Nome || !this.animal.Raca || !this.animal.Peso) {
        alert('Preencha todos os campos');
      }else {
        //Cria um objeto com as informações inseridas
        let newAnimal = {
          Nome: this.animal.Nome,
          Raca: this.animal.Raca,
          Peso: this.animal.Peso
        }

        this.$http.post('http://localhost/SimplesVet_Desafio/public/api/animal/add', newAnimal)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'Animal cadastrado com sucesso'} });
          });
        console.log('Entrou');
      }
    }
  }
}
</script>

</style>
