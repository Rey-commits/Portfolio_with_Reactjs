import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item) =>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.icon1}><i class="fab fa-github"></i></a>
                                    <a href={item.icon2}>a</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder paragraph</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems
