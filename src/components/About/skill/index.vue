<template lang="pug">
    li.skill__item
        .skill__remove(@click='removeSkill')
        .skill__name {{ title }}
        input.skill__input(
          type='text'
          v-model='newPercent'
          @keyup.enter='changePercents'
          )
        .skill__percent %
</template>

<script>
export default {
  data: () => ({
    newPercent: '0'
  }),
  props: {
    title: {
      type: String,
      default: 'Html'
    },
    id: {
      type: String,
      default: ''
    },
    percents: {
      type: String,
      default: '100'
    }
  },
  methods: {
    removeSkill() {
      this.$emit('removeSkill', this.id)
    },
    changePercents() {
      this.newPercent = this.newPercent
      this.$emit('changePercents', this.newPercent, this.id)
    }
  },
  mounted() {
    this.newPercent = this.percents
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


