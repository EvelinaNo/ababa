const favMovies = [
  {
    id: 1,
    title: 'The Butterfly Effect',
    year: 2004,
    image:
      'https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    description:
      'Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.',
  },
  {
    id: 2,
    title: 'The Butterfly Effect 2',
    year: 2006,
    image:
      'https://m.media-amazon.com/images/M/MV5BYjkzN2I0YWYtZjk1Ny00ZmNhLWE1MjYtMDE2MjkyNmQ5NmU1XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_.jpg',
    description:
      'Nick Larson discovers a supernatural way to alter his life and travel back in time to key moments in his life by looking at photographs.',
  },
  {
    id: 3,
    title: 'A.I. Artificial Intelligence',
    year: 2001,
    image:
      'https://m.media-amazon.com/images/M/MV5BNWU2NzEyMDYtM2MyOS00OGM3LWFkNzAtMzRiNzE2ZjU5ZTljXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    description:
      'A highly advanced robotic boy longs to become "real" so that he can regain the love of his human mother.',
  },
  {
    id: 4,
    title: 'The Lion King',
    year: 2019,
    image: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg',
    description:
      'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
  },
  {
    id: 5,
    title: 'Shrek',
    year: 2001,
    image:
      'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    description:
      'Tolimoje šalyje, negailestingas valdovas Lordas Farquaad į tolimąjį užkampį išvijo visas pasakų būtybes. Valdovui pasipriešinoti sugebėjo trys būtybės: Pirmasis - žalias, smirdintis ogras, tačiau su auksine širdim, vardu Šrekas; jo kilnusis bendražygis, negalintis nutilti, Asilas; ir gražioji, bet „kieta” princesė Fiona, kurią į žmonas pasiimti nori pats piktasis Duloco valdovas.',
  },
  {
    id: 6,
    title: 'Shrek 2',
    year: 2004,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    description:
      'Žaliasis žmogėdra Šrekas susituokia su gražuole Fiona, kuri pakviečia savo mylimąjį susitikti su tėvais - karaliene Lilijana ir karaliumi Haroldu. Tikrai ne visi yra patenkinti princesės pasirinkimu, o ypač žavusis princas, kuris tikėjosi kada nors sulaukti Fionos atsako. Nauji, juokingi, pavojingi ir žali nuotykiai su daugybe naujų personažų vėl prasideda!',
  },
  {
    id: 7,
    title: 'Shrek 3',
    year: 2007,
    image:
      'https://m.media-amazon.com/images/M/MV5BMGVmYTJjODktYTYxMy00ZmFlLTg4OGMtZDkzMjZiZWU0NWNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
    description:
      'Reluctantly designated as the heir to the land of Far, Far Away, Shrek hatches a plan to install the rebellious Artie as the new king while Princess Fiona tries to fend off a coup détat by the jilted Prince Charming.',
  },
  {
    id: 8,
    title: 'Shrek Forever After',
    year: 2010,
    image: 'https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_FMjpg_UX1000_.jpg',
    description:
      'Rumpelstiltskin tricks a mid-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpelstiltskin rules supreme.',
  },
  {
    id: 9,
    title: 'Chernobyl: Zona otchuzhdeniya',
    year: 2019,
    image:
      'https://m.media-amazon.com/images/M/MV5BZGUwNzU0ZjQtYmFjMC00M2QxLTllZmYtZjQ4NmI4NzU2ZTgwXkEyXkFqcGdeQXVyNzc2NTgyMDE@._V1_.jpg',
    description:
      'Five youths chase after a man who has stolen 8 million rubles from them. The man reveals on his video blog his intention to travel to Chernobyl. With every kilometer, the heroes journey becomes more dangerous and confusing.',
  },
  {
    id: 10,
    title: 'Scary Movie',
    year: 2000,
    image:
      'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    description:
      'A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.',
  },
  {
    id: 11,
    title: 'Scary Movie 2',
    year: 2001,
    image: 'https://m.media-amazon.com/images/M/MV5BMTM5MTY3MDk5OF5BMl5BanBnXkFtZTcwMjc0ODQ4NA@@._V1_.jpg',
    description:
      'Four teens are tricked by Professor Oldman (Tim Curry) into visiting a haunted house for a school project.',
  },
  {
    id: 12,
    title: 'Scary Movie 3',
    year: 2003,
    image: 'https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_FMjpg_UX1000_.jpg',
    description:
      'Cindy must investigate mysterious crop circles and video tapes, and help the President in preventing an alien invasion.',
  },
  {
    id: 13,
    title: 'Scary Movie 4',
    year: 2006,
    image:
      'https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg',
    description:
      'Cindy finds out the house she lives in is haunted by a little boy and goes on a quest to find out who killed him and why. Also, Alien "Tr-iPods" are invading the world and she has to uncover the secret in order to stop them.',
  },
  {
    id: 14,
    title: 'Superhero Movie',
    year: 2008,
    image: 'https://m.media-amazon.com/images/M/MV5BMTc0Njc1MTU5Nl5BMl5BanBnXkFtZTcwMjA4NDE2MQ@@._V1_.jpg',
    description:
      'Orphaned high school student Rick Riker is bitten by a radioactive dragonfly, develops super powers (except for the ability to fly), and becomes a hero.',
  },
  {
    id: 15,
    title: 'Mean Girls',
    year: 2004,
    image: 'https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_.jpg',
    description:
      'Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.',
  },
  {
    id: 16,
    title: 'Billy Madison',
    year: 1995,
    image:
      'https://m.media-amazon.com/images/M/MV5BMzcyMjZmNjctNGNhMS00ZmQxLWFkNzQtYTIxYjVkYmU1NmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    description:
      'Biliui Medisonui - 27-eri. Jis baisus tinginys, todėl jo tėtis, turtingas viešbučių savininkas, nusprendžia visus verslo reikalus ir pinigus patikėti ne sūnui, o viceprezidentui.',
  },
  {
    id: 17,
    title: 'Me, Myself & Irene',
    year: 2000,
    image:
      'https://m.media-amazon.com/images/M/MV5BODMwMDY2YzUtNGFiNS00NDA1LWI4YzMtYzVmM2RlZTk3NGVlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    description:
      'Čarlis - Roudailendo policininkas. Jis švelnus ir geraširdis. Tačiau vieną dieną Čarlio, o ir visų nepaklusnių miestelėnų gyvenimas apsiverčia aukštyn kojomis. Mielasis policininkas virsta piktu pašaipūnu, kuris nedvejodamas skaudžiai baudžia drįstančius nepaisyti tvarkos ar tiesiog bandančius iš jo pasišaipyti. Policininką ištiria gydytojai ir pateikia neįtikėtiną diagnozę. Čarlio asmenybė susidvejinusi. Jo kūne gyvena ne tik Čarlis, bet ir Henkas.',
  },
  {
    id: 18,
    title: 'Independence Day',
    year: 1996,
    image:
      'https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    description:
      'The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankinds best weapon is the will to survive.',
  },
];

export default favMovies;
