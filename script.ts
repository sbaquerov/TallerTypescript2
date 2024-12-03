import { series } from './data';

const tbody = document.getElementById('series-body')!;
const avgSeasonsElement = document.getElementById('average-seasons')!;

// Renderizar las series en la tabla
series.forEach((serie) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tbody.appendChild(row);
});

// Calcular y mostrar el promedio de temporadas
const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
const averageSeasons = totalSeasons / series.length;
avgSeasonsElement.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;