import React, { useState, useEffect } from 'react';
import '../App.css';

const TPSelection = () => {
    const [selectedTP, setSelectedTP] = useState(null);
    const [userCodes, setUserCodes] = useState({});
    const [feedbacks, setFeedbacks] = useState({});
    const [scores, setScores] = useState({});
    const [showSolutions, setShowSolutions] = useState({});
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const tp1Questions = [
        {
            id: 1,
            title: "Exercice 1",
            description: `Ecrire une fonction saisieTableau() qui crée et retourne un tableau à partir de valeurs 
fournies par l'utilisateur. La signature de la fonction se présente comme suit :
public static int[] saisieTableau(){ }`,
            expectedFunction: `public static int[] saisieTableau() {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Entrez la taille du tableau: ");
    int taille = scanner.nextInt();
    int[] tableau = new int[taille];
    
    for(int i = 0; i < taille; i++) {
        System.out.print("Entrez l'élément " + (i+1) + ": ");
        tableau[i] = scanner.nextInt();
    }
    return tableau;
}`
        },
        {
            id: 2,
            title: "Exercice 2",
            description: `Ecrire une fonction afficheTableau() qui permet d'afficher le contenu d'un tableau. La 
signature de la fonction se présente comme suit :
public static void afficheTableau(int[] t) { }`,
            expectedFunction: `public static void afficheTableau(int[] t) {
    for(int i = 0; i < t.length; i++) {
        System.out.print(t[i] + " ");
    }
    System.out.println();
}`
        },
        {
            id: 3,
            title: "Exercice 3",
            description: `Ecrire une fonction Minimum() qui cherche le minimum à partir d'un tableau fourni 
en paramètre. La signature de la fonction se présente comme suit :
public static int Minimum(int[] t) { }

Ecrire une fonction MinimumTest() qui permet de tester la fonction Minimum(). La 
signature de la fonction se présente comme suit :
public static void MinimumTest() { }`,
            expectedFunction: `public static int Minimum(int[] t) {
    if (t.length == 0) {
        throw new IllegalArgumentException("Le tableau est vide");
    }
    int min = t[0];
    for(int i = 1; i < t.length; i++) {
        if(t[i] < min) {
            min = t[i];
        }
    }
    return min;
}

public static void MinimumTest() {
    int[] test1 = {5, 2, 9, 1, 7, 6, 3};
    int[] test2 = {10};
    int[] test3 = {-3, 0, -5, 2, -1};
    
    System.out.println("Test 1: " + (Minimum(test1) == 1));
    System.out.println("Test 2: " + (Minimum(test2) == 10));
    System.out.println("Test 3: " + (Minimum(test3) == -5));
}`
        },
        {
            id: 4,
            title: "Exercice 4",
            description: `Ecrire une fonction Occurrences() qui cherche le nombre d'occurrences d'un nombre 
donné dans un tableau. La signature de la fonction se présente comme suit :
public static int Occurences(int cible, int[] t) { }

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void OccurencesTest() { }`,
            expectedFunction: `public static int Occurences(int cible, int[] t) {
    int count = 0;
    for(int element : t) {
        if(element == cible) {
            count++;
        }
    }
    return count;
}

public static void OccurencesTest() {
    int[] test1 = {1, 2, 2, 3, 2, 4, 2, 5};
    int[] test2 = {1, 3, 5, 7};
    int[] test3 = {2, 2, 2};
    
    System.out.println("Test 1: " + (Occurences(2, test1) == 4));
    System.out.println("Test 2: " + (Occurences(4, test2) == 0));
    System.out.println("Test 3: " + (Occurences(2, test3) == 3));
}`
        },
        {
            id: 5,
            title: "Exercice 5",
            description: `Ecrire une fonction chercher() qui permet de chercher un nombre dans un tableau. La 
signature de la fonction se présente comme suit :
public static int chercher(int nombre, int[] t) { }

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void chercherTest(){ }`,
            expectedFunction: `public static int chercher(int nombre, int[] t) {
    for(int i = 0; i < t.length; i++) {
        if(t[i] == nombre) {
            return i;
        }
    }
    return -1;
}

public static void chercherTest() {
    int[] test1 = {1, 3, 5, 7, 9};
    int[] test2 = {2, 4, 6, 8, 10};
    int[] test3 = {1, 1, 1, 1, 1};
    
    System.out.println("Test 1: " + (chercher(5, test1) == 2));
    System.out.println("Test 2: " + (chercher(3, test2) == -1));
    System.out.println("Test 3: " + (chercher(1, test3) == 0));
}`
        },
        {
            id: 6,
            title: "Exercice 6",
            description: `Ecrire une fonction tabImpairs() qui permet de créer et retourner un tableau 
constitué de nombres impairs à partir d'un autre tableau fourni en paramètre par 
l'utilisateur. La signature de la fonction se présente comme suit :
public static int[] tabImpairs(int[] t) { }

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void tabImpairsTest() { }`,
            expectedFunction: `public static int[] tabImpairs(int[] t) {
    // Compter d'abord le nombre d'impairs
    int count = 0;
    for(int num : t) {
        if(num % 2 != 0) {
            count++;
        }
    }
    
    // Créer et remplir le nouveau tableau
    int[] impairs = new int[count];
    int index = 0;
    for(int num : t) {
        if(num % 2 != 0) {
            impairs[index++] = num;
        }
    }
    return impairs;
}

public static void tabImpairsTest() {
    int[] test1 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int[] test2 = {2, 4, 6, 8, 10};
    int[] test3 = {1, 3, 5, 7, 9};
    
    int[] result1 = tabImpairs(test1);
    int[] result2 = tabImpairs(test2);
    int[] result3 = tabImpairs(test3);
    
    System.out.println("Test 1: " + (result1.length == 5 && result1[0] == 1 && result1[4] == 9));
    System.out.println("Test 2: " + (result2.length == 0));
    System.out.println("Test 3: " + (result3.length == 5 && result3[0] == 1 && result3[4] == 9));
}`
        },
        {
            id: 7,
            title: "Exercice 7",
            description: `Ecrire une fonction triSelection() qui permet de trier un tableau selon l'algorithme de 
tri par sélection. La signature de la fonction se présente comme suit :
public static void triSelection(int[] t) { }

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void triSelectionTest() { }`,
            expectedFunction: `public static void triSelection(int[] t) {
    for(int i = 0; i < t.length - 1; i++) {
        int minIndex = i;
        for(int j = i + 1; j < t.length; j++) {
            if(t[j] < t[minIndex]) {
                minIndex = j;
            }
        }
        // Échanger les éléments
        if(minIndex != i) {
            int temp = t[i];
            t[i] = t[minIndex];
            t[minIndex] = temp;
        }
    }
}

public static void triSelectionTest() {
    int[] test1 = {64, 25, 12, 22, 11};
    int[] test2 = {5, 4, 3, 2, 1};
    int[] test3 = {1};
    
    triSelection(test1);
    triSelection(test2);
    triSelection(test3);
    
    // Vérifier si les tableaux sont triés
    boolean test1Sorted = true;
    boolean test2Sorted = true;
    
    for(int i = 0; i < test1.length - 1; i++) {
        if(test1[i] > test1[i + 1]) {
            test1Sorted = false;
            break;
        }
    }
    
    for(int i = 0; i < test2.length - 1; i++) {
        if(test2[i] > test2[i + 1]) {
            test2Sorted = false;
            break;
        }
    }
    
    System.out.println("Test 1: " + test1Sorted);
    System.out.println("Test 2: " + test2Sorted);
    System.out.println("Test 3: " + (test3[0] == 1));
}`
        }
    ];

    const tp2Questions = [
        {
            id: 1,
            title: "Exercice 1",
            description: `Ecrire une procédure transformerArgent() qui prend en paramètre un nombre entier 
représentant un montant en dirhams et affiche combien de billets de 200, de 100, de 50, de 
20 dirhams il contient, le reste il le laisse en dirhams. La signature de la fonction se présente 
comme suit :
public static void transformerArgent(int argents)

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void transformerArgentTest()`,
            expectedFunction: `public static void transformerArgent(int argents) {
    int reste = argents;
    
    // Billets de 200
    int billets200 = reste / 200;
    reste = reste % 200;
    
    // Billets de 100
    int billets100 = reste / 100;
    reste = reste % 100;
    
    // Billets de 50
    int billets50 = reste / 50;
    reste = reste % 50;
    
    // Billets de 20
    int billets20 = reste / 20;
    reste = reste % 20;
    
    // Affichage des résultats
    System.out.println("Pour " + argents + " dirhams, il faut :");
    System.out.println(billets200 + " billets de 200 dirhams");
    System.out.println(billets100 + " billets de 100 dirhams");
    System.out.println(billets50 + " billets de 50 dirhams");
    System.out.println(billets20 + " billets de 20 dirhams");
    System.out.println("Reste : " + reste + " dirhams");
}

public static void transformerArgentTest() {
    System.out.println("Test avec 785 dirhams:");
    transformerArgent(785);
    
    System.out.println("\\nTest avec 1234 dirhams:");
    transformerArgent(1234);
}`
        },
        {
            id: 2,
            title: "Exercice 2",
            description: `Ecrire une fonction estParfait() permettant de dire si un nombre est parfait ou non. Un 
nombre est dit parfait si la somme de ses diviseurs strictement inferieur à lui est égale à lui-
même. Exemple : On a Diviseurs(6)={1,2,3} et 1+2+3=6, Donc 6 est parfait. La signature de la 
fonction se présente comme suit :
public static boolean estParfait(int nombre){}

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void estParfaitTest(){}`,
            expectedFunction: `public static boolean estParfait(int nombre) {
    if (nombre <= 1) return false;
    
    int sommeDiviseurs = 1; // 1 est toujours un diviseur
    
    for (int i = 2; i <= nombre/2; i++) {
        if (nombre % i == 0) {
            sommeDiviseurs += i;
        }
    }
    
    return sommeDiviseurs == nombre;
}

public static void estParfaitTest() {
    int[] testNumbers = {6, 28, 12, 496};
    
    for (int num : testNumbers) {
        System.out.println(num + " est" + (estParfait(num) ? "" : " n'est pas") + " un nombre parfait");
    }
}`
        },
        {
            id: 3,
            title: "Exercice 3",
            description: `Ecrire une fonction produitTableau() qui calcule le produit des éléments d'un tableau. La 
signature de la fonction se présente comme suit :
public static int produitTableau(int[] t) { }

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void produitTableauTest() {}`,
            expectedFunction: `public static int produitTableau(int[] t) {
    if (t == null || t.length == 0) {
        throw new IllegalArgumentException("Le tableau ne peut pas être vide");
    }
    
    int produit = 1;
    for (int element : t) {
        produit *= element;
    }
    return produit;
}

public static void produitTableauTest() {
    int[] test1 = {1, 2, 3, 4, 5};
    int[] test2 = {2, 3, 4};
    int[] test3 = {-2, 5, -3};
    
    System.out.println("Test 1: " + produitTableau(test1)); // 120
    System.out.println("Test 2: " + produitTableau(test2)); // 24
    System.out.println("Test 3: " + produitTableau(test3)); // 30
}`
        },
        {
            id: 4,
            title: "Exercice 4",
            description: `Ecrire une fonction estInverse() qui prends deux tableaux d'entiers en paramètre et 
vérifie si l'un est l'inverse de l'autre. La signature de la fonction se présente comme suit :
public static boolean estInverse(int[] t1, int[] t2) {}

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void estInverseTest() {}`,
            expectedFunction: `public static boolean estInverse(int[] t1, int[] t2) {
    if (t1 == null || t2 == null || t1.length != t2.length) {
        return false;
    }
    
    for (int i = 0; i < t1.length; i++) {
        if (t1[i] != t2[t2.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

public static void estInverseTest() {
    int[] tab1 = {1, 2, 3, 4, 5};
    int[] tab2 = {5, 4, 3, 2, 1};
    int[] tab3 = {1, 2, 3};
    
    System.out.println("Test 1 (devrait être true): " + estInverse(tab1, tab2));
    System.out.println("Test 2 (devrait être false): " + estInverse(tab1, tab3));
    System.out.println("Test 3 (devrait être false): " + estInverse(tab1, tab1));
}`
        },
        {
            id: 5,
            title: "Exercice 5",
            description: `Ecrire une fonction decalerTableau() qui permet de décaler un tableau d'un certain nombre 
de positions, les éléments sortis de la fin du tableau rentrent par le début. La signature de la 
fonction se présente comme suit :
public static void decalerTableau(int[] t, int m)

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void decalerTableauTest() {}`,
            expectedFunction: `public static void decalerTableau(int[] t, int m) {
    if (t == null || t.length <= 1) return;
    
    // Normaliser m pour éviter les rotations inutiles
    m = m % t.length;
    if (m < 0) m += t.length;
    
    // Créer un tableau temporaire pour stocker les éléments déplacés
    int[] temp = new int[m];
    
    // Sauvegarder les derniers m éléments
    for (int i = 0; i < m; i++) {
        temp[i] = t[t.length - m + i];
    }
    
    // Déplacer les éléments vers la droite
    for (int i = t.length - 1; i >= m; i--) {
        t[i] = t[i - m];
    }
    
    // Placer les éléments sauvegardés au début
    for (int i = 0; i < m; i++) {
        t[i] = temp[i];
    }
}

public static void decalerTableauTest() {
    int[] test1 = {1, 2, 3, 4, 5};
    System.out.println("Tableau original: " + Arrays.toString(test1));
    
    decalerTableau(test1, 2);
    System.out.println("Après décalage de 2: " + Arrays.toString(test1));
    
    int[] test2 = {10, 20, 30, 40, 50};
    System.out.println("\\nTableau original: " + Arrays.toString(test2));
    
    decalerTableau(test2, 3);
    System.out.println("Après décalage de 3: " + Arrays.toString(test2));
}`
        },
        {
            id: 6,
            title: "Exercice 6",
            description: `Ecrire une produitAntiDiagonale() qui retourne le produit de l'antidiagonale d'un tableau à 
deux dimensions. La signature de la fonction se présente comme suit :
public static int produitAntiDiagonale(int[][] t) {}

Testez la fonction ci-dessus par une fonction de test dont la signature est comme suit :
public static void produitAntiDiagonaleTest(){}`,
            expectedFunction: `public static int produitAntiDiagonale(int[][] t) {
    if (t == null || t.length == 0 || t.length != t[0].length) {
        throw new IllegalArgumentException("Le tableau doit être carré");
    }
    
    int produit = 1;
    int n = t.length;
    
    for (int i = 0; i < n; i++) {
        produit *= t[i][n - 1 - i];
    }
    
    return produit;
}

public static void produitAntiDiagonaleTest() {
    int[][] test1 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    int[][] test2 = {
        {2, 0},
        {0, 2}
    };
    
    System.out.println("Test 1: " + produitAntiDiagonale(test1)); // 3 * 5 * 7 = 105
    System.out.println("Test 2: " + produitAntiDiagonale(test2)); // 2 * 2 = 4
}`
        }
    ];

    const tp3Questions = [
        {
            id: 1,
            title: "Exercice 1 : Création d'objets et Encapsulation",
            description: `Créez une classe Voiture avec les attributs suivants :
• marque (String)
• modele (String)
• annee (int)
Rendez ces attributs privés et créez des getters et setters pour les manipuler.
Dans la méthode main, créez un objet Voiture, définissez ses attributs via les setters et
affichez-les avec les getters.`,
            expectedFunction: `public class Voiture {
    private String marque;
    private String modele;
    private int annee;
    
    // Getters
    public String getMarque() {
        return marque;
    }
    
    public String getModele() {
        return modele;
    }
    
    public int getAnnee() {
        return annee;
    }
    
    // Setters
    public void setMarque(String marque) {
        this.marque = marque;
    }
    
    public void setModele(String modele) {
        this.modele = modele;
    }
    
    public void setAnnee(int annee) {
        this.annee = annee;
    }
}

public class Main {
    public static void main(String[] args) {
        Voiture maVoiture = new Voiture();
        
        // Utilisation des setters
        maVoiture.setMarque("Toyota");
        maVoiture.setModele("Corolla");
        maVoiture.setAnnee(2022);
        
        // Utilisation des getters
        System.out.println("Marque: " + maVoiture.getMarque());
        System.out.println("Modèle: " + maVoiture.getModele());
        System.out.println("Année: " + maVoiture.getAnnee());
    }
}`
        },
        {
            id: 2,
            title: "Exercice 2 : Constructeurs et Surcharge",
            description: `Créez une classe Livre avec les attributs :
• titre (String)
• auteur (String)
• anneePublication (int)
Ajoutez trois constructeurs :
1. Un constructeur avec tous les paramètres.
2. Un constructeur avec seulement titre et auteur, et anneePublication fixé à 2020 par défaut.
3. Un constructeur sans paramètre, assignant "Inconnu" à titre et auteur, et 2000 à anneePublication.
Dans main, testez ces constructeurs en créant plusieurs objets.`,
            expectedFunction: `public class Livre {
    private String titre;
    private String auteur;
    private int anneePublication;
    
    // Constructeur complet
    public Livre(String titre, String auteur, int anneePublication) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
    }
    
    // Constructeur avec titre et auteur
    public Livre(String titre, String auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = 2020;
    }
    
    // Constructeur par défaut
    public Livre() {
        this.titre = "Inconnu";
        this.auteur = "Inconnu";
        this.anneePublication = 2000;
    }
    
    // Méthode pour afficher les informations
    public void afficherInfos() {
        System.out.println("Titre: " + titre);
        System.out.println("Auteur: " + auteur);
        System.out.println("Année de publication: " + anneePublication);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        // Test des différents constructeurs
        Livre livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943);
        Livre livre2 = new Livre("1984", "George Orwell");
        Livre livre3 = new Livre();
        
        System.out.println("Livre 1:");
        livre1.afficherInfos();
        
        System.out.println("Livre 2:");
        livre2.afficherInfos();
        
        System.out.println("Livre 3:");
        livre3.afficherInfos();
    }
}`
        },
        {
            id: 3,
            title: "Exercice 3 : Getters/Setters et Vérification des Données",
            description: `Créez une classe CompteBancaire avec les attributs :
• numeroCompte (String)
• solde (double)
Ajoutez des getters et setters et assurez-vous que :
• Le solde ne peut jamais être négatif (dans le setter).
• Ajoutez une méthode deposer(double montant) qui ajoute de l'argent.
• Ajoutez une méthode retirer(double montant) qui enlève de l'argent seulement si le solde est suffisant.
Dans main, créez un compte, essayez de déposer et retirer de l'argent et testez les restrictions.`,
            expectedFunction: `public class CompteBancaire {
    private String numeroCompte;
    private double solde;
    
    public CompteBancaire(String numeroCompte) {
        this.numeroCompte = numeroCompte;
        this.solde = 0.0;
    }
    
    // Getters
    public String getNumeroCompte() {
        return numeroCompte;
    }
    
    public double getSolde() {
        return solde;
    }
    
    // Setter pour le solde avec vérification
    public void setSolde(double solde) {
        if (solde >= 0) {
            this.solde = solde;
        } else {
            System.out.println("Erreur: Le solde ne peut pas être négatif");
        }
    }
    
    // Méthode pour déposer de l'argent
    public void deposer(double montant) {
        if (montant > 0) {
            this.solde += montant;
            System.out.println("Dépôt de " + montant + "€ effectué");
        } else {
            System.out.println("Erreur: Le montant du dépôt doit être positif");
        }
    }
    
    // Méthode pour retirer de l'argent
    public boolean retirer(double montant) {
        if (montant > 0 && this.solde >= montant) {
            this.solde -= montant;
            System.out.println("Retrait de " + montant + "€ effectué");
            return true;
        } else {
            System.out.println("Erreur: Retrait impossible - Solde insuffisant ou montant invalide");
            return false;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        CompteBancaire compte = new CompteBancaire("CB001");
        
        // Test des opérations
        compte.deposer(1000);
        System.out.println("Solde: " + compte.getSolde() + "€");
        
        compte.retirer(500);
        System.out.println("Solde: " + compte.getSolde() + "€");
        
        // Test des restrictions
        compte.retirer(1000); // Devrait échouer
        compte.setSolde(-100); // Devrait échouer
        System.out.println("Solde final: " + compte.getSolde() + "€");
    }
}`
        },
        {
            id: 4,
            title: "Exercice 4 : Encapsulation et Sécurité des Données",
            description: `Créez une classe Utilisateur avec :
• identifiant (String)
• motDePasse (String)
Mettez les attributs en private et :
1. Ajoutez un setter pour motDePasse, qui ne modifie la valeur que si elle fait au moins 8 caractères.
2. Ajoutez une méthode afficherInfos() qui ne retourne pas le mot de passe mais affiche "Identifiant: [identifiant]".
Dans main, testez la classe en créant un utilisateur et en essayant de lui attribuer un mot de passe trop court.`,
            expectedFunction: `public class Utilisateur {
    private String identifiant;
    private String motDePasse;
    
    public Utilisateur(String identifiant) {
        this.identifiant = identifiant;
    }
    
    // Getter pour l'identifiant
    public String getIdentifiant() {
        return identifiant;
    }
    
    // Setter pour l'identifiant
    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }
    
    // Setter sécurisé pour le mot de passe
    public boolean setMotDePasse(String motDePasse) {
        if (motDePasse != null && motDePasse.length() >= 8) {
            this.motDePasse = motDePasse;
            return true;
        } else {
            System.out.println("Erreur: Le mot de passe doit faire au moins 8 caractères");
            return false;
        }
    }
    
    // Méthode pour afficher les informations de manière sécurisée
    public void afficherInfos() {
        System.out.println("Identifiant: " + identifiant);
    }
}

public class Main {
    public static void main(String[] args) {
        Utilisateur user = new Utilisateur("john_doe");
        
        // Test avec un mot de passe trop court
        System.out.println("Test avec mot de passe court:");
        boolean result1 = user.setMotDePasse("court");
        System.out.println("Changement réussi: " + result1);
        
        // Test avec un mot de passe valide
        System.out.println("\\nTest avec mot de passe valide:");
        boolean result2 = user.setMotDePasse("motdepasse123");
        System.out.println("Changement réussi: " + result2);
        
        // Affichage des informations
        System.out.println("\\nInformations de l'utilisateur:");
        user.afficherInfos();
    }
}`
        },
        {
            id: 5,
            title: "Exercice 5 : Surcharge de Méthodes",
            description: `Créez une classe Rectangle avec les attributs :
• longueur (double)
• largeur (double)
Ajoutez :
1. Une méthode calculerSurface() qui retourne longueur * largeur.
2. Une surcharge calculerSurface(double facteur) qui applique un coefficient multiplicateur à la surface.
Dans main, créez un rectangle et testez les différentes versions de calculerSurface().`,
            expectedFunction: `public class Rectangle {
    private double longueur;
    private double largeur;
    
    public Rectangle(double longueur, double largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }
    
    // Méthode de base pour calculer la surface
    public double calculerSurface() {
        return longueur * largeur;
    }
    
    // Surcharge de la méthode avec facteur multiplicateur
    public double calculerSurface(double facteur) {
        return calculerSurface() * facteur;
    }
    
    // Getters et Setters
    public double getLongueur() {
        return longueur;
    }
    
    public void setLongueur(double longueur) {
        this.longueur = longueur;
    }
    
    public double getLargeur() {
        return largeur;
    }
    
    public void setLargeur(double largeur) {
        this.largeur = largeur;
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(5.0, 3.0);
        
        // Test de la méthode de base
        System.out.println("Surface normale: " + rectangle.calculerSurface());
        
        // Test de la méthode surchargée avec différents facteurs
        System.out.println("Surface avec facteur 2: " + rectangle.calculerSurface(2));
        System.out.println("Surface avec facteur 0.5: " + rectangle.calculerSurface(0.5));
    }
}`
        }
    ];

    const tp3v2Questions = [
        {
            id: "ex1",
            title: "Exercice 1 : Organisation en Packages",
            description: `Objectif : Apprendre à organiser son code avec des packages.
Énoncé :
Crée deux packages :
• ma.univ_casablanca.animaux
• ma.univ_casablanca.application
Dans le package ma.univ_casablanca.animaux, crée une classe Animal avec les attributs
suivants :
• String nom
• int age
Crée une autre classe Chien qui hérite de Animal, avec un attribut supplémentaire String
race.
Dans le package ma.univ_casablanca.application, crée une classe Application avec
une méthode main permettant de créer un objet Chien et d'afficher ses informations.`,
            files: [
                {
                    id: "ex1_animal",
                    name: "Animal.java",
                    package: "ma.univ_casablanca.animaux",
                    expectedCode: `package ma.univ_casablanca.animaux;

public class Animal {
    private String nom;
    private int age;
    
    public Animal(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}`
                },
                {
                    id: "ex1_chien",
                    name: "Chien.java",
                    package: "ma.univ_casablanca.animaux",
                    expectedCode: `package ma.univ_casablanca.animaux;

public class Chien extends Animal {
    private String race;
    
    public Chien(String nom, int age, String race) {
        super(nom, age);
        this.race = race;
    }
    
    public String getRace() {
        return race;
    }
    
    public void setRace(String race) {
        this.race = race;
    }
    
    @Override
    public String toString() {
        return "Chien{nom='" + getNom() + "', age=" + getAge() + ", race='" + race + "'}";
    }
}`
                },
                {
                    id: "ex1_app",
                    name: "Application.java",
                    package: "ma.univ_casablanca.application",
                    expectedCode: `package ma.univ_casablanca.application;

import ma.univ_casablanca.animaux.Chien;

public class Application {
    public static void main(String[] args) {
        Chien monChien = new Chien("Rex", 3, "Berger Allemand");
        System.out.println("Informations du chien :");
        System.out.println("Nom : " + monChien.getNom());
        System.out.println("Age : " + monChien.getAge());
        System.out.println("Race : " + monChien.getRace());
        System.out.println("ToString : " + monChien.toString());
    }
}`
                }
            ]
        },
        {
            id: "ex2",
            title: "Exercice 2 : Héritage et Redéfinition de Méthodes",
            description: `Objectif : Comprendre l'héritage et la redéfinition de méthodes.
Énoncé :
Crée une classe Employe avec :
• String nom
• double salaire
et une méthode :
• public String getInfos() qui retourne une chaîne de caractères contenant le nom
et le salaire.
Crée une classe Manager qui hérite de Employe et ajoute :
• int nbSubordonnes
Redéfinis la méthode getInfos() pour qu'elle affiche aussi le nombre de subordonnés.
Dans la classe main, crée un Manager et un Employe, puis affiche leurs infos.`,
            files: [
                {
                    id: "ex2_employe",
                    name: "Employe.java",
                    package: "ma.univ_casablanca.entreprise",
                    expectedCode: `package ma.univ_casablanca.entreprise;

public class Employe {
    private String nom;
    private double salaire;
    
    public Employe(String nom, double salaire) {
        this.nom = nom;
        this.salaire = salaire;
    }
    
    public String getInfos() {
        return "Nom: " + nom + ", Salaire: " + salaire + " DH";
    }
    
    // Getters et Setters
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public double getSalaire() {
        return salaire;
    }
    
    public void setSalaire(double salaire) {
        this.salaire = salaire;
    }
}`
                },
                {
                    id: "ex2_manager",
                    name: "Manager.java",
                    package: "ma.univ_casablanca.entreprise",
                    expectedCode: `package ma.univ_casablanca.entreprise;

public class Manager extends Employe {
    private int nbSubordonnes;
    
    public Manager(String nom, double salaire, int nbSubordonnes) {
        super(nom, salaire);
        this.nbSubordonnes = nbSubordonnes;
    }
    
    @Override
    public String getInfos() {
        return super.getInfos() + ", Nombre de subordonnés: " + nbSubordonnes;
    }
    
    public int getNbSubordonnes() {
        return nbSubordonnes;
    }
    
    public void setNbSubordonnes(int nbSubordonnes) {
        this.nbSubordonnes = nbSubordonnes;
    }
}`
                },
                {
                    id: "ex2_main",
                    name: "Main.java",
                    package: "ma.univ_casablanca.entreprise",
                    expectedCode: `package ma.univ_casablanca.entreprise;

public class Main {
    public static void main(String[] args) {
        Employe employe = new Employe("Ahmed", 8000.0);
        Manager manager = new Manager("Karim", 15000.0, 5);
        
        System.out.println("Informations de l'employé:");
        System.out.println(employe.getInfos());
        
        System.out.println("\\nInformations du manager:");
        System.out.println(manager.getInfos());
    }
}`
                }
            ]
        },
        {
            id: "ex3",
            title: "Exercice 3 : Redéfinition des Méthodes de la classe Object",
            description: `Objectif : Apprendre à redéfinir toString(), equals() et hashCode().
Énoncé :
Crée une classe Etudiant avec les attributs :
• String nom
• String cne
• int annee
Redéfinis les méthodes suivantes :
• toString() pour un affichage lisible de l'objet
• equals(Object obj) pour comparer deux Etudiant sur la base du nom et du CNE
• hashCode() de manière cohérente avec equals
Teste ces méthodes dans un main.`,
            files: [
                {
                    id: "ex3_etudiant",
                    name: "Etudiant.java",
                    package: "ma.univ_casablanca.scolarite",
                    expectedCode: `package ma.univ_casablanca.scolarite;

import java.util.Objects;

public class Etudiant {
    private String nom;
    private String cne;
    private int annee;
    
    public Etudiant(String nom, String cne, int annee) {
        this.nom = nom;
        this.cne = cne;
        this.annee = annee;
    }
    
    @Override
    public String toString() {
        return "Etudiant{" +
               "nom='" + nom + "'" +
               ", cne='" + cne + "'" +
               ", annee=" + annee +
               '}';
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Etudiant etudiant = (Etudiant) obj;
        return Objects.equals(nom, etudiant.nom) &&
               Objects.equals(cne, etudiant.cne);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(nom, cne);
    }
    
    // Getters et Setters
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getCne() {
        return cne;
    }
    
    public void setCne(String cne) {
        this.cne = cne;
    }
    
    public int getAnnee() {
        return annee;
    }
    
    public void setAnnee(int annee) {
        this.annee = annee;
    }
}`
                },
                {
                    id: "ex3_main",
                    name: "Main.java",
                    package: "ma.univ_casablanca.scolarite",
                    expectedCode: `package ma.univ_casablanca.scolarite;

public class Main {
    public static void main(String[] args) {
        Etudiant etudiant1 = new Etudiant("Mohamed", "P123456", 2);
        Etudiant etudiant2 = new Etudiant("Mohamed", "P123456", 3);
        Etudiant etudiant3 = new Etudiant("Ahmed", "P123456", 2);
        
        // Test toString()
        System.out.println("Test toString():");
        System.out.println(etudiant1);
        
        // Test equals()
        System.out.println("\\nTest equals():");
        System.out.println("etudiant1 equals etudiant2: " + etudiant1.equals(etudiant2));
        System.out.println("etudiant1 equals etudiant3: " + etudiant1.equals(etudiant3));
        
        // Test hashCode()
        System.out.println("\\nTest hashCode():");
        System.out.println("etudiant1 hashCode: " + etudiant1.hashCode());
        System.out.println("etudiant2 hashCode: " + etudiant2.hashCode());
        System.out.println("etudiant3 hashCode: " + etudiant3.hashCode());
    }
}`
                }
            ]
        },
        {
            id: "ex4",
            title: "Exercice 4 : Utilisation de instanceof dans un contexte polymorphe",
            description: `Objectif : Comprendre le polymorphisme et l'utilisation de instanceof.
Énoncé :
Crée une classe Utilisateur avec une méthode afficherType().
Crée deux sous-classes :
• Administrateur
• Professeur
Dans une classe de test, crée une liste de Utilisateur contenant des instances de
Administrateur et de Professeur.
Parcours la liste et utilise instanceof pour :
• Identifier le type de chaque utilisateur
• Afficher un message spécifique selon le type`,
            files: [
                {
                    id: "ex4_utilisateur",
                    name: "Utilisateur.java",
                    package: "ma.univ_casablanca.users",
                    expectedCode: `package ma.univ_casablanca.users;

public class Utilisateur {
    private String nom;
    
    public Utilisateur(String nom) {
        this.nom = nom;
    }
    
    public void afficherType() {
        System.out.println("Je suis un utilisateur standard");
    }
    
    public String getNom() {
        return nom;
    }
}`
                },
                {
                    id: "ex4_administrateur",
                    name: "Administrateur.java",
                    package: "ma.univ_casablanca.users",
                    expectedCode: `package ma.univ_casablanca.users;

public class Administrateur extends Utilisateur {
    private String niveau;
    
    public Administrateur(String nom, String niveau) {
        super(nom);
        this.niveau = niveau;
    }
    
    @Override
    public void afficherType() {
        System.out.println("Je suis un administrateur de niveau " + niveau);
    }
}`
                },
                {
                    id: "ex4_professeur",
                    name: "Professeur.java",
                    package: "ma.univ_casablanca.users",
                    expectedCode: `package ma.univ_casablanca.users;

public class Professeur extends Utilisateur {
    private String matiere;
    
    public Professeur(String nom, String matiere) {
        super(nom);
        this.matiere = matiere;
    }
    
    @Override
    public void afficherType() {
        System.out.println("Je suis un professeur de " + matiere);
    }
}`
                },
                {
                    id: "ex4_main",
                    name: "Main.java",
                    package: "ma.univ_casablanca.users",
                    expectedCode: `package ma.univ_casablanca.users;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Utilisateur> utilisateurs = new ArrayList<>();
        
        utilisateurs.add(new Administrateur("Karim", "Super Admin"));
        utilisateurs.add(new Professeur("Ahmed", "Mathématiques"));
        utilisateurs.add(new Professeur("Fatima", "Physique"));
        utilisateurs.add(new Administrateur("Sara", "Admin"));
        
        for (Utilisateur user : utilisateurs) {
            System.out.println("\\nUtilisateur: " + user.getNom());
            user.afficherType();
            
            if (user instanceof Administrateur) {
                System.out.println("C'est un administrateur");
            } else if (user instanceof Professeur) {
                System.out.println("C'est un professeur");
            }
        }
    }
}`
                }
            ]
        },
        {
            id: "ex5",
            title: "Exercice 5 : Mini-Application de Gestion d'un Zoo Marocain",
            description: `Objectif : Réunir tous les concepts dans un projet cohérent.
Énoncé :
Crée un mini-système de gestion d'animaux d'un zoo au Maroc :

1. Package ma.univ_casablanca.zoo.animaux :
o Classe Animal (nom, age) avec toString(), equals(), hashCode()
o Sous-classes : Lion, Elephant, Autruche avec redéfinition de toString()
2. Package ma.univ_casablanca.zoo.gestion :
o Classe Zoo qui contient une liste d'Animal
o Méthodes :
▪ ajouterAnimal(Animal a)
▪ afficherAnimaux()
▪ afficherAnimauxParType() qui utilise instanceof
3. Classe Main dans ma.univ_casablanca.zoo.app pour tester le tout.`,
            files: [
                {
                    id: "ex5_animal",
                    name: "Animal.java",
                    package: "ma.univ_casablanca.zoo.animaux",
                    expectedCode: `package ma.univ_casablanca.zoo.animaux;

import java.util.Objects;

public class Animal {
    private String nom;
    private int age;
    
    public Animal(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return "Animal{nom='" + nom + "', age=" + age + "}";
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Animal animal = (Animal) obj;
        return age == animal.age && Objects.equals(nom, animal.nom);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(nom, age);
    }
    
    public String getNom() {
        return nom;
    }
    
    public int getAge() {
        return age;
    }
}`
                },
                {
                    id: "ex5_lion",
                    name: "Lion.java",
                    package: "ma.univ_casablanca.zoo.animaux",
                    expectedCode: `package ma.univ_casablanca.zoo.animaux;

public class Lion extends Animal {
    private String origine;
    
    public Lion(String nom, int age, String origine) {
        super(nom, age);
        this.origine = origine;
    }
    
    @Override
    public String toString() {
        return "Lion{nom='" + getNom() + "', age=" + getAge() + ", origine='" + origine + "'}";
    }
}`
                },
                {
                    id: "ex5_elephant",
                    name: "Elephant.java",
                    package: "ma.univ_casablanca.zoo.animaux",
                    expectedCode: `package ma.univ_casablanca.zoo.animaux;

public class Elephant extends Animal {
    private double poids;
    
    public Elephant(String nom, int age, double poids) {
        super(nom, age);
        this.poids = poids;
    }
    
    @Override
    public String toString() {
        return "Elephant{nom='" + getNom() + "', age=" + getAge() + ", poids=" + poids + "kg}";
    }
}`
                },
                {
                    id: "ex5_autruche",
                    name: "Autruche.java",
                    package: "ma.univ_casablanca.zoo.animaux",
                    expectedCode: `package ma.univ_casablanca.zoo.animaux;

public class Autruche extends Animal {
    private double hauteur;
    
    public Autruche(String nom, int age, double hauteur) {
        super(nom, age);
        this.hauteur = hauteur;
    }
    
    @Override
    public String toString() {
        return "Autruche{nom='" + getNom() + "', age=" + getAge() + ", hauteur=" + hauteur + "m}";
    }
}`
                },
                {
                    id: "ex5_zoo",
                    name: "Zoo.java",
                    package: "ma.univ_casablanca.zoo.gestion",
                    expectedCode: `package ma.univ_casablanca.zoo.gestion;

import ma.univ_casablanca.zoo.animaux.*;
import java.util.ArrayList;
import java.util.List;

public class Zoo {
    private List<Animal> animaux;
    
    public Zoo() {
        this.animaux = new ArrayList<>();
    }
    
    public void ajouterAnimal(Animal a) {
        animaux.add(a);
        System.out.println("Animal ajouté: " + a.getNom());
    }
    
    public void afficherAnimaux() {
        System.out.println("Liste des animaux du zoo:");
        for (Animal animal : animaux) {
            System.out.println(animal);
        }
    }
    
    public void afficherAnimauxParType() {
        System.out.println("\\nListe des animaux par type:");
        
        System.out.println("\\nLions:");
        for (Animal animal : animaux) {
            if (animal instanceof Lion) {
                System.out.println(animal);
            }
        }
        
        System.out.println("\\nÉléphants:");
        for (Animal animal : animaux) {
            if (animal instanceof Elephant) {
                System.out.println(animal);
            }
        }
        
        System.out.println("\\nAutruches:");
        for (Animal animal : animaux) {
            if (animal instanceof Autruche) {
                System.out.println(animal);
            }
        }
    }
}`
                },
                {
                    id: "ex5_main",
                    name: "Main.java",
                    package: "ma.univ_casablanca.zoo.app",
                    expectedCode: `package ma.univ_casablanca.zoo.app;

import ma.univ_casablanca.zoo.animaux.*;
import ma.univ_casablanca.zoo.gestion.Zoo;

public class Main {
    public static void main(String[] args) {
        Zoo zoo = new Zoo();
        
        // Ajout des animaux
        zoo.ajouterAnimal(new Lion("Simba", 5, "Atlas"));
        zoo.ajouterAnimal(new Elephant("Dumbo", 8, 2500.5));
        zoo.ajouterAnimal(new Autruche("Speedy", 3, 2.1));
        zoo.ajouterAnimal(new Lion("Mufasa", 10, "Sahara"));
        
        // Affichage de tous les animaux
        System.out.println("\\nAffichage de tous les animaux:");
        zoo.afficherAnimaux();
        
        // Affichage par type
        System.out.println("\\nAffichage par type:");
        zoo.afficherAnimauxParType();
    }
}`
                }
            ]
        }
    ];

    const tp3v3Questions = [
        {
            id: "ex1",
            title: "Exercice 1 : Polymorphisme",
            description: `Un centre de formation accepte plusieurs types de paiement pour les frais d'inscription. Ces
paiements peuvent être faits en espèces, par carte bancaire ou par virement.`,
            files: [
                {
                    id: "ex1_paiement",
                    name: "Paiement.java",
                    package: "ma.formation.paiement",
                    expectedCode: `package ma.formation.paiement;

public class Paiement {
    protected double montant;
    
    public Paiement(double montant) {
        this.montant = montant;
    }
    
    public void effectuerPaiement() {
        System.out.println("Paiement générique de " + montant + " dirhams.");
    }
}`
                },
                {
                    id: "ex1_espece",
                    name: "PaiementEspece.java",
                    package: "ma.formation.paiement",
                    expectedCode: `package ma.formation.paiement;

public class PaiementEspece extends Paiement {
    public PaiementEspece(double montant) {
        super(montant);
    }
    
    @Override
    public void effectuerPaiement() {
        System.out.println("Paiement en espèces de " + montant + " dirhams effectué.");
    }
}`
                },
                {
                    id: "ex1_carte",
                    name: "PaiementCarte.java",
                    package: "ma.formation.paiement",
                    expectedCode: `package ma.formation.paiement;

public class PaiementCarte extends Paiement {
    public PaiementCarte(double montant) {
        super(montant);
    }
    
    @Override
    public void effectuerPaiement() {
        System.out.println("Paiement par carte de " + montant + " dirhams effectué.");
    }
}`
                },
                {
                    id: "ex1_virement",
                    name: "PaiementVirement.java",
                    package: "ma.formation.paiement",
                    expectedCode: `package ma.formation.paiement;

public class PaiementVirement extends Paiement {
    public PaiementVirement(double montant) {
        super(montant);
    }
    
    @Override
    public void effectuerPaiement() {
        System.out.println("Paiement par virement de " + montant + " dirhams effectué.");
    }
}`
                },
                {
                    id: "ex1_test",
                    name: "TestPaiement.java",
                    package: "ma.formation.paiement",
                    expectedCode: `package ma.formation.paiement;

public class TestPaiement {
    public static void main(String[] args) {
        Paiement[] paiements = new Paiement[4];
        
        paiements[0] = new Paiement(1000);
        paiements[1] = new PaiementEspece(2000);
        paiements[2] = new PaiementCarte(3000);
        paiements[3] = new PaiementVirement(4000);
        
        for (Paiement p : paiements) {
            p.effectuerPaiement();
        }
    }
}`
                }
            ]
        },
        {
            id: "ex2",
            title: "Exercice 2 : Classes abstraites",
            description: `Un établissement emploie des professeurs permanents et des professeurs vacataires,
rémunérés différemment.`,
            files: [
                {
                    id: "ex2_employe",
                    name: "Employe.java",
                    package: "ma.formation.employes",
                    expectedCode: `package ma.formation.employes;

public abstract class Employe {
    protected String nom;
    protected String prenom;
    protected int heuresTravaillees;
    
    public Employe(String nom, String prenom, int heuresTravaillees) {
        this.nom = nom;
        this.prenom = prenom;
        this.heuresTravaillees = heuresTravaillees;
    }
    
    public abstract double calculerSalaire();
    
    public void afficherInfos() {
        System.out.println("Nom: " + nom);
        System.out.println("Prénom: " + prenom);
        System.out.println("Heures travaillées: " + heuresTravaillees);
        System.out.println("Salaire: " + calculerSalaire() + " DH");
    }
}`
                },
                {
                    id: "ex2_permanent",
                    name: "ProfesseurPermanent.java",
                    package: "ma.formation.employes",
                    expectedCode: `package ma.formation.employes;

public class ProfesseurPermanent extends Employe {
    private static final double SALAIRE_MENSUEL = 7000.0;
    
    public ProfesseurPermanent(String nom, String prenom, int heuresTravaillees) {
        super(nom, prenom, heuresTravaillees);
    }
    
    @Override
    public double calculerSalaire() {
        return SALAIRE_MENSUEL;
    }
}`
                },
                {
                    id: "ex2_vacataire",
                    name: "ProfesseurVacataire.java",
                    package: "ma.formation.employes",
                    expectedCode: `package ma.formation.employes;

public class ProfesseurVacataire extends Employe {
    private static final double TAUX_HORAIRE = 150.0;
    
    public ProfesseurVacataire(String nom, String prenom, int heuresTravaillees) {
        super(nom, prenom, heuresTravaillees);
    }
    
    @Override
    public double calculerSalaire() {
        return heuresTravaillees * TAUX_HORAIRE;
    }
}`
                },
                {
                    id: "ex2_test",
                    name: "TestEmploye.java",
                    package: "ma.formation.employes",
                    expectedCode: `package ma.formation.employes;

import java.util.ArrayList;
import java.util.List;

public class TestEmploye {
    public static void main(String[] args) {
        List<Employe> employes = new ArrayList<>();
        
        employes.add(new ProfesseurPermanent("Alami", "Hassan", 160));
        employes.add(new ProfesseurVacataire("Benani", "Sara", 80));
        
        for (Employe e : employes) {
            e.afficherInfos();
            System.out.println();
        }
    }
}`
                }
            ]
        },
        {
            id: "ex3",
            title: "Exercice 3 : Interfaces",
            description: `On souhaite créer un système de notification multicanal.`,
            files: [
                {
                    id: "ex3_notifiable",
                    name: "Notifiable.java",
                    package: "ma.formation.notification",
                    expectedCode: `package ma.formation.notification;

public interface Notifiable {
    void envoyerNotification(String message);
}`
                },
                {
                    id: "ex3_email",
                    name: "NotificationEmail.java",
                    package: "ma.formation.notification",
                    expectedCode: `package ma.formation.notification;

public class NotificationEmail implements Notifiable {
    @Override
    public void envoyerNotification(String message) {
        System.out.println("Email envoyé: " + message);
    }
}`
                },
                {
                    id: "ex3_sms",
                    name: "NotificationSMS.java",
                    package: "ma.formation.notification",
                    expectedCode: `package ma.formation.notification;

public class NotificationSMS implements Notifiable {
    @Override
    public void envoyerNotification(String message) {
        System.out.println("SMS envoyé: " + message);
    }
}`
                },
                {
                    id: "ex3_app",
                    name: "NotificationAppMobile.java",
                    package: "ma.formation.notification",
                    expectedCode: `package ma.formation.notification;

public class NotificationAppMobile implements Notifiable {
    @Override
    public void envoyerNotification(String message) {
        System.out.println("Notification mobile envoyée: " + message);
    }
}`
                },
                {
                    id: "ex3_manager",
                    name: "NotificationManager.java",
                    package: "ma.formation.notification",
                    expectedCode: `package ma.formation.notification;

import java.util.ArrayList;
import java.util.List;

public class NotificationManager {
    private List<Notifiable> canaux;
    
    public NotificationManager() {
        this.canaux = new ArrayList<>();
    }
    
    public void ajouterCanal(Notifiable canal) {
        canaux.add(canal);
    }
    
    public void envoyerNotificationATous(String message) {
        for (Notifiable canal : canaux) {
            canal.envoyerNotification(message);
        }
    }
}`
                }
            ]
        },
        {
            id: "ex4",
            title: "Exercice 4 : Interface Cloneable",
            description: `Dans une application pédagogique, il faut permettre aux formateurs de dupliquer un document.`,
            files: [
                {
                    id: "ex4_document",
                    name: "Document.java",
                    package: "ma.formation.document",
                    expectedCode: `package ma.formation.document;

public class Document implements Cloneable {
    private String titre;
    private String contenu;
    private String auteur;
    
    public Document(String titre, String contenu, String auteur) {
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
    }
    
    @Override
    public Document clone() throws CloneNotSupportedException {
        Document clone = (Document) super.clone();
        return clone;
    }
    
    public void setTitre(String titre) {
        this.titre = titre;
    }
    
    @Override
    public String toString() {
        return "Document{" +
               "titre='" + titre + "', " +
               "contenu='" + contenu + "', " +
               "auteur='" + auteur + "'}";
    }
}`
                },
                {
                    id: "ex4_test",
                    name: "TestDocument.java",
                    package: "ma.formation.document",
                    expectedCode: `package ma.formation.document;

public class TestDocument {
    public static void main(String[] args) {
        try {
            Document doc1 = new Document("Java POO", "Cours sur la POO en Java", "Ahmed Alami");
            System.out.println("Document original: " + doc1);
            
            Document doc2 = doc1.clone();
            doc2.setTitre("Java POO - Copie");
            
            System.out.println("\\nAprès modification du clone:");
            System.out.println("Document original: " + doc1);
            System.out.println("Document cloné: " + doc2);
            
        } catch (CloneNotSupportedException e) {
            System.out.println("Erreur lors du clonage: " + e.getMessage());
        }
    }
}`
                }
            ]
        },
        {
            id: "ex5",
            title: "Exercice 5 : Classe générique",
            description: `On souhaite créer une structure générique pour représenter des conteneurs de ressources
pédagogiques dans un centre de formation.`,
            files: [
                {
                    id: "ex5_conteneur",
                    name: "ConteneurRessource.java",
                    package: "ma.formation.generique",
                    expectedCode: `package ma.formation.generique;

public class ConteneurRessource<T> {
    private T contenu;
    
    public void ajouter(T element) {
        this.contenu = element;
    }
    
    public T obtenir() {
        return contenu;
    }
    
    public void afficherContenu() {
        if (contenu != null) {
            System.out.println("Contenu: " + contenu.toString());
        } else {
            System.out.println("Conteneur vide");
        }
    }
}`
                },
                {
                    id: "ex5_test",
                    name: "TestConteneur.java",
                    package: "ma.formation.generique",
                    expectedCode: `package ma.formation.generique;

import ma.formation.document.Document;

public class TestConteneur {
    public static void main(String[] args) {
        // Test avec String
        ConteneurRessource<String> conteneurModule = new ConteneurRessource<>();
        conteneurModule.ajouter("Algorithmique");
        System.out.println("Conteneur de module:");
        conteneurModule.afficherContenu();
        
        // Test avec Integer
        ConteneurRessource<Integer> conteneurId = new ConteneurRessource<>();
        conteneurId.ajouter(101);
        System.out.println("\\nConteneur d'identifiant:");
        conteneurId.afficherContenu();
        
        // Test avec Document
        Document doc = new Document("Java POO", "Cours sur la POO", "Ahmed Alami");
        ConteneurRessource<Document> conteneurDoc = new ConteneurRessource<>();
        conteneurDoc.ajouter(doc);
        System.out.println("\\nConteneur de document:");
        conteneurDoc.afficherContenu();
    }
}`
                }
            ]
        }
    ];

    const tp4Questions = [
        {
            id: "ex1",
            title: "Exercice 1 : Accès à un tableau",
            description: `Objectif : Comprendre et gérer l'exception ArrayIndexOutOfBoundsException.

Énoncé :
Écrire un programme Java qui crée un tableau de 5 entiers et demande à l'utilisateur de
saisir un indice pour afficher la valeur correspondante. Si l'indice est en dehors des
bornes du tableau, le programme doit afficher un message d'erreur adapté sans
s'arrêter brutalement.`,
            expectedFunction: `import java.util.Scanner;

public class ExerciceTableau {
    public static void main(String[] args) {
        int[] tableau = {10, 20, 30, 40, 50};
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Entrez un indice (0-4) : ");
            int indice = scanner.nextInt();
            System.out.println("La valeur à l'indice " + indice + " est : " + tableau[indice]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Erreur : L'indice doit être compris entre 0 et 4.");
        } catch (Exception e) {
            System.out.println("Erreur de saisie : Veuillez entrer un nombre entier.");
        }
    }
}`
        },
        {
            id: "ex2",
            title: "Exercice 2 : Conversion de chaînes",
            description: `Objectif : Manipuler NumberFormatException.

Énoncé :
Écrire un programme qui demande à l'utilisateur de saisir une chaîne de caractères
censée représenter un entier. Convertir cette chaîne en entier à l'aide de
Integer.parseInt. Si la chaîne ne représente pas un entier valide, afficher un
message d'erreur approprié.`,
            expectedFunction: `import java.util.Scanner;

public class ConversionChaines {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Entrez un nombre entier : ");
        String saisie = scanner.nextLine();
        
        try {
            int nombre = Integer.parseInt(saisie);
            System.out.println("Le nombre saisi est : " + nombre);
        } catch (NumberFormatException e) {
            System.out.println("Erreur : '" + saisie + "' n'est pas un nombre entier valide.");
        }
    }
}`
        },
        {
            id: "ex3",
            title: "Exercice 3 : Création d'une exception personnalisée",
            description: `Objectif : Créer et utiliser une classe dérivée de Exception.

Énoncé :
Créer une classe AgeInvalideException qui hérite de Exception. Écrire une
méthode qui prend un âge en paramètre et lève cette exception si l'âge est inférieur à
18. Écrire un programme qui appelle cette méthode et affiche un message adapté si
l'exception est levée.`,
            expectedFunction: `class AgeInvalideException extends Exception {
    public AgeInvalideException(String message) {
        super(message);
    }
}

public class VerificationAge {
    public static void verifierAge(int age) throws AgeInvalideException {
        if (age < 18) {
            throw new AgeInvalideException("L'âge doit être supérieur ou égal à 18 ans.");
        }
        System.out.println("Age valide : " + age + " ans");
    }
    
    public static void main(String[] args) {
        try {
            verifierAge(16);
        } catch (AgeInvalideException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
        
        try {
            verifierAge(20);
        } catch (AgeInvalideException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
    }
}`
        },
        {
            id: "ex4",
            title: "Exercice 4 : Gestion de plusieurs exceptions",
            description: `Objectif : Utiliser plusieurs blocs catch pour intercepter différents types
d'exceptions.

Énoncé :
Écrire un programme qui demande à l'utilisateur de saisir deux entiers. Il effectue
ensuite une division du premier par le second. Gérer à la fois les erreurs de format de
saisie (NumberFormatException) et la division par zéro (ArithmeticException).
Afficher des messages d'erreur spécifiques à chaque cas.`,
            expectedFunction: `import java.util.Scanner;

public class DivisionSecurisee {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Entrez le premier nombre : ");
            String str1 = scanner.nextLine();
            int num1 = Integer.parseInt(str1);
            
            System.out.print("Entrez le deuxième nombre : ");
            String str2 = scanner.nextLine();
            int num2 = Integer.parseInt(str2);
            
            int resultat = num1 / num2;
            System.out.println("Résultat de la division : " + resultat);
            
        } catch (NumberFormatException e) {
            System.out.println("Erreur : Veuillez entrer des nombres entiers valides.");
        } catch (ArithmeticException e) {
            System.out.println("Erreur : Division par zéro impossible.");
        }
    }
}`
        },
        {
            id: "ex5",
            title: "Exercice 5 : Bloc finally et ressource fermée",
            description: `Objectif : Utiliser un bloc finally pour garantir l'exécution finale, quelle que soit
l'issue du traitement.

Énoncé :
Simuler l'ouverture et la fermeture d'une ressource (par exemple un fichier ou une
connexion) avec des messages comme "Ressource ouverte" et "Ressource fermée".
Intégrer un traitement intermédiaire qui peut provoquer une exception. Utiliser un bloc
finally pour afficher "Ressource fermée" dans tous les cas.`,
            expectedFunction: `public class GestionRessource {
    public static void traiterRessource() {
        System.out.println("Ressource ouverte");
        
        try {
            // Simulation d'un traitement qui peut échouer
            int resultat = 10 / 0; // Provoque une ArithmeticException
            System.out.println("Résultat : " + resultat);
            
        } catch (ArithmeticException e) {
            System.out.println("Erreur pendant le traitement : " + e.getMessage());
            
        } finally {
            System.out.println("Ressource fermée");
        }
    }
    
    public static void main(String[] args) {
        traiterRessource();
    }
}`
        },
        {
            id: "ex6",
            title: "Exercice 6 : Propagation d'exception avec throws",
            description: `Objectif : Utiliser le mot-clé throws pour propager une exception.

Énoncé :
Écrire une méthode calculerRacineCarrée(double x) qui lève une exception si x
est négatif, sinon retourne la racine carrée. Gérer l'exception dans la méthode
principale (main). Utiliser le mot-clé throws pour indiquer la propagation de
l'exception.`,
            expectedFunction: `public class CalculRacine {
    public static double calculerRacineCarree(double x) throws IllegalArgumentException {
        if (x < 0) {
            throw new IllegalArgumentException("Impossible de calculer la racine carrée d'un nombre négatif");
        }
        return Math.sqrt(x);
    }
    
    public static void main(String[] args) {
        double[] valeurs = {16.0, -4.0, 25.0, -1.0};
        
        for (double valeur : valeurs) {
            try {
                double racine = calculerRacineCarree(valeur);
                System.out.println("La racine carrée de " + valeur + " est : " + racine);
            } catch (IllegalArgumentException e) {
                System.out.println("Erreur pour " + valeur + " : " + e.getMessage());
            }
        }
    }
}`
        },
        {
            id: "ex7",
            title: "Exercice 7 : Système de validation d'inscription",
            description: `Objectif : Intégrer une exception personnalisée dans un contexte applicatif.

Énoncé :
Créer une classe InscriptionException pour signaler un échec de validation. Écrire
une méthode validerInscription(String nom, int age) qui lève cette exception
si le nom est vide ou si l'âge est en dehors de l'intervalle [18, 60]. Tester cette
méthode dans un programme principal.`,
            expectedFunction: `class InscriptionException extends Exception {
    public InscriptionException(String message) {
        super(message);
    }
}

public class SystemeInscription {
    public static void validerInscription(String nom, int age) throws InscriptionException {
        if (nom == null || nom.trim().isEmpty()) {
            throw new InscriptionException("Le nom ne peut pas être vide");
        }
        if (age < 18 || age > 60) {
            throw new InscriptionException("L'âge doit être compris entre 18 et 60 ans");
        }
        System.out.println("Inscription validée pour " + nom + ", " + age + " ans");
    }
    
    public static void main(String[] args) {
        // Test avec différents cas
        try {
            validerInscription("", 25);
        } catch (InscriptionException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
        
        try {
            validerInscription("Jean", 15);
        } catch (InscriptionException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
        
        try {
            validerInscription("Marie", 30);
        } catch (InscriptionException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
    }
}`
        },
        {
            id: "ex8",
            title: "Exercice 8 : Mini simulateur bancaire",
            description: `Objectif : Gérer plusieurs types d'exceptions dans une simulation plus réaliste.

Énoncé :
Simuler un compte bancaire avec une méthode retirerArgent(double montant)
qui lève une exception si le montant est négatif ou supérieur au solde. Simuler
également des erreurs de saisie utilisateur. Utiliser des exceptions standards et
personnalisées. Le programme doit continuer à fonctionner même après une erreur.`,
            expectedFunction: `class SoldeInsuffisantException extends Exception {
    public SoldeInsuffisantException(String message) {
        super(message);
    }
}

class MontantInvalideException extends Exception {
    public MontantInvalideException(String message) {
        super(message);
    }
}

public class CompteBancaire {
    private double solde;
    private String titulaire;
    
    public CompteBancaire(String titulaire, double soldeInitial) {
        this.titulaire = titulaire;
        this.solde = soldeInitial;
    }
    
    public void retirerArgent(double montant) throws SoldeInsuffisantException, MontantInvalideException {
        if (montant < 0) {
            throw new MontantInvalideException("Le montant du retrait ne peut pas être négatif");
        }
        if (montant > solde) {
            throw new SoldeInsuffisantException("Solde insuffisant pour effectuer le retrait");
        }
        solde -= montant;
        System.out.println("Retrait de " + montant + "€ effectué. Nouveau solde : " + solde + "€");
    }
    
    public static void main(String[] args) {
        CompteBancaire compte = new CompteBancaire("Jean Dupont", 1000);
        
        try {
            compte.retirerArgent(-100);
        } catch (MontantInvalideException e) {
            System.out.println("Erreur : " + e.getMessage());
        } catch (SoldeInsuffisantException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
        
        try {
            compte.retirerArgent(1500);
        } catch (MontantInvalideException e) {
            System.out.println("Erreur : " + e.getMessage());
        } catch (SoldeInsuffisantException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
        
        try {
            compte.retirerArgent(500);
        } catch (MontantInvalideException | SoldeInsuffisantException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
    }
}`
        }
    ];

    const tp5Questions = [
        {
            id: "ex1",
            title: "Exercice 1 : Recherche dans une Liste",
            description: `Écrivez un programme qui crée une liste de chaînes de caractères contenant
des noms d'étudiants. Ensuite, demandez à l'utilisateur d'entrer un nom d'étudiant. Votre
programme doit vérifier si ce nom est présent dans la liste et afficher un message approprié.`,
            expectedFunction: `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class RechercheEtudiant {
    public static void main(String[] args) {
        // Création de la liste d'étudiants
        List<String> etudiants = new ArrayList<>();
        etudiants.add("Ahmed");
        etudiants.add("Sara");
        etudiants.add("Karim");
        etudiants.add("Fatima");
        etudiants.add("Mohammed");
        
        // Lecture du nom à rechercher
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez le nom de l'étudiant à rechercher : ");
        String nomRecherche = scanner.nextLine();
        
        // Recherche du nom dans la liste
        if (etudiants.contains(nomRecherche)) {
            System.out.println("L'étudiant " + nomRecherche + " est présent dans la liste.");
        } else {
            System.out.println("L'étudiant " + nomRecherche + " n'est pas dans la liste.");
        }
    }
}`
        },
        {
            id: "ex2",
            title: "Exercice 2 : Intersection d'Ensembles",
            description: `Créez deux ensembles de nombres entiers aléatoires. Ensuite, trouvez
l'intersection de ces deux ensembles (les éléments communs) et affichez-la.`,
            expectedFunction: `import java.util.HashSet;
import java.util.Set;
import java.util.Random;

public class IntersectionEnsembles {
    public static void main(String[] args) {
        Random random = new Random();
        Set<Integer> ensemble1 = new HashSet<>();
        Set<Integer> ensemble2 = new HashSet<>();
        
        // Remplissage des ensembles avec des nombres aléatoires
        for (int i = 0; i < 10; i++) {
            ensemble1.add(random.nextInt(20));
            ensemble2.add(random.nextInt(20));
        }
        
        System.out.println("Ensemble 1 : " + ensemble1);
        System.out.println("Ensemble 2 : " + ensemble2);
        
        // Calcul de l'intersection
        Set<Integer> intersection = new HashSet<>(ensemble1);
        intersection.retainAll(ensemble2);
        
        System.out.println("Intersection : " + intersection);
    }
}`
        },
        {
            id: "ex3",
            title: "Exercice 3 : Comptage de Mots",
            description: `Écrivez un programme qui demande à l'utilisateur d'entrer une phrase.
Ensuite, le programme doit compter le nombre d'occurrences de chaque mot dans la
phrase et afficher le résultat sous forme de map (mot -> nombre d'occurrences).`,
            expectedFunction: `import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ComptageMots {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Entrez une phrase :");
        String phrase = scanner.nextLine().toLowerCase();
        
        // Séparation des mots et comptage
        String[] mots = phrase.split("\\s+");
        Map<String, Integer> occurrences = new HashMap<>();
        
        for (String mot : mots) {
            occurrences.put(mot, occurrences.getOrDefault(mot, 0) + 1);
        }
        
        // Affichage des résultats
        System.out.println("\\nNombre d'occurrences de chaque mot :");
        for (Map.Entry<String, Integer> entry : occurrences.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}`
        },
        {
            id: "ex4",
            title: "Exercice 4 : File d'Attente",
            description: `Implémentez un simulateur de file d'attente simple. Créez une file
d'attente pour les clients avec une capacité maximale fixée. Les clients arrivent et
partent de la file d'attente. Affichez les actions (arrivée, départ) et l'état de la file
d'attente après chaque action.`,
            expectedFunction: `import java.util.LinkedList;
import java.util.Queue;

public class FileAttente {
    private Queue<String> file;
    private int capaciteMax;
    
    public FileAttente(int capaciteMax) {
        this.file = new LinkedList<>();
        this.capaciteMax = capaciteMax;
    }
    
    public boolean ajouterClient(String client) {
        if (file.size() < capaciteMax) {
            file.offer(client);
            System.out.println("Arrivée : " + client);
            afficherEtat();
            return true;
        } else {
            System.out.println("File pleine, impossible d'ajouter : " + client);
            return false;
        }
    }
    
    public String retirerClient() {
        String client = file.poll();
        if (client != null) {
            System.out.println("Départ : " + client);
            afficherEtat();
        }
        return client;
    }
    
    public void afficherEtat() {
        System.out.println("État de la file : " + file);
        System.out.println("Nombre de clients : " + file.size() + "/" + capaciteMax + "\\n");
    }
    
    public static void main(String[] args) {
        FileAttente file = new FileAttente(3);
        
        file.ajouterClient("Client 1");
        file.ajouterClient("Client 2");
        file.ajouterClient("Client 3");
        file.ajouterClient("Client 4"); // Devrait être refusé
        file.retirerClient();
        file.ajouterClient("Client 4"); // Devrait être accepté maintenant
    }
}`
        },
        {
            id: "ex5",
            title: "Exercice 5 : Notes des Étudiants",
            description: `Écrivez un programme qui prend une liste de noms d'étudiants et leurs
notes, puis stocke ces données dans une map où les noms sont les clés et les notes
sont les valeurs. Ensuite, calculez la moyenne des notes et affichez-la.`,
            expectedFunction: `import java.util.HashMap;
import java.util.Map;

public class GestionNotes {
    private Map<String, Double> notes;
    
    public GestionNotes() {
        this.notes = new HashMap<>();
    }
    
    public void ajouterNote(String nom, double note) {
        notes.put(nom, note);
    }
    
    public double calculerMoyenne() {
        if (notes.isEmpty()) {
            return 0.0;
        }
        
        double somme = 0.0;
        for (double note : notes.values()) {
            somme += note;
        }
        return somme / notes.size();
    }
    
    public void afficherNotes() {
        System.out.println("Notes des étudiants :");
        for (Map.Entry<String, Double> entry : notes.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
    
    public static void main(String[] args) {
        GestionNotes gestion = new GestionNotes();
        
        gestion.ajouterNote("Ahmed", 15.5);
        gestion.ajouterNote("Sara", 17.0);
        gestion.ajouterNote("Karim", 14.0);
        gestion.ajouterNote("Fatima", 18.5);
        
        gestion.afficherNotes();
        System.out.println("\\nMoyenne de la classe : " + gestion.calculerMoyenne());
    }
}`
        },
        {
            id: "ex6",
            title: "Exercice 6 : Tri avec Comparable",
            description: `Écrivez une classe Personne avec les attributs nom, âge et taille.
Implémentez l'interface Comparable pour que les instances de Personne puissent être
triées par âge croissant. Ensuite, créez une liste de personnes et triez-la à l'aide de la
méthode Collections.sort().`,
            expectedFunction: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Personne implements Comparable<Personne> {
    private String nom;
    private int age;
    private double taille;
    
    public Personne(String nom, int age, double taille) {
        this.nom = nom;
        this.age = age;
        this.taille = taille;
    }
    
    @Override
    public int compareTo(Personne autre) {
        return Integer.compare(this.age, autre.age);
    }
    
    @Override
    public String toString() {
        return nom + " (âge: " + age + ", taille: " + taille + "m)";
    }
    
    public static void main(String[] args) {
        List<Personne> personnes = new ArrayList<>();
        personnes.add(new Personne("Ahmed", 25, 1.75));
        personnes.add(new Personne("Sara", 20, 1.65));
        personnes.add(new Personne("Karim", 30, 1.80));
        
        System.out.println("Avant le tri :");
        for (Personne p : personnes) {
            System.out.println(p);
        }
        
        Collections.sort(personnes);
        
        System.out.println("\\nAprès le tri par âge :");
        for (Personne p : personnes) {
            System.out.println(p);
        }
    }
}`
        },
        {
            id: "ex7",
            title: "Exercice 7 : Tri avec Comparator",
            description: `Écrivez une classe Voiture avec les attributs marque, modèle et année.
Ensuite, créez une classe TriAnneeComparator qui implémente l'interface
Comparator<Voiture> pour trier les voitures par année décroissante. Testez votre
comparateur en triant une liste de voitures.`,
            expectedFunction: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Voiture {
    private String marque;
    private String modele;
    private int annee;
    
    public Voiture(String marque, String modele, int annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    
    public int getAnnee() {
        return annee;
    }
    
    @Override
    public String toString() {
        return marque + " " + modele + " (" + annee + ")";
    }
}

class TriAnneeComparator implements Comparator<Voiture> {
    @Override
    public int compare(Voiture v1, Voiture v2) {
        return Integer.compare(v2.getAnnee(), v1.getAnnee()); // Ordre décroissant
    }
}

public class TestVoiture {
    public static void main(String[] args) {
        List<Voiture> voitures = new ArrayList<>();
        voitures.add(new Voiture("Renault", "Clio", 2018));
        voitures.add(new Voiture("Peugeot", "208", 2020));
        voitures.add(new Voiture("Dacia", "Sandero", 2019));
        
        System.out.println("Avant le tri :");
        for (Voiture v : voitures) {
            System.out.println(v);
        }
        
        Collections.sort(voitures, new TriAnneeComparator());
        
        System.out.println("\\nAprès le tri par année décroissante :");
        for (Voiture v : voitures) {
            System.out.println(v);
        }
    }
}`
        },
        {
            id: "ex8",
            title: "Exercice 8 : Tri Multiple avec Comparator",
            description: `Écrivez une classe Etudiant avec les attributs nom, âge et note. Ensuite,
créez une classe TriNoteAgeComparator qui implémente l'interface
Comparator<Etudiant> pour trier les étudiants d'abord par note décroissante, puis par
âge croissante en cas d'égalité des notes. Testez votre comparateur en triant une liste
d'étudiants.`,
            expectedFunction: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Etudiant {
    private String nom;
    private int age;
    private double note;
    
    public Etudiant(String nom, int age, double note) {
        this.nom = nom;
        this.age = age;
        this.note = note;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getNote() {
        return note;
    }
    
    @Override
    public String toString() {
        return nom + " (âge: " + age + ", note: " + note + ")";
    }
}

class TriNoteAgeComparator implements Comparator<Etudiant> {
    @Override
    public int compare(Etudiant e1, Etudiant e2) {
        // D'abord comparer les notes (ordre décroissant)
        int compareNote = Double.compare(e2.getNote(), e1.getNote());
        
        // Si les notes sont égales, comparer les âges (ordre croissant)
        if (compareNote == 0) {
            return Integer.compare(e1.getAge(), e2.getAge());
        }
        
        return compareNote;
    }
}

public class TestEtudiant {
    public static void main(String[] args) {
        List<Etudiant> etudiants = new ArrayList<>();
        etudiants.add(new Etudiant("Ahmed", 20, 15.5));
        etudiants.add(new Etudiant("Sara", 19, 15.5));
        etudiants.add(new Etudiant("Karim", 22, 17.0));
        etudiants.add(new Etudiant("Fatima", 21, 14.0));
        
        System.out.println("Avant le tri :");
        for (Etudiant e : etudiants) {
            System.out.println(e);
        }
        
        Collections.sort(etudiants, new TriNoteAgeComparator());
        
        System.out.println("\\nAprès le tri (note décroissante, puis âge croissant) :");
        for (Etudiant e : etudiants) {
            System.out.println(e);
        }
    }
}`
        }
    ];

    const examQuestions = [
        {
            id: "q0",
            title: "Question 0 : Constructeur WagonMarchandise",
            description: `Dans la classe WagonMarchandise, donner le code du constructeur.`,
            expectedFunction: `public WagonMarchandise(String code, String description, float volume) {
    super(code, description);
    if (volume > volumeMax) {
        throw new IllegalArgumentException("Volume dépasse le maximum autorisé");
    }
    this.volume = volume;
    nombreWagonsMarchandise++;
}`
        },
        {
            id: "q1",
            title: "Question 1 : Getter/Setter VolumeMax",
            description: `Dans la classe WagonMarchandise, donner le code du getter et/ou setter pour l'attribut VolumeMax.`,
            expectedFunction: `// Getter uniquement car VolumeMax est final
public static float getVolumeMax() {
    return volumeMax;
}`
        },
        {
            id: "q2",
            title: "Question 2 : Getter/Setter nombreWagonsMarchandise",
            description: `Dans la classe WagonMarchandise, donner le code du getter et/ou setter pour l'attribut nombreWagonsMarchandise.`,
            expectedFunction: `public static int getNombreWagonsMarchandise() {
    return nombreWagonsMarchandise;
}

// Pas de setter public car géré en interne par le constructeur et éventuellement le destructeur`
        },
        {
            id: "q3",
            title: "Question 3 : Méthode toString WagonMarchandise",
            description: `Dans la classe WagonMarchandise, donner le code de la méthode toString.`,
            expectedFunction: `@Override
public String toString() {
    return super.toString() + 
           "\\nType: Wagon Marchandise" +
           "\\nVolume: " + volume + " m³" +
           "\\nVolume Maximum: " + volumeMax + " m³";
}`
        },
        {
            id: "q4",
            title: "Question 4 : Premier Constructeur Train",
            description: `Dans la classe Train, donner le code du premier constructeur.`,
            expectedFunction: `public Train(String code, Personnel conducteur, TypeTrain type) {
    this.code = code;
    this.conducteur = conducteur;
    this.type = type;
    this.wagons = new ArrayList<>();
    this.longueur = 0;
}`
        },
        {
            id: "q5",
            title: "Question 5 : Deuxième Constructeur Train",
            description: `Dans la classe Train, donner le code du deuxième constructeur.`,
            expectedFunction: `public Train(String code, Personnel conducteur, TypeTrain type, ArrayList<Wagon> wagons) 
    throws TrainWagonIncompatiblesException {
    this(code, conducteur, type);
    for (Wagon wagon : wagons) {
        ajouterWagon(wagon);
    }
}`
        },
        {
            id: "q6",
            title: "Question 6 : Getter/Setter longueur Train",
            description: `Dans la classe Train, donner le getter et/ou setter pour l'attribut longueur.`,
            expectedFunction: `public int getLongueur() {
    return longueur;
}

// Pas de setter public car la longueur est gérée en interne lors de l'ajout/suppression des wagons`
        },
        {
            id: "q7",
            title: "Question 7 : Méthode ajouterWagonMinerai",
            description: `Dans la classe Train, donner le code de la méthode ajouterWagonMinerai.`,
            expectedFunction: `public void ajouterWagonMinerai(String code, String description, float tonnage) 
    throws TrainWagonIncompatiblesException {
    if (type != TypeTrain.Minerai) {
        throw new TrainWagonIncompatiblesException(
            "Impossible d'ajouter un wagon minerai à un train de type " + type);
    }
    WagonMinerai wagon = new WagonMinerai(code, description, tonnage);
    wagons.add(wagon);
    longueur++;
}`
        },
        {
            id: "q8",
            title: "Question 8 : Méthode ajouterWagon",
            description: `Dans la classe Train, donner le code de la méthode ajouterWagon.`,
            expectedFunction: `public void ajouterWagon(Wagon wagon) throws TrainWagonIncompatiblesException {
    // Vérification de la compatibilité du wagon avec le type du train
    if (wagon instanceof WagonPassagers) {
        if (type != TypeTrain.Passagers && type != TypeTrain.PassagersMarchandise) {
            throw new TrainWagonIncompatiblesException("Wagon passagers incompatible");
        }
    } else if (wagon instanceof WagonMarchandise) {
        if (type != TypeTrain.Marchandise && type != TypeTrain.PassagersMarchandise) {
            throw new TrainWagonIncompatiblesException("Wagon marchandise incompatible");
        }
    } else if (wagon instanceof WagonMinerai) {
        if (type != TypeTrain.Minerai) {
            throw new TrainWagonIncompatiblesException("Wagon minerai incompatible");
        }
    }
    
    wagons.add(wagon);
    longueur++;
}`
        },
        {
            id: "q9",
            title: "Question 9 : Méthode supprimerWagon",
            description: `Dans la classe Train, donner le code de la méthode supprimerWagon.`,
            expectedFunction: `public boolean supprimerWagon(String code) {
    for (Iterator<Wagon> iterator = wagons.iterator(); iterator.hasNext();) {
        Wagon wagon = iterator.next();
        if (wagon.getCode().equals(code)) {
            iterator.remove();
            longueur--;
            return true;
        }
    }
    return false;
}`
        },
        {
            id: "q10",
            title: "Question 10 : Méthode afficherCharge",
            description: `Dans la classe Train, donner le code de la méthode afficherCharge.`,
            expectedFunction: `public void afficherCharge() {
    switch (type) {
        case Passagers:
        case PassagersMarchandise:
            int totalPassagers = 0;
            for (Wagon w : wagons) {
                if (w instanceof WagonPassagers) {
                    totalPassagers += ((WagonPassagers) w).getNombrePassagers();
                }
            }
            System.out.println("Nombre total de passagers : " + totalPassagers);
            
            if (type == TypeTrain.PassagersMarchandise) {
                float volumeTotal = 0;
                for (Wagon w : wagons) {
                    if (w instanceof WagonMarchandise) {
                        volumeTotal += ((WagonMarchandise) w).getVolume();
                    }
                }
                System.out.println("Volume total des marchandises : " + volumeTotal + " m³");
            }
            break;
            
        case Marchandise:
            float volumeTotalMarchandises = 0;
            for (Wagon w : wagons) {
                volumeTotalMarchandises += ((WagonMarchandise) w).getVolume();
            }
            System.out.println("Volume total des marchandises : " + volumeTotalMarchandises + " m³");
            break;
            
        case Minerai:
            float tonnageTotal = 0;
            for (Wagon w : wagons) {
                tonnageTotal += ((WagonMinerai) w).getTonnage();
            }
            System.out.println("Tonnage total de minerai : " + tonnageTotal + " tonnes");
            break;
    }
}`
        }
    ];

    const handleCodeChange = (exerciseId, fileId, newCode) => {
        setUserCodes(prev => ({
            ...prev,
            [fileId]: newCode
        }));
    };

    const checkCode = (exerciseId, fileId, userCode, expectedCode) => {
        if (!userCode || userCode.trim() === '') {
            setFeedbacks(prev => ({
                ...prev,
                [fileId]: "Le code ne peut pas être vide."
            }));
            setScores(prev => ({
                ...prev,
                [fileId]: 0
            }));
            return;
        }

        const cleanUserCode = userCode.toLowerCase().replace(/\s+/g, '');
        const cleanExpectedCode = expectedCode.toLowerCase().replace(/\s+/g, '');
        
        let score = 0;
        let feedback = "";

        if (cleanUserCode === cleanExpectedCode) {
            score = 100;
            feedback = "Excellent ! Votre code est parfait.";
        } else if (cleanUserCode.includes(cleanExpectedCode)) {
            score = 90;
            feedback = "Très bien ! Votre code contient tous les éléments attendus.";
        } else {
            const similarities = calculateSimilarity(cleanUserCode, cleanExpectedCode);
            score = Math.round(similarities * 100);
            feedback = score > 50 
                ? "Bien ! Votre code est sur la bonne voie mais peut être amélioré."
                : "Attention, votre code semble différent de la solution attendue.";
        }

        setScores(prev => ({
            ...prev,
            [fileId]: score
        }));
        setFeedbacks(prev => ({
            ...prev,
            [fileId]: feedback
        }));
    };

    const calculateSimilarity = (str1, str2) => {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) {
            return 1.0;
        }
        
        return (longer.length - editDistance(longer, shorter)) / longer.length;
    };

    const editDistance = (str1, str2) => {
        const matrix = Array(str2.length + 1).fill().map(() => Array(str1.length + 1).fill(0));
        
        for (let i = 0; i <= str1.length; i++) {
            matrix[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j++) {
            matrix[j][0] = j;
        }
        
        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                if (str1[i-1] === str2[j-1]) {
                    matrix[j][i] = matrix[j-1][i-1];
                } else {
                    matrix[j][i] = Math.min(
                        matrix[j-1][i-1] + 1,
                        matrix[j][i-1] + 1,
                        matrix[j-1][i] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    };

    const handleReset = () => {
        setSelectedTP(null);
        setUserCodes({});
        setFeedbacks({});
        setScores({});
        setShowSolutions({});
        setSelectedFile({});
    };

    const getProgressColor = (score) => {
        if (score >= 80) return '#4CAF50';
        if (score >= 60) return '#FFC107';
        return '#f44336';
    };

    const renderMultiFileExercise = (exercise) => {
        return (
            <div className="exercise-card">
                <h3>{exercise.title}</h3>
                <pre className="question-description">
                    {exercise.description}
                </pre>
                
                {exercise.files.map(file => (
                    <div key={file.id} className="package-section">
                        <h4>Package: {file.package}</h4>
                        <div className="file-header">
                            <span className="file-name">{file.name}</span>
                        </div>
                        <textarea
                            className="code-input"
                            value={userCodes[file.id] || ''}
                            onChange={(e) => handleCodeChange(exercise.id, file.id, e.target.value)}
                            placeholder={`Écrivez votre code pour ${file.name} ici...`}
                            rows={10}
                        />
                        <div className="button-group">
                            <button 
                                onClick={() => checkCode(exercise.id, file.id, userCodes[file.id], file.expectedCode)}
                                className="submit-button"
                            >
                                Vérifier
                            </button>
                            <button 
                                onClick={() => setShowSolutions(prev => ({
                                    ...prev,
                                    [file.id]: !prev[file.id]
                                }))}
                                className={`solution-button ${showSolutions[file.id] ? 'active' : ''}`}
                            >
                                {showSolutions[file.id] ? 'Masquer la solution' : 'Voir la solution'}
                            </button>
                        </div>
                        
                        {showSolutions[file.id] && (
                            <div className="solution-container">
                                <h4>Solution proposée :</h4>
                                <pre className="solution-code">
                                    {file.expectedCode}
                                </pre>
                            </div>
                        )}
                        
                        <div className="score-container">
                            <div className="progress-bar-container">
                                <div 
                                    className="progress-bar"
                                    style={{
                                        width: `${scores[file.id] || 0}%`,
                                        backgroundColor: getProgressColor(scores[file.id] || 0)
                                    }}
                                />
                            </div>
                            <span className="score-text">
                                Score: {scores[file.id] || 0}%
                            </span>
                        </div>
                        
                        {feedbacks[file.id] && (
                            <div className={`feedback ${feedbacks[file.id].includes('Excellent') ? 'success' : 'error'}`}>
                                <pre>{feedbacks[file.id]}</pre>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const qcmQuestions = [
        {
            id: 1,
            question: "Que signifie JDK ?",
            options: ["Java Development Kit", "Java Deployment Kit", "Java Design Kit", "Java Debugging Kit"],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "Quelle commande permet de compiler un fichier Java ?",
            options: ["javac NomFichier.java", "java NomFichier.java", "compile NomFichier.java", "run NomFichier.java"],
            correctAnswer: 0
        },
        {
            id: 3,
            question: "Quelle commande exécute un programme Java compilé ?",
            options: ["run NomFichier.class", "javac NomFichier.class", "java NomFichier", "execute NomFichier.class"],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "Le fichier .class est généré après :",
            options: ["L'écriture du code", "L'exécution du code", "La compilation du code", "L'importation d'une bibliothèque"],
            correctAnswer: 2
        },
        {
            id: 5,
            question: "Lequel de ces outils ne fait pas partie du JDK ?",
            options: ["javac", "java", "Notepad", "javadoc"],
            correctAnswer: 2
        },
        {
            id: 6,
            question: "Le mot-clé public signifie :",
            options: ["La classe est privée", "La méthode est locale", "Accessible depuis d'autres classes", "Protégé par un mot de passe"],
            correctAnswer: 2
        },
        {
            id: 7,
            question: "Quelle est l'extension des fichiers source Java ?",
            options: [".class", ".java", ".js", ".txt"],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "Lequel des suivants est un environnement d'exécution Java ?",
            options: ["JDK", "JRE", "JVM", "Eclipse"],
            correctAnswer: 1
        },
        {
            id: 9,
            question: "JVM signifie :",
            options: ["Java Variable Manager", "Java Visual Machine", "Java Virtual Machine", "Java Verified Mode"],
            correctAnswer: 2
        },
        {
            id: 10,
            question: "Quelle est la sortie du programme : System.out.println(3 + 4); ?",
            options: ["34", "7", "'7'", "Erreur"],
            correctAnswer: 1
        },
        {
            id: 11,
            question: "Quel mot-clé est utilisé pour créer une instance d'un objet ?",
            options: ["class", "define", "new", "make"],
            correctAnswer: 2
        },
        {
            id: 12,
            question: "Quelle est la méthode principale d'un programme Java ?",
            options: ["start()", "launch()", "main()", "init()"],
            correctAnswer: 2
        },
        {
            id: 13,
            question: "Quel package est automatiquement importé dans chaque programme Java ?",
            options: ["java.util", "java.io", "java.lang", "javax.swing"],
            correctAnswer: 2
        },
        {
            id: 14,
            question: "Lequel est un type primitif en Java ?",
            options: ["String", "Integer", "int", "Boolean"],
            correctAnswer: 2
        },
        {
            id: 15,
            question: "Que signifie static dans une méthode ?",
            options: ["Elle peut changer au cours du temps", "Elle appartient à une instance", "Elle appartient à la classe", "Elle est inaccessible"],
            correctAnswer: 2
        },
        {
            id: 16,
            question: "Lequel des éléments suivants permet d'utiliser un tableau ?",
            options: ["int[] tab = new int[5];", "array tab = new int(5);", "int tab[] = int(5);", "int tab = {1,2,3,4,5};"],
            correctAnswer: 0
        },
        {
            id: 17,
            question: "Que fait le mot-clé final ?",
            options: ["Rend une variable modifiable", "Rend une variable constante", "Supprime une variable", "Ignore une variable"],
            correctAnswer: 1
        },
        {
            id: 18,
            question: "Quelle est la portée d'une variable déclarée dans une méthode ?",
            options: ["Globale", "Locale", "Publique", "Statique"],
            correctAnswer: 1
        },
        {
            id: 19,
            question: "Quel est l'outil pour documenter le code Java ?",
            options: ["javac", "javadoc", "jartool", "jshell"],
            correctAnswer: 1
        },
        {
            id: 20,
            question: "Quel est le rôle de la JVM ?",
            options: ["Compiler du code source Java", "Exécuter du bytecode", "Éditer du code Java", "Générer des fichiers .java"],
            correctAnswer: 1
        },
        {
            id: 21,
            question: "Quel mot-clé est utilisé pour définir un package dans un fichier Java ?",
            options: ["import", "include", "package", "namespace"],
            correctAnswer: 2
        },
        {
            id: 22,
            question: "Où doit être placée la déclaration package dans un fichier Java ?",
            options: ["Après les importations", "À la fin du fichier", "Avant la déclaration de classe", "Tout en haut du fichier"],
            correctAnswer: 3
        },
        {
            id: 23,
            question: "Quel est le but principal des packages en Java ?",
            options: ["Accélérer la compilation", "Organiser les classes et éviter les conflits de noms", "Créer des interfaces graphiques", "Définir des permissions"],
            correctAnswer: 1
        },
        {
            id: 24,
            question: "Quelle syntaxe est correcte pour importer une classe MaClasse du package com.exemple ?",
            options: ["import MaClasse.com.exemple;", "import com.exemple.MaClasse;", "include com.exemple.MaClasse;", "import class com.exemple.MaClasse;"],
            correctAnswer: 1
        },
        {
            id: 25,
            question: "Que fait l'instruction import java.util.*; ?",
            options: ["Importe uniquement la classe util", "Importe tous les sous-packages de java.util", "Importe toutes les classes du package java.util", "Importe les fichiers .class du dossier util"],
            correctAnswer: 2
        }
    ];

    const [qcmAnswers, setQcmAnswers] = useState({});
    const [showQcmResults, setShowQcmResults] = useState(false);

    const handleQcmAnswer = (questionId, selectedAnswer) => {
        setQcmAnswers(prev => ({
            ...prev,
            [questionId]: selectedAnswer
        }));
    };

    const calculateQcmScore = () => {
        let correct = 0;
        Object.entries(qcmAnswers).forEach(([questionId, answer]) => {
            const question = qcmQuestions.find(q => q.id === parseInt(questionId));
            if (question && answer === question.correctAnswer) {
                correct++;
            }
        });
        return Math.round((correct / qcmQuestions.length) * 100);
    };

    const handleBack = () => {
        setSelectedTP(null);
        setUserCodes({});
        setFeedbacks({});
        setScores({});
        setShowSolutions({});
    };

    return (
        <div className="tp-selection-container">
            {!selectedTP ? (
                <div className="tp-buttons">
                    {[1, 2, 3, "3v2", "3v3", 4, 5].map(tp => (
                        <button
                            key={tp}
                            onClick={() => setSelectedTP(tp)}
                            className="tp-button tp"
                        >
                            TP {tp}
                        </button>
                    ))}
                    <button
                        onClick={() => setSelectedTP("Examen")}
                        className="tp-button exam"
                    >
                        Examen
                    </button>
                    <button
                        onClick={() => setSelectedTP("QCM")}
                        className="tp-button qcm"
                    >
                        QCM
                    </button>
                </div>
            ) : (
                <div className="tp-content">
                    <button 
                        className="back-button"
                        onClick={handleBack}
                    >
                        Retour
                    </button>
                    <h2>TP {selectedTP}</h2>
                    
                    {selectedTP === 1 && (
                        <div className="exercises-container">
                            {tp1Questions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === 2 && (
                        <div className="exercises-container">
                            {tp2Questions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === 3 && (
                        <div className="exercises-container">
                            {tp3Questions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === "3v2" && (
                        <div className="exercises-container">
                            {tp3v2Questions.map(exercise => renderMultiFileExercise(exercise))}
                        </div>
                    )}
                    
                    {selectedTP === "3v3" && (
                        <div className="exercises-container">
                            {tp3v3Questions.map(exercise => renderMultiFileExercise(exercise))}
                        </div>
                    )}
                    
                    {selectedTP === 4 && (
                        <div className="exercises-container">
                            {tp4Questions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === 5 && (
                        <div className="exercises-container">
                            {tp5Questions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === "Examen" && (
                        <div className="exercises-container">
                            <div className="exam-header">
                                <h2>Examen Java - Gestion des Trains</h2>
                                <p>Professeur: Abdessamad Belangour</p>
                                <p>SMI S6</p>
                            </div>
                            {examQuestions.map(exercise => (
                                <div key={exercise.id} className="exercise-card">
                                    <h3>{exercise.title}</h3>
                                    <pre className="question-description">{exercise.description}</pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[exercise.id] || ''}
                                        onChange={(e) => handleCodeChange(exercise.id, exercise.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(exercise.id, exercise.id, userCodes[exercise.id], exercise.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [exercise.id]: !prev[exercise.id]
                                            }))}
                                            className={`solution-button ${showSolutions[exercise.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    
                                    {showSolutions[exercise.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {exercise.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    <div className="score-container">
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar"
                                                style={{
                                                    width: `${scores[exercise.id] || 0}%`,
                                                    backgroundColor: getProgressColor(scores[exercise.id] || 0)
                                                }}
                                            />
                                        </div>
                                        <span className="score-text">
                                            Score: {scores[exercise.id] || 0}%
                                        </span>
                                    </div>
                                    
                                    {feedbacks[exercise.id] && (
                                        <div className={`feedback ${feedbacks[exercise.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            {feedbacks[exercise.id]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {selectedTP === "QCM" && (
                        <div className="qcm-container">
                            <button 
                                className="retour-button"
                                onClick={() => setSelectedTP(null)}
                            >
                                Retour
                            </button>
                            <h2>QCM Java</h2>
                            <div className="qcm-questions">
                                {qcmQuestions.map(question => (
                                    <div key={question.id} className="qcm-question">
                                        <div className="question-number">Question {question.id}/25</div>
                                        <h3>{question.question}</h3>
                                        <div className="qcm-options">
                                            {question.options.map((option, index) => (
                                                <label 
                                                    key={index}
                                                    className={`qcm-option ${
                                                        showQcmResults ? 
                                                            question.correctAnswer === index ? 
                                                                'correct' : 
                                                                qcmAnswers[question.id] === index ? 
                                                                    'incorrect' : 
                                                                    '' 
                                                            : 
                                                            qcmAnswers[question.id] === index ? 
                                                                'selected' : 
                                                                ''
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`question-${question.id}`}
                                                        value={index}
                                                        checked={qcmAnswers[question.id] === index}
                                                        onChange={() => handleQcmAnswer(question.id, index)}
                                                        disabled={showQcmResults}
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="qcm-controls">
                                {!showQcmResults ? (
                                    <button 
                                        onClick={() => setShowQcmResults(true)}
                                        className="submit-button"
                                        disabled={Object.keys(qcmAnswers).length === 0}
                                    >
                                        Terminer le QCM
                                    </button>
                                ) : (
                                    <div className="qcm-results">
                                        <h3>Résultats du QCM</h3>
                                        <div className="score-details">
                                            <div className="score-item">
                                                <h4>Score Total</h4>
                                                <div className="score-value">{calculateQcmScore()}%</div>
                                            </div>
                                            <div className="score-item">
                                                <h4>Questions Correctes</h4>
                                                <div className="score-value">
                                                    {Object.entries(qcmAnswers).filter(([questionId, answer]) => {
                                                        const question = qcmQuestions.find(q => q.id === parseInt(questionId));
                                                        return question && answer === question.correctAnswer;
                                                    }).length}
                                                </div>
                                            </div>
                                            <div className="score-item">
                                                <h4>Questions Répondues</h4>
                                                <div className="score-value">{Object.keys(qcmAnswers).length}</div>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => {
                                                setShowQcmResults(false);
                                                setQcmAnswers({});
                                            }}
                                            className="reset-button"
                                        >
                                            Recommencer le QCM
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            {showScrollTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <svg viewBox="0 0 24 24">
                        <path d="M12 4l-8 8h6v8h4v-8h6z"/>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default TPSelection; 
