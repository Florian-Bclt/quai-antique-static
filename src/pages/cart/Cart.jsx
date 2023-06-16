import React from 'react'
import { Navbar } from '../../components'
import './Cart.css'
import { MenuItem, SubHeading } from '../../components'
import { images, data } from '../../constants'

function Cart() {
  return (
    <>
      <Navbar />
      
      <div className="app__cart flex__center section__padding" id='cart'>
        <div className="app__cart-title">
          <SubHeading title="Qualité des Producteurs rime avec saveurs" />
          <h1 className='headtext__cormorant'>Nos produits locaux</h1>
        </div>

        <div className="app__cart-cart">
          <div className="app__cart-cart_list flex__center">
            <div className="app__cart-cart_items">
              {data.products.map((product) => (
                <MenuItem
                  key={product.id}
                  title={product.title}
                  price={product.price + ' €'}
                  tags={product.tags} 
                />
              ))}
            </div>
          </div>
          <div className="app__cart-cart_img">
              <img src={images.gallery02} alt='cart img' />
              <img src={images.gallery07} alt='cart img' />
              <img src={images.gallery03} alt='cart img' />
          </div>
        </div>
        <div className="app__cart-cart"> 
          <div className="app__cart-cart_list flex__center drinks">
            <p className='app__cart-cart_heading'>Bières</p>
            <div className="app__cart-drink_items">
              {data.beers.map((beer) => (
                <MenuItem
                  key={beer.id}
                  title={beer.title}
                  price={beer.price + ' €'}
                  tags={beer.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__cart-cart_list flex__center">
            <p className='app__cart-cart_heading'>Sans Alcool</p>
            <div className="app__cart-drink_items">
              {data.softs.map((soft) => (
                <MenuItem
                  key={soft.id}
                  title={soft.title}
                  price={soft.price + ' €'}
                  tags={soft.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart