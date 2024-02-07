import React from 'react';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1 className="header">Proyectos Molones</h1>
      <button>
        <Link to="/listproyect">Comenzar</Link>
      </button>
    </div>
  );
}

export default Landing;
