import React, { useState } from 'react';
import { Shield, Users, Car, FileText, Scale, Bell, Search, LogOut } from 'lucide-react';

// IMPORTAÇÃO DAS PÁGINAS (Verifique se o caminho está correto)
import Dashboard from './pages/Dashboard';
import Cidadaos from './pages/Cidadaos';
import Veiculos from './pages/Veiculos';
import Ocorrencias from './pages/Ocorrencias';
import Justica from './pages/Justica';


const MDT = () => {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="mdt-container">
      <nav className="mdt-sidebar">
        <div className="mdt-badge">
          <Shield size={40} color="#1e90ff" />
          <span>POLÍCIA MILITAR</span>
          <p>ESTADO DO RIO DE JANEIRO</p>
        </div>

        <ul className="mdt-menu">
          <li className={tab === 'dashboard' ? 'active' : ''} onClick={() => setTab('dashboard')}>
            <Bell size={18} /> INÍCIO
          </li>
          <li className={tab === 'database' ? 'active' : ''} onClick={() => setTab('database')}>
            <Users size={18} /> CIDADÃOS
          </li>
          <li className={tab === 'vehicles' ? 'active' : ''} onClick={() => setTab('vehicles')}>
            <Car size={18} /> VEÍCULOS
          </li>
          <li className={tab === 'reports' ? 'active' : ''} onClick={() => setTab('reports')}>
            <FileText size={18} /> OCORRÊNCIAS
          </li>
          <li className={tab === 'warrants' ? 'active' : ''} onClick={() => setTab('warrants')}>
            <Scale size={18} /> JUSTIÇA
          </li>
        </ul>

        <div className="mdt-footer">
          <p>Oficial: <strong>V. Aguiar [102]</strong></p>
          <button className="btn-logout"><LogOut size={16} /> SAIR</button>
        </div>
      </nav>

      <main className="mdt-main">
        <header className="mdt-header">
          <div className="search-bar">
            <Search size={18} color="#a4b0be" />
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="system-status">SISTEMA OPERACIONAL ATIVO</div>
        </header>

        <section className="mdt-content">
          {/* RENDERIZAÇÃO CONDICIONAL */}
          {tab === 'dashboard' && <Dashboard />}
          {tab === 'database' && <Cidadaos />}
          {tab === 'vehicles' && <Veiculos />}
          {tab === 'reports' && <Ocorrencias />}
          {tab === 'warrants' && <Justica />}
        </section>
      </main>
    </div>
  );
};

export default MDT;