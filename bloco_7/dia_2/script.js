const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addToObject = (object, key, value) => {
  object[key] = value;
  console.log(object);
};

const listObjectKeys = object => console.log(Object.keys(object));

const objectSize = object => {
  let chaves = Object.keys(object);
  chaves = chaves.length;
  let valores = Object.values(object);
  valores = valores.length;
  console.log(`O Objeto tem ${chaves} chaves e ${valores} valores.`)
}

const listObjectEntries = object => console.log(Object.values(object));

let allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
}
allLessons = Object.assign(allLessons, {lesson1, lesson2, lesson3});

const countStudents = object => {
  let estudantes = 0;
  const lessons = Object.keys(object);
  for (i in lessons) {
    estudantes += object[lessons[i]].numeroEstudantes;
  }
  console.log(estudantes);
}

const keyPlace = (object, number) => {
  const todasChaves = Object.values(object);
  console.log(todasChaves[number]);
}

const verifyPair = (object, key, value) => {
  const entradas = Object.entries(object);
  let result = false;
  for (i in entradas) {
    if (entradas[i][0] === key && entradas[i][1] === value) {
      result = true;
    }
  }
  console.log(result);
}
verifyPair(lesson1, 'mataasdaeria', 'Mp');