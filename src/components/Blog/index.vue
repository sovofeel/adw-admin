<template lang="pug">
  .content
    h2.title Страница &laquo;Блог&raquo;
    .articles
      addArticle(
        @addArticle='addArticle'
      )
      Articles(
        :articles='articles'
        @removeArticle='removeArticle'
        )
    button.input__submit(value="Сохранить" @click='pushArticles') Сохранить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapActions('articles', ['fetchArticles', 'postArticles']),
    ...mapMutations('articles', ['addNewArticle', 'removeSavedArticle']),
    addArticle(article) {
      this.addNewArticle(article)
    },
    removeArticle(articleId) {
      this.removeSavedArticle(articleId)
    },
    pushArticles() {
      this.postArticles()
    }
  },
  mounted() {
    this.fetchArticles()
  },
  computed: {
    ...mapGetters('articles', ['articles'])
  },
  components: {
    addArticle: require('./AddArticle'),
    Articles: require('./Articles')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


