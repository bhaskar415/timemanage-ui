var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({  
    host: '10.10.10.21:9200',
    log: 'info'
});

module.exports = elasticClient;
