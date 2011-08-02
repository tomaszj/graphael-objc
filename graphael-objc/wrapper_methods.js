function makePieChart(dataArray, legendArray) {
    console.log("Started");

    var margin = 5;
    
    var height = window.innerHeight;
    var width = window.innerWidth
    height -= margin
    width -= margin

    var raphael = Raphael(0 + margin, 0 + margin, width, height); //Full screen - landscape
    var offset = 20;
    var limit = Math.min(width, height);
    console.log("Data: " + dataArray);
    console.log("Legend: " + legendArray);
    var pie = raphael.g.piechart(width/2, height/2, (limit - offset)/2, dataArray, {legend: legendArray, legendpos: "west"}); // Put the graph in the center
    
    pie.click(function(f) {
        handleClick();
        console.log("Clicked!");     
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

jQuery(function(){
   document.ontouchmove = function(e){ e.preventDefault(); }
});