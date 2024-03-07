import React from 'react'

export default function TopCards() {
    const cardsData = [
        {
            heading: "Online store session",
            price: "$100"
        },
        {
            heading: "Net return value",
            price: "$10"
        },
        {
            heading: "Total orders",
            price: "$200"
        },
        {
            heading: "Conversion rate",
            price: "$100"
        },
    ]
    return (
        <div className='flex'>
            {cardsData.map((element, index) => {
                return (
                    <Card heading={element.heading} price={element.price} />
                )
            })}
        </div>
    )
}

function Card({ heading, price }) {
    return (
        <>
            <div className='w-1/4 rounded-[15px] hover:bg-stone-200 hover:border-b-4 border-dotted border-s'>
                <div className="p-4">
                    <h4 className='text-3xl border-b-4 border-dotted  border-b-stone-800 border-s '>{heading}</h4>
                    <p className='text-2xl'>{price}</p>
                </div>
            </div>
        </>
    )
}
