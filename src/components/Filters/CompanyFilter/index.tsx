import { CircleCheckbox } from './CircleCheckbox'
import styles from '../index.module.scss'
import { useAppSelector } from '../../../hooks/redux'

function CompanyFilter() {
  const { companyFilterTypes } = useAppSelector((state) => state.ticketReducer)
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Компания</div>
      <ul className={styles.сheckboxes}>
        {companyFilterTypes.map((item) => {
          return (
            <li key={item}>
              <CircleCheckbox text={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { CompanyFilter }
