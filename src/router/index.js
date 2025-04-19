import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import SettingJPNPComponent from '../components/SettingJPNPComponent.vue';
import SaveJPNPComponent from '../components/SaveJPNPComponent.vue';
import UploadJPNPComponent from '../components/UploadJPNPComponent.vue';
import ReadJPNPQRComponent from '../components/ReadJPNPQRComponent.vue';
import ShowJPNPQRComponent from '../components/ShowJPNPQRComponent.vue';
import LaboComponent from '../components/LaboComponent.vue';
import SampleComponent from '../components/SampleComponent.vue';
import UploadJPNPQRComponent from '../components/UploadJPNPQRComponent.vue';

const routes = [
  { path: '/', component: SettingJPNPComponent },
  { path: '/setting', component: SettingJPNPComponent },
  { path: '/save', component: SaveJPNPComponent },
  { path: '/upload', component: UploadJPNPComponent },
  { path: '/upload_qr', component: UploadJPNPQRComponent },
  { path: '/read_qr', component: ReadJPNPQRComponent },
  { path: '/show_qr', component: ShowJPNPQRComponent },
  { path: '/about', component: AboutComponent },
  { path: '/labo', component: LaboComponent },
  { path: '/sample', component: SampleComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
