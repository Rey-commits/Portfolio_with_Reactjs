import React from 'react'
import Categories from '../Components/Categories'
import MenuItem from '../Components/MenuItem'
import Title from '../Components/Title'

function PortfoliosPage() {
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={"Portfolios"} span={"Portfolios"}/>
            </div>
            <div className="portfolios">
                <Categories />
                <MenuItem />
            </div>
        </div>
    )
}

export default PortfoliosPage
