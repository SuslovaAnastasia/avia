import company_1 from '../assets/company_1.png'
import company_2 from '../assets/company_2.png'
import company_3 from '../assets/company_3.png'
export const getCompanyLogo = (company: string): string => {
  switch (company) {
    case 'S7 Airlines':
      return company_3
      break
    case 'Pobeda Airlines':
      return company_1
      break
    case 'Red Wings':
      return company_2
      break
    default:
      return ''
      break
  }
}
