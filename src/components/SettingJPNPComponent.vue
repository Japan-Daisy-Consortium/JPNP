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
      <h1>表示設定</h1>
      <div>
        <span>背景色：&nbsp;</span>
        <input type="color" :value="backgroundColor" @input="updateBackgroundColor($event.target.value)" />
      </div>
      <div>
        <span>文字色：&nbsp;</span>
        <input type="color" :value="fontColor" @input="updateFontColor($event.target.value)" />
      </div>
      <div>
        <span>ルビ色：&nbsp;</span>
        <input type="color" :value="extRubyFontColor" @input="updateExtRubyFontColor($event.target.value)" />
      </div>
      <div>
        <span>フォント：&nbsp;</span>
        <select :value="fontName" @change="updateFont($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(font, index) in fontNameSelections" :key="index" :value="font[0]">
            {{ font[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>フォント サイズ：&nbsp;</span>
        <select :value="fontSize" @change="updateFontSize($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in fontSizeSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>文字間：&nbsp;</span>
        <select :value="letterSpacing" @change="updateLetterSpacing($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in letterSpacingSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>ルビ フォント：&nbsp;</span>
        <select :value="extRubyFontName" @change="updateExtRubyFont($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(font, index) in rubyFontNameSelections" :key="index" :value="font[0]">
            {{ font[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>ルビ フォント サイズ：&nbsp;</span>
        <select :value="extRubyFontSize" @change="updateExtRubyFontSize($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in extRubyFontSizeSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>ルビ文字間：&nbsp;</span>
        <select :value="extRubySpacing" @change="updateExtRubySpacing($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in extRubySpacingSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>行間：&nbsp;</span>
        <select :value="lineHeight" @change="updateLineHeight($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in lineHeightSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>ワードラップ設定：&nbsp;</span>
        <span v-for="(option, index) in wordWrappingSelections" :key="index">
          <input type="radio" :id="'ww-' + option[0]" :value="option[0]" :checked="wordWrapping === option[0]"
            @change="updateWordWrapping(option[0])" />
          <label :for="'ww-' + option[0]">{{ option[1] }}</label>
        </span>
      </div>
      <div>
        <span>ルビ表示：&nbsp;</span>
        <select :value="extRubyPreference" @change="updateExtRubyPreference($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in extRubyPreferenceSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>分かち書き：&nbsp;</span>
        <select :value="extAdditionalWordSegmentation"
          @change="updateExtAdditionalWordSegmentation($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in extAdditionalWordSegmentationSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>表示方向：&nbsp;</span>
        <select :value="extWritingDirectionPreference"
          @change="updateExtWritingDirectionPreference($event.target.value)"
          :style="{ backgroundColor: backgroundColor, color: fontColor }">
          <option v-for="(value, index) in extWritingDirectionPreferenceSelections" :key="index" :value="value[0]">
            {{ value[1] }}
          </option>
        </select>
      </div>
      <div>
        <span>表示方向によるUIの変更：&nbsp;</span>
        <span v-for="(option, index) in extWritingModeInsensitiveUISelections" :key="index">
          <input type="radio" :id="'ew-' + option[0]" :value="option[0]"
            :checked="extWritingModeInsensitiveUI === option[0]"
            @change="updateExtWritingModeInsensitiveUI(option[0])" />
          <label :for="'ew-' + option[0]">{{ option[1] }}</label>
        </span>
      </div>
      <div style="margin: 1rem;">
        <button
	  style="background-color: #ffffff; color: #000000;"
	@click="setPreset1">
          プリセット１
        </button>&nbsp;
        <button
	  style="background-color: #000000; color: #ffffff;"
	  @click="setPreset2">
          プリセット２
        </button>&nbsp;
        <button
	  style="background-color: #092f86; color: #fbff00;"
	@click="setPreset3">
          プリセット３
        </button>
      </div>
      <div style="margin: 1rem;">
        <button :style="{ backgroundColor: backgroundColor, color: fontColor }"
        @click="toggleSample">{{ showSampleButtonText  }}</button>
      </div>
    </div>
  </div>
  <SampleComponent v-if="showSample" />
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import SampleComponent from './SampleComponent.vue';

export default {
  name: 'SettingJPNPComponent',
  components: {
    SampleComponent
  },
  data() {
    return {
      showSample: false,
      showSampleButtonText : 'サンプル表示',
    };
  },
  mutations: {
  },
  computed: {
    ...mapState([
      'backgroundColor',
      'fontColor',
      'extRubyFontColor',
      'fontNameSelections',
      'fontName',
      'rubyFontNameSelections',
      'extRubyFontName',
      'wordWrapping',
      'wordWrappingSelections',
      'extRubyPreference',
      'extRubyPreferenceSelections',
      'extAdditionalWordSegmentation',
      'extAdditionalWordSegmentationSelections',
      'extWritingDirectionPreference',
      'extWritingDirectionPreferenceSelections',
      'extWritingModeInsensitiveUI',
      'extWritingModeInsensitiveUISelections',
      'fontSize',
      'fontSizeSelections',
      'extRubyFontSize',
      'extRubyFontSizeSelections',
      'letterSpacing',
      'letterSpacingSelections',
      'extRubySpacing',
      'extRubySpacingSelections',
      'lineHeight',
      'lineHeightSelections',
      'genericFontFace',
    ]),
    ...mapGetters([
      'fontSizePx',
      'letterSpacingEm',
      'writingMode',
      'textOrientation',
    ])
  },
  methods: {
    ...mapMutations({
      updateBackgroundColor: 'setBackgroundColor',
      updateFontColor: 'setFontColor',
      updateExtRubyFontColor: 'setExtRubyFontColor',
      updateFont: 'setFontName',
      updateExtRubyFont: 'setExtRubyFontName',
      updateWordWrapping: 'setWordWrapping',
      updateExtRubyPreference: 'setExtRubyPreference',
      updateExtAdditionalWordSegmentation: 'setExtAdditionalWordSegmentation',
      updateExtWritingDirectionPreference: 'setExtWritingDirectionPreference',
      updateExtWritingModeInsensitiveUI: 'setExtWritingModeInsensitiveUI',
      updateFontSize: 'setFontSize',
      updateExtRubyFontSize: 'setExtRubyFontSize',
      updateLetterSpacing: 'setLetterSpacing',
      updateExtRubySpacing: 'setExtRubySpacing',
      updateLineHeight: 'setLineHeight',
    }),
    ...mapActions([
      'setPreset1',
      'setPreset2',
      'setPreset3'
    ]),
    toggleSample() {
      this.showSample = !this.showSample;
      this.showSampleButtonText = this.showSample ? 'サンプル非表示' : 'サンプル表示';
    }
  },
};
</script>
