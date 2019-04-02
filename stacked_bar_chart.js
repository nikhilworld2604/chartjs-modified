var visualize=function(e, t, a, l) {
    var o=t.qInfo.qId+"_chartjs_stacked_bar",
    s=l.calculateMargin(e, t),
    i=s[0],
    n=s[1];
    e.html('<canvas id="'+o+'" width="'+i+'" height="'+n+'"></canvas>');
    var r=[];
    r="auto"==t.colors?l.defineColorPalette(t.color_selection): t.custom_colors.split("-");
    var c=t.qHyperCube.qDataPages[0].qMatrix,
    d=l.flattenData(c),
    u=d[0],
    b=d[1],
    m=d[2];
    t.sort&&b.sort();
    var h=_.groupBy(u, "dim1"),
    p=[];
    p.dim1=[],
    p.dim1_elem=[],
    p=l.initializeArrayWithZero(_.size(h), b, p),
    p=l.storeHypercubeDataToArray(h, p),
    t.cumulative&&(p=l.addCumulativeValuesOnTwoDimensions(b, p));
    for(var v=[], g=0;
    g<b.length;
    g++) {
        var y=[],
        f=g;
        "auto"==t.colors&&"twelve"==t.color_selection?f=g%12: "auto"==t.colors&&"one-handred"==t.color_selection?f=g%100: "custom"==t.colors&&(f=g%r.length), y.label=b[g], y.backgroundColor="rgba("+r[f]+","+t.opacity+")", y.data=p[b[g]], v.push(y)
		switch(y.label){
						case'ADD-ON':y.borderColor="rgb(255,0,0)";y.backgroundColor="rgb(255,0,0)"; 
					break;
					case'SWITCHED IN':y.borderColor="rgb(255,198,113)";y.backgroundColor="rgb(255,198,113)"; 
					break;
					case'FIRST LINE':y.borderColor="rgb(153,153,255)";y.backgroundColor="rgb(153,153,255)"; 
					break;
					case'RESTART':y.borderColor="rgb(0,128,0)";y.backgroundColor="rgb(0,128,0)"; 
					break;
					default:y.borderColor="rgba("+r[f]+","+t.opacity+")"
    }}
    var k= {
        labels: p.dim1, datasets: v
    }
    ,
    q=document.getElementById(o);
    new Chart(q, {
        type:"bar", data:k, options: {
            title: {
                display: t.title_switch, text: t.title
            }
            , legend: {
                display:"hide"!=t.legend_position, position:t.legend_position, onClick:function(e, t) {
                    var o=[], l=1;
                    m[t.text]<0||(o.push(m[t.text]), a.selectValues(l, o, !0))
                }
                , fullWidth: true, labels: {
                    boxWidth: 12, padding: 7, itemWrap: false, itemMaxWidth: 150, fontSize: 13
                }
            }
            , tooltips: {
                mode: "label"
            }
            , responsive:!0, scales: {
                xAxes:[ {
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
					ticks: {
                fontSize: 12
            }
                }
                ], yAxes:[ {
                    stacked:!0, scaleLabel: {
                        display: t.datalabel_switch, labelString: t.qHyperCube.qMeasureInfo[0].qFallbackTitle
                    }
                    , ticks: {
                        beginAtZero:!0, callback:function(e, a, o) {
                            return l.formatMeasure(e, t, 0)
                        }
                    }
                }
                ]
            }
            , tooltips: {
    callbacks: {
        label: function(e, a) {
           return a.datasets[e.datasetIndex].label+": "+l.formatMeasure(e.yLabel, t, 0);
        }
    }
}
            , events:["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"], onClick:function(e) {
                var t=this.getElementsAtEvent(e);
                t.length>0&&l.makeSelectionsOnDataPoints(p.dim1_elem[t[0]._index], a)
            }
        }
    }
    )
}

;