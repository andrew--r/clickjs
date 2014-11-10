;(function(){
  "use strict";

  var Click;

  Click = (function(){
    var links, currentLink;

    function Click() {
      links = document.links;

      for (var i = links.length - 1; i >= 0; i--) {
        currentLink = links[i];

        currentLink.onclick = function(e) {
          e.preventDefault();
          console.log('click');
          window.location.href = this.href;
        }
      };
    }

    return Click;
  })();


	Click();
}).call(this);