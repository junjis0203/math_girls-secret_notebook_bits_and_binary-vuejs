<script>
import InputFig from './InputFig';
import FilterFig from './FilterFig';
import Filter2Fig from './Filter2Fig';

function _render(createElement, target) {
  let component;
  switch (target.type) {
    case 'input-fig':
      component = createElement(
        'input-fig',
        {
          props: {
            tag: target.tag
          }
        }
      );
      break;
    case 'filter-fig':
      component = createElement(
        'filter-fig',
        {
          props: {
            in_tag:  target.in1.tag,
            func:    target.func,
            out_tag: target.tag
          }
        },
        [ _render(createElement, target.in1) ]
      );
      break;
    case 'filter2-fig':
      component = createElement(
        'filter2-fig',
        {
          props: {
            in1_tag:  target.in1.tag,
            in2_tag:  target.in2.tag,
            func:     target.func,
            out_tag:  target.tag
          }
        },
        [ _render(createElement, target.in1), _render(createElement, target.in2) ]
      );
      break;
  }
  return component;
}

export default {
  props: {
    system: Object
  },
  components: { InputFig, FilterFig, Filter2Fig },
  render(createElement) {
    return _render(createElement, this.system);
  }
}
</script>
