function getDimensionsObject(margin) {
    var height = window.innerHeight;
    var width = window.innerWidth;
    height -= margin;
    width -= margin;
    var limit = Math.min(width, height);
    return { height: height, width: width, limit: limit };
}

function handleClick() {
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "ios-chart-action:#iOS#" ); // + something 
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;    
}

function wtfSecond() {
    console.log("Cranberries");
}

function makePieChart(dataArray, legendArray) {
    console.log("Started");

    var margin = 5;
    
    var size = getDimensionsObject(margin);

    var raphael = Raphael(0 + margin, 0 + margin, size.width, size.height); //Full screen - landscape
    var offset = 20;
    console.log("Data: " + dataArray);
    console.log("Legend: " + legendArray);
    var pie = raphael.g.piechart(size.width/2, size.height/2, (size.limit - offset)/2, dataArray, {legend: legendArray, legendpos: "west"}); // Put the graph in the center
    
    pie.click( function(f) {
        handleClick();
    });
    
    /*pie.hover(function () {
          this.sector.stop();
          this.sector.scale(1.1, 1.1, this.cx, this.cy);
          if (this.label) {
              this.label[0].stop();
              this.label[0].scale(1.5);
              this.label[1].attr({"font-weight": 800});
          } 
      }, function () {
      this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
      if (this.label) {
      this.label[0].animate({scale: 1}, 500, "bounce");
      this.label[1].attr({"font-weight": 400});
      }
      });*/
}

function makeLineChart(xArray, yArray, legendArray) {
    console.log("Started");
    
    var margin = 5;
    
    var size = getDimensionsObject(margin);
    
    var raphael = Raphael(0 + margin, 0 + margin, size.width, size.height); //Full screen - landscape
                                                                            //var offset = 20;
    console.log("Data X: " + xArray + " Y: " + yArray);
    console.log("Legend: " + legendArray);
    var linechart = raphael.g.linechart(0 + margin, 0 + margin, size.width, size.height, xArray, yArray, {legend: legendArray, legendpos: "west"}); // Put the graph in the center
    
    linechart.click( function(f) {
              handleClick();
              });

}

jQuery(function(){
   document.ontouchmove = function(e){ e.preventDefault(); }
});