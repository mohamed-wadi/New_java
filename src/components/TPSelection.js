import React from 'react';
import { useState } from 'react';
import '../App.css';

const TPSelection = () => {
    const [selectedTP, setSelectedTP] = useState(null);
    const [userCodes, setUserCodes] = useState({});
    const [feedbacks, setFeedbacks] = useState({});
    const [scores, setScores] = useState({});
    const [showSolutions, setShowSolutions] = useState({});

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

    const checkCode = (exerciseId, code, expectedFunction) => {
        // Ne rien faire si le code est vide
        if (!code || code.trim() === '') {
            return;
        }

        const cleanUserCode = code.toLowerCase().replace(/\s+/g, '');
        let isCorrect = false;
        let score = 0;
        let feedback = {
            message: '',
            details: [],
            score: 0
        };

        // Fonction utilitaire pour vérifier la présence de patterns
        const checkPattern = (pattern, description) => {
            const found = Array.isArray(pattern) 
                ? pattern.some(p => cleanUserCode.includes(p))
                : cleanUserCode.includes(pattern);
            
            feedback.details.push({
                check: description,
                passed: found,
                symbol: found ? '✓' : '✗'
            });
            
            return found;
        };

        switch (exerciseId) {
            case 1:
                feedback.details = [];
                score = 0;
                
                // Vérification de la signature
                if (checkPattern('publicstaticint[]saisietableau()', 'Signature de la méthode')) score += 20;
                
                // Vérification de l'utilisation du Scanner
                if (checkPattern('scanner=newscanner(system.in)', 'Utilisation de Scanner')) score += 20;
                
                // Vérification de la création du tableau
                if (checkPattern('newint[', 'Création du tableau')) score += 20;
                
                // Vérification de la boucle
                if (checkPattern(['for(', 'while('], 'Boucle de saisie')) score += 20;
                
                // Vérification du return
                if (checkPattern('return', 'Return du tableau')) score += 20;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 2:
                const ex2Requirements = {
                    signature: 'publicstaticvoidaffichetableau(int[]t)',
                    loop: ['for(', 'while('],
                    print: ['system.out.print', 'system.out.println'],
                    array: 't[i]'
                };

                isCorrect = Object.entries(ex2Requirements).every(([key, value]) => {
                    if (Array.isArray(value)) {
                        return value.some(v => cleanUserCode.includes(v));
                    }
                    return cleanUserCode.includes(value);
                });

                feedback.score = isCorrect ? 100 : 0;
                feedback.details.push({
                    check: 'Vérifiez que vous avez bien :\n' +
                        '- La bonne signature de méthode (public static void afficheTableau(int[] t))\n' +
                        '- Une boucle pour parcourir le tableau\n' +
                        '- Utilisation de System.out.print ou println\n' +
                        '- Accès aux éléments du tableau avec t[i]',
                    passed: isCorrect,
                    symbol: isCorrect ? '✓' : '✗'
                });
                break;

            case 3:
                feedback.details = [];
                score = 0;

                // Vérification de la fonction Minimum
                if (checkPattern('publicstaticintminimum(int[]t)', 'Signature de Minimum()')) score += 15;
                
                // Vérification de la gestion des cas limites
                if (checkPattern(['t==null', 't.length==0', 'throw'], 'Gestion des cas limites')) score += 15;
                
                // Vérification de l'initialisation
                if (checkPattern(['min=t[0]', 'int min=t[0]'], 'Initialisation du minimum')) score += 15;
                
                // Vérification de la boucle
                if (checkPattern(['for(', 'while('], 'Boucle de parcours')) score += 15;
                
                // Vérification des comparaisons
                if (checkPattern(['if(t[i]<min)', 'if(t[i]<=min)'], 'Comparaison des éléments')) score += 15;
                
                // Vérification du return
                if (checkPattern('returnmin', 'Return du minimum')) score += 15;
                
                // Vérification de la fonction de test
                const hasTestFunction = checkPattern('publicstaticvoidminimumtest()', 'Fonction de test');
                if (hasTestFunction) score += 10;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 4:
                feedback.details = [];
                score = 0;

                // Vérification de la signature
                if (checkPattern('publicstaticintoccurences(intcible,int[]t)', 'Signature de la fonction')) score += 20;
                
                // Vérification de la boucle
                if (checkPattern(['for(', 'while('], 'Boucle de parcours')) score += 20;
                
                // Vérification du compteur
                if (checkPattern(['count++', 'count=count+1', 'count+=1'], 'Compteur d\'occurrences')) score += 20;
                
                // Vérification du return
                if (checkPattern('return', 'Return du résultat')) score += 20;
                
                // Vérification de la fonction de test
                if (checkPattern('publicstaticvoidoccurencestest()', 'Fonction de test')) score += 20;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 5:
                feedback.details = [];
                score = 0;

                // Vérification de la signature
                if (checkPattern('publicstaticintchercher(intnombre,int[]t)', 'Signature de la fonction')) score += 20;
                
                // Vérification de la boucle
                if (checkPattern(['for(', 'while('], 'Boucle de parcours')) score += 20;
                
                // Vérification de la comparaison
                if (checkPattern('==', 'Comparaison des éléments')) score += 20;
                
                // Vérification du return
                if (checkPattern(['return-1', 'returni'], 'Return de l\'index ou -1')) score += 20;
                
                // Vérification de la fonction de test
                if (checkPattern('publicstaticvoidcherchertest()', 'Fonction de test')) score += 20;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 6:
                feedback.details = [];
                score = 0;

                // Vérification de la signature
                if (checkPattern('publicstaticint[]tabimpairs(int[]t)', 'Signature de la fonction')) score += 20;
                
                // Vérification du modulo
                if (checkPattern('%2', 'Vérification des nombres impairs')) score += 20;
                
                // Vérification de la création du tableau
                if (checkPattern('newint[', 'Création du nouveau tableau')) score += 20;
                
                // Vérification de la boucle
                if (checkPattern(['for(', 'while('], 'Boucle de parcours')) score += 20;
                
                // Vérification de la fonction de test
                if (checkPattern('publicstaticvoidtabimpairstest()', 'Fonction de test')) score += 20;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 7:
                feedback.details = [];
                score = 0;

                // Vérification de la signature
                if (checkPattern('publicstaticvoidtriselection(int[]t)', 'Signature de la fonction')) score += 20;
                
                // Vérification des boucles imbriquées
                if (checkPattern(['for(', 'while('], 'Boucles de tri')) score += 20;
                
                // Vérification de l'échange
                if (checkPattern(['temp=', 'swap'], 'Échange des éléments')) score += 20;
                
                // Vérification des comparaisons
                if (checkPattern(['<', '>'], 'Comparaisons pour le tri')) score += 20;
                
                // Vérification de la fonction de test
                if (checkPattern('publicstaticvoidtriselectiontest()', 'Fonction de test')) score += 20;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            // TP3 Exercices
            case 8: // Voiture (TP3 Ex1)
                feedback.details = [];
                score = 0;

                // Vérification de la classe et des attributs privés
                if (checkPattern('publicclassvoiture', 'Déclaration de la classe')) score += 10;
                if (checkPattern(['privatestringmarque', 'privatestring marque'], 'Attribut marque privé')) score += 10;
                if (checkPattern(['privatestringmodele', 'privatestring modele'], 'Attribut modele privé')) score += 10;
                if (checkPattern(['privateintannee', 'privateint annee'], 'Attribut annee privé')) score += 10;

                // Vérification des getters
                if (checkPattern('publicstringgetmarque()', 'Getter pour marque')) score += 10;
                if (checkPattern('publicstringgetmodele()', 'Getter pour modele')) score += 10;
                if (checkPattern('publicintgetannee()', 'Getter pour annee')) score += 10;

                // Vérification des setters
                if (checkPattern('publicvoidsetmarque(stringmarque)', 'Setter pour marque')) score += 10;
                if (checkPattern('publicvoidsetmodele(stringmodele)', 'Setter pour modele')) score += 10;
                if (checkPattern('publicvoidsetannee(intannee)', 'Setter pour annee')) score += 10;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 9: // Livre (TP3 Ex2)
                feedback.details = [];
                score = 0;

                // Vérification des attributs
                if (checkPattern(['privatestringtitre', 'privatestring titre'], 'Attribut titre')) score += 10;
                if (checkPattern(['privatestringauteur', 'privatestring auteur'], 'Attribut auteur')) score += 10;
                if (checkPattern(['privateintanneepublication', 'privateint anneepublication'], 'Attribut anneePublication')) score += 10;

                // Vérification des constructeurs
                if (checkPattern('public livre(stringtitre,stringauteur,intanneepublication)', 'Constructeur complet')) score += 20;
                if (checkPattern('public livre(stringtitre,stringauteur)', 'Constructeur avec titre et auteur')) score += 20;
                if (checkPattern('public livre()', 'Constructeur par défaut')) score += 20;

                // Vérification de l'initialisation par défaut
                if (checkPattern(['this.anneepublication=2020', 'anneepublication=2020'], 'Année par défaut 2020')) score += 10;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 10: // CompteBancaire (TP3 Ex3)
                feedback.details = [];
                score = 0;

                // Vérification des attributs et méthodes de base
                if (checkPattern(['privatestringnumerocompte', 'privatestring numerocompte'], 'Attribut numeroCompte')) score += 10;
                if (checkPattern(['privatedoublesolde', 'private double solde'], 'Attribut solde')) score += 10;

                // Vérification des getters/setters
                if (checkPattern('publicdoublegetsolde()', 'Getter pour solde')) score += 10;
                if (checkPattern('if(solde>=0)', 'Vérification solde positif')) score += 15;

                // Vérification des méthodes de transaction
                if (checkPattern('publicvoiddeposer(doublemontant)', 'Méthode deposer')) score += 15;
                if (checkPattern('if(montant>0)', 'Vérification montant positif')) score += 15;
                if (checkPattern('if(montant>0&&this.solde>=montant)', 'Vérification solde suffisant')) score += 15;
                if (checkPattern('this.solde-=montant', 'Mise à jour du solde')) score += 10;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 11: // Utilisateur (TP3 Ex4)
                feedback.details = [];
                score = 0;

                // Vérification des attributs privés
                if (checkPattern(['privatestringidentifiant', 'privatestring identifiant'], 'Attribut identifiant privé')) score += 15;
                if (checkPattern(['privatestringmotdepasse', 'privatestring motdepasse'], 'Attribut motDePasse privé')) score += 15;

                // Vérification du setter sécurisé
                if (checkPattern('if(motdepasse!=null&&motdepasse.length()>=8)', 'Vérification longueur mot de passe')) score += 25;
                if (checkPattern('return false', 'Gestion cas d\'erreur')) score += 15;

                // Vérification de la méthode d'affichage
                if (checkPattern('publicvoidafficherinfos()', 'Méthode afficherInfos')) score += 15;
                if (checkPattern('system.out.println("identifiant:"+identifiant)', 'Affichage sécurisé')) score += 15;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            case 12: // Rectangle (TP3 Ex5)
                feedback.details = [];
                score = 0;

                // Vérification des attributs
                if (checkPattern(['privatedoublelongueur', 'private double longueur'], 'Attribut longueur')) score += 15;
                if (checkPattern(['privatedoublelargeur', 'private double largeur'], 'Attribut largeur')) score += 15;

                // Vérification des méthodes de calcul
                if (checkPattern('publicdoublecalculersurface()', 'Méthode calculerSurface de base')) score += 20;
                if (checkPattern('return longueur*largeur', 'Calcul de la surface')) score += 20;
                if (checkPattern('publicdoublecalculersurface(doublefacteur)', 'Surcharge de calculerSurface')) score += 15;
                if (checkPattern('returncalculersurface()*facteur', 'Utilisation du facteur')) score += 15;

                feedback.score = score;
                isCorrect = score >= 80;
                break;

            default:
                feedback.details = [];
                const cleanExpectedCode = expectedFunction.toLowerCase().replace(/\s+/g, '');
                isCorrect = cleanUserCode.includes(cleanExpectedCode);
                feedback.score = isCorrect ? 100 : 0;
                feedback.details.push({
                    check: 'Code correspond à la solution attendue',
                    passed: isCorrect,
                    symbol: isCorrect ? '✓' : '✗'
                });
                break;
        }

        // Construction du message de feedback
        feedback.message = isCorrect 
            ? `Excellent! Votre code a obtenu un score de ${feedback.score}%. Il contient tous les éléments essentiels.`
            : `Votre code a obtenu un score de ${feedback.score}%. Voici les points à améliorer:\n${
                feedback.details
                    .filter(d => !d.passed)
                    .map(d => `${d.symbol} ${d.check}`)
                    .join('\n')
            }`;

        // Mettre à jour le score
        setScores(prev => ({
            ...prev,
            [exerciseId]: feedback.score
        }));

        setFeedbacks(prev => ({
            ...prev,
            [exerciseId]: feedback.message
        }));
    };

    const handleCodeChange = (exerciseId, newCode) => {
        setUserCodes(prev => ({
            ...prev,
            [exerciseId]: newCode
        }));
        
        // Réinitialiser le score et le feedback lors de la modification du code
        setScores(prev => ({
            ...prev,
            [exerciseId]: undefined
        }));
        setFeedbacks(prev => ({
            ...prev,
            [exerciseId]: undefined
        }));
    };

    const handleReset = () => {
        setSelectedTP(null);
        setUserCodes({});
        setFeedbacks({});
        setScores({});
        setShowSolutions({});
    };

    // Fonction pour déterminer la couleur de la barre de progression
    const getProgressColor = (score) => {
        if (score >= 80) return '#4CAF50'; // Vert
        if (score >= 60) return '#FFA726'; // Orange
        return '#f44336'; // Rouge
    };

    return (
        <div className="tp-selection-container">
            {!selectedTP ? (
                <div className="tp-buttons">
                    <h2>Sélectionnez un TP</h2>
                    {[1, 2, 3].map(tp => (
                        <button
                            key={tp}
                            onClick={() => setSelectedTP(tp)}
                            className="tp-button"
                        >
                            TP {tp}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="tp-content">
                    <button 
                        onClick={handleReset}
                        className="back-button"
                    >
                        Retour
                    </button>
                    <h2>TP {selectedTP}</h2>
                    {selectedTP === 1 && (
                        <div className="exercises-container">
                            {tp1Questions.map(question => (
                                <div key={question.id} className="exercise-card">
                                    <h3>{question.title}</h3>
                                    <pre className="question-description">
                                        {question.description}
                                    </pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[question.id] || ''}
                                        onChange={(e) => handleCodeChange(question.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(question.id, userCodes[question.id] || '', question.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [question.id]: !prev[question.id]
                                            }))}
                                            className={`solution-button ${showSolutions[question.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[question.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    {showSolutions[question.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {question.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    {scores[question.id] !== undefined && (
                                        <div className="score-container">
                                            <div className="progress-bar-container">
                                                <div 
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${scores[question.id]}%`,
                                                        backgroundColor: getProgressColor(scores[question.id])
                                                    }}
                                                />
                                            </div>
                                            <span className="score-text">
                                                Score: {scores[question.id]}%
                                            </span>
                                        </div>
                                    )}
                                    {feedbacks[question.id] && (
                                        <div className={`feedback ${feedbacks[question.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            <pre>{feedbacks[question.id]}</pre>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedTP === 2 && (
                        <div className="exercises-container">
                            {tp2Questions.map(question => (
                                <div key={question.id} className="exercise-card">
                                    <h3>{question.title}</h3>
                                    <pre className="question-description">
                                        {question.description}
                                    </pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[question.id] || ''}
                                        onChange={(e) => handleCodeChange(question.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(question.id, userCodes[question.id] || '', question.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [question.id]: !prev[question.id]
                                            }))}
                                            className={`solution-button ${showSolutions[question.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[question.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    {showSolutions[question.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {question.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    {scores[question.id] !== undefined && (
                                        <div className="score-container">
                                            <div className="progress-bar-container">
                                                <div 
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${scores[question.id]}%`,
                                                        backgroundColor: getProgressColor(scores[question.id])
                                                    }}
                                                />
                                            </div>
                                            <span className="score-text">
                                                Score: {scores[question.id]}%
                                            </span>
                                        </div>
                                    )}
                                    {feedbacks[question.id] && (
                                        <div className={`feedback ${feedbacks[question.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            <pre>{feedbacks[question.id]}</pre>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedTP === 3 && (
                        <div className="exercises-container">
                            {tp3Questions.map(question => (
                                <div key={question.id} className="exercise-card">
                                    <h3>{question.title}</h3>
                                    <pre className="question-description">
                                        {question.description}
                                    </pre>
                                    <textarea
                                        className="code-input"
                                        value={userCodes[question.id] || ''}
                                        onChange={(e) => handleCodeChange(question.id, e.target.value)}
                                        placeholder="Écrivez votre code ici..."
                                        rows={10}
                                    />
                                    <div className="button-group">
                                        <button 
                                            onClick={() => checkCode(question.id, userCodes[question.id] || '', question.expectedFunction)}
                                            className="submit-button"
                                        >
                                            Vérifier
                                        </button>
                                        <button 
                                            onClick={() => setShowSolutions(prev => ({
                                                ...prev,
                                                [question.id]: !prev[question.id]
                                            }))}
                                            className={`solution-button ${showSolutions[question.id] ? 'active' : ''}`}
                                        >
                                            {showSolutions[question.id] ? 'Masquer la solution' : 'Voir la solution'}
                                        </button>
                                    </div>
                                    {showSolutions[question.id] && (
                                        <div className="solution-container">
                                            <h4>Solution proposée :</h4>
                                            <pre className="solution-code">
                                                {question.expectedFunction}
                                            </pre>
                                        </div>
                                    )}
                                    {scores[question.id] !== undefined && (
                                        <div className="score-container">
                                            <div className="progress-bar-container">
                                                <div 
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${scores[question.id]}%`,
                                                        backgroundColor: getProgressColor(scores[question.id])
                                                    }}
                                                />
                                            </div>
                                            <span className="score-text">
                                                Score: {scores[question.id]}%
                                            </span>
                                        </div>
                                    )}
                                    {feedbacks[question.id] && (
                                        <div className={`feedback ${feedbacks[question.id].includes('Excellent') ? 'success' : 'error'}`}>
                                            <pre>{feedbacks[question.id]}</pre>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TPSelection; 
