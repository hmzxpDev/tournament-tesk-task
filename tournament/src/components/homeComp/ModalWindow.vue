<template>
  <div>
    <div @click="closeModal" v-if="dialog" class="modalBackground"></div>
    <transition name="modal">
      <div v-if="dialog" class="modalWindow">
        <div class="steamLogo">
          <img src="../../assets/modal/steamIcon.png" alt="" />
        </div>

        <img src="../../assets/modal/backgroundModal.png" />
        <span>Join the ForceX Gaming</span>
        <div>
          <span>Team name</span> <input v-model="teamName" type="text" />
        </div>
        <button @click="createTeam">ADD TEAM</button>
      </div></transition
    >
  </div>
</template>

<script>
export default {
  name: "modalWindow",
  props: ["dialog"],
  data() {
    return {
      teamName: "",
    };
  },
  methods: {
    createTeam() {
      // проверка на заполненость
      if (this.teamName) {
        this.$emit("createTeam", this.teamName);
        this.teamName = "";
      }
    },
    // закрытие модалки на нажатие за пределы окна
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
<style lang='scss'>
.modalBackground {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
}
.modalWindow {
  position: absolute;
  z-index: 11;
  height: 476px;
  width: 648px;
  background: #212832;
  left: 50%;
  top: 50%;
  margin-left: -324px;
  margin-top: -238px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  img {
    width: 100%;
  }
  span {
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
  }
  div {
    width: 60%;
    span {
      font-size: 17px;
    }
    input {
      height: 40px;
      width: 98%;
      padding-left: 10px;
      font-size: 21px;
    }
  }
  .steamLogo {
    position: absolute;
    background: #1a1d24;
    border-top: 4px solid #ff4646;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 76px;
    top: 159px;
    img {
      width: 47px;
      height: 34px;
    }
  }
  button {
    width: 173px;
    height: 48px;
    background: #ff4646;
    color: white;
    border: none;
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s;
}

.modal-enter,
.modal-leave-to {
  transform: translateY(+1000px);
  opacity: 0;
}

@media (max-width: 1200px) {
  .modalWindow {
    top: 180%;
  }
}
</style>