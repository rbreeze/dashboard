(function($) {

	function getTimeBlockData(data, timeBlocksAgo, timeBlockLength) {
		return data.reverse().slice((timeBlockLength*timeBlocksAgo), ((timeBlockLength*timeBlocksAgo)+timeBlockLength)).reverse();
	}

	$.fn.newLineFromSheet = function(options) {

		var caller = this;

		var uiFont = 'Avenir Next';

		var settings = $.extend({
			sheet: null,
			sheet2: null, 
			id: null,
			valueColumn: 1,
			valueColumn2: null,
			timeBlock: 0,
			color: 'blue',
			scaleOverride: false,
			stepWidth: null,
			minValue: null,
			maxValue: null,
			sheet: null,
			width: 450,
			height: 300,
			timeBlockLength: 18, 
			chartOptions: { 
				scaleFontFamily: uiFont,
				tooltipFontFamily: uiFont,
				pointLabelFontFamily: uiFont,
				scaleFontSize: 12,
				tooltipFontSize: 14,
				tooltipTitleFontSize: 14,
				pointDotStrokeWidth: 1,
		  		tooltipTitleFontStyle : 'normal'
		  	}
		}, options);

		var url = "https://spreadsheets.google.com/tq?key=" + settings.id + "&tqx=out:csv&callback=processData" + "&sheet=" + settings.sheet; 

		var values = new Array();
		var labels = new Array();

		$.ajax({
	    	url: 'http://query.yahooapis.com/v1/public/yql', 
	    	dataType: "jsonp",
	    	data: { 
	            q: "select * from csv where url='" + url + "'",
	            format: 'json'
	  		},
	    	success: function(data) {
	    		$.each(data.query.results.row, function(index, object) {
	        		if(index !== "0") {
	        			values[index-1] = eval("parseFloat(data.query.results.row[index].col" + settings.valueColumn + ")");
	    			}
	    			labels[index-1] = data.query.results.row[index].col0;
			    });

				var currentData = getTimeBlockData(values, settings.timeBlock, settings.timeBlockLength);
				var currentLabels = getTimeBlockData(labels, settings.timeBlock, settings.timeBlockLength);

				var chartData = convertToLineData(settings.color, settings.name, currentLabels, currentData, null);

		       	if (settings.sheet2) {
		       		var url2 = "https://spreadsheets.google.com/tq?key=" + settings.id + "&tqx=out:csv&callback=processData" + "&sheet=" + settings.sheet2; 
		       		if (!settings.valueColumn2)
		       			settings.valueColumn2 = settings.valueColumn;
		       		var values2 = new Array();
			    	$.ajax({
			    		url: 'http://query.yahooapis.com/v1/public/yql', 
			        	dataType: "jsonp",
			        	data: { 
				            q: "select * from csv where url='" + url2 + "'",
				            format: 'json'
		          		},
		          		success: function(data) {
		          			$.each(data.query.results.row, function(index, object) {
				        		if(index !== "0") { 
				        			values2[index-1] = eval("parseFloat(data.query.results.row[index].col" + settings.valueColumn2 + ")");
				        		}
						    });

						    var currentData2 = getTimeBlockData(values2, settings.timeBlock, settings.timeBlockLength);

						    var chartData2 = convertToLineData(settings.color, settings.name, currentLabels, currentData2);

						    chartData2.datasets[0].data = currentData2;
						    chartData2 = chartData2.datasets[0];

						    chartData.datasets[1] = chartData2;

							if (settings.scaleOverride == true) {
							    var chartOptions = {
							    	scaleOverride: true
							    }
						    }
						    else {
							    var chartOptions = {
							    	scaleOverride: false
							    }				    	
						    }

						    var extraOptions = {
					    		scaleStartValue: settings.minValue,
					    		scaleStepWidth: settings.stepWidth,
					    		scaleSteps: (settings.maxValue - settings.minValue) / settings.stepWidth
						    }

						    $.extend(chartOptions, extraOptions);

	    				   	var ctx = caller[0].getContext("2d");
					    	var myChart = new Chart(ctx);
					    	myChart.Line(chartData, $.extend(settings.chartOptions, chartOptions));
					    	return;
		          		}
			    	})
			    }

			    if (settings.scaleOverride == true) {
				    var chartOptions = {
				    	scaleOverride: true
				    }
			    }
			    else {
				    var chartOptions = {
				    	scaleOverride: false
				    }				    	
			    }

			    var extraOptions = {
		    		scaleStartValue: settings.minValue,
		    		scaleStepWidth: settings.stepWidth,
		    		scaleSteps: (settings.maxValue - settings.minValue) / settings.stepWidth
			    }

			    $.extend(chartOptions, extraOptions);

			   	var ctx = caller[0].getContext("2d");
		    	var myChart = new Chart(ctx);
				myChart.Line(chartData, $.extend(settings.chartOptions, chartOptions));
	    	},
	    	error: function() { console.log("Error! Failed to get data set."); }
		});
	}

	$.fn.newDoughnutFromSheet = function(options) {

		this.addClass('doughnut');

		var caller = this;

		var uiFont = 'Avenir Next';

		var settings = $.extend({
			id: null, 
			sheet: null,
			valueColumn1: 1,
			valueColumn2: 2, 
			valueColumn3: 3,
			timeBlock: 0,
			label1: null,
			label2: null,
			label3: null,
			state: 'month',
			chartOptions: { 
				scaleFontFamily: uiFont,
				tooltipFontFamily: uiFont,
				pointLabelFontFamily: uiFont,
		  		tooltipTitleFontStyle : 'normal'
		  	}
		}, options);
				
		var url = "https://spreadsheets.google.com/tq?key=" + settings.id + "&tqx=out:csv&callback=processData" + "&sheet=" + settings.sheet; 

		var values1 = new Array();
		var values2 = new Array();
		var values3 = new Array();
		var value1, value2, value3;

		$.ajax({
	    	url: 'http://query.yahooapis.com/v1/public/yql', 
	    	dataType: "jsonp",
	    	data: { 
	            q: "select * from csv where url='" + url + "'",
	            format: 'json'
	  		},
	  		success: function(data) {
				$.each(data.query.results.row, function(index, object) {
					if(index !== "0") {
						values1[index-1] = eval("parseFloat(data.query.results.row[index].col" + settings.valueColumn1 + ")");
						values2[index-1] = eval("parseFloat(data.query.results.row[index].col" + settings.valueColumn2 + ")");
						values3[index-1] = eval("parseFloat(data.query.results.row[index].col" + settings.valueColumn3 + ")");
					}
				});
				value1 = values1.reverse()[settings.timeBlock];
				value2 = values2.reverse()[settings.timeBlock];
				value3 = values3.reverse()[settings.timeBlock];
				var chartData = convertToDoughnutData(value1, value2, value3, settings.label1, settings.label2, settings.label3);
				var ctx = caller[0].getContext("2d");
		    	var myChart = new Chart(ctx);
		    	var chartOptions = {
		    		segmentShowStroke: false,
		    		percentageInnerCutout: 60   		
		    	}
				myChart.Doughnut(chartData, $.extend(settings.chartOptions, chartOptions));
			}
		});
	} 

	$.fn.newStatFromSheet = function(options) {

		var caller = this;

		var settings = $.extend({
			id: null, 
			sheet: null,
			valueRow: 1,
			label: null
		}, options); 

		var url = "https://spreadsheets.google.com/tq?key=" + settings.id + "&tqx=out:csv&callback=processData" + "&sheet=" + settings.sheet; 

		$.ajax({
	    	url: 'http://query.yahooapis.com/v1/public/yql', 
	    	dataType: "jsonp",
	    	data: { 
	            q: "select * from csv where url='" + url + "'",
	            format: 'json'
	  		},
	    	success: function(data) {
	    		var values = new Array();
	    		$.each(data.query.results.row, function(index, object) {
	    			values[index] = parseFloat(data.query.results.row[index].col1);
			    });
			   	caller.html(values[settings.valueRow-1].toFixed(2) + " " + settings.label);
			}
		});

	}

}(jQuery));
