/* Created by Martin Hintzmann 2008 martin [a] hintzmann.dk
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 *
 * Version: 0.2
 * Requires: jQuery 1.2+
 * http://plugins.jquery.com/project/textshadow
 *
 */
(function(a){a.fn.textShadow=function(c){if(!a.browser.msie){return}var b=a.browser.version<7;return this.each(function(){var e=a(this);var f=e.textShadowParse(this.currentStyle["text-shadow"]);f=a.extend(f,c);e.textShadowRemove();if(f.x==0&&f.y==0&&f.radius==0){return}if(e.css("position")=="static"){e.css({position:"relative"})}e.css({zIndex:"0"});if(b){e.css({zoom:"1"})}var d=document.createElement("span");a(d).addClass("jQueryTextShadow");a(d).html(e.html());a(d).css({padding:this.currentStyle.padding,width:e.width(),position:"absolute",zIndex:"-1",color:f.color!=null?f.color:e.css("color"),left:(-parseInt(f.radius)+parseInt(f.x))+"px",top:(-parseInt(f.radius)+parseInt(f.y))+"px"});if(f.radius!=0){if(f.opacity!=null){a(d).css("filter","progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(f.radius)+", enabled='true', makeShadow='true', ShadowOpacity="+f.opacity+")")}else{a(d).css("filter","progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(f.radius)+", enabled='true')")}}e.append(d)})};a.fn.textShadowParse=function(c){c=String(c).replace(/^\s+|\s+$/gi,"").replace(/\s*!\s*important/i,"").replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g,"($1/$2/$3/$4)").replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g,"($1/$2/$3)");var d={x:0,y:0,radius:0,color:null};if(c.length>1||c[0].toLowerCase()!="none"){c=c.replace(/\//g,",");var b;if(c.match(/(\#[0-9a-f]{6}|\#[0-9a-f]{3}|(rgb|hsb)a?\([^\)]*\)|\b[a-z]+\b)/i)&&(b=RegExp.$1)){d.color=b.replace(/^\s+/,"");c=c.replace(d.color,"")}c=c.replace(/^\s+|\s+$/g,"").split(/\s+/).map(function(e){return(e||"").replace(/^0[a-z]*$/,"")?e:0});switch(c.length){case 1:d.x=d.y=c[0];break;case 2:d.x=c[0];d.y=c[1];break;case 3:d.x=c[0];d.y=c[1];d.radius=c[2];break}if((!d.x&&!d.y&&!d.radius)||d.color=="transparent"){d.x=d.y=d.radius=0;d.color=null}}return d};a.fn.textShadowRemove=function(){if(!a.browser.msie){return}return this.each(function(){a(this).children("span.jQueryTextShadow").remove()})}})(jQuery);if(typeof Array.prototype.map=="undefined"){Array.prototype.map=function(d){var b=new Array(this.length);for(var c=0;c<this.length;c++){b[c]=d(this[c])}return b}};
// END textShadow
/*
 * jOrbital - jQuery Plugin
 * Round menu
 *
 * Documentation included in package bought on CodeCanyon
 * 
 * Copyright (c) 2010 Rezoner Sikorski
 * http://rezoner.net
 *
 * Version: 1.0.32 (18/07/2010)
 * Requires: jQuery v1.42+
 *
 * licenced under envato marketplace licence
 * http://codecanyon.net/wiki/support/legal-terms/licensing-terms/
 *  
 */
 (function(f){var c={disableIE6:true,disableIE7:true};var e={selector:".orbit",radius:2,inDuration:400,outDuration:400,mousePropagation:true};function b(m){f("body").append("<p>"+m+"</p>")}function g(m){return m.constructor==Array}function k(m){return Math.sqrt((m.x*m.x)+(m.y*m.y))}function j(m){var n={x:0,y:1};var o=l(n,m);if(m.x>=0){o=Math.PI-o}if(m.x<0){o=Math.PI+o}return o}function l(n,m){var o=(n.x*m.x+n.y*m.y)/(k(n)*k(m));if((o>1)||(o<-1)){o=0}angle=Math.acos(o);return angle}function a(p,r,o,q){var n=p-o;var m=r-q;return Math.sqrt(n*n+m*m)}function h(n){var m=0;n.each(function(q,p){$planet=f(p);var r=$planet.outerWidth();var o=$planet.outerHeight();if(r>m){m=r}if(o>m){m=o}});return m}function d(n,o){if(f.fx.off){return false}var p=f.extend({},e,o);if(p.inDuration==0){p.inDuration=1}if(!n.parent().hasClass("orbit")){n.css({position:"relative"})}else{n.css({position:"absolute"})}p.planets=n.children(p.selector).children().size();n.children(p.selector).show().children().show();p.r=h(n.children(p.selector).children())*p.radius;if(p.r==0){p.r=h(n)}var m=parseInt(n.parent().parent().css("z-index"));if(m){var r=m-1}else{var r=0}r=0;if(!f.browser.msie){n.children(p.selector).hide().css({"z-index":5,position:"absolute",left:-p.r+n.outerWidth()/2,top:-p.r+n.outerHeight()/2,width:p.r*2,height:p.r*2})}else{n.children(p.selector).hide().css({position:"absolute",left:-p.r+n.outerWidth()/2,top:-p.r+n.outerHeight()/2,width:p.r*2,height:p.r*2})}p.circleRange=[0,Math.PI*2];p.step=(p.circleRange[1]-p.circleRange[0])/p.planets;n.addClass("jOrbital");n.children(p.selector).children().each(function(t,s){var u=f(s);u.stop().css({left:p.r+Math.cos(-Math.PI/2+p.step*t)*(p.r*0.5)-u.outerWidth()/2,top:p.r+Math.sin(-Math.PI/2+p.step*t)*(p.r*0.5)-u.outerHeight()/2,position:"absolute"})});var q=n.offset();n.mouseenter(function(){$this=f(this);var w=$this.data("jOrbital");if(w.mousePropagation){if($this.hasClass("animated")){return false}}var z=$this.offset();var v=n.outerWidth();$this.find("jOrbital").hide();$this.parent().children().css({"z-index":1});if(w.r==0){$this.children(w.selector).show();w.r=h($this.children(w.selector).children())*w.radius;$this.children(w.selector).hide()}if($this.parent().parent().hasClass("jOrbital")){var x=$this.parent().parent();var t=$this.offset();var s=$this.parent().parent().offset();t.left+=$this.outerWidth()/2;s.left+=x.outerWidth()/2;t.top+=$this.outerHeight()/2;s.top+=x.outerHeight()/2;var y=j({x:s.left-t.left,y:s.top-t.top})+Math.PI/2+0.25;w.circleRange=[y,y+Math.PI];w.step=(w.circleRange[1]-w.circleRange[0])/w.planets}$this.children(w.selector).css({opacity:1}).fadeIn(w.inDuration,function(){f(this).children().addClass("animated").each(function(B,A){var C=f(A);C.animate({left:w.r+Math.cos(-Math.PI/2+w.step*B+w.circleRange[0])*w.r-C.outerWidth()/2,top:w.r+Math.sin(-Math.PI/2+w.step*B+w.circleRange[0])*w.r-C.outerHeight()/2},{complete:function(){f(this).removeClass("animated")},duration:w.inDuration,queue:true})})});var u=(Math.PI*2)/$this.children(w.selector).children().size();$this.parent().children().css({"z-index":2});$this.css({"z-index":1});$this.children(w.selector).children().each(function(B,A){var C=f(A);C.stop().css({left:w.r+Math.cos(-Math.PI/2+u*B)*(w.r*0.5)-C.outerWidth()/2,top:w.r+Math.sin(-Math.PI/2+u*B)*(w.r*0.5)-C.outerHeight()/2,position:"absolute"})})});n.mouseleave(function(){f(this).children(p.selector).fadeOut(p.outDuration);var s=f(this).outerWidth();step=(Math.PI*2)/f(this).children(p.selector).children().size();f(this).children(p.selector).children().each(function(u,t){var v=f(t);v.animate({left:p.r-f(this).outerWidth()/2,top:p.r-f(this).outerHeight()/2},{complete:function(){f(this).find("jOrbital").hide()},duration:p.outDuration,queue:true})})});n.data("jOrbital",p)}f.jOrbital=function(n,m){switch(n){case"config":c=f.extend({},c,m);break;case"defaults":e=f.extend({},e,m);break}};f.fn.jOrbital=function(n,m){if(c.disableIE6&&f.browser.msie&&parseInt(f.browser.version)<=6){return this}if(c.disableIE7&&f.browser.msie&&parseInt(f.browser.version)<=7){return this}if(n==undefined){var n={}}if(g(n)){for(i in n){this.each(function(q,p){d(f(p),n[i])})}return this}else{if(typeof n=="object"){return this.each(function(p,q){d(f(q),n)})}else{if(typeof m!="object"){m={}}m.type=n;return this.each(function(p,q){d(f(q),m)})}}}})(jQuery);
// END jOrbital
/*
 * Poshy Tip jQuery plugin v1.1
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2011, Vasil Dinkov, http://vadikom.com/
 */
(function(e){var a=[],d=/^url\(["']?([^"'\)]*)["']?\);?$/i,c=/\.png$/i,b=e.browser.msie&&e.browser.version==6;function f(){e.each(a,function(){this.refresh(true)})}e(window).resize(f);e.Poshytip=function(h,g){this.$elm=e(h);this.opts=e.extend({},e.fn.poshytip.defaults,g);this.$tip=e(['<div class="',this.opts.className,'">','<div class="tip-inner tip-bg-image"></div>','<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>',"</div>"].join("")).appendTo(document.body);this.$arrow=this.$tip.find("div.tip-arrow");this.$inner=this.$tip.find("div.tip-inner");this.disabled=false;this.content=null;this.init()};e.Poshytip.prototype={init:function(){a.push(this);var g=this.$elm.attr("title");this.$elm.data("title.poshytip",g!==undefined?g:null).data("poshytip",this);if(this.opts.showOn!="none"){this.$elm.bind({"mouseenter.poshytip":e.proxy(this.mouseenter,this),"mouseleave.poshytip":e.proxy(this.mouseleave,this)});switch(this.opts.showOn){case"hover":if(this.opts.alignTo=="cursor"){this.$elm.bind("mousemove.poshytip",e.proxy(this.mousemove,this))}if(this.opts.allowTipHover){this.$tip.hover(e.proxy(this.clearTimeouts,this),e.proxy(this.mouseleave,this))}break;case"focus":this.$elm.bind({"focus.poshytip":e.proxy(this.show,this),"blur.poshytip":e.proxy(this.hide,this)});break}}},mouseenter:function(g){if(this.disabled){return true}this.$elm.attr("title","");if(this.opts.showOn=="focus"){return true}this.clearTimeouts();this.showTimeout=setTimeout(e.proxy(this.show,this),this.opts.showTimeout)},mouseleave:function(g){if(this.disabled||this.asyncAnimating&&(this.$tip[0]===g.relatedTarget||jQuery.contains(this.$tip[0],g.relatedTarget))){return true}var h=this.$elm.data("title.poshytip");if(h!==null){this.$elm.attr("title",h)}if(this.opts.showOn=="focus"){return true}this.clearTimeouts();this.hideTimeout=setTimeout(e.proxy(this.hide,this),this.opts.hideTimeout)},mousemove:function(g){if(this.disabled){return true}this.eventX=g.pageX;this.eventY=g.pageY;if(this.opts.followCursor&&this.$tip.data("active")){this.calcPos();this.$tip.css({left:this.pos.l,top:this.pos.t});if(this.pos.arrow){this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow}}},show:function(){if(this.disabled||this.$tip.data("active")){return}this.reset();this.update();this.display();if(this.opts.timeOnScreen){setTimeout(e.proxy(this.hide,this),this.opts.timeOnScreen)}},hide:function(){if(this.disabled||!this.$tip.data("active")){return}this.display(true)},reset:function(){this.$tip.queue([]).detach().css("visibility","hidden").data("active",false);this.$inner.find("*").poshytip("hide");if(this.opts.fade){this.$tip.css("opacity",this.opacity)}this.$arrow[0].className="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left";this.asyncAnimating=false},update:function(j,k){if(this.disabled){return}var i=j!==undefined;if(i){if(!k){this.opts.content=j}if(!this.$tip.data("active")){return}}else{j=this.opts.content}var h=this,g=typeof j=="function"?j.call(this.$elm[0],function(l){h.update(l)}):j=="[title]"?this.$elm.data("title.poshytip"):j;if(this.content!==g){this.$inner.empty().append(g);this.content=g}this.refresh(i)},refresh:function(h){if(this.disabled){return}if(h){if(!this.$tip.data("active")){return}var k={left:this.$tip.css("left"),top:this.$tip.css("top")}}this.$tip.css({left:0,top:0}).appendTo(document.body);if(this.opacity===undefined){this.opacity=this.$tip.css("opacity")}var l=this.$tip.css("background-image").match(d),m=this.$arrow.css("background-image").match(d);if(l){var i=c.test(l[1]);if(b&&i){this.$tip.css("background-image","none");this.$inner.css({margin:0,border:0,padding:0});l=i=false}else{this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({border:0,padding:0,"background-image":"none","background-color":"transparent"}).find(".tip-bg-image").css("background-image",'url("'+l[1]+'")').end().find("td").eq(3).append(this.$inner)}if(i&&!e.support.opacity){this.opts.fade=false}}if(m&&!e.support.opacity){if(b&&c.test(m[1])){m=false;this.$arrow.css("background-image","none")}this.opts.fade=false}var o=this.$tip.find("table");if(b){this.$tip[0].style.width="";o.width("auto").find("td").eq(3).width("auto");var n=this.$tip.width(),j=parseInt(this.$tip.css("min-width")),g=parseInt(this.$tip.css("max-width"));if(!isNaN(j)&&n<j){n=j}else{if(!isNaN(g)&&n>g){n=g}}this.$tip.add(o).width(n).eq(0).find("td").eq(3).width("100%")}else{if(o[0]){o.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView&&document.defaultView.getComputedStyle&&parseFloat(document.defaultView.getComputedStyle(this.$tip[0],null).width)||this.$tip.width()).find("td").eq(3).width("100%")}}this.tipOuterW=this.$tip.outerWidth();this.tipOuterH=this.$tip.outerHeight();this.calcPos();if(m&&this.pos.arrow){this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow;this.$arrow.css("visibility","inherit")}if(h){this.asyncAnimating=true;var p=this;this.$tip.css(k).animate({left:this.pos.l,top:this.pos.t},200,function(){p.asyncAnimating=false})}else{this.$tip.css({left:this.pos.l,top:this.pos.t})}},display:function(h){var i=this.$tip.data("active");if(i&&!h||!i&&h){return}this.$tip.stop();if((this.opts.slide&&this.pos.arrow||this.opts.fade)&&(h&&this.opts.hideAniDuration||!h&&this.opts.showAniDuration)){var m={},l={};if(this.opts.slide&&this.pos.arrow){var k,g;if(this.pos.arrow=="bottom"||this.pos.arrow=="top"){k="top";g="bottom"}else{k="left";g="right"}var j=parseInt(this.$tip.css(k));m[k]=j+(h?0:(this.pos.arrow==g?-this.opts.slideOffset:this.opts.slideOffset));l[k]=j+(h?(this.pos.arrow==g?this.opts.slideOffset:-this.opts.slideOffset):0)+"px"}if(this.opts.fade){m.opacity=h?this.$tip.css("opacity"):0;l.opacity=h?0:this.opacity}this.$tip.css(m).animate(l,this.opts[h?"hideAniDuration":"showAniDuration"])}h?this.$tip.queue(e.proxy(this.reset,this)):this.$tip.css("visibility","inherit");this.$tip.data("active",!i)},disable:function(){this.reset();this.disabled=true},enable:function(){this.disabled=false},destroy:function(){this.reset();this.$tip.remove();delete this.$tip;this.content=null;this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip");a.splice(e.inArray(this,a),1)},clearTimeouts:function(){if(this.showTimeout){clearTimeout(this.showTimeout);this.showTimeout=0}if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}},calcPos:function(){var n={l:0,t:0,arrow:""},h=e(window),k={l:h.scrollLeft(),t:h.scrollTop(),w:h.width(),h:h.height()},p,j,m,i,q,g;if(this.opts.alignTo=="cursor"){p=j=m=this.eventX;i=q=g=this.eventY}else{var o=this.$elm.offset(),l={l:o.left,t:o.top,w:this.$elm.outerWidth(),h:this.$elm.outerHeight()};p=l.l+(this.opts.alignX!="inner-right"?0:l.w);j=p+Math.floor(l.w/2);m=p+(this.opts.alignX!="inner-left"?l.w:0);i=l.t+(this.opts.alignY!="inner-bottom"?0:l.h);q=i+Math.floor(l.h/2);g=i+(this.opts.alignY!="inner-top"?l.h:0)}switch(this.opts.alignX){case"right":case"inner-left":n.l=m+this.opts.offsetX;if(n.l+this.tipOuterW>k.l+k.w){n.l=k.l+k.w-this.tipOuterW}if(this.opts.alignX=="right"||this.opts.alignY=="center"){n.arrow="left"}break;case"center":n.l=j-Math.floor(this.tipOuterW/2);if(n.l+this.tipOuterW>k.l+k.w){n.l=k.l+k.w-this.tipOuterW}else{if(n.l<k.l){n.l=k.l}}break;default:n.l=p-this.tipOuterW-this.opts.offsetX;if(n.l<k.l){n.l=k.l}if(this.opts.alignX=="left"||this.opts.alignY=="center"){n.arrow="right"}}switch(this.opts.alignY){case"bottom":case"inner-top":n.t=g+this.opts.offsetY;if(!n.arrow||this.opts.alignTo=="cursor"){n.arrow="top"}if(n.t+this.tipOuterH>k.t+k.h){n.t=i-this.tipOuterH-this.opts.offsetY;if(n.arrow=="top"){n.arrow="bottom"}}break;case"center":n.t=q-Math.floor(this.tipOuterH/2);if(n.t+this.tipOuterH>k.t+k.h){n.t=k.t+k.h-this.tipOuterH}else{if(n.t<k.t){n.t=k.t}}break;default:n.t=i-this.tipOuterH-this.opts.offsetY;if(!n.arrow||this.opts.alignTo=="cursor"){n.arrow="bottom"}if(n.t<k.t){n.t=g+this.opts.offsetY;if(n.arrow=="bottom"){n.arrow="top"}}}this.pos=n}};e.fn.poshytip=function(h){if(typeof h=="string"){var g=arguments,k=h;Array.prototype.shift.call(g);if(k=="destroy"){this.die("mouseenter.poshytip").die("focus.poshytip")}return this.each(function(){var l=e(this).data("poshytip");if(l&&l[k]){l[k].apply(l,g)}})}var i=e.extend({},e.fn.poshytip.defaults,h);if(!e("#poshytip-css-"+i.className)[0]){e(['<style id="poshytip-css-',i.className,'" type="text/css">',"div.",i.className,"{visibility:hidden;position:absolute;top:0;left:0;}","div.",i.className," table, div.",i.className," td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}","div.",i.className," td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:",i.bgImageFrameSize,"px;width:",i.bgImageFrameSize,"px;overflow:hidden;}","div.",i.className," td.tip-right{background-position:100% 0;}","div.",i.className," td.tip-bottom{background-position:100% 100%;}","div.",i.className," td.tip-left{background-position:0 100%;}","div.",i.className," div.tip-inner{background-position:-",i.bgImageFrameSize,"px -",i.bgImageFrameSize,"px;}","div.",i.className," div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}","</style>"].join("")).appendTo("head")}if(i.liveEvents&&i.showOn!="none"){var j=e.extend({},i,{liveEvents:false});switch(i.showOn){case"hover":this.live("mouseenter.poshytip",function(){var l=e(this);if(!l.data("poshytip")){l.poshytip(j).poshytip("mouseenter")}});break;case"focus":this.live("focus.poshytip",function(){var l=e(this);if(!l.data("poshytip")){l.poshytip(j).poshytip("show")}});break}return this}return this.each(function(){new e.Poshytip(this,i)})};e.fn.poshytip.defaults={content:"[title]",className:"tip-yellow",bgImageFrameSize:10,showTimeout:500,hideTimeout:100,timeOnScreen:0,showOn:"hover",liveEvents:false,alignTo:"cursor",alignX:"right",alignY:"top",offsetX:-22,offsetY:18,allowTipHover:true,followCursor:false,fade:true,slide:true,slideOffset:8,showAniDuration:300,hideAniDuration:300}})(jQuery);

$(function(a){a.fn.changeOpacity=function(b){var c={start_opacity:"1",high_opacity:"1",low_opacity:".1",timing:"500"};var b=a.extend(c,b);b.element=a(this);a(b.element).css("opacity",b.start_opacity);a(b.element).hover(function(){a(this).stop().animate({opacity:b.high_opacity},b.timing);a(this).siblings().stop().animate({opacity:b.low_opacity},b.timing)},function(){a(this).stop().animate({opacity:b.start_opacity},b.timing);a(this).siblings().stop().animate({opacity:b.start_opacity},b.timing)});return this}})(jQuery);
// END poshtip