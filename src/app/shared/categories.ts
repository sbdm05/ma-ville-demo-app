export const catHome = [
  {
    slug: 'mes-demarches',
    name: 'Mes Démarches',
    icon: 'clipboard-outline',
    categories: [
      {
        slug: 'carte-identite',
        name: "Carte d'identité",
      },
      {
        slug: 'urbanisme',
        name: 'Urbanisme',
      },
      {
        slug: 'scolarite',
        name: 'Scolarité',
      },
      {
        slug: 'petite-enfance',
        name: 'Petite Enfance',
      },
    ],
  },
  {
    slug: 'signaler',
    name: 'Signaler',
    icon: 'alert-circle-outline',
    categories: [
      {
        slug: 'voirie',
        name: 'Voirie',
      },
      {
        slug: 'animaux',
        name: 'Animaux',
      },
      {
        slug: 'eclairage',
        name: 'Eclairage',
      },
      {
        slug: 'stationnement',
        name: 'Stationnement',
      },
    ],
  },
  {
    slug: 'chantiers',
    name: 'Chantiers',
    icon: 'build-outline',
  },
  {
    slug: 'kiosque',
    name: 'Kiosque',
    icon: 'newspaper-outline',
  },
  {
    slug: 'actus',
    name: 'Actualités',
    icon: 'megaphone-outline',
  },
  {
    slug: 'contactez-vos-elus',
    name: 'Contactez vos élus',
    url: 'contactez-vos-elus',
    icon: 'chatbubbles-outline',
  },
  {
    slug: 'balades-urbaines',
    name: 'Balades urbaines',
    icon: 'location-outline',
  },
  {
    slug: 'agenda',
    name: 'Agenda',
    icon: 'calendar-outline',
  },
  {
    slug: 'annuaire',
    name: 'Annuaire',
    icon: 'earth-outline',
    categories: [
      {
        slug: 'restaurants',
        name: 'Restaurants',
      },
      {
        slug: 'hotels',
        name: 'Hôtels',
      },
      {
        slug: 'parking',
        name: 'Parking',
      },
      {
        slug: 'bibliotheques',
        name: 'Bibliothèques',
      },
      {
        // slug: 'pharmacies-de-garde',
        name: 'Pharmacies de garde',
        url: 'pharmacies-de-garde',
      },
    ],
  },
  {
    slug: 'survey',
    name: 'Sondages',
    icon: 'help-circle-outline',
  },
  {
    slug: 'notifications',
    name: 'Notifications',
    icon: 'notifications-outline',
  },
  {
    slug: 'settings',
    name: 'Réglages',
    icon: 'settings-outline',
  },
];

// export const catSignal = [
//   {
//     slug: 'voirie',
//     name: 'Voirie',
//   },
//   {
//     slug: 'animaux',
//     name: 'Animaux',
//   },
//   {
//     slug: 'eclairage',
//     name: 'Eclairage',
//   },
//   {
//     slug: 'stationnement',
//     name: 'Stationnement',
//   },
// ];

