var express = require('express');
var app = express();
var http = require('https');




var post_data = JSON.stringify({
    "name": "change appliance state",
    "auto": true,
    "contexts": [],
    "templates": [
        "turn @state:state the @appliance:appliance ",
        "switch the @appliance:appliance @state:state "
    ],
    "userSays": [
        {
            "data": [
                {
                    "text": "turn "
                },
                {
                    "text": "on",
                    "alias": "state",
                    "meta": "@state"
                },
                {
                    "text": " the "
                },
                {
                    "text": "kitchen lights",
                    "alias": "appliance",
                    "meta": "@appliance"
                }
            ],
            "isTemplate": false,
            "count": 0
        },
        {
            "data": [
                {
                    "text": "switch the "
                },
                {
                    "text": "heating",
                    "alias": "appliance",
                    "meta": "@appliance"
                },
                {
                    "text": " "
                },
                {
                    "text": "off",
                    "alias": "state",
                    "meta": "@state"
                }
            ],
            "isTemplate": false,
            "count": 0
        }
    ],
    "responses": [
        {
            "resetContexts": false,
            "action": "set-appliance",
            "affectedContexts": [
                {
                    "name": "house",
                    "lifespan": 10
                }
            ],
            "parameters": [
                {
                    "dataType": "@appliance",
                    "name": "appliance",
                    "value": "\$appliance"
                },
                {
                    "dataType": "@state",
                    "name": "state",
                    "value": "\$state"
                }
            ],
            "speech": "Turning the \$appliance \$state\!"
        }
    ],
    "priority": 500000
});

// An object of options to indicate where to post to
var post_options = {
    host: 'api.api.ai',
    path: '/v1/intents?v=20150910',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 3255b98a02814cab8e954c2105e73692',
        'Content-Type': 'application/json; charset=utf-8'
    }
};
// Set up the request
var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });

    res.on("error", function(error, res) {
        console.log(error);
        console.log(res);
        console.log(res.statusCode);
    });
});

// post the data
post_req.write(post_data);
post_req.end();







app.get('/', (req, res) => {
    // Build the post string from an object
    var post_data = JSON.stringify({
        "name": "change appliance state",
        "auto": true,
        "contexts": [],
        "templates": [
            "turn @state:state the @appliance:appliance ",
            "switch the @appliance:appliance @state:state "
        ],
        "userSays": [
            {
                "data": [
                    {
                        "text": "turn "
                    },
                    {
                        "text": "on",
                        "alias": "state",
                        "meta": "@state"
                    },
                    {
                        "text": " the "
                    },
                    {
                        "text": "kitchen lights",
                        "alias": "appliance",
                        "meta": "@appliance"
                    }
                ],
                "isTemplate": false,
                "count": 0
            },
            {
                "data": [
                    {
                        "text": "switch the "
                    },
                    {
                        "text": "heating",
                        "alias": "appliance",
                        "meta": "@appliance"
                    },
                    {
                        "text": " "
                    },
                    {
                        "text": "off",
                        "alias": "state",
                        "meta": "@state"
                    }
                ],
                "isTemplate": false,
                "count": 0
            }
        ],
        "responses": [
            {
                "resetContexts": false,
                "action": "set-appliance",
                "affectedContexts": [
                    {
                        "name": "house",
                        "lifespan": 10
                    }
                ],
                "parameters": [
                    {
                        "dataType": "@appliance",
                        "name": "appliance",
                        "value": "\$appliance"
                    },
                    {
                        "dataType": "@state",
                        "name": "state",
                        "value": "\$state"
                    }
                ],
                "speech": "Turning the \$appliance \$state\!"
            }
        ],
        "priority": 500000
    });

    // An object of options to indicate where to post to
    var post_options = {
        host: 'api.api.ai',
        path: '/v1/intents?v=20150910',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 3255b98a02814cab8e954c2105e73692',
            'Content-Type': 'application/json; charset=utf-8'
        }
    };
    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
            console.log(chunk.statusCode);
        });

        res.on("error", function(error, res) {
            console.log(error);
            console.log(res);
            console.log(res.statusCode);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});