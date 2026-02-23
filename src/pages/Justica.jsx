import React, { useState } from 'react';

const Justica = () => {
  // 1. Lista de Crimes para a lógica de soma
  const listaCrimes = [
    { id: 'desobediencia', nome: 'Desobediência', meses: 10, multa: 500 },
    { id: 'direcao', nome: 'Direção Perigosa', meses: 15, multa: 1500 },
    { id: 'arma', nome: 'Porte de Arma', meses: 40, multa: 5000 },
    { id: 'homicidio', nome: 'Homicídio', meses: 120, multa: 15000 },
  ];

  // 2. Estados para controlar o que foi selecionado
  const [crimesSelecionados, setCrimesSelecionados] = useState([]);
  const [reducaoConfissao, setReducaoConfissao] = useState(false);

  // 3. Função para somar tudo
  const handleCheckbox = (id) => {
    if (crimesSelecionados.includes(id)) {
      setCrimesSelecionados(crimesSelecionados.filter(item => item !== id));
    } else {
      setCrimesSelecionados([...crimesSelecionados, id]);
    }
  };

  // Cálculos baseados na seleção
  const penaBase = crimesSelecionados.reduce((acc, id) => {
    const crime = listaCrimes.find(c => c.id === id);
    return acc + (crime ? crime.meses : 0);
  }, 0);

  const multaBase = crimesSelecionados.reduce((acc, id) => {
    const crime = listaCrimes.find(c => c.id === id);
    return acc + (crime ? crime.multa : 0);
  }, 0);

  const penaFinal = reducaoConfissao ? Math.floor(penaBase * 0.8) : penaBase;

  // 4. Função que fala com o Lua
  const enviarParaPrisao = () => {
    console.log("Enviando para o Lua:", { penaFinal, multaBase });
    // Aqui entra o fetch para o seu client.lua no futuro
  };

  return (
    <div className="tab-content animate-in">
      <div className="content-header">
        <h1>Calculadora de Sentença</h1>
      </div>

      <div className="database-grid">
        {/* Coluna da Esquerda: Seleção */}
        <div className="crime-selector">
          <h3>CÓDIGO PENAL</h3>
          <div className="crime-list">
            {listaCrimes.map(crime => (
              <div className="crime-checkbox" key={crime.id}>
                <input 
                  type="checkbox" 
                  id={crime.id} 
                  onChange={() => handleCheckbox(crime.id)}
                />
                <label htmlFor={crime.id}>
                  {crime.nome} <span>({crime.meses} meses / ${crime.multa})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna da Direita: Resumo Estilizado */}
        <div className="sentence-summary">
          <div className="calculator-box">
            <div className="calc-item">
              <span>PENA BASE:</span>
              <span className="value">{penaBase} MESES</span>
            </div>
            <div className="calc-item">
              <span>MULTA TOTAL:</span>
              <span className="value-red">${multaBase.toLocaleString()}</span>
            </div>
            
            <div className="modifier-section">
              <p>ATENUANTES / REDUÇÕES</p>
              <div className="modifier-grid">
                <button 
                  className={`mod-btn ${reducaoConfissao ? 'active' : ''}`}
                  onClick={() => setReducaoConfissao(!reducaoConfissao)}
                >
                  CONFISSÃO (-20%)
                </button>
              </div>
            </div>

            <hr className="divider" />
            
           <div className="total-final">
              <p>PENA FINAL APÓS ATENUANTES</p>
              <h2>{penaFinal} MESES</h2>
              <span className="total-fine-text">MULTA: ${multaBase.toLocaleString()}</span>
            </div>
          </div> {/* Fecha a calculator-box */}

          {/* ESTA DIV ABAIXO É A CHAVE PARA O BOTÃO FICAR CERTO */}
          <div className="warrant-actions" style={{ marginTop: '20px' }}>
            <button className="action-btn-blue" onClick={enviarParaPrisao}>
              ENVIAR PARA PRISÃO
            </button>
          </div>
        </div> {/* Fecha a sentence-summary */}
      </div> {/* Fecha a database-grid */}
    </div>
  );
};

export default Justica;