import { Auction } from '@/data/auctions'
import React from 'react'

interface AuctionsProps {
  auctions: Auction[]
}

const Auctions = ({ auctions }: AuctionsProps) => {
  return (
    <div className="overflow-x-auto p-5">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map(auction => (
            <tr key={auction.id}>
              <td>
                {auction.title}
              </td>
              <td>
                {auction.skills.map((skill, index) => 
                    <span key={index} className="badge badge-ghost badge-sm">{skill}</span>
                )}
              </td>
            </tr>
            )
          )}
        </tbody>        
      </table>
    </div>
  )
}

export default Auctions