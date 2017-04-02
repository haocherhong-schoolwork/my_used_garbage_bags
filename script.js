window.onload = function() {
	var targetElements = document.getElementsByClassName('3d-bag');
	var targets = [];
	for(var i = 0; i < targetElements.length; i++) {
		var element = targetElements[i];
		targets.push({
			element: element,
			factor: 18,
			top: element.getBoundingClientRect().top
		});
	};
	targetElements = document.getElementsByClassName('texts');
	for(var i = 0; i < targetElements.length; i++) {
		var element = targetElements[i];
		targets.push({
			element: element,
			factor: 30,
			top: element.getBoundingClientRect().top
		});
	};
	window.onscroll = function() {
		var scrollTop = document.body.scrollTop;

		for(var i = 0; i < targets.length; i++) {
			var target = targets[i];
			target.element.style.transform = 'translateY(' + ((target.top - scrollTop) / target.factor) + 'px)';
			target.element.style.opacity = 1.1 - ((target.top - scrollTop) / window.innerHeight);
		}
	}
}