import type { Interest } from './navigation'

/**
 * Port of the reference script's data-interest behaviour: a link carrying
 * data-interest pre-selects the matching choice in the homepage enquiry
 * section. The reference only handled same-page clicks; the choice is also
 * kept for the session so it survives navigating to the homepage.
 */

export const INTEREST_EVENT = 'lumii:interest'
const STORAGE_KEY = 'lumii-interest'

/** Contact form option each enquiry choice pre-selects. */
export const contactInterestFor: Record<Interest, string> = {
  courses: 'courses',
  event: 'speaking',
}

export function isInterest(value: unknown): value is Interest {
  return value === 'courses' || value === 'event'
}

export function rememberInterest(interest: Interest) {
  try {
    sessionStorage.setItem(STORAGE_KEY, interest)
  } catch {
    // Storage can be unavailable (private mode, blocked site data). The
    // same-page event below still works without it.
  }
  window.dispatchEvent(new CustomEvent<Interest>(INTEREST_EVENT, { detail: interest }))
}

export function recallInterest(): Interest | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY)
    return isInterest(value) ? value : null
  } catch {
    return null
  }
}
