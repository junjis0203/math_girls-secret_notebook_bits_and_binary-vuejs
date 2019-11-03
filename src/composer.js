import Vue from 'vue';
import { makeStore } from './store';
import App from './components/App';

export default class Composer {
  constructor() {
    this.store = makeStore({});
    this.tag_count = 0;
  }
  
  addInput(input) {
    const tag = 'tag' + (this.tag_count++);
    // must use Vue.set to reactive
    Vue.set(this.store.state.pool, tag, input);
    return {type: 'input-fig', tag: tag}
  }
  
  addFilter(in1, func) {
    const tag = 'tag' + (this.tag_count++);
    return {type: 'filter-fig', in1: in1, func: func, tag: tag}
  }
  
  addFilter2(in1, in2, func) {
    const tag = 'tag' + (this.tag_count++);
    return {type: 'filter2-fig', in1: in1, in2: in2, func: func, tag: tag}
  }
  
  makeApp(el, system) {
    const app = new Vue({
      el: el,
      store: this.store,
      components: { App },
      data: {
        system: system
      },
      template: `
        <app v-bind:system="system" />
      `
    });
    return app;
  }
}
