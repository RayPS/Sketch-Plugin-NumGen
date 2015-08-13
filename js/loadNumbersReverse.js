var loadText = function(){
	for (var i = 0, l = [selection count]; i < l; i++) {
		var layer = selection[i];
        var number = l - i + ""
		[layer setStringValue: number];
		[layer setName: number];
		[layer adjustFrameToFit];	
	}
	tools.checkPluginUpdate();
};