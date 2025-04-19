<template>
    <div class="qr-code-reader">
        <h1>QRコード画像アップロード</h1>
        <p>JPNPのQRコード画像ファイルをアップロードして内容を読み込みます。</p>
        <input type="file" @change="onFileChange" accept=".png" />
        <!-- <p v-if="qrCodeContent">QRコードの内容: {{ qrCodeContent }}</p> -->
        <img v-if="qrCodeImage" :src="qrCodeImage" alt="QR Code Image" />
        <p v-if="msg">{{ msg }}</p>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import jsQR from 'jsqr';
import imageCompression from 'browser-image-compression';

export default {
    name: 'QRCodeReader',
    data() {
        return {
            qrCodeContent: '',
            qrCodeImage: null,
            msg: null
        };
    },
    methods: {
        ...mapActions(['loadQrCodeData']),
        async onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.qrCodeImage = URL.createObjectURL(file);
                const reader = new FileReader();
                reader.onload = async (e) => {
                    // 画像を圧縮する
                    const compressedFile = await imageCompression(file, { maxSizeMB: 1 });
                    const compressedImageUrl = URL.createObjectURL(compressedFile);

                    // canvasを使用して画像データを取得する
                    const img = new Image();
                    img.src = compressedImageUrl;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const code = jsQR(imageData.data, canvas.width, canvas.height);
                        if (code) {
                            this.qrCodeContent = code.data;
                            console.log('QRコードの内容: ' + code.data);
                            this.loadQrCodeData(code.data).then((result) => {
                                this.msg = 'QRコードの読み込みが完了しました。'
                            }).catch((error) => {
                                this.msg = 'QRコードの読み込みエラー: ' + error;
                            });
                        } else {
                            this.msg = 'QRコードの読み取りに失敗しました。';
                            console.log('QRコードの読み取りに失敗しました。');
                        }
                    };
                };
                reader.readAsDataURL(file);

            }
        }
    }
};
</script>

<style scoped>
.qr-code-reader {
    margin: 1rem;
}
</style>