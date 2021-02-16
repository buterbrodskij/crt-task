<template>
  <div id="app" class="nes-container with-title is-centered">
    <p class="title">
      text generate
    </p>
    <div class="generate" v-if="Object.keys(text).length">
      <div class="generate__full nes-text is-primary nes-container is-rounded is-dark" v-html="text.original"></div>
      <div class="generate__paragraph">
        <div
          class="generate__paragraph-item nes-text is-primary nes-container is-rounded is-dark"
          v-for="(item, index) in text.parsed"
          :key="index"
          v-html="item"></div>
      </div>
    </div>
    <div class="control">
      <div class="nes-field">
        <input v-model="paragraphCount" type="number" class="nes-input">
      </div>
      <button @click="generateText" class="nes-btn is-warning">generate</button>
    </div>

    <div class="get-last-text nes-container with-title" v-if="$store.state.lorem.textHistory.length >= 2">
      <div class="get-last-text__content" v-if="lastText.second.original && lastText.first.original">
        <div
          class="get-last-text__item nes-container is-dark is-rounded"
          v-for="(item, key) in lastText"
          :key="key"
          >
          <div v-if="item.original" v-html="lastText.first.original"></div>
        </div>
      </div>
      <button @click="getLastText" class="nes-btn is-primary">get last 2 text</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  paragraphCount = 0;
  lastText = {
    first: {},
    second: {}
  };

  get text() {
    return this.$store.state.lorem.textHistory[this.$store.state.lorem.textHistory.length - 1] || {};
  }

  generateText() {
    this.$store.dispatch('lorem/getLorem', this.paragraphCount || this.generateRandomNumber());
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * Math.floor(10));
  }

  getLastText() {
    this.lastText.first = this.$store.state.lorem.textHistory[this.$store.state.lorem.textHistory.length - 1];
    this.lastText.second = this.$store.state.lorem.textHistory[this.$store.state.lorem.textHistory.length - 2];
  }
}
</script>

<style lang="scss">
.generate {
  display: flex;
  padding: 20px;

  &__full {
    width: 50%;
    padding: 10px;
    border: 1px solid #000;
    margin-right: 10px;
  }

  &__paragraph {
    width: 50%;
    margin-left: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  &__paragraph-item {
    border: 1px solid #000;
    padding: 10px;
  }
}
.control {
  padding: 20px;
  display: flex;
}

.get-last-text {


  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  &__item {
    padding: 20px;
  }
}
</style>
