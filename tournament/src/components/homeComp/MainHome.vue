<template>
  <main>
    <ModalWindow
      @closeModal="closeModal"
      :dialog="dialog"
      @createTeam="createTeam"
    />
    <div class="container">
      <div class="mainTopSide">
        <div class="mainLeftSide">
          <div class="tournamentInfo">
            <div class="infoBlocks">
              <div>
                <img src="../../assets/main/inProgressIcon.svg" alt="" /> IN
                PROGRESS
              </div>
              <div>5V5 CAPTAIN MODE</div>
              <div>FREE REGISTRATION</div>
            </div>
            <div class="tournamentName">Counted Logic Tournament</div>
            <div class="tournamentParams">
              <div class="tournamentParamsLeftSide">
                <div>
                  <span>Type: Regular</span>
                  <span>Slots: 8 (Registered Teams)</span>
                </div>
                <div>
                  <span>Round Start: ASAP</span>
                  <span>Game timer: 15 min</span>
                </div>
                <div>
                  <span>Format: Single Elimination</span>
                  <span>Structure: BO1</span>
                </div>
              </div>
              <div class="tournamentParamsRightSide">
                <button>SHOW ALL 12 TOURNAMENTS</button>
              </div>
            </div>
            <div class="tournamentPrize">
              <div class="prizePool">
                <span class="prizePoolHeadding">PRIZE POOL</span>
                <span class="prizePoolMoney">$ 450</span>
              </div>
              <div class="prizeLine"></div>
              <div class="prizePlace">
                <img src="../../assets/main/gold.png" alt="gold" />
                <span class="prizePlaceMoney">$ 250</span>
                <span>1ST PLACE</span>
              </div>
              <div class="prizePlace">
                <img src="../../assets/main/silver.png" alt="silver" />
                <span class="prizePlaceMoney">$ 150</span>
                <span>2ND PLACE</span>
              </div>
              <div class="prizePlace">
                <img src="../../assets/main/bronze.png" alt="bronze" />
                <span class="prizePlaceMoney">$ 50</span>
                <span>3RD PLACE</span>
              </div>
              <button>JOIN</button>
            </div>
          </div>
          <div class="latesMatches">
            <div class="latesMatchesHeadding">
              <div>
                <div class="line"></div>
                Latest matches
              </div>
              <button>SHOW MORE</button>
            </div>
            <div class="latesMatchesGames">
              <div class="latesMatchesGamesContent">
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />

                <div class="teamPoints">0</div>
                <div class="vs">vs</div>
                <div class="teamPoints">2</div>
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />
                <div class="leagueInfo">
                  <span class="leagueHeadding">CS:GO LEAGUE</span>
                  <span class="leagueName">COUNTED LOGIC TOURNAMENT</span>
                </div>
              </div>
              <div class="latesMatchesGamesContent">
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />

                <div class="teamPoints">0</div>
                <div class="vs">vs</div>
                <div class="teamPoints">2</div>
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />
                <div class="leagueInfo">
                  <span class="leagueHeadding">CS:GO LEAGUE</span>
                  <span class="leagueName">COUNTED LOGIC TOURNAMENT</span>
                </div>
              </div>
              <div class="latesMatchesGamesContent">
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />

                <div class="teamPoints">0</div>
                <div class="vs">vs</div>
                <div class="teamPoints">2</div>
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />
                <div class="leagueInfo">
                  <span class="leagueHeadding">CS:GO LEAGUE</span>
                  <span class="leagueName">COUNTED LOGIC TOURNAMENT</span>
                </div>
              </div>
              <div class="latesMatchesGamesContent">
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />

                <div class="teamPoints">0</div>
                <div class="vs">vs</div>
                <div class="teamPoints">2</div>
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />
                <div class="leagueInfo">
                  <span class="leagueHeadding">CS:GO LEAGUE</span>
                  <span class="leagueName">COUNTED LOGIC TOURNAMENT</span>
                </div>
              </div>
              <div class="latesMatchesGamesContent">
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />

                <div class="teamPoints">0</div>
                <div class="vs">vs</div>
                <div class="teamPoints">2</div>
                <img
                  class="teamLogo"
                  src="../../assets/main/teamLogo1.png"
                  alt="team logo"
                />
                <div class="leagueInfo">
                  <span class="leagueHeadding">CS:GO LEAGUE</span>
                  <span class="leagueName">COUNTED LOGIC TOURNAMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mainRightSide">
          <div class="teamsList">
            <div class="teamsListHeadding">
              <div class="leftSide">
                <div class="line"></div>
                <span>TEAMS</span>
              </div>
              <button @click="dialog = true">CREATE TEAM</button>
            </div>
            <div class="team" v-for="item in rednerTeams" :key="item.id">
              <div>
                <img class="teamLogo" src="../../assets/main/teamLogo1.png" />
                <span>{{ item.name }}</span>
              </div>
              <div>
                <button>vote</button>
                <button>join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBottomSide">
        <div class="topTeamsHeadding">
          <div class="line"></div>
          <div class="headding">
            <span>TOP TEAMS</span>
            <button>SHOW MORE</button>
          </div>
        </div>
        <div class="topTeamInfo">
          <div class="topTeamInfoLeftSide">
            <img src="../../assets/main/teamLogo1Big.png" alt="team logo" />
            <div class="teamInfo">
              <span class="rank">PRO TEAM</span>
              <span class="name">DETONA GAMING</span>
              <span class="timeRegistration"
                >REGISTRATION DATE: JUL 12, 2020
              </span>
              <div>
                <button>VOTE</button>
                <button>JOIN</button>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="topTeamInfoRightSide">
            <div>
              <span class="quantity">346</span>
              <span class="category">WINS</span>
            </div>
            <div>
              <span class="quantity">102</span>
              <span class="category">LOSES</span>
            </div>
            <div>
              <span class="quantity">12</span>
              <span class="category">TOURNAMENTS</span>
            </div>
            <div>
              <span class="quantity">1245</span>
              <span class="category">KILLS</span>
            </div>
            <div>
              <span class="quantity">20</span>
              <span class="category">TROPHIES</span>
            </div>
            <div>
              <span class="quantity">4</span>
              <span class="category">MVP’S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
  name: "mainHome",
  components: {
    ModalWindow,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    createTeam(teamName) {
      this.dialog = false;
      this.$store.commit("addNewTeam", {
        id: this.$store.getters.teamList.length + 1,
        logo: null,
        name: teamName,
      });
    },
    closeModal() {
      this.dialog = false;
    },
  },

  computed: {
    rednerTeams() {
      return this.$store.getters.teamList;
    },
  },
};
</script>

