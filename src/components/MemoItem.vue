<template>
  <div>
    <div class="memo-wrapper">
      <div @click="toggleModal" role="button">
        <p class="memo-text">
          {{ memo }}
        </p>
      </div>
      <div class="row">
        <small> {{ time }} </small>
        <button v-if="!done">mark as done</button>
        <button v-if="done">mark as undone</button>
      </div>
    </div>
    <memo-modal
      v-if="showModal"
      :toggleModal="toggleModal"
      :memo="memo"
      :time="time"
      :done="done"
      :id="id"
    ></memo-modal>
  </div>
</template>

<script>
import MemoModal from "./MemoModal.vue";

export default {
  name: "MemoItem",
  components: {
    MemoModal,
  },

  props: {
    memo: String,
    time: String,
    done: Boolean,
    id: Number,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.memo-wrapper {
  background: #42497573;
  padding: 5px 15px;
  text-align: left;
  border-radius: 4px;
  > div:first-child {
    cursor: pointer;
  }

  p.memo-text {
    font-size: 16px;
    color: #707594;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row {
    display: flex;
    align-items: bottom;
    justify-content: space-between;
    margin-top: 10px;
    button {
      background: transparent;
      border: none;
      color: #707594;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
