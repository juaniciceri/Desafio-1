class User {
    constructor(name, lastname, books, pets) {
      this.name = name;
      this.lastname = lastname;
      this.books = books;
      this.pets = pets;
    }
    getFullName(name, lastname) {
      return `Nombre completo: ${name}, ${lastname}`;
    }
    addPet(newPet) {
      this.pets.push(newPet);
    }
    countPets() {
      return this.pets.length;
    }
    addBook(name, author) {
      this.books.push({ name, author });
    }
    getBookNames() {
      return this.books.map(({ name }) => name);
    }
  }
  
  let pets = ["dog", "cat"];
  let books = [
    {
      name: "Todos Los Nombres",
      author: "José Saramango",
    },
    {
      name: "Diario de Ana Frank",
      author: "Ana Frank",
    },
  ];
  
  let user = new User("Juan", "Ciceri", books, pets);
  
  user.addPet("rabbit"); // Agrega nueva mascota
  user.addBook("El Psicoanalista", "John Katzenbach"); // Agrega un libro
  
  
  console.log(user);
  console.log(`Cantidad de mascotas: ${user.countPets()}`) // Cuenta la cantidad de mascotas)
  console.log(user.getBookNames()) // Retorna nombres de los libro