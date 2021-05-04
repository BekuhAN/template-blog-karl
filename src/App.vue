<template>
  <div id="app">
    <Header :navigation="listNavigation" />
    <main>
      <router-view></router-view>
      <footer></footer>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["listNavigation"]),
  },
  beforeMount() {
    this.getListNavigation();
  },
  method: {
    ...mapActions(["getListNavigation"]),
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Barlow", sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.6;
}
:root {
  --main-color-1: #1f5152;
  --main-color-2: #ff324d;
}
body {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--main-color-1);
  }
}
#app {
  position: relative;
  display: flex;
  main {
    width: 100%;
    margin-left: 180px;
  }
  .btn {
    background: var(--main-color-2);
    padding: 10px 30px;
    border-radius: 0;
    color: #ffffff;
    transition: 0.2s;
    &:hover {
      background: var(--main-color-1);
    }
  }
  .section-title {
    margin-bottom: 24px;
    letter-spacing: 1px;
    text-align: center;
    &__sub {
      color: var(--main-color-2);
      font-weight: 200;
      font-size: 18px;
      margin: 0;
    }
    &__main {
      font-size: 52px;
      color: var(--main-color-1);
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}
</style>