export const locations: any[] = [
  {
    country: 'Indonesia',
    lat: -6.208239829839074,
    lng: 106.84427868185706,
    description: `Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania
                    between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra,
                    Java, Sulawesi, and parts of Borneo and New Guinea`,
    locations: [
      {
        name: 'Jakarta',
        lat: -6.208239829839074,
        lng: 106.84427868185706,
        description: `Jakarta, Indonesia's massive capital, sits on the northwest coast of the island of Java.
                        A historic mix of cultures – Javanese, Malay, Chinese, Arab, Indian and European – has
                        influenced its architecture, language and cuisine. The old town, Kota Tua, is home to Dutch
                        colonial buildings, Glodok (Jakarta’s Chinatown) and the old port of Sunda Kelapa, where
                        traditional wooden schooners dock.`,
      },
      {
        name: 'Bandung',
        lat: -6.917592558462194,
        lng: 107.62187099357712,
        description: `Bandung, capital of Indonesia’s West Java province, is a large city set amid volcanoes and
                        tea plantations. It's known for colonial and art deco architecture, a lively, university-town
                        feel and – thanks to its 768m elevation – relatively cool tropical weather. Bandung is also a
                        shopping destination, with fashion outlets clustered along Jalan Setiabudi and Jalan Riau in
                        the Dago district.`,
      },
      {
        name: 'Yoyakarta',
        lat: -7.796442150210627,
        lng: 110.36803714047565,
        description: `Yogyakarta (often called “Jogja”) is a city on the Indonesian island of Java known for its traditional
                        arts and cultural heritage. Its ornate 18th-century royal complex, or kraton, encompasses the still-inhabited
                        Sultan’s Palace. Also within the kraton are numerous open-air pavilions that host classical Javanese dance shows
                        and concerts of gamelan music, characterized by gongs, chimes and plucked string instruments.`,
      },
      {
        name: 'Semarang',
        lat: -7.006323973150371,
        lng: 110.4356024387759,
        description: `Semarang is the capital and largest city of Central Java province in Indonesia. It was a major port during the
                        Dutch colonial era, and is still an important regional center and port today.`,
      },
      {
        name: 'Surabaya',
        lat: -7.255870497769898,
        lng: 112.75091260952324,
        description: `Surabaya is a port city on the Indonesian island of Java. A vibrant, sprawling metropolis, it mixes modern
                        skyscrapers with canals and buildings from its Dutch colonial past. It has a thriving Chinatown and an Arab
                        Quarter whose Ampel Mosque dates to the 15th century. The Tugu Pahlawan (Heroes Monument) honors the independence
                        battles waged in Surabaya’s streets in 1945.`,
      },
    ],
  },
  {
    country: 'Malaysia',
    lat: 3.6456730676988993,
    lng: 102.00190290832059,
    description: `Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.
                    It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.
                    The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and
                    skyscrapers such as the iconic, 451m-tall Petronas Twin Towers.`,
    locations: [
      {
        name: 'Kuala Lumpur',
        lat: 2.8339910195172013,
        lng: 101.95795759560552,
        description: `Capital city of Malaysia`,
      },
      {
        name: 'Selangor',
        lat: 3.0746246225825242,
        lng: 101.50608266754581,
        description: `Selangor is a state on the west coast of Peninsular Malaysia, encircling the capital Kuala Lumpur. In the
                        state capital, Shah Alam, the Sultan Salahuddin Abdul Aziz Mosque has 4 soaring minarets and a huge blue
                        dome. To the northeast are the limestone Batu Caves, which house ornately decorated Hindu shrines. A large
                        golden statue of the Hindu god Lord Murugan stands at the entrance, and monkeys scamper about.`,
      },
      {
        name: 'Malacca',
        lat: 2.197784059347974,
        lng: 102.28444161651875,
        description: `Malacca is a Malaysian state on the Malay Peninsula's southwest coast. The capital, Malacca City, has a
                        colonial past seen in its preserved town center, the site of 16th-century, Portuguese St. Paul’s Church.
                        It's also home to Christ Church, built by the Dutch in the 18th century. Next to Christ Church in Red
                        Square is the Stadthuys, the Dutch-era town hall now housing a museum of Malaccan history and ethnography.`,
      },
      {
        name: 'Penang',
        lat: 5.427723983255476,
        lng: 100.35301857828283,
        description: `Penang is a state in northwest Malaysia comprising mainland Seberang Perai and Penang Island. On the island,
                        the state capital of George Town is home to landmarks such as colonial Fort Cornwallis, the ornate Chinese
                        clan house Khoo Kongsi and the Kapitan Keling Mosque, all testaments to centuries of foreign influence.
                        To the west, a funicular ascends Penang Hill, with its trails, flower gardens and panoramic views.`,
      },
      {
        name: 'Johor',
        lat: 1.4885798646512842,
        lng: 103.76017784696357,
        description: `Johor, a state in southern Malaysia linked to Singapore by causeways, is known for beaches and rainforest.
                        Desaru Beach has a strip of resorts, while Endau Rompin National Park's mountainous jungle shelters waterfalls
                        and wildlife like elephants. Capital Johor Bahru's diverse history is reflected in the Victorian-era Sultan
                        Abu Bakar State Mosque and Arulmigu Sri Rajakaliamman Glass Temple, a glittering Hindu shrine.`,
      },
    ],
  },
  {
    country: 'Taiwan',
    lat: 23.489851205004367,
    lng: 121.26835234605299,
    description: `Taiwan, officially the Republic of China, is a country in East Asia, at the junction of the
                    East and South China Seas in the northwestern Pacific Ocean, with the People's Republic of
                    China to the northwest, Japan to the northeast, and the Philippines to the south.`,
    locations: [
      {
        name: 'New Taipei City',
        lat: 25.06821229192726,
        lng: 121.46174924740234,
        description: `New Taipei City is a special municipality located in northern Taiwan. The city is home
                        to an estimated population of 3,974,683 as of 2022, making it the most populous city of
                        Taiwan, and also the second largest special municipality by area, behind Kaohsiung.`,
      },
      {
        name: 'Keelung City',
        lat: 25.13050565917047,
        lng: 121.73786247857382,
        description: `Keelung City is a port city near Taipei, in northern Taiwan. Surrounded by mountains, it’s
                        known for its sheltered harbor. Near the waterfront, street-food stalls at Miaokou Night Market
                        offer traditional snacks and seafood. Several forts around the area include hilltop Ershawan
                        Fort, with cannons and a Chinese-style gate. Both Gongzi Liao Fort and Dawulun Fort offer views
                        over the harbor and ocean.`,
      },
      {
        name: 'Taichung City',
        lat: 24.13888718729653,
        lng: 120.68506200871514,
        description: `Taichung is an industrial city on the western side of central Taiwan. It’s a gateway for exploring
                        the island’s mountainous interior, including nature areas like Sun Moon Lake, popular for boating
                        and hiking. In the bustling city center are museums, temples and the ornate brick Taichung Station,
                        a legacy of the Japanese colonial period (1895–1945)`,
      },
      {
        name: 'Kaohsiung City',
        lat: 22.631987273220563,
        lng: 120.29994098167688,
        description: `Kaohsiung is a massive port city in southern Taiwan. It's home to many skyscrapers, such as the
                        248m-tall Tuntex Sky Tower, and is known for its diversity of parks. Its focal point is the Love
                        River, with walking paths and cafes along its banks, and cruise boats navigating its waters.
                        Shopping options range from high-end malls to the Liuhe and Ruifeng night markets.`,
      },
      {
        name: 'Tainan City',
        lat: 23.004139821911117,
        lng: 120.25555941126184,
        description: `Tainan, a city on Taiwan’s southwest coast, was the island’s capital from 1683–1887 under the Qing
                        dynasty. Today it’s known for its centuries-old fortresses and temples. One of its most famous sites
                        is Chihkan Tower, an 18th-century Chinese complex with gardens, intricately carved towers and a temple
                        erected on the foundations of Fort Provintia, a Dutch outpost dating to the mid-1600s.`,
      },
    ],
  },
];

export const contacts: any[] = [
  {
    role: '1er Adjoint à la Maire délégué aux Finances, au Sport et au Numérique',
    nom: 'Jean Aubin',
    permanence_tel: '01 34 27 33 50',
    permanence_horaires: [
      {
        hor: 'Vendredi de 16h à 18h',
      },
      {
        hor: 'Samedi de 10h à 12h',
      },
    ],
  },
  {
    role: ' Adjointe à la Maire déléguée à l’Éducation',
    nom: 'Christine Mattei',
    permanence_tel: '01 34 27 33 50',
    permanence_horaires: [
      {
        hor: 'Mercredi de 14h à 16h',
      },
      {
        hor: 'Samedi de 10h à 12h',
      },
    ],
  },
];
// export const shoppingCat: any[] = ['Restaurants', 'Hôtels', 'Parkings'];
