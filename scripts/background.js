chrome.runtime.onInstalled.addListener(function(){
	var context = "selection";
	var title = "Highlight selected text";
	var id = chrome.contextMenus.create({"title": title, "contexts": [context], "id": "context" + context});
	});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
	var sText = info.selectionText;
	window.open(sText, "_blank");
};