<style lang="scss">
main {
  background-image: url("../../assets/main/backgroundMain.png");
  background-repeat: no-repeat;
  background-size: 100%;
  min-width: 1600px;
  background-color: #1a1c23;
  padding-top: 72px;
  .container {
    width: 95%;
    margin: 0 auto;
    .mainTopSide {
      display: flex;
      justify-content: space-between;
      .mainLeftSide {
        max-width: 1240px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .tournamentInfo {
          margin-left: 122px;
          width: 90%;
          .infoBlocks {
            display: flex;
            div {
              margin-right: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 184px;
              height: 32px;
              background-color: #ff4646;
              font-weight: bold;
              font-size: 14px;
              color: #ffffff;
              img {
                margin-right: 7px;
              }
            }
          }
          .tournamentName {
            margin-top: 32px;
            width: 767px;
            font-weight: bold;
            font-size: 79px;
            text-transform: uppercase;
            line-height: 1;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px white;
          }
          .tournamentParams {
            margin-top: 160px;
            display: flex;
            justify-content: space-between;
            .tournamentParamsLeftSide {
              display: flex;
              font-size: 16px;
              color: #ffffff;
              div {
                min-width: 215px;
                margin-right: 64px;
                display: flex;
                flex-direction: column;
                span {
                  margin-bottom: 18px;
                }
              }
            }
            .tournamentParamsRightSide {
              display: flex;
              align-items: flex-start;
              button {
                width: 265px;
                height: 48px;
                background: rgba(0, 0, 0, 0);
                border: 1px solid #ffff;
                font-weight: bold;
                font-size: 14px;
                color: #ffffff;
              }
            }
          }
          .tournamentPrize {
            margin-top: 48px;
            width: 100%;
            height: 192px;
            background-color: #212832;
            clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
            display: flex;
            align-items: center;
            .prizePool {
              width: 139px;
              height: 80px;
              margin-left: 48px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .prizePoolHeadding {
                font-weight: bold;
                font-size: 14px;
                color: #ff4646;
              }
              .prizePoolMoney {
                font-weight: bold;
                font-size: 48px;
                color: #ffffff;
              }
            }
            .prizeLine {
              border: 1px solid #fff;
              width: 0px;
              height: 128px;
              margin-left: 64px;
            }
            .prizePlace {
              width: 100px;
              height: 128px;
              margin-left: 63px;
              display: flex;
              flex-direction: column;
              font-size: 16px;
              color: #e1e5e8;
              img {
                width: 48px;
                height: 48px;
              }
              .prizePlaceMoney {
                font-weight: bold;
                font-size: 24px;
                margin: 8px 0px 8px 0px;
              }
            }
            button {
              margin-left: 112px;
              width: 164px;
              height: 48px;
              background: #ff4646;
              color: white;
              border: 0px;
              font-weight: bold;
              font-size: 14px;
              color: #ffffff;
            }
          }
        }
        .latesMatches {
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          .latesMatchesHeadding {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            div {
              font-weight: bold;
              font-size: 48px;
              text-transform: uppercase;
              color: #ffffff;
              .line {
                width: 100px;
                height: 4px;
                background: #ff4646;
              }
            }
            button {
              width: 173px;
              height: 48px;
              background: rgba(0, 0, 0, 0);
              border: 1px solid #ffff;
              font-weight: bold;
              font-size: 14px;
              color: #ffffff;
            }
          }
          .latesMatchesGames {
            margin-top: 48px;
            .latesMatchesGamesContent {
              display: flex;
              align-items: center;
              width: 1240px;
              height: 158px;
              background-color: #212832;
              margin-bottom: 18px;
              .teamLogo {
                width: 144px;
                height: 144px;
              }
              .vs {
                width: 40px;
                height: 40px;
                border: 1px solid #ff4646;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0px 45px 0px 45px;
                font-weight: bold;
                font-size: 14px;
                color: #ffffff;
              }
              .teamPoints {
                font-weight: bold;
                font-size: 32px;
                color: #ffffff;
              }
              .leagueInfo {
                width: 420px;
                height: 73px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 40px;
                .leagueHeadding {
                  font-weight: bold;
                  font-size: 14px;
                  color: #ff4646;
                }
                .leagueName {
                  font-weight: bold;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
      .mainRightSide {
        width: 540px;
        .teamsList {
          .teamsListHeadding {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .leftSide {
              .line {
                width: 100px;
                height: 4px;
                background: #ff4646;
                margin-bottom: 18px;
              }
              span {
                font-weight: bold;
                font-size: 48px;
                color: #ffffff;
              }
            }
            button {
              font-weight: bold;
              font-size: 14px;
              color: #ff4646;
              width: 173px;
              height: 48px;
              background: #ffffff;
              border: none;
            }
          }
          .team {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            div {
              display: flex;
              align-items: center;
              .teamLogo {
                min-width: 123px;
                height: 123px;
              }
              span {
                font-weight: bold;
                font-size: 24px;
                color: #ffffff;
                margin-left: 18px;
              }
              button {
                width: 68px;
                height: 40px;
                background: rgba(0, 0, 0, 0);
                border: 1px solid #ffffff;
                box-sizing: border-box;
                margin-left: 24px;
                font-weight: bold;
                font-size: 14px;
                color: #ffffff;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
    .mainBottomSide {
      margin-top: 116px;
      .topTeamsHeadding {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 24px;
        width: 531px;
        height: 76px;
        .line {
          width: 100px;
          height: 4px;
          background: #ff4646;
        }
        .headding {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-weight: bold;
            font-size: 48px;
            color: #ffffff;
          }
          button {
            width: 173px;
            height: 48px;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            font-size: 14px;
            color: #ffffff;
            background: rgba(0, 0, 0, 0);
          }
        }
      }
      .topTeamInfo {
        display: flex;
        height: 435px;
        justify-content: space-between;
        .topTeamInfoLeftSide {
          display: flex;
          align-items: center;
          img {
            height: 435px;
            width: 509px;
          }
          .teamInfo {
            display: flex;
            flex-direction: column;
            .rank {
              font-weight: bold;
              font-size: 14px;
              color: #ff4646;
              margin-bottom: 14px;
            }
            .name {
              font-weight: bold;
              font-size: 24px;
              color: #ffffff;
              margin-bottom: 14px;
            }
            .timeRegistration {
              font-size: 16px;
              color: #e1e5e8;
              font-weight: 100;
            }
            div {
              display: flex;
              justify-content: space-between;
              margin-top: 48px;
              button {
                width: 120px;
                height: 48px;
                background: #ff4646;
                font-size: 14px;
                color: #ffffff;
                border: none;
              }
            }
          }
        }
        .line {
          width: 2px;
          height: 380px;
          background: #ffffff;
        }
        .topTeamInfoRightSide {
          display: flex;
          justify-content: space-between;
          max-width: 765px;
          flex-wrap: wrap;
          div {
            display: flex;
            flex-direction: column;
            min-width: 210px;
            .quantity {
              font-weight: bold;
              font-size: 72px;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1px white;
            }
            .category {
              font-weight: bold;
              font-size: 14px;
              color: #ff4646;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  main {
    min-width: 1200px;
    padding-bottom: 57px;
    .container {
      width: 91%;
      .mainTopSide {
        flex-direction: column;
        .mainLeftSide {
          .tournamentInfo {
            margin-left: 0px;
            width: 100%;
            .tournamentParams {
              .tournamentParamsRightSide {
                button {
                  width: 250px;
                }
              }
            }
          }
          .latesMatches {
            align-self: center;
            .latesMatchesHeadding {
              width: 95%;
            }
            .latesMatchesGames {
              .latesMatchesGamesContent {
                width: 1090px;
              }
            }
          }
        }
        .mainRightSide {
          width: 100%;
        }
      }
      .mainBottomSide {
        .topTeamInfo {
          width: 100%;
          height: 873px;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          .line {
            height: 2px;
            width: 380px;
          }
          .topTeamInfoLeftSide {
            height: 380px;
            img {
              width: 571.7px;
              height: 571.7px;
            }
          }
          .topTeamInfoRightSide {
            height: 350px;
            div {
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>