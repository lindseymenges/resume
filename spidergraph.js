const radar = require('svg-radar-chart')
const stringify = require('virtual-dom-stringify')

const chart = radar({
  //columns
  javascript: 'JavaScript',
  python: 'Python',
  ruby: 'Ruby',
  rn: 'React Native',
  rails: 'Ruby on Rails',
  react: 'ReactJS',
}, [
  //data
  {javascript: .9, react: .75, rn: .6, ruby: .4, python: .5, rails: .3},
],
  {
  size: 100, // size of the chart (including captions)
  axes: true, // show axes?
  scales: 3, // show scale circles?
  captions: true, // show captions?
  captionsPosition: 1.35, // where on the axes are the captions?
  axisProps: () => ({className: 'axis'}),
  scaleProps: () => ({className: 'scale', fill: 'none'}),
  shapeProps: () => ({className: 'shape'}),
  captionProps: () => ({
    className: 'caption',
    fill: '#3c8973',
    textAnchor: 'middle',
    fontSize: 3.25,
    fontFamily: 'Press Start 2P'
  })
})


const svg = `
<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="-15 0 125 100" id="spider-svg">
  <style>
    #spider-svg {
      width: 100%;
    }
    .axis {
      stroke: #d1a35b;
      stroke-width: .2;
    }
    .scale {
      stroke-width: .3;
      stroke: #d1a35b;
    }
    .shape {
      fill-opacity: .2;
      stroke: #3c8973;
      fill: #145b47;
    }
  </style>
  ${stringify(chart)}
</svg>`

document.querySelector('#spider-chart-container').innerHTML = svg;