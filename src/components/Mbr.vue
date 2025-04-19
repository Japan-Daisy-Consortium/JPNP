<template>
   <wbr/><span v-if="wbrWithSpace()">　</span>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'SampleComponent',
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'extAdditionalWordSegmentation',
    ]),
  },
  methods: {
    wbrWithSpace() {
      if (this.extAdditionalWordSegmentation == "prefer-space-separation") {
        return true;
      }
      return false;
    }
  },
};
</script>



