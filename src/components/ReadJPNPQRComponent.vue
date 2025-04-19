<template>
  <div class="m-3">
    <h1>QRコード読み込み</h1>
    <p v-if="!msg">カメラにQRコードをかざして読み込んでください。</p>
    <p>{{ msg }}</p>
    <qrcode-stream v-if="!msg" @detect="onDetect"></qrcode-stream>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';

export default {
  name: 'ReadJPNPQRComponent',
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data() {
    return {
      count: 0,
      msg: null
    }
  },
  methods: {
    ...mapActions(['validateJPNP', 'loadJPNP', 'loadQrCodeData']),
    onDetect (content) {
      console.log('onDetect');
      console.log(content);
      if ((content.length > 0) &&
        ('format' in content[0]) &&
        (content[0].format === 'qr_code') &&
        ('rawValue' in content[0])) {
        let qrCodeData = content[0].rawValue;
        //this.msg = qrCodeData;
        this.loadQrCodeData(qrCodeData).then((result) => {
          this.msg = 'QRコードの読み込みが完了しました。'
        }).catch((error) => {
          this.msg = 'QRコードの読み込みエラー: ' + error;
        });
      }
    }
  }
};
</script>
