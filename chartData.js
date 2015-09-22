function convertToLineData(color, name, labels, data, night) {
	if(!night)
		night == false;
	var redStroke = "rgba(175,0,3,1.0)";
	var orangeStroke = "rgba(182,71,4,1.0)";
	var greenStroke = "rgba(19,145,12,1.0)";
	var blueStroke = "rgba(7,66,146,1.0)";
	var purpleStroke = "rgba(54,0,127,1.0)";
	//Night Mode (in progress)
	if (night == true) {
		redStroke = "rgba(252,0,10,1.0)";
		orangeStroke = "rgba(252,74,7,1.0)";
		greenStroke = "rgba(30,214,4,1.0)";
		blueStroke = "rgba(8,82,226,1.0)";
		purpleStroke = "rgba(114,0,226,1.0)";
	}
   	switch(color) {
   		case "red": 
       		return chartData = {
       			labels: labels,
		        datasets: [{
		        	label: name,
            		fillColor : "rgba(234,120,123,0.4)",
            		strokeColor : redStroke,
            		pointColor : "#fff",
            		pointStrokeColor : redStroke,
        			data: data
        		}]
    		}
    		break;
    	case "orange": 
       		return chartData = {
		        labels: labels,
				datasets: [{
		        	label: name,
            		fillColor : "rgba(228,136,76,0.4)",
            		strokeColor : orangeStroke,
            		pointColor : "#fff",
            		pointStrokeColor : orangeStroke,
        			data: data
        		}]				    		
        	}
        	break;
    	case "green": 
       		return chartData = {
		        labels: labels,
				datasets: [{
		        	label: name,
            		fillColor : "rgba(105,235,124,0.4)",
            		strokeColor : greenStroke,
            		pointColor : "#fff",
            		pointStrokeColor : greenStroke,
        			data: data
        		}]				    		
        	}
        	break;
    	case "blue": 
       		return chartData = {
		        labels: labels,
				datasets: [{
		        	label: name,
            		fillColor : "rgba(70,127,230,0.4)",
            		strokeColor : blueStroke,
            		pointColor : "#fff",
            		pointStrokeColor : blueStroke,
        			data: data
        		}]				    		
        	}
        	break;
    	case "purple": 
       		return chartData = {
		        labels: labels,
				datasets: [{
		        	label: name,
            		fillColor : "rgba(149,34,223,0.4)",
            		strokeColor : purpleStroke,
            		pointColor : "#fff",
            		pointStrokeColor : purpleStroke,
        			data: data
        		}]				    		
        	}
        	break;
        default: 
        	return chartData = {
		        labels: labels,
		        datasets: [{
		        	label: name,
            		fillColor : "rgba(234,120,123,0.4)",
            		strokeColor : redStroke,
            		pointColor : "#fff",
            		pointStrokeColor : redStroke,
        			data: data
        		}]
    		}
    		break;
   	}
}

function convertToDoughnutData(value1, value2, value3, name1, name2, name3) {
	return data = [
	    {
	        value: value1,
	        color:"rgba(105,235,124,1)",
	        label: name1
	    },
	    {
	        value: value2,
	        color: "rgba(70,127,230,1)",
	        label: name2
	    },
	    {
	        value: value3,
	        color: "rgba(234,120,123,1)",
	        label: name3
	    }
	]
}