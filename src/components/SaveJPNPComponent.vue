<template>
  <div class="m-3">
    <h1>データ保存</h1>
    <p>現在設定されている情報をJSONファイルとして保存します。</p>
    <form @submit.prevent="saveJson">
      <button type="submit" class="btn btn-primary">保存</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'SaveJPNPComponent',
  data() {
    return {
      /* sample */
      //jsonData: { 'background-color': "#FFFFFF", 'font-color': "#000000" }
    };
  },
  //props: ['jpnp'],
  methods: {
    /*
    saveJson0() {
      let x = JSON.stringify(this.jsonData, null, 2);
      const blob = new Blob([x], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jpnp.json';
      a.click();
      URL.revokeObjectURL(url);
    },
    */
    ...mapActions(['saveJson'])
  }
};
</script>
