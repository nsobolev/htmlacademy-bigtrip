import { createAddNewFirstEventTemplate } from './components/add-new-first-event'
import { createEventEditTemplate } from './components/event-edit'
import { createEventTemplate } from './components/event'
import { createFiltersTemplate } from './components/filters'
import { createInfoTemplate } from './components/info'
import { createMenuTemplate } from './components/menu'
import { createSortingTemplate } from './components/sorting'
import { createTripDayTemplate } from './components/trip-day'

const POINTS_COUNT = 3

const render = ({ container, template, place = 'beforeend' }) => {
  container.insertAdjacentHTML(place, template)
}

const pageHeaderElement = document.querySelector('.page-header')
const pageMainElement = document.querySelector('.page-main')

const tripMainElement = pageHeaderElement.querySelector('.trip-main')
const tripControlsElement = pageHeaderElement.querySelector('.trip-main__trip-controls')
const tripEventsElement = pageMainElement.querySelector('.trip-events')

render({ container: tripMainElement, template: createInfoTemplate(), place: 'afterbegin' })
render({ container: tripControlsElement, template: createMenuTemplate(), place: 'afterbegin' })
render({ container: tripControlsElement, template: createFiltersTemplate() })
render({ container: tripEventsElement, template: createSortingTemplate() })
render({ container: tripEventsElement, template: createAddNewFirstEventTemplate() })

render({ container: tripEventsElement, template: createTripDayTemplate() })

const tripEventsListElement = pageMainElement.querySelector('.trip-events__list')

render({ container: tripEventsListElement, template: createEventEditTemplate() })
for(let i = 0; i < POINTS_COUNT; i += 1) {
  render({ container: tripEventsListElement, template: createEventTemplate() })
}
