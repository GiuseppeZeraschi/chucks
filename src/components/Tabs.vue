<template>
  <div class="v-tabs">
    <div class="v-tabs__input-group">
      <div v-for="(item, index) in menu" :key="index">
        <label :for="item.tabName">
          {{ item.tabName }}
          <input
            class="v-tabs__input"
            type="radio"
            name="menu"
            :value="item.tabName"
            :id="item.tabName"
            v-model="subMenu"
          >
        </label>
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
  }

  &__menu-item {
    display: flex;
    justify-content: space-between;

    &--name {
      font-weight: 700;
    }

    &--ingredients {
      font-style: italic;
    }
  }
}
</style>
