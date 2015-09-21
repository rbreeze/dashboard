function convertToChartData(color, name, labels, data) {
   	switch(color) {
   		case "red": 
       		return chartData = {
       			labels: labels,
		        datasets: [{
		        	label: name,
            		fillColor : "rgba(234,120,123,0.4)",
            		strokeColor : "rgba(175,0,3,1.0)",
            		pointColor : "#fff",
            		pointStrokeColor : "rgba(139,0,5,1.0)",
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
            		strokeColor : "rgba(182,71,4,1.0)",
            		pointColor : "#fff",
            		pointStrokeColor : "rgba(182,71,4,1.0)",
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
            		strokeColor : "rgba(19,145,12,1.0)",
            		pointColor : "#fff",
            		pointStrokeColor : "rgba(19,145,12,1.0)",
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
            		strokeColor : "rgba(7,66,146,1.0)",
            		pointColor : "#fff",
            		pointStrokeColor : "rgba(7,66,146,1.0)",
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
            		strokeColor : "rgba(175,0,3,1.0)",
            		pointColor : "#fff",
            		pointStrokeColor : "rgba(139,0,5,1.0)",
        			data: data
        		}]
    		}
    		break;
   	}
}