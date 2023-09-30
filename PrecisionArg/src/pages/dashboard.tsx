import React from 'react';

const dash: React.FC = () => {
  return (
    <div className="mt-4 px-4">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="./src/images/dash.PNG"
            alt="Dashboard Image"
            className="img-fluid rounded dash"
          />
          <div className="col-lg-12 d-flex align-items-center">
            <div className="mt-3">
              <button className="btn btn-secondary">Button 1</button>
              <button className="btn btn-secondary">Button 2</button>
              <button className="btn btn-secondary">Button 3</button>
              <button className="btn btn-secondary">Button 4</button>
              <button className="btn btn-secondary">Button 5</button>
              <button className="btn btn-secondary">Button 6</button>
              <button className="btn btn-secondary">Button 7</button>
              <button className="btn btn-secondary">Button 8</button>
              <button className="btn btn-secondary">Button 9</button>
            </div>
          </div>
        </div>        

        <div className="col-lg-6">
          <p className="text-justify font-size-lg fs-2 fw-bold">
            This NDVI image offers a visual representation of the vegetation health in our study
            area. Brighter areas signify robust vegetation, while darker regions denote stressed or
            minimal vegetation. This data is essential for understanding spatial patterns and
            guiding our project's land management strategies.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <img
                src="./src/images/graph.PNG"
                alt="Image 1"
                className="img-fluid rounded"
              />
              <p className="text-center">Plant Health Levels</p>
            </div>
            <div className="col-md-6">
              <img
                src="./src/images/alert.PNG"
                alt="Image 2"
                className="img-fluid rounded"
              />
              <p className="text-center">Alerts</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <img
                src="./src/images/soil.PNG"
                alt="Bigger Image"
                className="img-fluid rounded"
              />
              <p className="text-center">Soil Irrigation Levels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dash;
