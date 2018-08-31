$(document).ready(function (){
				//hide the components
				$('#para1').hide();
				$('#para2').hide();
				
				//show 
				$('#btn1').click(() => {
					$('#para1').show("5000").addClass('highlightcontent');
			});
				//hide
				$('#btn1').dblclick(() => {
					$('#para1').hide("5000");
			});
				//show
				$('#btn2').click(() => {
					$('#para2').show("5000").addClass('highlightcontent');
			});
				//hide
			$('#btn1').dblclick(() => {
					$('#para1').hide("5000");
			});	
	});