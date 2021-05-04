import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listNavigation: [],
    listCategories: [],
    portfolioItems: [],
    listEducation: [],
    listExperience: [],
    listPartners: [],
    listServices: []
  },
  getters: {
    listNavigation(state) {
      return state.listNavigation;
    },
    listCategories(state) {
      return state.listCategories;
    },
    portfolioItems(state) {
      return state.portfolioItems;
    },
    listEducation(state) {
      return state.listEducation;
    },
    listExperience(state) {
      return state.listExperience;
    },
    listPartners(state) {
      return state.listPartners;
    },
    listServices(state) {
      return state.listServices;
    }
  },
  mutations: {
    updateListNavigation(state, payload) {
      state.listNavigation = payload;
    },
    updateListCategories(state, payload) {
      state.listCategories = payload;
    },
    updatePortfolioItems(state, payload) {
      state.portfolioItems = payload;
    },
    updateListExperience(state, payload) {
      state.listExperience = payload;
    },
    updateListEducation(state, payload) {
      state.listEducation = payload;
    },
    updateListPartners(state, payload) {
      state.listPartners = payload;
    },
    updateListServices(state, payload) {
      state.listServices = payload;
    }
    
  },
  actions: {
    getListNavigation({ commit }) {
      axios
        .get("http://localhost:3000/navigation")
        .then(({ data }) => commit("updateListNavigation", data));
    },
    getListCategories({ commit }) {
      axios
        .get("http://localhost:3000/categories")
        .then(({ data }) => commit("updateListCategories", data));
    },
    getPortfolioItems({ commit }) {
      axios
        .get("http://localhost:3000/portfolio")
        .then(({ data }) => commit("updatePortfolioItems", data));
    },
    getListEducation({ commit }) {
      axios
        .get("http://localhost:3000/education")
        .then(({ data }) => commit("updateListEducation", data));
    },
    getListExperience({ commit }) {
      axios
        .get("http://localhost:3000/experience")
        .then(({ data }) => commit("updateListExperience", data));
    },
    getListPartners({ commit }) {
      axios
        .get("http://localhost:3000/partners")
        .then(({ data }) => commit("updateListPartners", data));
    },
    getListServices({ commit }) {
      axios
        .get("http://localhost:3000/services")
        .then(({ data }) => commit("updateListServices", data));
    }

  },
  modules: {}
});
