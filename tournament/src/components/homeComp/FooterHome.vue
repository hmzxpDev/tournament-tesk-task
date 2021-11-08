<template>
  <footer>
    <div class="arrow">
      <img src="../../assets/footer/arrow.svg" alt="" />
    </div>
    <div class="footerTopContent">
      <div class="footerBrand">
        <img src="../../assets/header/forcexGamingLogo.svg" />
        <div>FORCEX GAMING</div>
      </div>
      <menu>
        <span>ABOUT</span>
        <span>CONTACTS</span>
        <span>FEEDBACK</span>
        <span>HELP & SUPPORT</span>
        <span>SPONSORS</span>
        <span>EVENTS</span>
        <span>PRIVACY POLICY</span>
        <span>TERMS OF USE</span>
        <span>SERVICES</span>
      </menu>
      <div class="feedBack">
        <span class="headding">DON’T MISS NEW TOURNAMENTS</span>
        <span class="description"
          >Subscribe us now to get the latest news and updates</span
        >
        <div>
          <input placeholder="Email Addres" type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <div class="footerTop">
      <div class="background"></div>
    </div>
    <div class="footerBottom">
      <div>
        <span>© 2020 ForceX Gaming. All Rights Reserved.s</span>
        <span
          >WATCH ON TWITCH
          <img
            class="twitch"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE4LjI3NSwzLjQ0bC0xMS4zOTUsMzAuMzE1djExNC4xNjVoMzcuODR2MjAuNjRoMjUuNDc3NWwyMC42NCwtMjAuNjRoMzAuOTZsNDMuMzIyNSwtNDMuMjE1di0xMDEuMjY1ek0zNy44NCwyMC42NGgxMTAuMDh2NzUuNjhsLTIwLjY0LDIwLjY0aC00MS4yOGwtMjAuNjQsMjAuNjR2LTIwLjY0aC0yNy41MnpNNjguOCw0NC43MnY0OC4xNmgyMC42NHYtNDguMTZ6TTEwMy4yLDQ0LjcydjQ4LjE2aDIwLjY0di00OC4xNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        /></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerHome",
};
</script>

<style lang="scss">
footer {
  min-width: 1620px;
  width: 100%;
  height: 332px;
  background: #1a1d24;
  .arrow {
    position: absolute;
    margin-top: -25px;
    left: 49%;
    z-index: 2;
    width: 48px;
    height: 48px;
    background: #ff4646;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footerTopContent {
    width: 89%;
    left: 3%;
    height: 252px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    .footerBrand {
      img {
        width: 41px;
        height: 47.5px;
      }
      div {
        margin-left: 18px;
        z-index: 10;
      }
      width: 140px;
      display: flex;
      font-weight: bold;
      font-size: 18px;
      color: #ffffff;
      height: 144px;
      line-height: 1.3;
    }
    menu {
      width: 600px;
      height: 135px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      span {
        flex-basis: 33%;
        font-weight: bold;
        font-size: 14px;
        color: #ffffff;
      }
    }
    .feedBack {
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 487px;
      .headding {
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
      }
      .description {
        font-size: 16px;
        line-height: 20px;
        color: #e1e5e857;
      }
      div {
        input {
          width: 294px;
          height: 24px;
          background: #1a1d24;
          padding: 11px 0px 13px 16px;
          border: 1px solid #000;
          font-size: 16px;
          line-height: 20px;
          color: #e1e5e8;
        }
        button {
          width: 173px;
          height: 48px;
          background: #ff4646;
          color: #ffffff;
          border: none;
        }
      }
    }
  }
  .footerTop {
    width: 100%;
    height: 252px;
    background-image: url(../../assets/footer/background.jpg);
    opacity: 15%;
    .background {
      background-color: #0f0f12f2;
      mix-blend-mode: color-burn;
      width: 100%;
      height: 100%;
    }
  }
  .footerBottom {
    display: flex;
    justify-content: center;
    height: 80px;
    div {
      align-items: center;
      width: 95%;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      .twitch {
        margin-left: 21px;
      }
    }
  }
}
@media (max-width: 1200px) {
  footer {
    min-width: 1200px;
    .footerTopContent {
      .footerBrand {
        div {
          display: none;
        }
      }
    }
  }
}
</style>