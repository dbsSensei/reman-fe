import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Foto_acara from '../../assets/image/foto-acara.jpg';
import Lock from '../../assets/image/lock.svg';
import Shield from '../../assets/image/shield.svg';

function Index() {
  // const history = useHistory();
  // const handleOnClick = e => {
  //   history.push('/details');
  //   e.preventDefault();
  // };
  return (
    <div>
      {/* Acara Baru */}
      <div className="card__newEvent">
        <div className="lebel">Now Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_1_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button type="button" className="btn_content">
                Details
              </button>
            </Link>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
            {/* <div style={{ height: 1000 }}>ppp</div> */}
          </div>
        </div>
      </div>
      {/* Akhir Acara Baru */}

      {/* Next Acara */}
      <div className="card__newEvent">
        <div className="lebel">Next Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_1_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient"></div>
              <img className="icon" src={Lock} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient"></div>
              <img className="icon" src={Lock} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient"></div>
              <img className="icon" src={Lock} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Next Acara */}

      {/* Past Acara */}
      <div className="card__newEvent">
        <div className="lebel">Past Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_1_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient_red"></div>
              <img className="icon" src={Shield} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient_red"></div>
              <img className="icon" src={Shield} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">
              <img className="foto__edit" src={Foto_acara} alt="Foto Acara" />
              <div className="gradient_red"></div>
              <img className="icon" src={Shield} alt="icon" />
            </div>
            <h3 className="title_acara">Judul Acara</h3>
            <p className="descripsi_acara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est.
            </p>
            <ul className="point_point_acara">
              <li className="point_1">Point 1</li>
              <li className="point_2">Point 2</li>
            </ul>
            <Link to="/details">
              <button className="btn_content">Details</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Past Acara */}
    </div>
  );
}

export default Index;
