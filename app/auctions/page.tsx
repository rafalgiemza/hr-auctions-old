import Auctions from '@/components/Auctions'
import { auctionsData } from '@/data/auctions'
import React from 'react'

const AuctionsPage = async () => {
  const { auctions } = auctionsData
  
  return (
    <Auctions auctions={auctions} />
  )
}

export default AuctionsPage