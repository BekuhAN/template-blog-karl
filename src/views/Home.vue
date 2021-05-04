<template>
  <div class="home">
    <section class="home-header">
      <div class="home-header__content">
        <h3 class="home-header__content__meta">Hello!</h3>
        <h1 class="home-header__content__title">
          I'm <span>Emma Nelson</span>
        </h1>
        <h3 class="home-header__content__sub-title">
          Web Developer | Photographer | Freelancer
        </h3>
        <a href="/" class="btn">Send Message</a>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="about-info col-4">
            <figure class="about-info__img">
              <img src="../assets/01.jpg" alt="img" />
              <button href="/" class="about-info__img-load btn">
                <i class="fa fa-play"></i>
              </button>
            </figure>
            <ul class="about-info__list">
              <li><span>Name : </span> Emma Nelson</li>
              <li><span>Email : </span> info@example.com</li>
              <li><span>Phone : </span> +00 683 439 56</li>
              <li><span>Date of Birth : </span> 12 July 1988</li>
              <li><span>Location : </span> Mouroubra WA 6472, Australia.</li>
            </ul>
          </div>
          <div class="about-content col-8">
            <div class="section-title">
              <h5 class="section-title__sub">10+ Year Of Experience</h5>
              <h2 class="section-title__main">About me</h2>
            </div>
            <div class="about-content__text">
              Risus viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
              dolor siteae amet, consectetur adipiscing elit, sed doni eiusmod
              tempor incididunt ute labore et dolore magna aliqua. Quise ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vele facilisis. Quise ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vele
              facilisis.
            </div>
            <div class="skills">
              <progressBar
                v-for="(skill, index) of skills"
                :key="index"
                :value="skill.value"
                :title="skill.title"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div class="container">
        <div class="section-title">
          <h5 class="section-title__sub">Recent work</h5>
          <h2 class="section-title__main">Portfolios</h2>
        </div>
        <div class="portfolio-content">
          <ul class="portfolio-content__categories">
            <li
              class="portfolio-content__categories__item"
              @click="selectActiveCategory(null)"
            >
              All
            </li>
            <li
              class="portfolio-content__categories__item"
              v-for="cat of listCategories"
              :key="cat.id"
              @click="selectActiveCategory(cat)"
            >
              <span>|</span>{{ cat.name }}
            </li>
          </ul>
          <transition-group
            name="list-complete"
            class="portfolio-content__grid row"
            tag="div"
          >
            <div
              class="portfolio-content__grid__item"
              v-for="item of filteredPortfolio"
              :key="item.id"
            >
              <figure>
                <img :src="getImgUrl(item.link)" />
              </figure>
            </div>
          </transition-group>
        </div>
      </div>
    </section>
    <section id="experience">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="section-title">
              <h2 class="section-title__main">Experience</h2>
            </div>
            <carousel :count="filteredExperience" v-if="loading">
              <div class="experience-wrapper">
                <div class="experience-items">
                  <div
                    class="experience-block"
                    v-for="(experience, index) of filteredExperience"
                    :key="index"
                  >
                    <div
                      class="experience-block__item"
                      v-for="item of experience"
                      :key="item.id"
                    >
                      <h5 class="experience-block__item__title">
                        {{ item.post }}
                      </h5>
                      <div class="experience-block__item__subtitle">
                        {{ item.company }}
                      </div>
                      <div class="experience-block__item__description">
                        {{ item.description }}
                      </div>
                      <div class="experience-block__item__meta">
                        {{ item.date }}
                      </div>
                    </div>
                  </div>
                  <template slot="prev"
                    ><span class="prev">&lt;</span></template
                  >
                  <template slot="next"
                    ><span class="next">&gt;</span></template
                  >
                </div>
              </div>
            </carousel>
          </div>
          <div class="col-6">
            <div class="section-title">
              <h2 class="section-title__main">Education</h2>
            </div>
            <carousel :count="filteredEducation" v-if="loading">
              <div class="experience-wrapper">
                <div class="experience-items">
                  <div
                    class="experience-block"
                    v-for="(experience, index) of filteredEducation"
                    :key="index"
                  >
                    <div
                      class="experience-block__item"
                      v-for="item of experience"
                      :key="item.id"
                    >
                      <h5 class="experience-block__item__title">
                        {{ item.speciality }}
                      </h5>
                      <div class="experience-block__item__subtitle">
                        {{ item.company }}
                      </div>
                      <div class="experience-block__item__description">
                        {{ item.description }}
                      </div>
                      <div class="experience-block__item__meta">
                        {{ item.date }}
                      </div>
                    </div>
                  </div>
                  <template slot="prev"
                    ><span class="prev">&lt;</span></template
                  >
                  <template slot="next"
                    ><span class="next">&gt;</span></template
                  >
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <section id="partners">
      <div class="container">
        <div class="section-title">
          <h5 class="section-title__sub">Best clients</h5>
          <h2 class="section-title__main">Partners</h2>
        </div>
        <div class="partners-items">
          <div
            class="partners-item"
            v-for="partner of listPartners"
            :key="partner.id"
          >
            <figure>
              <img :src="getImgUrl(partner.link)" :alt="partner.company" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import carousel from "../components/Carousel";
