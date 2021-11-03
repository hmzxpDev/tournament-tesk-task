<template>
  <header>
    <div class="headerContent">
      <div class="headerLeftSide">
        <div class="headerLogo">
          <img src="../../assets/header/forcexGamingLogo.svg" />
          <div>FORCEX GAMING</div>
        </div>
        <menu>
          <div class="redColor">TOURNAMENTS</div>
          <div>LADDERS</div>
          <div class="tabletNone">LEADER BOARD</div>
          <div class="tabletNone">
            DISCOVER<img
              class="caretDown"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAUklEQVQokdXNsQmAQBQE0fnxBYpl2Jy1WJZwGNrOmBgo/OMMTNz4DQv/XwCoM7B07BoRB1cwqtX2qjo+cnVQtwTv6pR+JlEbJ1Ef36Killf4850H2HGSegXlSgAAAABJRU5ErkJggg=="
            />
          </div>
          <div class="tabletNone">ESPORTS</div>
          <div class="tabletNone">SUPPORT</div>
          <div class="openMenu">
            <img src="../../assets/header/openAllMenu.svg" />
          </div>
        </menu>
      </div>
      <div class="headerRightSide">
        <img
          class="twitch"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE4LjI3NSwzLjQ0bC0xMS4zOTUsMzAuMzE1djExNC4xNjVoMzcuODR2MjAuNjRoMjUuNDc3NWwyMC42NCwtMjAuNjRoMzAuOTZsNDMuMzIyNSwtNDMuMjE1di0xMDEuMjY1ek0zNy44NCwyMC42NGgxMTAuMDh2NzUuNjhsLTIwLjY0LDIwLjY0aC00MS4yOGwtMjAuNjQsMjAuNjR2LTIwLjY0aC0yNy41MnpNNjguOCw0NC43MnY0OC4xNmgyMC42NHYtNDguMTZ6TTEwMy4yLDQ0LjcydjQ4LjE2aDIwLjY0di00OC4xNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        />
        <button>SIGN UP</button>
        <div class="headerAvatar">
          <img src="../../assets/header/alien.svg" />
        </div>
        <span
          >ANONYMOUS
          <img
            class="caretDown"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAUklEQVQokdXNsQmAQBQE0fnxBYpl2Jy1WJZwGNrOmBgo/OMMTNz4DQv/XwCoM7B07BoRB1cwqtX2qjo+cnVQtwTv6pR+JlEbJ1Ef36Killf4850H2HGSegXlSgAAAABJRU5ErkJggg=="
        /></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderHome",
};
</script>

<style lang="scss">
.caretDown {
  margin-left: 18px;
}
.redColor {
  color: #ff4646;
}
.twitch {
  width: 18px;
  height: 18px;
}
header {
  height: 90px;
  width: 100%;
  min-width: 1600px;
  background-color: #1f2326;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerContent {
  width: 96%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .headerLeftSide {
    display: flex;
    .headerLogo {
      display: flex;
      width: 132px;
      height: 45px;
      margin-right: 16px;
      div {
        margin-left: 14px;
        font-weight: bold;
        font-size: 18px;
        color: #ffffff;
        line-height: 1.3;
      }
    }
    menu {
      min-width: 903px;
      display: flex;
      flex-wrap: nowrap;
      font-weight: bold;
      font-size: 17px;
      color: #ffffff;
      div {
        height: 18 px;
        margin-right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .headerRightSide {
    width: 498px;
    display: flex;
    align-items: center;
    button {
      color: #ffffff;
      font-weight: bold;
      font-size: 14px;
      background-color: #ff4646;
      width: 173px;
      height: 48px;
      border: none;
      margin-left: 43px;
    }
    .headerAvatar {
      width: 42px;
      height: 42px;
      background: #1a1d24;
      border-radius: 40px;
      margin-left: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #ffffff;
      font-weight: bold;
      font-size: 14px;
      margin-left: 18px;
    }
  }
}
@media (min-width: 1201px) {
  header {
    .headerContent {
      .headerLeftSide {
        menu {
          .openMenu {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  header {
    min-width: 1200px;
    .headerContent {
      .headerLeftSide {
        menu {
          min-width: 313px;
          .tabletNone {
            display: none;
          }
          .openMenu {
            display: flex;
          }
        }
      }
    }
  }
}
</style>