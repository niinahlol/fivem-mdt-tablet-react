import React from 'react';

const Dashboard = () => {
  return (
    <div className="tab-content animate-in">
      <h1>Painel de Controle Central</h1>
      <p className="subtitle">Bem-vindo à rede de dados da Secretaria de Segurança Pública.</p>
      
      <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div className="section-card">
          <h3>Avisos Recentes</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
            • Operação "Asfalto Limpo" em andamento na região da Lapa.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            • Alerta de roubos de veículos de luxo (Porsche/Nissan).
          </p>
        </div>
        
        <div className="section-card">
          <h3>Unidades em Serviço</h3>
          <div className="unit-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
            <span>ALPHA-01</span> <span style={{ color: 'var(--mdt-green)' }}>PATRULHA</span>
          </div>
          <div className="unit-item" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
            <span>SIERRA-05</span> <span style={{ color: '#f1c40f' }}>EM QTH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Isso aqui é o que resolve o erro!