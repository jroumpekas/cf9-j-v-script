const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function () {
  const inputNote = document.querySelector('#inputNote')
  const addButton = document.querySelector('#addNoteBtn')

  const getNoteValue = () => inputNote.value.trim()

  const getNewNote = () => ({
    key: count + 1,
    note: getNoteValue(),
    softDeleted: false
  })

  printGrDate()
  setInterval(printGrDate, 1000)

  addButton.addEventListener('click', () => {
    onInsertHandler(getNewNote())
    inputNote.value = ''
  })

  inputNote.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      onInsertHandler(getNewNote())
      inputNote.value = ''
    }
  })
})

function printGrDate() {
  const now = new Date()
  const pad = n => String(n).padStart(2, '0')

  const dayName = daysGR[now.getDay()]
  const monthName = monthsGR[now.getMonth()]

  const dateStr = `${dayName}, ${pad(now.getDate())} ${monthName} ${now.getFullYear()}`
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`

  const el = document.getElementById('datetxt')
  if (!el) return

  el.innerHTML = `${dateStr}<br>${timeStr}`
}