export type typeColor = 'blue' | 'red' | 'purple' | 'orange' | 'yellow' | 'green' | 'tosca' | 'grey'
export default function (typeColor: typeColor): {color: string; bgColor: string} {
  let color = ''
  let bgColor = ''
  switch (typeColor) {
    case 'green':
      color = '#00B098'
      bgColor = '#E5FEFA'
      break
    case 'tosca':
      color = '#0598AC'
      bgColor = '#E5FBFE'
      break
    case 'yellow':
      color = '#F0B10D'
      bgColor = '#FFFAE5'
      break
    case 'orange':
      color = '#F6863E'
      bgColor = '#FFF0E1'
      break
    case 'red':
      color = '#E95675'
      bgColor = '#FCECF0'
      break
    case 'blue':
      color = '#579BF1'
      bgColor = '#EEF8FF'
      break
    case 'purple':
      color = '#9C5DE4'
      bgColor = '#F8F1FF'
      break
    default:
      color = '#8A8A8A'
      bgColor = '#F8F8F8'
      break
  }
  return {
    color,
    bgColor,
  }
}
