<template>
  <div id="app">
    <h2>原生css3实现动画</h2>
    <AnimationCss />
    <br />
    <h2>默认动画</h2>
    <Translation />

    <h2>使用过度实现动画</h2>
    <TranslationExcessive />

    <h2>多个元素动画</h2>
    <TranslationGroup />
    <h2>AnimateCss动画</h2>
    <AnimateCss />
  </div>
</template>

<script>
import AnimationCss from './components/AnimationCss.vue';
import Translation from './components/Translation.vue';
import TranslationExcessive from './components/TranslationExcessive.vue';
import TranslationGroup from './components/TranslationGroup.vue';
import AnimateCss from './components/AnimateCss.vue';
export default {
  name: 'App',
  components: {
    AnimationCss,
    Translation,
    TranslationExcessive,
    TranslationGroup,
    AnimateCss
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
