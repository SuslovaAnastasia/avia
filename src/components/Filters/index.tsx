import styles from './index.module.scss'
import { TransferFilter } from './TransferFilter'
import { CompanyFilter } from './CompanyFilter'
import { useState } from 'react'
function Filters() {
  const [dropActive, setDropActive] = useState(
    window.innerWidth > 1000 ? true : false
  )

  return (
    <div className={styles.filters}>
      <div
        onClick={() => {
          setDropActive(!dropActive)
        }}
        className={styles.filterDrop}
      >
        <span>Любая авиакомпания, любое кол-во пересадок</span>
        <span>Открыть настройки</span>
      </div>
      <div className={dropActive ? styles.filtersList : styles.filtersListHide}>
        <TransferFilter />
        <CompanyFilter />
      </div>
    </div>
  )
}

export { Filters }
