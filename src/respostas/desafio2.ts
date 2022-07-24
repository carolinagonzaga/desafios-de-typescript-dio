// resposta do desafio2
enum Work {
    Actress,
    Baker
}

type Human = {
    name: string,
    age: number,
    profession: Work
}

let person1: Human = {
    name: 'Maria',
    age: 29,
    profession: Work.Actress
};

let person2: Human = {
    name: 'Roberto',
    age: 19,
    profession: Work.Baker
};

let person3: Human = {
    name: 'Laura',
    age: 32,
    profession: Work.Actress
};

let person4: Human = {
    name: "Carlos",
    age: 19,
    profession: Work.Baker
}