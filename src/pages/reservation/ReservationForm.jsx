import React from 'react';
import './ReservationForm.css';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import { data } from '../../constants'

const ReservationForm = () => {

  return (
    <>
    <Navbar />
    <div className='app__reservation-container'>
      <div className="app__reservation-title p__cormorant">Quai Antique</div>
      <div className="app_reservation-form p__opensans">
        <p>Pour toutes réservations de plus de 10 personnes, merci de contacter directement le restaurant.</p>
        <form action='' method='get' className='covered'>
          <label htmlFor='table' className='reservation-icon'><MdOutlineRestaurantMenu/></label>
              <select className='reservation-input' name='table'>
                {data.tables.map((table) => (
                  <option key={table.id} value={table.id}>
                    {table.title} - {table.places} places
                  </option>
                ))}
              </select>
          <label id='calendar' htmlFor="date" className='reservation-icon'><BiCalendar /></label>
            <input className='reservation-input' type="date"/>
        </form>
      </div>
        <div className="lunch p__cormorant">
          <h5>Déjeuner</h5>
          <div className='time'>
            <button className='select-time-btn'>12:00</button>
            <button className='select-time-btn'>12:15</button>
            <button className='select-time-btn'>12:30</button>
            <button className='select-time-btn'>12:45</button>
            <button className='select-time-btn'>13:00</button>
            <button className='select-time-btn'>13:15</button>
            <button className='select-time-btn'>13:30</button>
            <button className='select-time-btn'>13:45</button>
            <button className='select-time-btn'>14:00</button>
          </div>
        </div>
        <div className="dinner p__cormorant">
          <h5>Diner</h5>
          <div className='time'>
            <button className='select-time-btn'>19:00</button>
            <button className='select-time-btn'>19:15</button>
            <button className='select-time-btn'>19:30</button>
            <button className='select-time-btn'>19:45</button>
            <button className='select-time-btn'>20:00</button>
            <button className='select-time-btn'>20:15</button>
            <button className='select-time-btn'>20:30</button>
            <button className='select-time-btn'>20:45</button>
            <button className='select-time-btn'>21:00</button>
            <button className='select-time-btn'>21:15</button>
            <button className='select-time-btn'>21:30</button>
            <button className='select-time-btn'>21:45</button>
          </div>
        </div>
    </div>
  </>
  )
}

export default ReservationForm