<template>
  <div class="v-tabs">
    <div class="v-tabs__input-group">
      <div v-for="(item, index) in menu" :key="index">
        <input
          class="v-tabs__input"
          type="radio"
          name="menu"
          :value="item.tabName"
          :id="item.tabName"
          v-model="subMenu"
        >
        <label class="v-tabs__label u-text-venus-title-alt" :for="item.tabName">{{ item.tabName }}</label>
        <div class="v-tabs__input--underline"></div>
      </div>
    </div>
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="subMenu === item.tabName">
        <div v-for="(drink, index) in item.drinks" :key="index">
          <div class="v-tabs__menu-item">
            <span class="v-tabs__menu-item--name">{{ drink.name }}</span>&nbsp;
            <span class="v-tabs__menu-item--ingredients">{{ drink.ingredients }}</span>&nbsp;
            <span class="v-tabs__menu-item--price">{{ drink.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      subMenu: "Cocktails"
    };
  }
};
</script>

<style lang="scss">
.v-tabs {
  &__input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: $uranus;
  }

  &__input {
    display: none;

    &:checked + .v-tabs__label {
      color: $gold-light;
    }

    &:hover + .v-tabs__label {
      color: $charcoal-light;
    }

    &:checked ~ .v-tabs__input--underline {
      opacity: 1;
    }

    &--underline {
      background-color: $gold;
      height: $mercury;
      margin-top: $mars;
      opacity: 0;
      transition: $transition-opacity;
      width: 100%;
      z-index: 1000;
    }
  }

  &__label {
    cursor: pointer;
    transition: $transition-color;
  }

  &__menu-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    &--name {
      flex: 0.3;
      font-weight: 700;
      text-align: left;
    }

    &--ingredients {
      flex: 0.6;
      font-style: italic;
      text-align: left;
    }

    &--price {
      flex: 0.1;
      text-align: right;
    }
  }
}
</style>
