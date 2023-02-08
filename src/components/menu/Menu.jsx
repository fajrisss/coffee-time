import React from 'react'
import './menu.css'
import IMG1 from '../../assetss/capuchino.png'
import IMG2 from '../../assetss/chai.png'
import IMG3 from '../../assetss/macchiato.png'
import IMG4 from '../../assetss/expreesso.png'

const data =[
  {
    avatar: IMG1,
    nama: "Cappuccino",
    resep: 'coffee 50% | milk 50%',
    harga: '$8.50',
  },
  {
    avatar: IMG2,
    nama: "Chai Latte",
    resep: 'coffee 50% | milk 50%',
    harga: '$8.50',
  },
  {
    avatar: IMG3,
    nama: "Macchiato",
    resep: 'coffee 50% | milk 50%',
    harga: '$8.50',
  },
  {
    avatar: IMG4,
    nama: "Expresso",
    resep: 'coffee 50% | milk 50%',
    harga: '$8.50',
  },
]

const Menu = () => {
  return (
    <section id='menu'>
      <div className="section__menu">

        <div className="section__menu-header">
          <h1>Enjoy a new blend of coffee style</h1>
          <p>Explore all flavours with us. thre is always a new cup worth experiencing</p>
        </div>

        <div className="content__section">
          {
            data.map(({ avatar, nama, resep, harga}) => {
              return(
                <div className="section__menu-content">
                  <img src={avatar} alt="Cappuccino" />
                  <div className="section__menu-content_deskripsi">
                    <h3>{nama}</h3>
                    <p>{resep}</p>
                    <h3>{harga}</h3>
                  </div>
                  <button className="button-costum">Order Now</button>
                </div> 
              )
            })
          }
          {/* <div className="section__menu-content">
            <img src={IMG1} alt="Cappuccino" />
            <div className="section__menu-content_deskripsi">
              <h3>Cappuccino</h3>
              <p>Coffee 50% | milk 50%</p>
              <h3>$8.50</h3>
            </div>
            <button className="button-costum">Order Now</button>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default Menu