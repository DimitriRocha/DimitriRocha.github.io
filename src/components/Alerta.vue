<template>
  <div class="someRandomClass">
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      {{mensagem}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'randomName',
  props: ['mensagem'],
  data () {
    return {

    }
  }
}
</script>

</style>
