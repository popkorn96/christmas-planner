const app = new App()
console.log('helloooo')
function renderTripProfile(event) {
    let id = event.currentTarget.dataset.id
    let app = new App()
      App.fetchOneTrip(id).then(tripJson => {
      renderNewTripProfile(tripJson)
    })
  }