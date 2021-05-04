<template>
  <header class="header">
    <a class="main-logo" href="/">
      <img alt="logo" src="../assets/logo.png" />
    </a>
    <nav class="main-nav">
      <ul class="main-nav__items">
        <li v-for="nav of navigation" :key="nav.id">
          <router-link :to="nav.link"
            ><i :class="nav.icon"></i>{{ nav.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <span class="copyright">
			© Karl 2020 <br>
			All Rights Reserved
		</span>
  </header>
</template>

<script>
export default {
  props: ["navigation"],
};
</script>

<style lang="scss">
.header {
  background: var(--main-color-1);
  color: #ffffff;
  padding: 40px 30px !important;
  height: 100vh;
	width: 180px;
	position: fixed;
  .main-logo {
    margin-bottom: 30px;
    display: block;
  }
  .main-nav {
    &__items {
      li {
        a {
          color: #ffffff;
          font-weight: 500;
          position: relative;
          padding: 9px 0px 9px 30px;
					display: inline-block;
					transition: .2s;
          i {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
          }
          &:hover {
            color: var(--main-color-2);
            text-decoration: none;
          }
        }
      }
    }
	}
	.copyright {
		font-size: 14px;
	}
}
</style>
