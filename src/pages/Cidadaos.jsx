import React, { useState } from 'react';
import { Scale, Search, Phone, Briefcase, Fingerprint } from 'lucide-react';

const Cidadaos = () => {
  const [busca, setBusca] = useState('');
  const [cidadaoAtivo, setCidadaoAtivo] = useState({
    nome: "VINICIUS AGUIAR",
    passaporte: "1002",
    telefone: "555-0192",
    emprego: "Mecânico (ACF)",
    status: "FICHA LIMPA",
    foto: null
  });

  // Simulação de busca no banco de dados
  const pesquisarCidadao = (e) => {
    if (e.key === 'Enter') {
      console.log("Pesquisando passaporte:", busca);
      // Aqui você faria o fetch para o seu client.lua/banco de dados
      // Exemplo: if(busca === "1045") setCidadaoAtivo(dadosDoJoao)
    }
  };

  return (
    <div className="tab-content animate-in">
      <div className="content-header">
        <h1>Banco de Dados: Cidadãos</h1>
        <div className="search-bar" style={{ width: '250px' }}>
          <Search size={16} color="var(--mdt-accent)" />
          <input 
            type="text" 
            placeholder="Passaporte ou RG..." 
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={pesquisarCidadao}
          />
        </div>
      </div>

      <div className="database-grid">
        {/* Lado Esquerdo: Lista de Histórico de Consultas */}
        <div className="search-results">
          <div className="result-item active">
            <div className="result-avatar"></div>
            <div className="result-info">
              <p className="name">{cidadaoAtivo.nome}</p>
              <p className="id">RG: #{cidadaoAtivo.passaporte}</p>
            </div>
            <span className={`status-badge ${cidadaoAtivo.status === 'FICHA LIMPA' ? 'clean' : 'criminal'}`}>
              {cidadaoAtivo.status}
            </span>
          </div>
        </div>

        {/* Lado Direito: Ficha Prisional Detalhada */}
        <div className="profile-view">
          <div className="profile-header">
            <div className="profile-pic">
               <Fingerprint size={50} color="rgba(255,255,255,0.1)" />
            </div>
            <div className="profile-main-info">
              <h2>{cidadaoAtivo.nome} <Scale size={20} color="var(--mdt-accent)" /></h2>
              <div className="info-tags">
                <span className="info-tag"><Fingerprint size={12} /> ID: {cidadaoAtivo.passaporte}</span>
                <span className="info-tag"><Phone size={12} /> {cidadaoAtivo.telefone}</span>
                <span className="info-tag"><Briefcase size={12} /> {cidadaoAtivo.emprego}</span>
              </div>
            </div>
          </div>

          <div className="profile-sections">
            <div className="section-card">
              <h3>PASSAGENS CRIMINAIS</h3>
              <div className="empty-state">O cidadão não possui registros criminais no sistema PERJ.</div>
            </div>

            <div className="section-card">
              <h3>PROPRIEDADES & VEÍCULOS</h3>
              <div className="fine-item">
                <span>PORSCHE 911 GT3 (00ABC12)</span>
                <span className="status-badge clean">LEGALIZADO</span>
              </div>
            </div>

            <div className="report-actions" style={{ marginTop: '20px' }}>
              <button className="action-btn-blue" style={{ width: '100%' }}>
                ADICIONAR NOTA JUDICIAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cidadaos;