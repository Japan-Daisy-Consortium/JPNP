<template>
  <div class="m-3">
    <h1>データ登録</h1>
    <p>JSON形式の設定情報をアップロードして設定します。ファイルを指定してください。</p>
    <input type="file" @change="handleFileUpload" accept=".json" />
    <p v-if="jsonData">Uploaded JSON Data: {{ jsonData }}</p>
    <p v-if="message">アップロード結果:{{ message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadJPNPComponent',
  data() {
    return {
      jsonData: null,
      message: null,
    };
  },
  methods: {
    ...mapActions(['validateJPNP', 'loadJPNP']),
    // This method is called when a file is uploaded.
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            this.jsonData = JSON.parse(e.target.result);
            //this.validateJPNP(this.jsonData).then((result) => {
            this.loadJPNP(this.jsonData).then((result) => {
              console.log('OK loadJPNP.');
              this.message = "正常に登録できました。";
            }).catch((error) => {
              console.error('ERROR loadJPNP: ' + error);
              this.message = "登録エラー：" + error;
            })
          } catch (error) {
            console.error(error);
            this.message = "エラー：" + error;
          }
        };
        reader.readAsText(file);
      } else {
        console.error("Please upload a valid JSON file.");
        this.message = "エラー：json形式のJPNPデータではありません。";
      }
    }
  }
};
</script>
