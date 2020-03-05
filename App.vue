
<script>
/* eslint-disable */
import MarvelApi from "@/services/MarvelAPI"
import Quadrinho from "@/components/Quadrinho"
export default {
  name: "App",
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    };
  },
  created() {
    var self = this;
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    });
  },
  methods: {
<script>
/* eslint-disable */
import MarvelApi from "@/services/MarvelAPI"
import Quadrinho from "@/components/Quadrinho"
export default {
  name: "App",
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    };
  },
  created() {
    var self = this;
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    });
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + "/portrait_medium.jpg";
      }
    }
  }
}
</script>

    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + "/portrait_medium.jpg";
      }
    }
  }
}
</script>
