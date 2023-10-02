import useBillboard from '@/hooks/useBillboards'
import axios from 'axios'
import { useCallback, useEffect } from 'react'


const Billboard = () => {
    const {data} = useBillboard()
  return (
    <div>Bill</div>
  )
}

export default Billboard