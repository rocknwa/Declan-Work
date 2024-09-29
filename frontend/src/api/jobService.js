export async function getAllJobTitles() {
    const response = await fetch('/api/jobs')
    if(!response.ok) {
        throw new Error('Failed to fetch jobs')
    }
    const data = await response.json()
    return data
}

export const jobData = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "Marketing Specialist",
    "Financial Analyst",
    "Human Resources Manager",
    "Sales Representative",
    "Customer Support Specialist",
    "Operations Manager"
  ]

  export async function getAllLocations() {
    const response = await fetch('/api/locations')
    if(!response.ok) {
        throw new Error('Failed to fetch locations')
    }
    const data = await response.json()
    return data
  }

  export const locationData = [
    "San Francisco, CA",
    "Bangalore, India",
    "New York, NY"
  ]
