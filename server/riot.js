const { Kayn, REGIONS } = require('kayn');
const { RIOT_LOL_API_KEY } = require('./config');
// route to api key

const kayn = Kayn('RGAPI-my-api-key')(/* {
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
/*
* handle requests to league of legends here
* make functions to handle requests
* take in username to find user id
* then pass that username to next function which makes
* get request for match list
*/
