<!-- src/components/LaboComponent.vue -->
<template>
  <div class="m-3">
    <div class="m-2 p-2 border border-2 rounded-2">
      <h1>Labo: 開発用コンポーネント</h1>
      <p>JPNPデータの現在値は次の通りです。</p>
      <h2>JPNPJsonData</h2>
      <pre>{{ JPNPJsonData }}</pre>
<!--
      <h2>store内部値</h2>
      <table class="table table-info table-striped">
        <thead>
          <tr class="table-dark">
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>backgroundColor</td>
            <td>{{ backgroundColor }}</td>
          </tr>
          <tr>
            <td>fontColor</td>
            <td>{{ fontColor }}</td>
          </tr>
          <tr>
            <td>extRubyFontColor</td>
            <td>{{ extRubyFontColor }}</td>
          </tr>
          <tr>
            <td>fontName</td>
            <td>{{ fontName }}</td>
          </tr>
          <tr>
            <td>genericFontFace</td>
            <td>{{ genericFontFace }}</td>
          </tr>
          <tr>
            <td>extRubyFontName</td>
            <td>{{ extRubyFontName }}</td>
          </tr>
          <tr>
            <td>extRubyGenericFontFace</td>
            <td>{{ extRubyGenericFontFace }}</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>{{ fontSize }}</td>
          </tr>
          <tr>
            <td>extRubyFontSize</td>
            <td>{{ extRubyFontSize }}</td>
          </tr>
          <tr>
            <td>letterSpacing</td>
            <td>{{ letterSpacing }}</td>
          </tr>
          <tr>
            <td>extRubySpacing</td>
            <td>{{ extRubySpacing }}</td>
          </tr>
          <tr>
            <td>lineHeight</td>
            <td>{{ lineHeight }}</td>
          </tr>
          <tr>
            <td>wordWrapping</td>
            <td>{{ wordWrapping }}</td>
          </tr>
          <tr>
            <td>extRubyPreference</td>
            <td>{{ extRubyPreference }}</td>
          </tr>
          <tr>
            <td>extAdditionalWordSegmentation</td>
            <td>{{ extAdditionalWordSegmentation }}</td>
          </tr>
          <tr>
            <td>extWritingDirectionPreference</td>
            <td>{{ extWritingDirectionPreference }}</td>
          </tr>
          <tr>
            <td>extWritingModeInsensitiveUI</td>
            <td>{{ extWritingModeInsensitiveUI }}</td>
          </tr>
        </tbody>
      </table>
      -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'sharedData',
      'backgroundColor',
      'fontColor',
      'extRubyFontColor',
      'fontName',
      'genericFontFace',
      'extRubyFontName',
      'extRubyGenericFontFace',
      'fontSize',
      'extRubyFontSize',
      'letterSpacing',
      'extRubySpacing',
      'lineHeight',
      'wordWrapping',
      'extRubyPreference',
      'extAdditionalWordSegmentation',
      'extWritingDirectionPreference',
      'extWritingModeInsensitiveUI',
    ]),
    ...mapGetters({
      'JPNPJsonData': 'getJPNPJsonData'
    })
  },
  methods: {
  }
};

</script>
