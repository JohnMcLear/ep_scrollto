exports.postAceInit = function(hook, context){
  var lineNumber = getUrlVars()['lineNumber'];
  if(lineNumber){
    var count = 1;
    $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").contents().each(function(){
      if(count == lineNumber){
        var Y = $(this).context.offsetTop;
console.log(Y);
        outerWin.scrollTo(0,Y);
        // console.log("scroll to", $(this).context.offsetTop);
        return false;
      }
      count++;
    });
  }
};


function getUrlVars(){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}


function getElementByIdInFrames(id, base) {
  var el;
  if(el = base.document.getElementById(id)) {
    return el;
  }
 
  for(var i = 0, len = base.frames.length; i < len; i++) {
    if(el = getElementByIdInFrames(id, base.frames[i])) {
      return el;
    }
  }
}
