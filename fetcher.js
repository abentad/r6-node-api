import cheerio from "cheerio";
import fetch from "node-fetch";

export async function getData(name) {
  const url = `https://r6.tracker.network/profile/pc/${name}`;
  const response = await fetch(url);
  const body = await response.text();
  const $ = cheerio.load(body);

  //works
  const plName = $(
    "#profile > div.trn-profile-header.trn-card > div > h1 > span:nth-child(1)"
  )
    .text()
    .toString()
    .trim();

  //doesnot work
  const plLevel = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.trn-card--light.trn-defstats-grid > div:nth-child(1) > div > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //doesnot work
  const plKd = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.pb16 > div > div:nth-child(4) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedKd = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(8) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedPlayTime = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //works
  const plRankedDeaths = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(5) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedKills = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(6) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();

  //works
  const plRankedMatches = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(4) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedWins = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(2) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankedLosses = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(3) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plRankText = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div.trn-card__content.trn-card--light.pt8.pb8 > div > div:nth-child(2) > div > div:nth-child(1)"
  )
    .text()
    .toString()
    .trim();
  //doesnot work
  const plAvgSeasonalMmr = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__content > div.trn-scont__content.trn-card.trn-card--dark-header > div.trn-card__content.trn-card--light.trn-defstats-grid > div:nth-child(4) > div.trn-defstat__value"
  )
    .text()
    .toString()
    .trim();
  //works
  const plThisSeasonRankedMmr = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div.trn-card__content.trn-card--light.pt8.pb8 > div > div:nth-child(2) > div > div.trn-text--dimmed"
  )
    .text()
    .toString()
    .trim();
  //works
  const plThisSeasonRankedKd = $(
    "#profile > div.trn-scont.trn-scont--swap > div.trn-scont__aside > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)"
  )
    .text()
    .toString()
    .trim();

  const plInfo = {
    plName,
    plLevel,
    plKd,
    plRankedKd,
    plRankedPlayTime,
    plRankedDeaths,
    plRankedKills,
    plRankedMatches,
    plRankedWins,
    plRankedLosses,
    plRankText,
    plAvgSeasonalMmr,
    plThisSeasonRankedMmr,
    plThisSeasonRankedKd,
  };
  return plInfo;
}
