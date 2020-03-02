
// https://github.com/kuitos/takahashi-slides/blob/gh-pages/index.js#L254
export function scaleFont(slideDom) {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  Array
    .from(slideDom.children)
    .forEach(line => {
      line.style.fontSize = '1rem'
      line.style.fontSize = `${innerWidth / line.scrollWidth / 2}rem`
    })

  const scale = Math.min(innerHeight / slideDom.clientHeight, innerWidth / slideDom.clientWidth)
  slideDom.style.transform = `scale(${scale * 0.74}) `
}


export function evalScript(line) {
  if (line.startsWith('<script')) {
    try {
      const js = line.replace(/<script>([\W\w]*)<\/script>/g, '$1')
      eval(js)
    } catch(err) {
      console.log('[PPT] exec script error: ', err)
    }
  }
  return line
}
