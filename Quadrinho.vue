
<template>
  <md-card class="card-default">
    <h2>{{titulo}}</h2>
    <img class="imagem-quadrinho" :src="imagem" />
    <p>{{descricao}}</p>
  </md-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "quadrinho",
  props: {
    imagem: {
      type: String
    },
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    }
  }
};
</script>

<style scoped>
.imagem-quadrinho {
  width: 120px;
}
.card-default {
  padding: 28px;
  margin: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #fff !important;
}
</style>
