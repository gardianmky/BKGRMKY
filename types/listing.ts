export interface Listing {
  listingID: string
  agencyID: string
  type: string
  categories: string[]
  address: {
    street: string
    suburb: string
    state: string
    postcode: number
  }
  heading: string
  price: string
  bedBathCarLand: {
    key: string
    label: string
    value: string
  }[]
  images: {
    url: string
    type: string
  }[]
  agents?: {
    agentID: number
    name: string
    title: string
    phone: string
    mobile: string
    imageURL: string
  }[]
}
