import React, { useState } from 'react';
import { Car, AlertTriangle } from 'lucide-react';

const Veiculos = () => {
  // Estado para controlar se o veículo está roubado ou não
  const [isRoubado, setIsRoubado] = useState(false);

  // Função que simula a declaração no sistema
  const toggleRoubo = () => {
    setIsRoubado(!isRoubado);
    
    // Preparação para o Lua
    console.log("Status da Placa 00ABC12 alterado para:", !isRoubado ? "ROUBADO" : "REGULAR");
    
    /* No futuro:
    fetch(`https://${GetParentResourceName()}/toggleRoubo`, {
      method: 'POST',
      body: JSON.stringify({ placa: "00ABC12", status: !isRoubado })
    });
    */
  };

  return (
    <div className="tab-content animate-in">
      <div className="content-header">
        <h1>Registro Nacional de Veículos</h1>
        {/* Botão Dinâmico: Muda de cor e texto conforme o estado */}
        <button 
          className="btn-logout" 
          onClick={toggleRoubo}
          style={{
            borderColor: isRoubado ? 'var(--mdt-green)' : 'var(--mdt-red)', 
            color: isRoubado ? 'var(--mdt-green)' : 'var(--mdt-red)', 
            width: 'auto',
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          {isRoubado ? 'RETIRAR QUEIXA DE ROUBO' : 'DECLARAR ROUBO/FURTO'}
        </button>
      </div>

      <div className="database-grid">
        <div className="search-results">
          <div className="result-item active">
            <div className="vehicle-icon">
                <Car size={24} color={isRoubado ? 'var(--mdt-red)' : 'var(--mdt-accent)'} />
            </div>
            <div className="result-info">
              <p className="name">PORSCHE 911</p>
              <p className="id">PLACA: 00ABC12</p>
            </div>
            {/* O Badge muda de cor e texto automaticamente */}
            <span className={`status-badge ${isRoubado ? 'criminal' : 'clean'}`}>
              {isRoubado ? 'ROUBADO' : 'REGULAR'}
            </span>
          </div>
        </div>

        <div className="profile-view">
          <div className="vehicle-details-header" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div className="vehicle-img-placeholder" style={{
                width: '150px', 
                height: '100px', 
                background: '#10151b', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px',
                border: isRoubado ? '1px solid var(--mdt-red)' : '1px solid var(--border-color)'
            }}>
              <Car size={40} color={isRoubado ? 'var(--mdt-red)' : 'rgba(255,255,255,0.1)'} />
              <p style={{fontSize: '10px', marginTop: '5px'}}>IMAGEM DO RADAR</p>
            </div>
            <div className="vehicle-main-info">
              <h2>PORSCHE 911 GT3 <span className="tag-model">ESPORTIVO</span></h2>
              <p><strong>PROPRIETÁRIO:</strong> VINICIUS AGUIAR</p>
              <p><strong>COR:</strong> AZUL RIVIERA | <strong>PLACA:</strong> 00ABC12</p>
            </div>
          </div>

          <div className="profile-sections">
            <div className="section-card">
              <h3>HISTÓRICO DE INFRAÇÕES</h3>
              <div className="fine-item" style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px'}}>
                <span>Direção Perigosa</span>
                <span className="date" style={{color: 'var(--text-secondary)'}}>22/02/2026</span>
              </div>
            </div>

            {/* Alerta Visual se o carro estiver roubado */}
            {isRoubado && (
                <div className="section-card" style={{background: 'rgba(255, 71, 87, 0.1)', border: '1px solid var(--mdt-red)'}}>
                   <h3 style={{color: 'var(--mdt-red)', display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <AlertTriangle size={14} /> ALERTA DE ROUBO ATIVO
                   </h3>
                   <p style={{fontSize: '12px'}}>Este veículo consta como roubado no sistema. Abordagem de alto risco (QBU) recomendada.</p>
                </div>
            )}

            <div className="alert-box" style={{marginTop: '20px', padding: '15px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px'}}>
              <strong>NOTA DO OFICIAL:</strong>
              <p style={{fontSize: '13px', color: 'var(--text-secondary)', marginTop: '5px'}}>
                Veículo monitorado por suspeita de participação em rachas noturnos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veiculos;