<template>
  <div class="progress-bar__item">
    <div class="progress-bar__name">
      <span>{{title}}</span> <span>{{value}}%</span>
    </div>
    <progress class="progress-bar__progress" max="100" :value="value"></progress>
  </div>
</template>

<script>
export default {
    props: ["title", "value"]
};
</script>

<style lang="scss">
      .progress-bar {
        &__item {
          margin-bottom: 10px;
          &__name {
            display: flex;
            justify-content: space-between;
            span:first-child {
              font-weight: 500;
              font-size: 18px;
            }
          }
          /* IE10 */
          &__progress {
            color: var(--main-color-2);
            width: 100%;
            height: 10px;
          }
          /* Firefox */
          &__progress::-moz-progress-bar {
            background: var(--main-color-2);
          }
          /* Chrome */
          &__progress::-webkit-progress-value {
            background: var(--main-color-2);
          }
          /* Firefox  */
          &__progress {
            background: var(--main-color-1);
          }
          /* Chrome */
          &__progress::-webkit-progress-bar {
            background: var(--main-color-1);
          }
        }
      }
</style>