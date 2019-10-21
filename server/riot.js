const { Kayn, REGIONS } = require('kayn');
const { RIOT_LOL_API_KEY } = require('./config');
// route to api key

const kayn = Kayn(RIOT_LOL_API_KEY)(/* {
    region: REGIONS.NORTH_AMERICA,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
} */);
const getMatchList = (accountId) => {
  return kayn.Matchlist.by.accountID(accountId);
    // .region(REGIONS.KOREA)
    // .query({
    //   season: 9,
    //   queue: [420, 440],
    // })
    // .callback((err, matchlist) => {
    //   console.log(matchlist.matches.length);
    // });
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
};

const getSummonerByName = (username) => {
  kayn.Summoner.by.name(username)
    .then((summoner) => {
    //   console.log(summoner);
      return summoner.accountId;
    })
    .then((accountId) => {
      return getMatchList(accountId);
    })
    .then((matchlistObject) => {
      console.log(matchlistObject);
    })
    .catch(error => console.error(error));
};
// getSummonerByName should return an object with accountId property
// on reponse body, use this for getMatchlist accountId
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
