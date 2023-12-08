const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

/* `canvas.width = window.innerWidth;` définit la largeur de l'élément canevas sur la largeur de la
fenêtre du navigateur. Cela garantit que l'élément canevas occupe toute la largeur de la fenêtre. */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

/* La boucle « for » parcourt les valeurs de 0 à « colonnes - 1 ». Il est utilisé pour initialiser le
tableau `rainDrops` avec une valeur de 1 pour chaque index. Le tableau `rainDrops` représente la
position verticale de chaque caractère de goutte de pluie dans l'animation matricielle. */
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}
const drawLine = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const randomChar = alphabet.charAt(
      Math.floor(Math.random() * alphabet.length)
    );

    /* La ligne `context.fillText(randomChar, i * fontSize, rainDrops[i] * fontSize);` dessine un
	caractère de texte sur le canevas à une position spécifique. */
    context.fillText(randomChar, i * fontSize, rainDrops[i] * fontSize);

    /* L'instruction `if` vérifie si la position actuelle d'une goutte de pluie (calculée en
	multipliant `rainDrops[i]` par `fontSize`) est supérieure à la hauteur du canevas
	(`canvas.height`). Il vérifie également si un nombre généré aléatoirement (`Math.random()`) est
	supérieur à 0,975. */
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      /* La ligne `rainDrops[i] = 0;` réinitialise la position d'une goutte de pluie en haut du
	  canevas. Cela se produit lorsque la position actuelle d'une goutte de pluie (calculée en
	  multipliant `rainDrops[i]` par `fontSize`) est supérieure à la hauteur du canevas
	  (`canvas.height`) et à un nombre généré aléatoirement (`Math.random( )`) est supérieur à
	  0,975. En définissant `rainDrops[i]` sur 0, la goutte de pluie recommencera à tomber du haut
	  lors de la prochaine itération de la boucle d'animation. */
      rainDrops[i] = 0;
    }
    /* La ligne `rainDrops[i]++;` incrémente la valeur de `rainDrops[i]` de 1. Ceci est utilisé pour
	mettre à jour la position de chaque goutte de pluie dans l'animation. En augmentant la valeur,
	la goutte de pluie descendra sur le canevas lors de la prochaine itération de la boucle
	d'animation. */
    rainDrops[i]++;
  }
};

/* `setInterval(drawLine, 50);` est une fonction JavaScript qui appelle à plusieurs reprises la
fonction `drawLine` toutes les 50 millisecondes. Cela crée un effet d'animation en mettant
continuellement à jour le canevas avec de nouvelles gouttes de pluie tombant. */
setInterval(drawLine, 50);