import progressBar from "../components/progressBar";
import { skills } from "../assets/consts/const";

export default {
  name: "Home",
  data() {
    return {
      activeCategory: null,
      sortPortfolio: [],
      isLoading: false,
      skills,
    };
  },
  computed: {
    ...mapGetters([
      "listCategories",
      "portfolioItems",
      "listEducation",
      "listExperience",
      "listPartners",
      "listServices",
    ]),
    filteredPortfolio() {
      if (this.sortPortfolio.length) {
        return this.sortPortfolio;
      } else {
        return this.portfolioItems;
      }
    },
    filteredExperience() {
      const array = [];
      for (let i = 0; i < Math.ceil(this.listExperience.length / 3); i++) {
        array.push(this.listExperience.slice(i * 3, i * 3 + 3));
      }

      return array;
    },
    filteredEducation() {
      const array = [];
      for (let i = 0; i < Math.ceil(this.listEducation.length / 3); i++) {
        array.push(this.listEducation.slice(i * 3, i * 3 + 3));
      }
      return array;
    },
    loading() {
      return this.listExperience.length && this.listEducation.length;
    },
  },
  methods: {
    ...mapActions([
      "getListCategories",
      "getPortfolioItems",
      "getListEducation",
      "getListExperience",
      "getListPartners",
      "getListServices",
    ]),
    getImgUrl: function (imgName) {
      return require("../assets/" + imgName);
    },
    selectActiveCategory: function (cat) {
      this.activeCategory = cat;
      this.sortPortfolio = [];
      let th = this;
      this.portfolioItems.map((item) => {
        if (item.categoryId === cat.id) {
          th.sortPortfolio.push(item);
        }
      });
    },
  },
  async beforeMount() {
    await this.getListCategories();
    await this.getPortfolioItems();
    await this.getListEducation();
    await this.getListExperience();
    await this.getListPartners();
    await this.getListServices();
    this.isLoading = true;
  },
  components: { carousel, progressBar },
};
</script>

