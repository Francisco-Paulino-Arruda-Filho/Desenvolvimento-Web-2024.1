// Importar o array de alunos
import alunos from '../CRUD/data/db_aluno';

// Guardar os alunos no localStorage
const saveAlunosToLocalStorage = () => {
  localStorage.setItem('alunos', JSON.stringify(alunos));
  console.log('Alunos salvos no localStorage');
};

// Chamar a função para armazenar os alunos no localStorage
saveAlunosToLocalStorage();

// Recuperar os alunos do localStorage
const getAlunosFromLocalStorage = () => {
  const storedAlunos = localStorage.getItem('alunos');
  if (storedAlunos) {
    return JSON.parse(storedAlunos);
  }
  return []; // Retorna uma lista vazia se não houver dados armazenados
};

// Chamar a função para obter os alunos armazenados
const retrievedAlunos = getAlunosFromLocalStorage();
console.log(retrievedAlunos);
