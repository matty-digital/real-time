var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = '#F8333C';
    config1.waveColor = '#F8333C';
    config1.textColor = '#F8333C';
    config1.waveHeight = '0.08';
    config1.waveAnimateTime = '4500';
    config1.displayDegrees = true;
var gauge1 = loadLiquidFillGauge("fillgauge1", 66, config1);

var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = '#44AF69';
    config2.waveColor = '#44AF69';
    config2.textColor = '#44AF69';
    config2.waveHeight = '0.25';
    config2.waveAnimateTime = '60000';
var gauge2 = loadLiquidFillGauge("fillgauge2", 28, config2);

var config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = '#44AF69';
    config3.waveColor = '#44AF69';
    config3.textColor = '#44AF69';
    config3.waveHeight = '0.15';
    config3.waveAnimateTime = '360000';
var gauge3 = loadLiquidFillGauge("fillgauge3", 60, config3);

var config4 = liquidFillGaugeDefaultSettings();
    config4.circleColor = '#2B9EB3';
    config4.waveColor = '#2B9EB3';
    config4.textColor = '#2B9EB3';
    config4.waveHeight = '0.15';
    config4.waveAnimateTime = '36000';
var gauge4 = loadLiquidFillGauge("fillgauge4", 50, config4);
var gauge5 = loadLiquidFillGauge("fillgauge5", 47, config4);
var gauge6 = loadLiquidFillGauge("fillgauge6", 80, config4);

function NewValue(){
  if(Math.random() > .5){
    return Math.round(Math.random() * 100);
  } else {
    return (Math.random() * 100).toFixed(1);
  }
}

var randTime = (Math.random()*100).toFixed();

setInterval(function(){
  gauge4.update(NewValue());
  gauge5.update(NewValue());
}, 1000);

setInterval(function() {
  gauge6.update(NewValue());
}, 10000);

setInterval(function(){
  gauge2.update(NewValue());
}, 600 * 1000);

setInterval(function(){
  gauge3.update(NewValue());
}, 1800 * 1000);

setInterval(function(){
  gauge1.update(NewValue());
}, randTime * 1000);
