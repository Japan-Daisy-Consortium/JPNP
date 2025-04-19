<template>
  <div :style="{
    backgroundColor: backgroundColor,
    color: fontColor,
    fontSize: fontSizePx,
    letterSpacing: letterSpacingEm,
    lineHeight: lineHeight,
    fontFamily: genericFontFace + ', ' + fontName,
    writingMode: writingMode,
    textOrientation: textOrientation
  }">
    <div style="margin: 1rem;">
      <h1 style="font-size: 2em">ごんぎつね</h1>
      <p>新美南吉</p>
      <h2 style="font-size: 1.5em">一</h2>
      <p>　これは、<mbr/>わたしが<mbr/>小さいときに、村の<mbr/><ruby><rb>茂兵</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">もへい</rt></ruby>という<mbr/>おじいさんから<mbr/>きいた<mbr/>お話です。</p>
      <p>　むかしは、<mbr/>わたしたちの村のちかくの、<mbr/>中山というところに<mbr/>小さなお<ruby><rb>城</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">しろ</rt></ruby>があって、<mbr/>中山さまという<mbr/>おとのさまが<mbr/>おられたそうです。</p>
      <p>　その中山から、<mbr/>すこしはなれた<mbr/>山の中に、<mbr/>「ごんぎつね」というきつねが<mbr/>いました。ごんは、<mbr/>ひとりぼっちの小ぎつねで、<mbr/>しだのいっぱいしげった<mbr/>森の中に<mbr/><ruby><rb>穴</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">あな</rt></ruby>をほって<mbr/>住んでいました。そして、<mbr/>夜でも昼でも、<mbr/>あたりの村へ出ていって、<mbr/>いたずらばかりしました。畑へ入って<mbr/>いもをほりちらしたり、<mbr/><ruby><rb>菜種</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">なたね</rt></ruby>がらの、<mbr/>ほしてあるのへ<mbr/>火をつけたり、<mbr/><ruby><rb>百姓家</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">ひゃくしょうや</rt></ruby>の<mbr/>うら手に<mbr/>つるしてある<mbr/>とんがらしを<mbr/>むしり取っていったり、<mbr/>いろんなことをしました。</p>
      <p>　ある秋の<mbr/>ことでした。二、三日<mbr/>雨が<mbr/>ふりつづいた<mbr/>そのあいだ、ごんは、<mbr/>ほっとして<mbr/><ruby><rb>穴</rb><rt :style="{ color: extRubyFontColor, fontSize: extRubyFontSizePx, letterSpacing: extRubySpacingEm, fontFamily: rubyFontFamily }">あな</rt></ruby>から<mbr/>はい出しました。空は<mbr/>からっと晴れていて、<mbr/>もずの声が<mbr/>キンキンひびいていました。</p>
    </div>
  </div>
  <Mbr />
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Mbr from './Mbr.vue';

export default {
  name: 'SampleComponent',
  components: {
    Mbr
  },
  data() {
    return {
      sample: "Sample",
    }
  },
  computed: {
    ...mapState([
      'backgroundColor',
      'fontColor',
      'extRubyFontColor',
      'fontNameSelections',
      'fontName',
      'extRubyFontName',
      'extRubyGenericFontFace',
      'wordWrapping',
      'extRubyPreference',
      'extAdditionalWordSegmentation',
      'extWritingDirectionPreference',
      'extWritingModeInsensitiveUI',
      'extRubySpacing',
      'lineHeight',
      'genericFontFace',
    ]),
    ...mapGetters([
      'fontSizePx',
      'letterSpacingEm',
      'writingMode',
      'extRubyFontSizePx',
      'extRubySpacingEm',
      'textOrientation',
    ]),
    rubyFontFamily() {
      return this.extRubyGenericFontFace + ', ' +  this.extRubyFontName;
    },
  },
};
</script>


