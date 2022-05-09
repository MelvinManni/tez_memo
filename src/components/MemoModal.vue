<template>
  <div class="modal">
    <div>
      <button @click="toggleModal" class="close-modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <div class="memo-wrapper">
        <p class="memo-text">
          {{ memo }}
        </p>
        <div class="row">
          <small> {{ time }} </small>
        </div>
      </div>

      <button :class="toggling && 'loading'" @click="toggle">
        {{ done ? "Mark As Undone" : "Mark As Done" }}
      </button>

      <button :class="deleting && 'loading'" @click="del">
        Delete Memo
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MemoModal",
  props: {
    memo: String,
    time: String,
    done: Boolean,
    toggleModal: Function,
    id: String,
  },
  data() {
    return {
      toggling: false,
      deleting: false,
    };
  },
  methods: {
    ...mapActions(["deleteMemo", "toggleMemoStatus"]),
    async toggle(){
      this.toggling = true;
      await this.toggleMemoStatus(this.id);
      this.toggling = false;
    },
    async del(){
      this.deleting = true;
      await this.deleteMemo(this.id);
      this.deleting = false;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.851);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    position: relative;
  }
  .close-modal {
    position: absolute;
    top: -60px;
    right: 0;
    padding: 10px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
    background: #fff;
    border: 1px solid #707594;
    z-index: 999;
    svg {
      width: 100%;
    }
  }

  button {
    background: #707594;
    border: none;
    color: #11152b;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
    padding: 15px 20px;
    border-radius: 4px;
    margin-top: 10px;
  }
}

.memo-wrapper {
  background: #42497573;
  padding: 5px 15px;
  text-align: left;
  border-radius: 4px;
  max-width: 600px;
  min-width: 300px;
  .memo-text {
    font-size: 16px;
    color: #707594;
    font-weight: 600;
  }

  .row {
    display: flex;
    align-items: bottom;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
