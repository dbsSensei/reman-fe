import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Index() {
  const history = useHistory();
  const handleOnClick = e => {
    history.push('/details');
    e.preventDefault();
  };
  return (
    <div>
      {/* Acara Baru */}
      <div className="card__newEvent">
        <div className="lebel">Now Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button
              type="button"
              className="btn_content"
              onClik={handleOnClick}
            >
              Details
            </button>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button
              className="btn_content"
              onClik={() => history.push('/details')}
            >
              Details
            </button>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button
              className="btn_content"
              onClik={() => history.push('/details')}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      {/* Akhir Acara Baru */}

      {/* Next Acara */}
      <div className="card__newEvent">
        <div className="lebel">Next Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>
        </div>
      </div>
      {/* Next Acara */}

      {/* Past Acara */}
      <div className="card__newEvent">
        <div className="lebel">Past Events</div>
        <div className="container__acara">
          {/* Acara satu */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>

          {/* Acara dua */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>

          {/* Acara tiga */}
          <div className="box_content">
            <div className="foto_acara">Foto Acara</div>
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
            <button className="btn_content">Details</button>
          </div>
        </div>
      </div>
      {/* Past Acara */}
    </div>
  );
}

export default Index;
