<template>
  <main>
    <div>
      <form
        autocomplete="off"
        @submit.prevent="handleFormSubmit"
        class="flex-row"
      >
        <div>
          <input
            name="memo"
            class="form-input"
            type="text"
            placeholder="New memo..."
            v-model="memo"
            maxlength="200"
            @input="handleInputChange($event)"
          />
        </div>
        <button>
          <svg
            width="36"
            height="36"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#707594" d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
          </svg>
        </button>
      </form>
      <small class="memo-input-count">{{ memo.length }}/200</small>
    </div>

    <div class="tab-wrapper">
      <button
        @click="toggleTab('active')"
        :disabled="tab === 'active'"
        :class="tab === 'active' ? 'is-active' : ''"
      >
        Active
      </button>
      <button
        :disabled="tab === 'done'"
        @click="toggleTab('done')"
        :class="tab === 'done' ? 'is-active' : ''"
      >
        Done
      </button>
    </div>

    <div class="memo-items">
      <MemoItem
        :time="'24-34-2'"
        :id="3"
        :memo="'memo Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit hic voluptatem magni eaque quisquam qui rerum odit in rem nulla. Corporis,'"
      />
    </div>
  </main>
</template>

<script>
import MemoItem from "./MemoItem.vue";

export default {
  name: "PageBody",
  components: {
    MemoItem,
  },
  data() {
    return {
      memo: "",
      tab: "active",
    };
  },
  methods: {
    handleFormSubmit() {
      console.log("Memo: ", this.memo);
      this.memo = "";
    },

    toggleTab(tab) {
      this.tab = tab;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  max-width: 720px;
  margin: auto;
  padding: 60px 15px;

  .memo-input-count {
    font-size: 12px;
    line-height: 0;
    font-weight: 200;
    margin-left: 3px;
  }

  form.flex-row {
    display: flex;
    align-items: center;
    div:first-child {
      flex: 1;
    }

    button {
      margin-left: 10px;
      height: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #707594;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .tab-wrapper {
    display: flex;
    align-items: center;
    width: max-content;
    margin: 40px auto;
    border-radius: 4px;
    padding: 0;

    button {
      padding: 10px 20px;
      height: 50px;
      border-radius: 4px 0 0 4px;
      margin: 0;
      background: #11152b;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      border: none;
      border: 1.5px solid #707594a3;
      &:last-child {
        border-radius: 0 4px 4px 0;
      }

      &.is-active {
        background: #707594;
        color: #11152b;
      }
    }
  }

  .memo-items {
    max-height: 400px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