<style lang="scss">
.home {
  &-header {
    background: url("../assets/banner-1.jpg");
    background-size: cover;
    color: #ffffff;
    height: 100vh;
    padding: 0 !important;
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(#000, 0.4);
      width: 100%;
      height: 100%;
      flex-direction: column;
      &__meta {
        font-size: 24px;
        margin: 0;
      }
      &__sub-title {
        font-size: 20px;
        margin-bottom: 30px;
      }
      &__title {
        font-size: 60px;
        font-weight: bold;
        span {
          color: var(--main-color-2);
        }
      }
    }
  }
  section {
    padding: 100px 0;
  }
  #about {
    .section-title {
      text-align: left;
      &__sub {
        font-size: 16px;
      }
      &__main {
        font-size: 36px;
      }
    }
    .about-info {
      &__img {
        width: 300px;
        height: 300px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        position: relative;
        img {
          width: 100%;
          border-radius: 50%;
        }
        &-load {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          position: absolute;
          right: 18px;
          bottom: 18px;
          font-size: 22px;
        }
      }
      &__list {
        li {
          margin-bottom: 5px;
          span {
            font-weight: bold;
            color: var(--main-color-2);
          }
        }
      }
    }
    .about-content {
      &__text {
        color: #687188;
        margin-bottom: 40px;
      }
      .skills {
        &__item {
          margin-bottom: 10px;
          &__name {
            display: flex;
            justify-content: space-between;
            span:first-child {
              font-weight: 500;
              font-size: 18px;
            }
          }
          /* IE10 */
          &__progress {
            color: var(--main-color-2);
            width: 100%;
            height: 10px;
          }
          /* Firefox */
          &__progress::-moz-progress-bar {
            background: var(--main-color-2);
          }
          /* Chrome */
          &__progress::-webkit-progress-value {
            background: var(--main-color-2);
          }
          /* Firefox  */
          &__progress {
            background: var(--main-color-1);
          }
          /* Chrome */
          &__progress::-webkit-progress-bar {
            background: var(--main-color-1);
          }
        }
      }
    }
  }
  #portfolio {
    background: #f8fafe;
    .portfolio-content {
      &__categories {
        display: flex;
        justify-content: center;
        font-size: 18px;
        &__item {
          span {
            padding: 0px 15px;
            color: var(--main-color-2);
            font-weight: bold;
          }
        }
      }
      .list-complete-item {
        transition: all 2s;
      }
      .list-complete-enter,
      .list-complete-leave-to {
        opacity: 0;
        transform: scale(0.5) translateY(30px);
      }
      &__grid {
        display: flex;
        &__item {
          transition: 0.4s;
          cursor: pointer;
          position: relative;
          width: 33.3%;
          padding: 5px;
          &:hover {
            figure::before {
              transform: scale(1);
              opacity: 0.5;
            }
            &:after,
            &:before {
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
              opacity: 1;
            }
          }
          &::after,
          &::before {
            display: block;
            content: "";
            background: #fff;
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate(-150%, -150%);
            transition: 0.4s;
            opacity: 0;
          }
          &::after {
            height: 2px;
            width: 50px;
          }
          &::before {
            width: 2px;
            height: 50px;
          }
          figure {
            margin: 0;
            display: flex;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 260px;
            &::before {
              display: block;
              position: absolute;
              content: "";
              width: calc(100% - 10px);
              height: calc(100% - 10px);
              background: var(--main-color-2);
              opacity: 0;
              transform: scale(0.5);
              transition: 0.4s;
            }
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  #experience {
    .section-title {
      margin-bottom: 0;
      padding-left: 5px;
      &__main {
        font-size: 36px;
        text-align: left;
      }
    }
    .experience-items {
      position: relative;
      .experience-block {
        &__item {
          background: #f8fafe;
          padding: 24px;
          margin-top: 24px;
          position: relative;
          &__title {
            font-size: 20px;
            margin: 0;
          }
          &__subtitle {
            margin-bottom: 8px;
          }
          &__description {
            color: #687188;
          }
          &__meta {
            position: absolute;
            right: 24px;
            top: 24px;
            padding: 3px 10px;
            background: #ff324d;
            color: #fff;
            font-weight: 600;
            line-height: 20px;
            border-radius: 3px;
          }
        }
      }
    }
  }
  #partners {
    background: #f8fafe;
    .partners-items {
      display: flex;
      flex-wrap: wrap;
      .partners-item {
        padding: 20px;
        border: 1px solid #ccc;
        opacity: 0.5;
        transition: 0.4s;
        cursor: pointer;
        margin: -1px -1px 0px 0px;
        figure {
          margin: 0;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>