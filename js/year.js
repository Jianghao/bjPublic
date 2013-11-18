require.config({
        paths:{ 
            'echarts': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/bar' : 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/line': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/scatter': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/k': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/pie': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/map': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/force': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map',
            'echarts/chart/radar': 'http://efe.baidu.com/echarts/doc/example/www/js/echarts-map'
        }
    });
    
    // Step:4 require echarts and use it in the callback.
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/scatter',
            'echarts/chart/k',
            'echarts/chart/pie',
            'echarts/chart/map',
            'echarts/chart/force',
            'echarts/chart/radar'
        ],
    function(ec) {
        var EChart_eLineYear = ec.init(document.getElementById('eLineYear'))
        var option_eLineYear = 
{
    "title" : {
        "text" : ""
    },
    "legend" : {
    },
    "toolbox" : {
        "show" : true,
        "feature" : {
            "mark" : true,
            "dataView" : true,
            "magicType" : [
                "line",
                "bar"
            ],
            "restore" : true,
            "saveAsImage" : true
        }
    },
    "tooltip" : {
        "trigger" : "axis"
    },
    "yAxis" : {
        "type" : "value"
    },
    "xAxis" : {
        "type" : "category",
        "data" : [
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013"
        ]
    },
    "series" : [
        {
            "type" : "bar",
            "name" : "data",
            "data" : [
                221,
                242,
                269,
                330,
                432,
                579,
                617,
                667,
                576,
                874,
                843,
                603,
                809,
                592,
                541,
                447,
                418
            ]
        }
    ]
}
  EChart_eLineYear.setOption(option_eLineYear);
        }
    );