<template>
  <div class="v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-fail">
      <modal message="Oops, looks like something went wrong!.." link="/" button-text="Go back"></modal>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "SubmissionFail",
  components: { Modal }
};
</script>

<style>
.v-fail {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>

