import React, { Component } from 'react'
import { Button } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import '../Css/HotelList.css';

export default ({ data, filterText }) => {

  //This is also a Stateless component

  /*plain text with hotel info*/
  const txt_precio = "Precio por noche por Habitación";
  /*map to iterate all data.json*/
  const hotelsList = data

    .filter(name => {
      //remove names that do not match current filter text
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map(hotel => {

      return (
        <div className="row row-margin-bottom">
          <div className="col-md-12 no-padding lib-item" data-category="view">
            <div className="lib-panel">
              <div className="row box-shadow">



                <br />
                <div className="col-md-3">
                  <li><img key={hotel.id} src={"assets/images/hotels/" + hotel.image} alt="hotel" /></li>
                </div>



                <div className="col-md-5">
                  <div className="lib-row lib-header">
                    <label>{hotel.name}</label> <br />
                    <div className="lib-header-seperator"></div>
                  </div>

                  <div className="lib-row lib-desc">

                    <StarRatingComponent
                      name="stars1"
                      editing={false}
                      starCount={5}
                      className="starsSize"
                      value={hotel.stars}
                    />
                    <div> {
                      (typeof (hotel.amenities) === 'object') ?
                        <div className="amenities">
                          {
                            hotel.amenities.map((amenitiesList, k) =>
                              <li><img src={"assets/icons/amenities/" + amenitiesList + ".svg"} alt="hotel" height="20" width="20" /></li>
                            )
                          }
                        </div>
                        :
                        null
                    }
                    </div>

                    <br />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="lib-row lib-header_precio">
                    <label>{txt_precio}</label>
                  </div>
                  <div className="lib-row lib-desc">
                    <p className="txt_precio_Color">ARS <b className="txt_precio_size">{hotel.price}</b></p>
                    <Button onClick={() => { window.alert("I hope you like my work. ;)"); }} className="buttonColor_primary">Ver hotel</Button>{' '}
                    <br />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    })

  return (
    <section>
      <ul>
        {hotelsList}
      </ul>
    </section>

  )
}