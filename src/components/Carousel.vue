<template>
  <div :style="ccsProp">
    <slot class="asda"></slot>
    <div class="carousel__nav">
      <span class="carousel__nav__prev" @click="prevCarousel"
        ><i class="fa fa-angle-left"></i></span
      ><span class="carousel__nav__next" @click="nextCarousel"
        ><i class="fa fa-angle-right"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCarouselItem: 0,
      margin: 0,
    };
  },
  props: ["count"],
  methods: {
    prevCarousel() {
      if (this.currentCarouselItem > 0) {
        this.currentCarouselItem--;
      } else {
        this.currentCarouselItem = this.count.length - 1;
      }
      this.margin = -100 * this.currentCarouselItem;
    },
    nextCarousel() {
      if (this.currentCarouselItem < this.count.length - 1) {
        this.currentCarouselItem++;
      } else {
        this.currentCarouselItem = 0;
      }
      this.margin = -100 * this.currentCarouselItem;
    },
  },
  computed: {
    ccsProp: function () {
      return {
        "--margin-left": this.margin + "%",
      };
    },
  },
};
</script>

<style lang="scss">
.experience-wrapper {
  overflow: hidden;
  .experience-items {
    display: flex;
    margin-left: var(--margin-left);
    width: 100%;
    transition: all ease 1s;
    .experience-block {
      min-width: 100%;
      padding: 0 5px;
    }
  }
}
.carousel__nav {
    position: absolute;
    top: 3px;
    right: 15px;
    line-height: 1;
  &__next,
  &__prev {
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding: 0px 5px;
    font-size: 35px;
  }
}
</style>