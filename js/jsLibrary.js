
String.prototype.format = function () {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function (capture) { return args[capture.match(/\d+/)]; });
};

var qs = (function(a) {

	if (a == "") return {};
	var b = {};
	
	for (var i = 0; i < a.length; ++i)
	{
		var p=a[i].split('=');
		if (p.length != 2) continue;
		b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}

	return b;
})(window.location.search.substr(1).split('&'));