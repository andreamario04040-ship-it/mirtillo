# Mirtillo — come metterla sulla home del telefono

L'app è questa cartella. Non serve un server vostro, non serve un account:
i dati restano nel telefono di chi la usa.

## 1. Metterla online (una volta sola)

Serve un indirizzo **https**: sia iPhone sia Android installano dalla home
solo da https, e senza https non funzionano né il salvataggio a lungo
termine né (in futuro) la fotocamera.

Il modo più rapido, senza account:

1. Apri **app.netlify.com/drop**
2. Trascina dentro **tutta questa cartella** (`app`)
3. Ti dà un indirizzo tipo `https://qualcosa.netlify.app` — quello è Mirtillo

In alternativa va bene qualsiasi hosting statico: GitHub Pages, Vercel,
Cloudflare Pages, o uno spazio web vostro.

## 2. Installarla su iPhone

1. Apri l'indirizzo **con Safari** (non Chrome: su iOS solo Safari può installare)
2. Tocca il tasto **Condividi** (il quadrato con la freccia)
3. **Aggiungi a Home**
4. Il nome proposto è già *Mirtillo*: conferma

Si apre a tutto schermo, senza la barra di Safari, con l'icona del mirtillo.

## 3. Installarla su Android

1. Apri l'indirizzo con Chrome
2. Menu **⋮** → **Installa app** (o "Aggiungi a schermata Home")

## Cose da sapere

- **I dati stanno nel telefono.** Due telefoni = due dispense separate: non si
  sincronizzano fra loro.
- **iOS può cancellare i dati** dei siti non aperti per un paio di settimane.
  Se succede, dentro l'app c'è *Dispensa → I vostri dati → Salva una copia*:
  tiene un file `.json` che si rimette con *Ripristina da una copia*.
  Aprendo l'app ogni pochi giorni non succede.
- **Funziona anche senza rete** dopo la prima apertura.
- Per aggiornare l'app basta ricaricare i file sull'hosting: al primo avvio
  con rete si aggiorna da sola.
