// Track Module. Follows ducks pattern http://bit.ly/2DnERMc
import EVENTS from '../events'

// Track State
const initialState = {
  event: {},
  lastEvent: null,
  history: [],
}

// track reducer
export default function trackReducer(state = initialState, action) {
  const { type, payload, options, eventName } = action

  switch (type) {
    case EVENTS.TRACK:
      return {
        ...state,
        ...{
          event: {
            eventName,
            payload,
            options
          },
          lastEvent: action.eventName,
          history: state.history.concat(action)
        }
      }
    // todo push events to history
    default:
      return state
  }
}

// // Set tracking data for third party plugins
export const trackEvent = (eventName, data, options, callback) => {
  return {
    type: EVENTS.TRACK_INIT,
    eventName: eventName,
    data: data,
    options: options,
    callback: callback
  }
}
