export default {
  updatePkh(state, pkh) {
    state.pkh = pkh;
  },
  updateConnected(state, connected) {
    state.connected = connected;
  },
  updateLoading(state, loading) {
    state.loading = loading;
  },
  updateActiveMemo(state, activeMemo) {
    state.activeMemo = activeMemo;
  },
  updateDoneMemo(state, doneMemo) {
    state.doneMemo = doneMemo;
  },
};
