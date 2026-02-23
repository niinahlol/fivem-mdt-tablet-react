import React, { useState } from 'react';

const Ocorrencias = () => {
  // Estado para capturar o formulário
  const [boletim, setBoletim] = useState({
    titulo: '',
    local: '',
    data: new Date().toLocaleString('pt-BR'),
    relato: '',
    oficiais: 'V. Aguiar [102]',
    presos: ''
  });

  // Função para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoletim(prev => ({ ...prev, [name]: value }));
  };

 // Adicione este estado para a notificação
const [notificacao, setNotificacao] = useState(false);

const salvarBoletim = () => {
  if(!boletim.titulo || !boletim.relato) return alert("Preencha o título e o relato!");

  // Feedback para o Console (O que o Lua vai receber)
  console.log("POST -> salvarOcorrencia", boletim);

  // Simulação de Sucesso
  setNotificacao(true);
  setTimeout(() => setNotificacao(false), 3000);

  // Limpa o formulário para a próxima ocorrência
  setBoletim({
    titulo: '', local: '', data: new Date().toLocaleString('pt-BR'),
    relato: '', oficiais: 'V. Aguiar [102]', presos: ''
  });
};



  return (
      <div className="tab-content animate-in">
      <div className="content-header">
        <h1>Registro de Incidentes (B.O)</h1>
        <button className="action-btn-blue" onClick={salvarBoletim}>
          SALVAR NO ARQUIVO
        </button>
      </div>
      
          {notificacao && (
            <div className="toast-success">OCORRÊNCIA REGISTRADA COM SUCESSO!</div>
          )}

      <div className="database-grid">
        {/* Coluna da Esquerda: Histórico Simulado */}
        <div className="search-results">
          <div className="result-item active">
            <div className="report-id">#NEW</div>
            <div className="result-info">
              <p className="name">NOVA OCORRÊNCIA</p>
              <p className="id">STATUS: EM REDAÇÃO</p>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário de Digitação */}
        <div className="profile-view">
          <div className="report-form">
            <div className="form-group">
              <label>TÍTULO DO INCIDENTE</label>
              <input 
                type="text" 
                name="titulo"
                placeholder="Ex: Assalto a Joalheria / Tráfico"
                className="mdt-input" 
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>LOCALIZAÇÃO</label>
                <input 
                  type="text" 
                  name="local"
                  placeholder="Ex: Praça do Cubo"
                  className="mdt-input" 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>DATA/HORA DO SISTEMA</label>
                <input type="text" className="mdt-input" value={boletim.data} disabled />
              </div>
            </div>

            <div className="form-group">
              <label>RELATÓRIO DOS FATOS</label>
              <textarea 
                name="relato"
                placeholder="Descreva detalhadamente a abordagem e os itens apreendidos..."
                className="mdt-textarea" 
                onChange={handleChange}
              />
            </div>

            <div className="involved-sections">
              <div className="section-card">
                <h3>PRESOS / ENVOLVIDOS</h3>
                <input 
                  type="text" 
                  name="presos"
                  placeholder="Nome ou Passaporte"
                  className="mdt-input" 
                  style={{fontSize: '12px'}}
                  onChange={handleChange}
                />
              </div>
              <div className="section-card">
                <h3>OFICIAIS NA CENA</h3>
                <span className="officer-tag">{boletim.oficiais}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocorrencias;