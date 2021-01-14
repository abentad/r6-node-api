import cheerio from "cheerio";
import fetch from "node-fetch";

//
export async function getDetailedData(name) {
  const url = `https://r6.tracker.network/profile/pc/${name}/detailed`;
  const response = await fetch(url);
  const body = await response.text();
  const $ = cheerio.load(body);
  //works
  const plTotalPlayTime = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(7) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plTotalMatchesPlayed = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(8) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalWins = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(4) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalLosses = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(5) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalKills = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(10) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalDeaths = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(2) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalKD = $(
    "#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //
  const plRankedPlayTime = $(
    "#profile > div.trn-scont > div > div.r6-pvp-grid > div:nth-child(2) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plCasualPlayTime = $(
    "#profile > div.trn-scont > div > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalKillAssists = $(
    "#profile > div.trn-scont > div > div:nth-child(4) > div.trn-card__content > div > div:nth-child(2) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //
  const plTotalRevives = $(
    "#profile > div.trn-scont > div > div:nth-child(4) > div.trn-card__content > div > div:nth-child(3) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //
  //
  //
  //
  const nurl = `https://r6.tracker.network/profile/pc/${name}`;
  const nresponse = await fetch(nurl);
  const nbody = await nresponse.text();
  const n$ = cheerio.load(nbody);

  //works
  const playerName = n$(
    "#profile > div.trn-profile-header.trn-card > div > h1 > span:nth-child(1)"
  )
    .text()
    .toString()
    .trim();

  //doesnot work
  // const plLevel = $(
  //   "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.trn-card--light.trn-defstats-grid > div:nth-child(1) > div > div.trn-defstat__value"
  // )
  //   .text()
  //   .toString()
  //   .trim();
  //doesnot work
  // const plKd = $(
  //   "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.pb16 > div > div:nth-child(4) > div.trn-defstat__value"
  // )
  //   .text()
  //   .toString()
  //   .trim();
  //works
  const plRankedKd = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(8) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //works
  const plRankedDeaths = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(5) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedKills = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(6) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //works
  const plRankedMatches = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(4) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedWins = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(2) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedLosses = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(3) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankText = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div.trn-card__content.trn-card--light.pt8.pb8 > div > div:nth-child(2) > div > div:nth-child(1)"
  )
    .text()
    .toString()
    .trim();
  //doesnot work
  // const plAvgSeasonalMmr = $(
  //   "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.trn-card--light.trn-defstats-grid > div:nth-child(4) > div.trn-defstat__value"
  // )
  //   .text()
  //   .toString()
  //   .trim();
  //works
  const plThisSeasonRankedMmr = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div.trn-card__content.trn-card--light.pt8.pb8 > div > div:nth-child(2) > div > div.trn-text--dimmed"
  )
    .text()
    .toString()
    .trim();
  //works
  const plThisSeasonRankedKd = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)"
  )
    .text()
    .toString()
    .trim();
  //works
  const plProfilePic = n$(
    "#profile > div.trn-profile-header.trn-card > div > div.trn-profile-header__avatar.trn-roundavatar.trn-roundavatar--white > img"
  ).attr("src");
  //works
  const plRankPic = n$(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div.trn-card__content.trn-card--light.pt8.pb8 > div > div:nth-child(1) > img"
  ).attr("src");
  //doesnot work
  // const plTopOps = [];
  // $(
  //   "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.trn-card--light.trn-defstats-grid > div.trn-defstat.mb0.top-operators > div.trn-defstat__value"
  // ).each((i, item) => {
  //   const $item = $(item);
  //   const image = $item.find("img").attr("src");
  //   plTopOps.push(image);
  // });

  return [
    {
      playerName,
      plRankedKd,
      plRankedDeaths,
      plRankedKills,
      plRankedMatches,
      plRankedWins,
      plRankedLosses,
      plRankText,
      plThisSeasonRankedMmr,
      plThisSeasonRankedKd,
      plProfilePic,
      plRankPic,
      plTotalPlayTime,
      plTotalMatchesPlayed,
      plTotalWins,
      plTotalLosses,
      plTotalKills,
      plTotalDeaths,
      plTotalKD,
      plRankedPlayTime,
      plCasualPlayTime,
      plTotalKillAssists,
      plTotalRevives,
    },
  ];
}
