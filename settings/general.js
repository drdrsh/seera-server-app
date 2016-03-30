'use strict';

var config = {
    "development": {
        "id"       : 'seera-server-app',
        "port"     :  5000,
        "entities" : ["event", "idol", "person", "place", "transcript", "tribe"],
        "languages": ['ar', 'en'],
        "apiRoot" : "/api",
        "no_auth_routes" : [
            'post:/session/.*',
            'get:/person/.*',
            'get:/event/.*',
            'get:/place/.*',
            'get:/idol/.*',
            'get:/transcript/.*',
            'get:/tribe/.*'
        ],
        "max_session": 30
    },
    "production": {
        "id"       : 'seera-server-app',
        "entities" : ["event", "idol", "person", "place", "transcript", "tribe"],
        "languages": ['ar', 'en'],
        "port"     : 5001,
        "apiRoot"  : "/seera",
        "no_auth_routes" : [
            'post:/session/.*',
            'get:/person/.*',
            'get:/event/.*',
            'get:/place/.*',
            'get:/idol/.*',
            'get:/transcript/.*',
            'get:/tribe/.*'
        ],
        "max_session": 30
    },
    "test" : {}
};
config.test = config.development;
module.exports = config;