export const calculateIdLengthScore = (id: number) => {
  let score = 0
  if (id >= 1 && id <= 5) score += 2
  if (id >= 6 && id <= 10) score += 4
  if (id >= 11 && id <= 15) score += 6
  if (id > 15) score += 8
  return score
}

export const calculateAgeScore = (age: number) => {
  let score = 0
  if (age >= 1 && age <= 5) score += 2
  if (age >= 6 && age <= 10) score += 4
  if (age >= 11 && age <= 15) score += 6
  if (age > 15) score += 8
  return score
}

export const calculateMaritalStatusScore = (marital_status: number) => {
  let score = 0
  if (marital_status < 1) score += 2
  if (marital_status >= 1 && marital_status <= 5) score += 4
  if (marital_status >= 6 && marital_status <= 10) score += 6
  if (marital_status > 10) score += 8
  return score
}

export const calculateEmploymentStatusScore = (employment_status: string) => {
  let score = 0
  switch (employment_status) {
    case "Not Employed":
      score += 2
      break
    case "Self Employed":
      score += 4
      break
    case "Salary worker":
      score += 6
      break
    case "Gov't worker":
      score += 8
      break
    default:
      score += 2
  }
  return score
}

export const calculateScoreForIncrement0To1999 = (bank_account_balance: number) => {
  let score = 0
  if (bank_account_balance >= 0 && bank_account_balance <= 1999) score += 2
  if (bank_account_balance >= 2000 && bank_account_balance <= 4999) score += 4
  if (bank_account_balance >= 5000 && bank_account_balance <= 6999) score += 6
  if (bank_account_balance > 7000) score += 8
  return score
}

export const calculateScoreForDecrement0To1999 = (bank_account_balance: number) => {
  let score = 0
  if (bank_account_balance >= 0 && bank_account_balance <= 1999) score += 8
  if (bank_account_balance >= 2000 && bank_account_balance <= 4999) score += 6
  if (bank_account_balance >= 5000 && bank_account_balance <= 6999) score += 4
  if (bank_account_balance > 7000) score += 2
  return score
}

export const calculateScoreForIncrement0To2999 = (bank_account_balance: number) => {
  let score = 0
  if (bank_account_balance >= 0 && bank_account_balance <= 2999) score += 8
  if (bank_account_balance >= 3000 && bank_account_balance <= 4999) score += 6
  if (bank_account_balance >= 5000 && bank_account_balance <= 9999) score += 4
  if (bank_account_balance > 10000) score += 2
  return score
}

export const calculateScoreForTotalLoan = (bank_account_balance: number) => {
  let score = 0
  if (bank_account_balance >= 0 && bank_account_balance <= 2999) score += 2
  if (bank_account_balance >= 3000 && bank_account_balance <= 4999) score += 4
  if (bank_account_balance >= 5000 && bank_account_balance <= 6999) score += 6
  if (bank_account_balance > 7000) score += 8
  return score
}

export const calculateLengthOfAccountHoldingScore = (length_of_account_holding: number) => {
  let score = 0
  if (length_of_account_holding > 270) score += 8
  if (length_of_account_holding >= 181 && length_of_account_holding <= 270) score += 6
  if (length_of_account_holding >= 91 && length_of_account_holding <= 180) score += 4
  if (length_of_account_holding >= 0 && length_of_account_holding <= 90) score += 2
  return score
}

export const calculateDailyToQuarterlyScore = (value: string) => {
  let score = 0
  switch (value) {
    case "Daily":
      score += 8
      break
    case "Weekly":
      score += 6
      break
    case "Monthly":
      score += 4
      break
    case "Quarterly":
      score += 2
      break
    default:
      score += 2
  }
  return score
}

export const calculateFrequencyOutflowScore = (frequency_outflow: string) => {
  let score = 0
  switch (frequency_outflow) {
    case "Quarterly":
      score += 8
      break
    case "Monthly":
      score += 6
      break
    case "Weekly ":
      score += 4
      break
    case "Daily":
      score += 2
      break
    default:
      score += 3
  }
  return score
}

export const noOfCreditAgent = (no_of_credit_agent: number) => {
  let score = 0
  if (no_of_credit_agent == 1) score += 8
  if (no_of_credit_agent == 2 || no_of_credit_agent == 4) score += 6
  if (no_of_credit_agent == 5 || no_of_credit_agent == 7) score += 4
  if (no_of_credit_agent > 7) score += 2
  return score
}

export const calculateDayRangeScores = (days_of_default: number) => {
  let score = 0
  if (days_of_default >= 1 && days_of_default <= 7) score += 8
  if (days_of_default >= 8 && days_of_default <= 14) score += 6
  if (days_of_default >= 15 && days_of_default == 21) score += 4
  if (days_of_default >= 22) score += 2
  return score
}
