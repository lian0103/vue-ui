<script>
import { h } from 'vue';
export default {
  name: 'GTimeline',
  setup(props, { slots, emit, expose }) {
    const validChilds = slots.default()
      ? slots.default().filter((item) => {
          return item.type.name == 'GTimelineItem';
        })
      : [];

    return () => h('div', { class: 'gt-timeline-wrapper' }, validChilds);
  },
};
</script>
