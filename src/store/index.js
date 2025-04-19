import { createStore } from 'vuex';
//const pako = require('pako');
import pako from 'pako';

const store = createStore({
  state() {
    return {
      sharedData: 'Hello, Vuex!',
      // default data
      backgroundColor: "#ffffff",
      fontColor: "#000000",
      extRubyFontColor: "#ff0000",
      fontName: "'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'",
      genericFontFace: "sans-serif",
      extRubyFontName: "'UD新ゴ コンデンス', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'",
      extRubyGenericFontFace: "sans-serif",
      // フォントの選択肢
      // 以下selectionsは [設定値、表示名] の配列
      fontNameSelections: [
        ["'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'", "教科書体"], // default
        ["'游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'", "ゴシック体"],
        ["'游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'", "明朝体"],
      ],
      rubyFontNameSelections: [
        ["'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'", "教科書体"], // default
        ["'UD新ゴ コンデンス', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'", "ゴシック体"],
        ["'游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'", "明朝体"],
      ],
      genericFontSelections: [
        ["serif", "serif"], // default
        ["sans-serif", "sans serif"],
      ],
      fontSize: 14,
      fontSizeSelections: [
        [9, "9ポイント"],
        [10, "10ポイント"],
        [11, "11ポイント"],
        [12, "12ポイント"],
        [14, "14ポイント"],
        [16, "16ポイント"],
        [18, "18ポイント"],
        [20, "20ポイント"],
        [22, "22ポイント"],
        [24, "24ポイント"],
        [26, "26ポイント"],
        [28, "28ポイント"],
        [30, "30ポイント"],
        [32, "32ポイント"],
        [34, "34ポイント"],
        [36, "36ポイント"],
        [72, "72ポイント"],
      ],
      extRubyFontSize: 10,
      extRubyFontSizeSelections: [
        [8, "8ポイント"],
        [9, "9ポイント"],
        [10, "10ポイント"],
        [11, "11ポイント"],
        [12, "12ポイント"],
        [14, "14ポイント"],
        [16, "16ポイント"],
        [18, "18ポイント"],
        [20, "20ポイント"],
        [22, "22ポイント"],
        [24, "24ポイント"],
        [26, "26ポイント"],
        [28, "28ポイント"],
        [30, "30ポイント"],
        [32, "32ポイント"],
        [34, "34ポイント"],
        [36, "36ポイント"],
     ],
      letterSpacing: 0.2,
      letterSpacingSelections: [
        [0.0, "0.0"],
        [0.1, "0.1"],
        [0.2, "0.2"],
        [0.3, "0.3"],
        [0.4, "0.4"],
        [0.5, "0.5"],
        [0.6, "0.6"],
        [0.7, "0.7"],
        [0.8, "0.8"],
        [0.9, "0.9"],
        [1.0, "1.0"],
        [1.1, "1.1"],
        [1.2, "1.2"],
        [1.3, "1.3"],
        [1.4, "1.4"],
        [1.5, "1.5"],
        [1.6, "1.6"],
        [1.7, "1.7"],
        [1.8, "1.8"],
        [1.9, "1.9"],
        [2.0, "2.0"],
      ],
      extRubySpacing: 0.1,
      extRubySpacingSelections: [
        [0.0, "0.0"],
        [0.1, "0.1"],
        [0.2, "0.2"],
        [0.3, "0.3"],
        [0.4, "0.4"],
        [0.5, "0.5"],
        [0.6, "0.6"],
        [0.7, "0.7"],
        [0.8, "0.8"],
        [0.9, "0.9"],
        [1.0, "1.0"],
        [1.1, "1.1"],
        [1.2, "1.2"],
        [1.3, "1.3"],
        [1.4, "1.4"],
        [1.5, "1.5"],
        [1.6, "1.6"],
        [1.7, "1.7"],
        [1.8, "1.8"],
        [1.9, "1.9"],
        [2.0, "2.0"],
      ],
      lineHeight: 2.2,
      lineHeightSelections: [
        [1.0, "1.0"],
        [1.1, "1.1"],
        [1.2, "1.2"],
        [1.3, "1.3"],
        [1.4, "1.4"],
        [1.5, "1.5"],
        [1.6, "1.6"],
        [1.7, "1.7"],
        [1.8, "1.8"],
        [1.9, "1.9"],
        [2.0, "2.0"],
        [2.1, "2.1"],
        [2.2, "2.2"],
        [2.3, "2.3"],
        [2.4, "2.4"],
        [2.5, "2.5"],
        [2.6, "2.6"],
        [2.7, "2.7"],
        [2.8, "2.8"],
        [2.9, "2.9"],
        [3.0, "3.0"],
      ],
      // ワードラップ
      wordWrapping: "active",
      wordWrappingSelections: [
        ["active", "あり"], // default
        ["inactive", "なし"],
      ],
      // ルビ
      extRubyPreference: "no-preference",
      extRubyPreferenceSelections: [
        ["no-preference", "指定なし"], // default
        ["prefer-sou-ruby", "総ルビ"],
        ["prefer-para-ruby", "パラルビ"],
        ["prefer-no-ruby", "ルビ無し"],
      ],
      // 分かち書き
      extAdditionalWordSegmentation: "no-preference",
      extAdditionalWordSegmentationSelections: [
        ["no-preference", "指定なし"], // default
        ["prefer-space-separation", "空白"],
        ["prefer-no-space-separation", "なし"],
      ],
      // 表示方向
      extWritingDirectionPreference: "no-preference",
      extWritingDirectionPreferenceSelections: [
        ["no-preference", "指定なし"], // default
        ["prefer-vertical", "縦組"],
        ["prefer-horizontal", "横組"],
      ],
      // 表示方向によるUIの変更
      extWritingModeInsensitiveUI: "active",
      extWritingModeInsensitiveUISelections: [
        ["active", "あり"], // default
        ["inactive", "なし"],
      ],
      // 白地に黒文字
      preset1: {
        "access-for-all-pnp": {
          "text-appearance": {
            "background-color": "#ffffff",
            "font-color": "#000000",
            "ext:ruby-font-color": "#ff0000",
            "font-face": {
              "font-name": "'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'",
              "generic-font-face": "sans-serif",
              "ext:ruby-font-name": "'UD新ゴ コンデンス', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'",
              "ext:ruby-generic-font-face": "sans-serif"
            },
            "input-requirements": {
              "ext:writing-mode-insensitive-UI": "active"
            },
            "font-size": 14,
            "ext:ruby-font-size": 10,
            "letter-spacing": 0.2,
            "ext:ruby-spacing": 0.1,
            "line-height": 2.2,
            "word-wrapping": "active",
            "ext:ruby-preference": "no-preference",
            "ext:additional-word-segmentation": "no-preference",
            "ext:writing-direction-preference": "no-preference"
          }
        }
      },
      // 黒地に白文字
      preset2: {
        "access-for-all-pnp": {
          "text-appearance": {
            "background-color": "#000000",
            "font-color": "#ffffff",
            "ext:ruby-font-color": "#fdc4db",
            "font-face": {
              "font-name": "'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'",
              "generic-font-face": "sans-serif",
              "ext:ruby-font-name": "'UD新ゴ コンデンス', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'",
              "ext:ruby-generic-font-face": "sans-serif"
            },
            "input-requirements": {
              "ext:writing-mode-insensitive-UI": "active"
            },
            "font-size": 14,
            "ext:ruby-font-size": 10,
            "letter-spacing": 0.2,
            "ext:ruby-spacing": 0.1,
            "line-height": 2.2,
            "word-wrapping": "active",
            "ext:ruby-preference": "no-preference",
            "ext:additional-word-segmentation": "no-preference",
            "ext:writing-direction-preference": "no-preference"
          }
        }
      },
      // 青地に黄色文字
      preset3: {
        "access-for-all-pnp": {
          "text-appearance": {
            "background-color": "#092f86",
            "font-color": "#fbff00",
            "ext:ruby-font-color": "#f5a3a3",
            "font-face": {
              "font-name": "'UDデジタル教科書体', '教科書体', 'Kyokasho', '游明朝', 'Yu Mincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'MS P明朝', 'MS PMincho', 'Noto Serif JP', 'Roboto', 'Droid Sans', 'Osaka'",
              "generic-font-face": "sans-serif",
              "ext:ruby-font-name": "'UD新ゴ コンデンス', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'Noto Sans JP', 'Roboto', 'Osaka'",
              "ext:ruby-generic-font-face": "sans-serif"
            },
            "input-requirements": {
              "ext:writing-mode-insensitive-UI": "active"
            },
            "font-size": 14,
            "ext:ruby-font-size": 10,
            "letter-spacing": 0.2,
            "ext:ruby-spacing": 0.1,
            "line-height": 2.2,
            "word-wrapping": "active",
            "ext:ruby-preference": "no-preference",
            "ext:additional-word-segmentation": "no-preference",
            "ext:writing-direction-preference": "no-preference"
          }
        }
      },
    };
  },
  mutations: {
    updateSharedData(state, newData) {
      state.sharedData = newData;
    },
    setBackgroundColor(state, color) {
      state.backgroundColor = color;
    },
    setFontColor(state, color) {
      state.fontColor = color;
    },
    setExtRubyFontColor(state, color) {
      state.extRubyFontColor = color;
    },
    setFontName(state, font) {
      state.fontName = font;
      if ((font == state.fontNameSelections[0][0]) ||
        (font == state.fontNameSelections[2][0])) {
        state.genericFontFace = state.genericFontSelections[0][0];
      }
      else {
        state.genericFontFace = state.genericFontSelections[1][0];
      }
    },
    setExtRubyFontName(state, font) {
      state.extRubyFontName = font;
      if ((font == state.rubyFontNameSelections[0][0]) ||
        (font == state.rubyFontNameSelections[2][0])) {
        state.extRubyGenericFontFace = state.genericFontSelections[0][0];
      }
      else {
        state.extRubyGenericFontFace = state.genericFontSelections[1][0];
      }
    },
    setWordWrapping(state, value) {
      state.wordWrapping = value;
    },
    setExtRubyPreference(state, value) {
      state.extRubyPreference = value;
    },
    setExtAdditionalWordSegmentation(state, value) {
      state.extAdditionalWordSegmentation = value;
    },
    setExtWritingDirectionPreference(state, value) {
      state.extWritingDirectionPreference = value;
    },
    setExtWritingModeInsensitiveUI(state, value) {
      state.extWritingModeInsensitiveUI = value;
    },
    setFontSize(state, value) {
      state.fontSize = parseInt(value, 10);
    },
    setExtRubyFontSize(state, value) {
      state.extRubyFontSize = parseInt(value, 10);
    },
    setLetterSpacing(state, value) {
      state.letterSpacing = parseFloat(value);
    },
    setExtRubySpacing(state, value) {
      state.extRubySpacing = parseFloat(value);
    },
    setLineHeight(state, value) {
      state.lineHeight = parseFloat(value);
    },
  },
  getters: {
    // sharedData: (state) => state.sharedData
    getSharedData(state) {
      return state.sharedData;
    },
    // returns values in JPNP json format.
    getJPNPJsonData(state) {
      return {
        "access-for-all-pnp": {
          "text-appearance": {
            "background-color": state.backgroundColor,
            "font-color": state.fontColor,
            "ext:ruby-font-color": state.extRubyFontColor,
            "font-face": {
              "font-name": state.fontName,
              "generic-font-face": state.genericFontFace,
              "ext:ruby-font-name": state.extRubyFontName,
              "ext:ruby-generic-font-face": state.extRubyGenericFontFace
            },
            "input-requirements": {
              "ext:writing-mode-insensitive-UI": state.extWritingModeInsensitiveUI
            },
            "font-size": state.fontSize,
            "ext:ruby-font-size": state.extRubyFontSize,
            "letter-spacing": state.letterSpacing,
            "ext:ruby-spacing": state.extRubySpacing,
            "line-height": state.lineHeight,
            "word-wrapping": state.wordWrapping,
            "ext:ruby-preference": state.extRubyPreference,
            "ext:additional-word-segmentation": state.extAdditionalWordSegmentation,
            "ext:writing-direction-preference": state.extWritingDirectionPreference
          }
        }
      }
    },
    fontSizePx(state) {
      return state.fontSize + "px";
    },
    letterSpacingEm(state) {
      return state.letterSpacing + "em";
    },
    writingMode(state) {
      //console.log("extWritingDirectionPreference: " + state.extWritingDirectionPreference);
      if (state.extWritingDirectionPreference == "prefer-vertical") {
        return "vertical-rl";
      }
      else {
        return "horizontal-tb";
      }
    },
    extRubyFontSizePx(state) {
      return state.extRubyFontSize + "px";
    },
    extRubySpacingEm(state) {
      return state.extRubySpacing + "em";
    },
    textOrientation(state) {
      if (state.extWritingDirectionPreference == "prefer-vertical") {
        return "upright";
      }
      return '';
    }
  },
  actions: {
    //updateSharedData({ commit }, newData) {
    //  commit('updateSharedData', newData);
    //}
    saveJson({ getters }) {
      let jsonData = getters.getJPNPJsonData;
      let x = JSON.stringify(jsonData, null, 2);
      const blob = new Blob([x], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jpnp.json';
      a.click();
      URL.revokeObjectURL(url);
    },
    sampleAction0({ commit }) {
        console.log('sampleAction0 called');
    },
    sampleAction({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('sampleAction called');
        resolve('sampleAction done');
      });
    },
    // Check if the JPNP json data is valid.
    // This method returns Promise.
    // Reject with error messages if there are any.
    validateJPNP(context, jsonData) {
      return new Promise((resolve, reject) => {
        console.log('validateJPNP');
        let errorMessages = [];
        if ("access-for-all-pnp" in jsonData) {
          let jsonData2 = jsonData["access-for-all-pnp"];
          if ("text-appearance" in jsonData2) {
            let jsonData3 = jsonData2["text-appearance"];
            if (!("background-color" in jsonData3)) {
              errorMessages.push("'background-color' key is missing.");
            }
            if (!("font-color" in jsonData3)) {
              errorMessages.push("'font-color' key is missing.");
            }
            if (!("ext:ruby-font-color" in jsonData3)) {
              errorMessages.push("'ext:ruby-font-color' key is missing.");
            }
            // font-face
            if ("font-face" in jsonData3) {
              let jsonData4 = jsonData3["font-face"];
              if (!("font-name" in jsonData4)) {
                errorMessages.push("'font-name' key is missing.");
              }
              if (!("generic-font-face" in jsonData4)) {
                errorMessages.push("'generic-font-face' key is missing.");
              }
              if (!("ext:ruby-font-name" in jsonData4)) {
                errorMessages.push("'ext:ruby-font-name' key is missing.");
              }
              if (!("ext:ruby-generic-font-face" in jsonData4)) {
                errorMessages.push("'ext:ruby-generic-font-face' key is missing.");
              }
            }
            else {
              errorMessages.push("'font-face' key is missing.");
            }
            if ("input-requirements" in jsonData3) {
              let jsonData4 = jsonData3["input-requirements"];
              if (!("ext:writing-mode-insensitive-UI" in jsonData4)) {
                errorMessages.push("'ext:writing-mode-insensitive-UI' key is missing.");
              }
            }
            else {
              errorMessages.push("'input-requirements' key is missing.");
            }
            if (!("font-size" in jsonData3)) {
              errorMessages.push("'font-size' key is missing.");
            }
            if (!("ext:ruby-font-size" in jsonData3)) {
              errorMessages.push("'ext:ruby-font-size' key is missing.");
            }
            if (!("letter-spacing" in jsonData3)) {
              errorMessages.push("'letter-spacing' key is missing.");
            }
            if (!("ext:ruby-spacing" in jsonData3)) {
              errorMessages.push("'ext:ruby-spacing' key is missing.");
            }
            if (!("line-height" in jsonData3)) {
              errorMessages.push("'line-height' key is missing.");
            }
            if (!("word-wrapping" in jsonData3)) {
              errorMessages.push("'word-wrapping' key is missing.");
            }
            if (!("ext:ruby-preference" in jsonData3)) {
              errorMessages.push("'ext:ruby-preference' key is missing.");
            }
            if (!("ext:additional-word-segmentation" in jsonData3)) {
              errorMessages.push("'ext:additional-word-segmentation' key is missing.");
            }
            if (!("ext:writing-direction-preference" in jsonData3)) {
              errorMessages.push("'ext:writing-direction-preference' key is missing.");
            }
          }
          else {
            errorMessages.push("'text-appearance' key is missing.");
          }
        }
        else {
          errorMessages.push("'access-for-all-pnp' key is missing.");
        }
        if (errorMessages.length == 0) {
          resolve('JPNP json data is valid.');
        }
        else {
          reject(errorMessages);
        }
      });
    },
    // Load JPNP Json data.
    // This method returns Promise.
    // Reject with error messages if there are any.
    loadJPNP(context, jsonData) {
      return new Promise((resolve, reject) => {
        console.log('loadJsonDataX');
        let errorMessages = [];
        if ("access-for-all-pnp" in jsonData) {
          let jsonData2 = jsonData["access-for-all-pnp"];
          if ("text-appearance" in jsonData2) {
            let jsonData3 = jsonData2["text-appearance"];
            if ("background-color" in jsonData3) {
              context.state.backgroundColor = jsonData3["background-color"];
            }
            else {
              errorMessages.push("'background-color' key is missing.");
            }
            if ("font-color" in jsonData3) {
              context.state.fontColor = jsonData3["font-color"];
            }
            else {
              errorMessages.push("'font-color' key is missing.");
            }
            if ("ext:ruby-font-color" in jsonData3) {
              context.state.extRubyFontColor = jsonData3["ext:ruby-font-color"];
            }
            else {
              errorMessages.push("'ext:ruby-font-color' key is missing.");
            }
            // font-face
            if ("font-face" in jsonData3) {
              let jsonData4 = jsonData3["font-face"];
              if ("font-name" in jsonData4) {
                context.state.fontName = jsonData4["font-name"];
              }
              else {
                errorMessages.push("'font-name' key is missing.");
              }
              if ("generic-font-face" in jsonData4) {
                context.state.genericFontFace = jsonData4["generic-font-face"];
              }
              else {
                errorMessages.push("'generic-font-face' key is missing.");
              }
              if ("ext:ruby-font-name" in jsonData4) {
                context.state.extRubyFontName = jsonData4["ext:ruby-font-name"];
              }
              else {
                errorMessages.push("'ext:ruby-font-name' key is missing.");
              }
              if ("ext:ruby-generic-font-face" in jsonData4) {
                context.state.extRubyGenericFontFace = jsonData4["ext:ruby-generic-font-face"];
              }
              else {
                errorMessages.push("'ext:ruby-generic-font-face' key is missing.");
              }
            }
            else {
              errorMessages.push("'font-face' key is missing.");
            }
            if ("input-requirements" in jsonData3) {
              let jsonData4 = jsonData3["input-requirements"];
              if ("ext:writing-mode-insensitive-UI" in jsonData4) {
                context.state.extWritingModeInsensitiveUI = jsonData4["ext:writing-mode-insensitive-UI"];
              }
              else {
                errorMessages.push("'ext:writing-mode-insensitive-UI' key is missing.");
              }
            }
            else {
              errorMessages.push("'input-requirements' key is missing.");
            }
            if ("font-size" in jsonData3) {
              context.state.fontSize = jsonData3["font-size"];
            }
            else {
              errorMessages.push("'font-size' key is missing.");
            }
            if ("ext:ruby-font-size" in jsonData3) {
              context.state.extRubyFontSize = jsonData3["ext:ruby-font-size"];
            }
            else {
              errorMessages.push("'ext:ruby-font-size' key is missing.");
            }
            if ("letter-spacing" in jsonData3) {
              context.state.letterSpacing = jsonData3["letter-spacing"];
            }
            else {
              errorMessages.push("'letter-spacing' key is missing.");
            }
            if ("ext:ruby-spacing" in jsonData3) {
              context.state.extRubySpacing = jsonData3["ext:ruby-spacing"];
            }
            else {
              errorMessages.push("'ext:ruby-spacing' key is missing.");
            }
            if ("line-height" in jsonData3) {
              context.state.lineHeight = jsonData3["line-height"];
            }
            else {
              errorMessages.push("'line-height' key is missing.");
            }
            if ("word-wrapping" in jsonData3) {
              context.state.wordWrapping = jsonData3["word-wrapping"];
            }
            else {
              errorMessages.push("'word-wrapping' key is missing.");
            }
            if ("ext:ruby-preference" in jsonData3) {
              context.state.extRubyPreference = jsonData3["ext:ruby-preference"];
            }
            else {
              errorMessages.push("'ext:ruby-preference' key is missing.");
            }
            if ("ext:additional-word-segmentation" in jsonData3) {
              context.state.extAdditionalWordSegmentation = jsonData3["ext:additional-word-segmentation"];
            }
            else {
              errorMessages.push("'ext:additional-word-segmentation' key is missing.");
            }
            if ("ext:writing-direction-preference" in jsonData3) {
              context.state.extWritingDirectionPreference = jsonData3["ext:writing-direction-preference"];
            }
            else {
              errorMessages.push("'ext:writing-direction-preference' key is missing.");
            }
          }
          else {
            errorMessages.push("'text-appearance' key is missing.");
          }
        }
        else {
          errorMessages.push("'access-for-all-pnp' key is missing.");
        }
        if (errorMessages.length == 0) {
          resolve('JPNP json data is loaded.');
        }
        else {
          reject(errorMessages);
        }
      });
    },
    // Returns compressed and Base64-encoded JSON data, 
    // which is the source for conversion to QR Code.
    getQRCodeData(context) {
      let jsonData = context.getters.getJPNPJsonData;
      let jsonString = JSON.stringify(jsonData);
      let compressed = pako.deflate(jsonString);
      let base64String = btoa(String.fromCharCode.apply(null, compressed));
      return base64String;
      //return 'dummy';
    },
    // This method load QR Code data
    loadQrCodeData(context, qrCodeData) {
      return new Promise((resolve, reject) => {
        // Base64デコード
        let decodedBase64 = atob(qrCodeData);
        let decodedArray = new Uint8Array(decodedBase64.split('').map(char => char.charCodeAt(0)));
        //console.log('Decoded Array:', decodedArray);
        let decompressed = pako.inflate(decodedArray, { to: 'string' });
        console.log('Decompressed JSON String:', decompressed);
        let parsedJson = JSON.parse(decompressed);
        console.log('Parsed JSON:', parsedJson);
        context.dispatch('loadJPNP', parsedJson).then(result => {
          console.log('loadJPNP done:', result);
          resolve('loadJPNP done');
        }).catch(error => {
          console.error('loadJPNP error:', error);
          reject(error);
        });
      });
    },
    // set preset1
    setPreset1(context) {
      context.dispatch('loadJPNP', context.state.preset1).then(result => {
        console.log('loadJPNP done:', result);
      }).catch(error => {
        console.error('loadJPNP error:', error);
      });
    },
    setPreset2(context) {
      context.dispatch('loadJPNP', context.state.preset2).then(result => {
        console.log('loadJPNP done:', result);
      }).catch(error => {
        console.error('loadJPNP error:', error);
      });
    },
    setPreset3(context) {
      context.dispatch('loadJPNP', context.state.preset3).then(result => {
        console.log('loadJPNP done:', result);
      }).catch(error => {
        console.error('loadJPNP error:', error);
      });
    },
  },
});

export default store;
