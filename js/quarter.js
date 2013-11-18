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
        var EChart_eLineQuarter = ec.init(document.getElementById('eLineQuarter'))
        var option_eLineQuarter = 
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
            "1997-Q1",
            "1997-Q2",
            "1997-Q3",
            "1997-Q4",
            "1998-Q1",
            "1998-Q2",
            "1998-Q3",
            "1998-Q4",
            "1999-Q1",
            "1999-Q2",
            "1999-Q3",
            "1999-Q4",
            "2000-Q1",
            "2000-Q2",
            "2000-Q3",
            "2000-Q4",
            "2001-Q1",
            "2001-Q2",
            "2001-Q3",
            "2001-Q4",
            "2002-Q1",
            "2002-Q2",
            "2002-Q3",
            "2002-Q4",
            "2003-Q1",
            "2003-Q2",
            "2003-Q3",
            "2003-Q4",
            "2004-Q1",
            "2004-Q2",
            "2004-Q3",
            "2004-Q4",
            "2005-Q1",
            "2005-Q2",
            "2005-Q3",
            "2005-Q4",
            "2006-Q1",
            "2006-Q2",
            "2006-Q3",
            "2006-Q4",
            "2007-Q1",
            "2007-Q2",
            "2007-Q3",
            "2007-Q4",
            "2008-Q1",
            "2008-Q2",
            "2008-Q3",
            "2008-Q4",
            "2009-Q1",
            "2009-Q2",
            "2009-Q3",
            "2009-Q4",
            "2010-Q1",
            "2010-Q2",
            "2010-Q3",
            "2010-Q4",
            "2011-Q1",
            "2011-Q2",
            "2011-Q3",
            "2011-Q4",
            "2012-Q1",
            "2012-Q2",
            "2012-Q3",
            "2012-Q4",
            "2013-Q2",
            "2013-Q3",
            "2013-Q4"
        ]
    },
    "series" : [
        {
            "type" : "bar",
            "name" : "data",
            "data" : [
                59,
                64,
                71,
                56,
                59,
                51,
                66,
                67,
                67,
                71,
                73,
                71,
                66,
                88,
                63,
                108,
                119,
                92,
                130,
                127,
                160,
                125,
                149,
                153,
                200,
                126,
                112,
                191,
                118,
                209,
                182,
                129,
                159,
                166,
                137,
                139,
                271,
                280,
                199,
                168,
                138,
                250,
                203,
                200,
                135,
                195,
                142,
                131,
                96,
                342,
                202,
                134,
                148,
                132,
                165,
                179,
                108,
                143,
                161,
                114,
                110,
                111,
                108,
                123,
                133,
                152,
                64
            ]
        }
    ]
}
  EChart_eLineQuarter.setOption(option_eLineQuarter);
        }
    );
