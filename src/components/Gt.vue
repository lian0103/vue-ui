<style lang="scss">
@import '../assets/tailwindInit.css';
@import '../assets/index';

.gt-relative {
  @apply relative;
}

.gt-text-left {
  @apply text-left;
}

.gt-text-center {
  @apply text-center;
}

.gt-text-right {
  @apply text-right;
}
.gt-cursor-pointer {
  @apply cursor-pointer;
}

.flexImportant {
  display: flex !important;
}

.tp-aniIn {
  animation: tpFadeIn 0.5s forwards;
}

@keyframes tpFadeIn {
  0% {
    opacity: 0;
    @apply z-top-10;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    @apply z-top-10;
    transform: translateY(0%);
  }
}
</style>
