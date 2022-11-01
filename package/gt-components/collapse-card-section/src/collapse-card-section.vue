<script>
import { h } from 'vue';
export default {
  name: 'GCollapseCardSection',
  setup(props, { slots, emit, expose }) {
    const validChilds = slots.default()
      ? slots.default().filter((item) => {
          return item.type.name == 'GCollapseCard';
        })
      : [];

    return () => h('div', { class: 'gt-collapse-card-section' }, validChilds);
  },
};
</script>
