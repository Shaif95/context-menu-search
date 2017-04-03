chrome.contextMenus.create({
  id: "quora",
  title: "Search on Quora",
  contexts: ["selection"],

});
chrome.contextMenus.create({
  id: "fb",
  title: "Search on Facebook",
  contexts: ["selection"],

});
chrome.contextMenus.create({
  id: "youtube",
  title: "Search on Youtube",
  contexts: ["selection"],

});
chrome.contextMenus.create({
  id: "link",
  title: "Search on LinkedIn",
  contexts: ["selection"],

});
chrome.contextMenus.create({
  id: "twitter",
  title: "Search on Twitter",
  contexts: ["selection"],

});

var data;

function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function handleMessage(request, sender, sendResponse) {
  data = request.greeting;
  console.log("Message from the content script: " +data);
  sendResponse({response: "Response from background script"});
}

browser.runtime.onMessage.addListener(handleMessage);


 browser.contextMenus.onClicked.addListener((info,tab) => { 

switch (info.menuItemId) {
    case "quora":
      var creating = browser.tabs.create({
    
     url: "https://www.quora.com/search?q="+data
  });
      break;
    case "fb":
      var creating = browser.tabs.create({
    
     url: "https://www.facebook.com/search/top/?q="+data
  });
      break;
    case "link":
     var creating = browser.tabs.create({
    
     url: "https://www.linkedin.com/search/results/index/?keywords="+data
  });
      break;
    case "twitter":
      var creating = browser.tabs.create({
    
     url: "https://twitter.com/search?q="+data
  });
      break;
    case "youtube":
      var creating = browser.tabs.create({
    
     url: "https://www.youtube.com/results?search_query="+data
  });
      break;
  }

 creating.then(onCreated, onError);
    
});




