var visualize=function(e, t, a, o) {
    var l=t.qInfo.qId+"_chartjs_stacked_bar",
    i=o.calculateMargin(e, t),
    s=i[0],
    n=i[1];
    e.html('<canvas id="'+l+'" width="'+s+'" height="'+n+'"></canvas>');
    var r=[];
    r="auto"==t.colors?o.defineColorPalette(t.color_selection): t.custom_colors.split("-");
    var c=t.qHyperCube.qDataPages[0].qMatrix,
    u=o.flattenData(c),
    d=u[0],
    b=u[1],
    m=u[2];
    t.sort&&b.sort();
    var p=_.groupBy(d, "dim1"),
    h=[];
    h.dim1=[],
    h.dim1_elem=[],
    h=o.initializeArrayWithZero(_.size(p), b, h),
    h=o.storeHypercubeDataToArray(p, h),
    t.cumulative&&(h=o.addCumulativeValuesOnTwoDimensions(b, h));
    for(var v=[], g=0;
    g<b.length;
    g++) {
        var y=[],
        f=g;
	"auto"==t.colors&&"twelve"==t.color_selection?f=g%12: "auto"==t.colors&&"one-handred"==t.color_selection?f=g%100: "custom"==t.colors&&(f=g%r.length), y.label=b[g], y.backgroundColor="rgba("+r[f]+","+t.opacity+")", y.data=h[b[g]], y.fill=t.background_color_switch, y.borderColor="rgba("+r[f]+","+t.opacity+")", y.pointRadius=t.point_radius_size, v.push(y)
    switch(y.label){
						case'ADENOCARD':y.borderColor="rgb(255,0,0)";y.backgroundColor="rgb(255,0,0)"; 
					break;
					case'ADENOSCAN':y.borderColor="rgb(255,198,113)";y.backgroundColor="rgb(255,198,113)"; 
					break;
					case'ADVAGRAF':y.borderColor="rgb(153,153,255)";y.backgroundColor="rgb(153,153,255)"; 
					break;
					case'AMBISOME':y.borderColor="rgb(0,128,0)";y.backgroundColor="rgb(0,128,0)"; 
					break;
					case'ANTI-INFECTIVE COMP':y.borderColor="rgb(210,134,234)";y.backgroundColor="rgb(210,134,234)"; 
					break;
					case'AMEVIVE':y.borderColor="rgb(194,180,230)";y.backgroundColor="rgb(194,180,230)"; 
					break;
					case'ANANDRON':y.borderColor="rgb(128,128,0)";y.backgroundColor="rgb(128,128,0)"; 
					break;
					case'AZATHIOPRINE':y.borderColor="rgb(244,238,0)";y.backgroundColor="rgb(244,238,0)"; 
					break;
					case'BICALUTAMIDE':y.borderColor="rgb(143,162,138)";y.backgroundColor="rgb(143,162,138)"; 
					break;
					case'CASODEX':y.borderColor="rgb(132,188,213)";y.backgroundColor="rgb(132,188,213)"; 
					break;
					case'CYCLOSPORINE':y.borderColor="rgb(135,229,204)";y.backgroundColor="rgb(135,229,204)"; 
					break;
					case'DETROL':y.borderColor="rgb(155,188,255)";y.backgroundColor="rgb(155,188,255)"; 
					break;
					case'DETROL LA':y.borderColor="rgb(0,112,192)";y.backgroundColor="rgb(0,112,192)"; 
					break;
					case'ENABLEX':y.borderColor="rgb(168,143,94)";y.backgroundColor="rgb(168,143,94)"; 
					break;
					case'FLUTAMIDE':y.borderColor="rgb(0,204,153)";y.backgroundColor="rgb(0,204,153)"; 
					break;
					case'GEN-OXYBUTYNIN':y.borderColor="rgb(148,148,148)";y.backgroundColor="rgb(148,148,148)"; 
					break;
					case'OTHER OXYBUTYNIN':y.borderColor="rgb(148,148,148)";y.backgroundColor="rgb(148,148,148)"; 
					break;
					case'LEXISCAN':y.borderColor="rgb(255,255,0)";y.backgroundColor="rgb(255,255,0)"; 
					break;
					case'MYCAMINE':y.borderColor="rgb(0,0,255)";y.backgroundColor="rgb(0,0,255)"; 
					break;
					case'MYRBETRIQ':y.borderColor="rgb(255,192,0)";y.backgroundColor="rgb(255,192,0)"; 
					break;
					case'MYCOPHENOLATE':y.borderColor="rgb(14,240,100)";y.backgroundColor="rgb(14,240,100)"; 
					break;
					case'MYFORTIC':y.borderColor="rgb(230,90,34)";y.backgroundColor="rgb(230,90,34)"; 
					break;
					case'OTHER':y.borderColor="rgb(217,217,217)";y.backgroundColor="rgb(217,217,217)"; 
					break;
					case'OXYBUTYNIN':y.borderColor="rgb(255,153,0)";y.backgroundColor="rgb(255,153,0)"; 
					break;
					case'PROGRAF':y.borderColor="rgb(51,153,102)";y.backgroundColor="rgb(51,153,102)"; 
					break;
					case'PROTOPIC':y.borderColor="rgb(0,255,255)";y.backgroundColor="rgb(0,255,255)"; 
					break;
					case'RAPAMUNE':y.borderColor="rgb(0,112,192)";y.backgroundColor="rgb(0,112,192)"; 
					break;
					case'TACROLIMUS':y.borderColor="rgb(185,169,71)";y.backgroundColor="rgb(185,169,71)"; 
					break;
					case'TACROLIMUS GENERIC':y.borderColor="rgb(186,2,147)";y.backgroundColor="rgb(186,2,147)"; 
					break;
					case'TOVIAZ':y.borderColor="rgb(0,128,0)";y.backgroundColor="rgb(0,128,0)"; 
					break;
					case'VESICARE':y.borderColor="rgb(255,51,204)";y.backgroundColor="rgb(255,51,204)"; 
					break;
					case'XTANDI':y.borderColor="rgb(254,10,48)";y.backgroundColor="rgb(254,10,48)"; 
					break;
					case'ZYTIGA':y.borderColor="rgb(0,176,80)";y.backgroundColor="rgb(0,176,80)"; 
					break;
					case'GEN-ALFUZOSIN':y.borderColor="rgb(204,0,102)";y.backgroundColor="rgb(204,0,102)"; 
					break;
					case'GEN-TAMSULOSIN':y.borderColor="rgb(102,204,255)";y.backgroundColor="rgb(102,204,255)"; 
					break;
					case'GEN-DUTASTERIDE':y.borderColor="rgb(210,134,234)";y.backgroundColor="rgb(210,134,234)"; 
					break;
					case'GEN - TAMSULOSIN CR':y.borderColor="rgb(51,153,102)";y.backgroundColor="rgb(51,153,102)"; 
					break;
					case'GEN-FINASTERIDE':y.borderColor="rgb(0,204,153)";y.backgroundColor="rgb(0,204,153)"; 
					break;
					case'AVODART':y.borderColor="rgb(128,100,162)";y.backgroundColor="rgb(128,100,162)"; 
					break;
					case'FLOMAX':y.borderColor="rgb(255,255,0)";y.backgroundColor="rgb(255,255,0)"; 
					break;
					case'FLOMAX CR':y.borderColor="rgb(255,174,93)";y.backgroundColor="rgb(255,174,93)"; 
					break;
					case'PROSCAR':y.borderColor="rgb(51,204,51)";y.backgroundColor="rgb(51,204,51)"; 
					break;
					case'RAPAFLO':y.borderColor="rgb(148,148,148)";y.backgroundColor="rgb(148,148,148)"; 
					break;
					case'XATRAL':y.borderColor="rgb(230,90,34)";y.backgroundColor="rgb(230,90,34)"; 
					break;
					case'GEN-SOLIFENACIN':y.borderColor="rgb(254,10,48)";y.backgroundColor="rgb(254,10,48)"; 
					break;
					case'TOTAL SOLIFENACIN':y.borderColor="rgb(254,10,48)";y.backgroundColor="rgb(254,10,48)"; 
					break;
					case'GEN-TOLTERODINE':y.borderColor="rgb(109,68,134)";y.backgroundColor="rgb(109,68,134)"; 
					break;
					case'TOTAL TOLTERODINE':y.borderColor="rgb(109,68,134)";y.backgroundColor="rgb(109,68,134)"; 
					break;
					case'CANESORAL':y.borderColor="rgb(255,174,93)";y.backgroundColor="rgb(255,174,93)"; 
					break;
					case'DIFLUCAN ONE':y.borderColor="rgb(0,204,255)";y.backgroundColor="rgb(0,204,255)"; 
					break;
					case'GEN-FLUCONAZOLE':y.borderColor="rgb(255,255,0)";y.backgroundColor="rgb(255,255,0)"; 
					break;
					case'GEN-TERBINAFINE':y.borderColor="rgb(177,160,199)";y.backgroundColor="rgb(177,160,199)"; 
					break;
					case'RATIO-NYSTATIN':y.borderColor="rgb(51,204,51)";y.backgroundColor="rgb(51,204,51)"; 
					break;
					case'GAZYVA':y.borderColor="rgb(186,2,147)";y.backgroundColor="rgb(186,2,147)"; 
					break;
					case'LETROZOLE':y.borderColor="rgb(0,255,255)";y.backgroundColor="rgb(0,255,255)"; 
					break;
					case'TRELSTAR LA':y.borderColor="rgb(0,112,192)";y.backgroundColor="rgb(0,112,192)"; 
					break;
					case'TRELSTAR':y.borderColor="rgb(185,169,71)";y.backgroundColor="rgb(185,169,71)"; 
					break;
					case'OAB MARKET':y.borderColor="rgb(0,128,0)";y.backgroundColor="rgb(0,128,0)"; 
					break;
					case'FUNGIZONE':y.borderColor="rgb(0,204,255)";y.backgroundColor="rgb(0,204,255)"; 
					break;
					case'VFEND':y.borderColor="rgb(51,204,51)";y.backgroundColor="rgb(51,204,51)"; 
					break;
					case'GEN-VORICONAZOLE':y.borderColor="rgb(210,134,234)";y.backgroundColor="rgb(210,134,234)"; 
					break;
					case'POSANOL':y.borderColor="rgb(204,0,102)";y.backgroundColor="rgb(204,0,102)"; 
					break;
					case'CANCIDAS':y.borderColor="rgb(255,255,0)";y.backgroundColor="rgb(255,255,0)"; 
					break;
					case'ERAXIS':y.borderColor="rgb(255,174,93)";y.backgroundColor="rgb(255,174,93)"; 
					break;
					case'ABELCET':y.borderColor="rgb(0,112,192)";y.backgroundColor="rgb(0,112,192)"; 
					break;
					case'TTL_TOLTERODINE':y.borderColor="rgb(109,68,134)";y.backgroundColor="rgb(109,68,134)"; 
					break;
					case'TTL_SOLIFENACIN':y.borderColor="rgb(254,10,48)";y.backgroundColor="rgb(254,10,48)"; 
					break;
					case'MICTORYL':y.borderColor="rgb(237,187,171)";y.backgroundColor="rgb(237,187,171)"; 
					break;
					case'ERLEADA':y.borderColor="rgb(70,34,99)";y.backgroundColor="rgb(70,34,99)"; 
					break;

					default:y.borderColor="rgba("+r[f]+","+t.opacity+")"
}}
    var k= {
        labels: h.dim1, datasets: v
    }
    ,
    q=document.getElementById(l);
    new Chart(q, {
        type:"line", data:k, options: {
			animation: false,
            title: {
                display: t.title_switch, text: t.title
            }
            , elements: {
                line: {
                    tension: 0
                }
            }
            , legend: {
                display:"hide"!=t.legend_position, position:t.legend_position, onClick:function(e, t) {
                    var o=[], l=1;
                    m[t.text]<0||(o.push(m[t.text]), a.selectValues(l, o, !0))
                }
                , fullWidth: true, labels: {
                    boxWidth: 6, padding: 7, itemWrap: false, itemMaxWidth: 150, fontSize: 8
                }
            }
            , legendCallback: function(chart) {
                // Return the HTML string here.
            }
            , scales: {
                xAxes:[ {
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
					ticks: {
                fontSize: 12
            }
                }
                ], yAxes:[ {
                    scaleLabel: {
                        display: t.datalabel_switch, labelString: t.qHyperCube.qMeasureInfo[0].qFallbackTitle
                    }
                    , ticks: {
						fontSize: 12,
                        beginAtZero:!0, callback:function(e, a, l) {
                            return o.formatMeasure(e, t, 0)
                        }
                    }
                }
                ]
            }
            , tooltips: {
                callbacks: {
                    label:function(e, a) {
                        return a.datasets[e.datasetIndex].label+": "+o.formatMeasure(e.yLabel, t, 0)
                    }
                    , labelTextColor:function(tooltipItem, chart) {
                        {
                            return a.datasets[e.datasetIndex].label+": "+o.formatMeasure(e.yLabel, t, 0)
                        }
                    }
                }
            }
            , responsive:!0, events:["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"], onClick:function(e) {
                var t=this.getElementsAtEvent(e);
                t.length>0&&o.makeSelectionsOnDataPoints(h.dim1_elem[t[0]._index], a)
            }
        }
    }
    )
}

;