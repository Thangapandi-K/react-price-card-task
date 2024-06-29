import React from 'react'
import Card from './components/Card'
import "./App.css"

const App = () => {


    // card datas

  const cardData = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      storage: "50GB Storage",
      pubPrjt: "Unlimited Public Projects",
      community: "Community Access",
      pvtPrjt: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 User",
      storage: "50GB Storage",
      pubPrjt: "Unlimited Public Projects",
      community: "Community Access",
      pvtPrjt: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited User",
      storage: "50GB Storage",
      pubPrjt: "Unlimited Public Projects",
      community: "Community Access",
      pvtPrjt: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      report: "Monthly Status Report"
    }
  ]

  return (
    <div>
      <h1 className='title'>REACT PRICE CARD TASK</h1>
      <div className='container'>
        {
          cardData.map((data, index) => ( //
            <Card
              key={index}
              data={data}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App