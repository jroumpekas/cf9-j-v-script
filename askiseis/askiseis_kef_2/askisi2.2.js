// 1. Δήλωση του αντικειμένου teacher (αν το χρειάζεσαι)
const teacher = {
    name: "Jim",
    lastname: "Roumpekas",
    age: 28
};

// 2. Δημιουργία του Map (έξω από συνάρτηση για να είναι καθολικό/global)
const myMap = new Map();

// 3. Προσθήκη στοιχείων
myMap.set('name', 'Μήτσος'); 
myMap.set(10, 'Δέκα'); 

// 4. Εκτύπωση (Τώρα δουλεύει γιατί το myMap είναι ορατό εδώ)
console.log(myMap.get('name')); // Εκτυπώνει: Μήτσος
console.log(myMap.size);        // Εκτυπώνει: 2