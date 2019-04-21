<template>
  <div class="v-section">
    <div class="u-margin-bottom-saturn"></div>
    <div class="v-success">
      <modal
        message="Thanks for your enquiry! We will get back to you as soon as possible..."
        link="/thanks"
        button-text="Go back"
      ></modal>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "SubmissionSuccess",
  components: { Modal }
};
</script>

<style>
.v-success {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>