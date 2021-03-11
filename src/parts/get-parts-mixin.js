export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computer: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
