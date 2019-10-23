const { Kayn, REGIONS } = require('kayn');
const { RIOT_LOL_API_KEY } = require('./config');
// route to api key

const kayn = Kayn(RIOT_LOL_API_KEY)();
const getMatchList = (accountId) => {
  return kayn.Matchlist.by.accountID(accountId);
};

const getSummonerByName = (username) => {
  return kayn.Summoner.by.name(username)
    .then((summoner) => {
      return summoner.accountId;
    })
    .then((accountId) => {
      return getMatchList(accountId);
    })
    .then((matchlistObject) => {
      // contains matches: a list of matches with a champion property
      return matchlistObject.matches;
    })
    .catch(error => console.error(error));
};

/*
* handle requests to league of legends here
* make functions to handle requests
* take in username to find user id
* then pass that username to next function which makes
* get request for match list
*/

module.exports = {
  getSummonerByName,
  getMatchList,
};
