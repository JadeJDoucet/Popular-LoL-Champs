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

const getSummonerByName = (username) => {
  kayn.Summoner.by.name(username)
    .then((summoner) => {
      console.log(summoner);
    })
    .then(console.log)
    .catch(error => console.error(error));
};
// getSummonerByName should return an object with accountId property
// on reponse body, use this for getMatchlist accountId
const getMatchList = (accountId) => {
  kayn.Matchlist.by.accountID(3440481)
    // .region(REGIONS.KOREA)
    // .query({
    //   season: 9,
    //   queue: [420, 440],
    // })
    // .callback((err, matchlist) => {
    //   console.log(matchlist.matches.length);
    // });
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
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
