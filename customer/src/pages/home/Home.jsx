import React from 'react';
import './home.css';
import Banner from '../../components/banner/Banner';
import Banner2 from '../../components/banner/Banner2';
import Banner3 from '../../components/banner/Banner3';
import ProductCard from '../../components/cards/productCard';
import BrandCard from '../../components/cards/brandCard';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <section className='homeheader'>
          <h5>Sneaker</h5>
          <h5>Apparel</h5>
          <h5>Electronics</h5>
          <h5>Trading Cards</h5>
          <h5>Collectibles</h5>
          <h5>Accessories</h5>
          <h5>NFTs</h5>
      </section>
      <div className="homebanner">
        <Banner/>
      </div>
      <div className="popularbrand">
        <div className="headerList">
          <h3>Most Popular Sneakers</h3>
          <div className="headerList__right">
            <Link class='headerList__right-link' to ='product'>See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
            
            
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <h3>Poppular Brands</h3>
        <div className="popularbrand__content">
          <BrandCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <h3>Featured Apparel</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="homebanner">
        <Banner2/>
      </div>
      <div className="popularbrand">
        <h3>Featured Trading Cards</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <h3>Collectibles Staff Picks</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="homebanner">
        <Banner3/>
      </div>
      <div className="popularbrand">
        <h3>Trendding sneaker</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <h3>Release Calendar</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
    </div>
  );
}

export default Home;
