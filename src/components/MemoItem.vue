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
        <button @click="toggleUpdateModal" >update memo</button>
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
    <UpdateMemo v-if="updateModal" :memo="memo" :id="id" :toggleModal="toggleUpdateModal" />
  </div>
</template>

<script>
import MemoModal from "./MemoModal.vue";
import UpdateMemo from "./UpdateMemo.vue";

export default {
  name: "MemoItem",
  components: {
    MemoModal,
    UpdateMemo,
  },

  props: {
    memo: String,
    time: String,
    done: Boolean,
    id: String,
  },

  data() {
    return {
      showModal: false,
      updateModal: false,
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleUpdateModal() {
      this.updateModal = !this.updateModal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.memo-wrapper {
  background: #42497573;
  padding: 10px 15px;
  text-align: left;
  margin-bottom: 20px;
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
