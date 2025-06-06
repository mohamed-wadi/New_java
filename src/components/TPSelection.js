import React from 'react';
import { useState } from 'react';
import '../App.css';

const TPSelection = () => {
    const [selectedTP, setSelectedTP] = useState(null);
    const [userCodes, setUserCodes] = useState({});
    const [feedbacks, setFeedbacks] = useState({});
    const [scores, setScores] = useState({});
    const [showSolutions, setShowSolutions] = useState({});
    const [selectedFile, setSelectedFile] = useState({});

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

    return (
        <div className="tp-selection-container">
            {!selectedTP ? (
                <div className="tp-buttons">
                    <h2>Sélectionnez un TP</h2>
                    {[1, 2, 3, "3v2"].map(tp => (
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
                                        <span className="score-text" style={{ color: '#e6e9f0' }}>
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
                                        <span className="score-text" style={{ color: '#e6e9f0' }}>
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
                                        <span className="score-text" style={{ color: '#e6e9f0' }}>
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
                </div>
            )}
        </div>
    );
};

export default TPSelection; 
