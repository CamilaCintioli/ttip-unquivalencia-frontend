import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Institucion from './components/Institucion/Institucion';
import Equivalencia from './components/Equivalencia/Equivalencia';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
<div class="sidebar">
    <div class="sidebar-inner">
        <div class="sidebar-logo">
            <div class="peers ai-c fxw-nw">
                <div class="peer peer-greed">
                    <a class="sidebar-link td-n" href="{{ path('index') }}">
                        <div class="peers ai-c fxw-nw">
                            <div class="peer">
                                <div class="logo">
                                    <img src="{{ asset('build/assets/images/logo.png') }}" alt="">
                                </div>
                            </div>
                            <div class="peer peer-greed">
                                <h5 class="lh-1 mB-0 logo-text">Documentos</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="peer">
                    <div class="mobile-toggle sidebar-toggle">
                        <a href="" class="td-n">
                            <i class="ti-arrow-circle-left"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="sidebar-menu scrollable pos-r">
            <li class="nav-item mT-30 active">
                <a class="sidebar-link" href="{{ path('index') }}">
                <span class="icon-holder">
                  <i class="c-blue-500 ti-home"></i>
                </span>
                    <span class="title">Inicio</span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="dropdown-toggle" href="javascript:void(0);">
                    <span class="icon-holder">
                        <i class="c-indigo-500 ti-settings"></i>
                    </span>
                    <span class="title">Configuraciones</span>
                    <span class="arrow">
                        <i class="ti-angle-right"></i>
                    </span>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="sidebar-link" href="{{ path('tema_list') }}">Temas</a></li>
                    <li><a class="sidebar-link" href="{{ path('dependencia_list') }}">Dependencias</a></li>
                    <li><a class="sidebar-link" href="{{ path('circuito_list') }}">Circuitos</a></li>
                    <li><a class="sidebar-link" href="{{ path('serie_list') }}">Series</a></li>
                </ul>
            </li>
            {% if is_granted('ROLE_DOC_PLANTILLA') %}
                <li class="nav-item">
                    <a class='sidebar-link' href="{{ path('plantilla_list') }}">
                    <span class="icon-holder">
                      <i class="c-red-500 ti-layout"></i>
                    </span>
                        <span class="title">Plantillas</span>
                    </a>
                </li>
            {% endif %}
            <li class="nav-item">
                <a class='sidebar-link' href="{{ path('documento_list') }}">
                <span class="icon-holder">
                  <i class="c-purple-500 ti-file"></i>
                </span>
                    <span class="title">Documentos</span>
                </a>
            </li>
            <li class="nav-item">
                <a class='sidebar-link' href="{{ path('expediente_list',{'search' : 'entrada'}) }}">
                <span class="icon-holder">
                  <i class="c-orange-500 ti-folder"></i>
                </span>
                    <span class="title">Expedientes</span>
                </a>
            </li>
            <li class="nav-item">
                <a class='sidebar-link' href="{{ path('solicitud_list') }}">
                <span class="icon-holder">
                  <i class="c-deep-orange-500
                   ti-list"></i>
                </span>
                    <span class="title">Solicitudes</span>
                </a>
            </li>
            <li class="nav-item">
                <a class='sidebar-link' href="{{ path('firma_list') }}">
                <span class="icon-holder">
                  <i class="c-deep-indigo-500
                   ti-marker-alt"></i>
                </span>
                    <span class="title">Firmas</span>
                </a>
            </li>
        </ul>
    </div>
</div>

  );
}

export default App;
