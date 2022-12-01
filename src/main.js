import { createApp } from 'vue';
import App from './App.vue';
import BinaryCalculator from './components/BinaryCalculator.vue';
import DecimalCalculator from './components/DecimalCalculator.vue';

const app = createApp(App)

app.component('binary-calculator', BinaryCalculator);
app.component('decimal-calculator', DecimalCalculator);

app.mount('#app');
