<template>
  <div class="m-3">
    <h1>QRコード表示</h1>
    <vue-qrcode
      v-if="qrSrc"
      :value="qrSrc"
      :options="option"
    />
    <!-- {{ jsonData }} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'ShowJPNPQRComponent',
  components: {
    VueQrcode
  },
  data () {
    return {
      qrSrc: null,
      // qrJson: {
      //   user: {
      //     name: 'user0001'
      //   },
      //   device: {
      //     id: 123,
      //     device_name: 'device0001'
      //   }
      // },
      option: {
        errorCorrectionLevel: 'M',
        maskPattern: 0,
        margin: 4,
        scale: 2,
        width: 600,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF'
        }
      }
    }
  },
  methods: {
    ...mapGetters(['getJPNPJsonData']),
    ...mapActions(['getQRCodeData'])
  },
  created () {
    //this.qrSrc = btoa(JSON.stringify(this.qrJson))
    //this.jsonData = this.getJPNPJsonData();
    //this.jsonData = this.getQRCodeData();
    this.getQRCodeData().then((result) => {
      this.qrSrc = result;
      console.log('OK\ngetQRCodeData: ' + result);
      console.log('getQRCodeData length: ' + result.length);
    }).catch((error) => {
      console.error('ERROR getQRCodeData: ' + error);
    })
    //this.qrSrc = btoa(JSON.stringify(this.jsonData))
  }
};
</script>
