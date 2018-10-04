export const AppData = [
  {
    name: "Home",
    children: [
      {
        name: "Conversations",
        icon: "forum",
        size: 3,
        alerts: 3,
        route: "/conversations"
      },
      { name: "People", icon: "group", size: 3, alerts: 0, route: "/people" },
      { name: "Places", icon: "place", size: 2, alerts: 0, route: "/places" },
      { name: "Support", icon: "face", size: 2, alerts: 0, route: "/support" },
      { name: "News", icon: "public", size: 2, alerts: 5, route: "/news" },
      {
        name: "Settings",
        icon: "settings",
        size: 2,
        alerts: 1,
        route: "/settings"
      },
      {
        name: "History",
        icon: "turned_in",
        size: 2,
        alerts: 0,
        route: "/history"
      }
    ]
  }
];
export const People = [
  {
    name: "Home",
    children: [
      {
        name: "Sam",
        icon: "mood",
        size: 3,
        alerts: 1,
        img: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Logan",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        name: "Blake",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      {
        name: "Kei",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/4.jpg"
      },
      {
        name: "Jordan",
        icon: "mood",
        size: 2,
        alerts: 2,
        img: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        name: "Harper",
        icon: "mood",
        size: 2,
        alerts: 1,
        img: "https://randomuser.me/api/portraits/women/6.jpg"
      },
      {
        name: "Maurice",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        name: "Drew",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/8.jpg"
      },
      {
        name: "Pat",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/9.jpg"
      },
      {
        name: "Blair",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/10.jpg"
      },
      {
        name: "Bobby",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/11.jpg"
      },
      {
        name: "Alex",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/12.jpg"
      },
      {
        name: "Shannon",
        icon: "mood",
        size: 1,
        alerts: 1,
        img: "https://randomuser.me/api/portraits/women/13.jpg"
      },
      {
        name: "Reese",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/14.jpg"
      },
      {
        name: "Morgan",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/15.jpg"
      },
      {
        name: "Lee",
        icon: "mood",
        size: 3,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/16.jpg"
      },
      {
        name: "Kerry",
        icon: "mood",
        size: 2,
        alerts: 2,
        img: "https://randomuser.me/api/portraits/men/17.jpg"
      },
      {
        name: "Jesse",
        icon: "mood",
        size: 2,
        alerts: 1,
        img: "https://randomuser.me/api/portraits/women/18.jpg"
      },
      {
        name: "Jamie",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/19.jpg"
      },
      {
        name: "Hayden",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/20.jpg"
      },
      {
        name: "Eden",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/women/21.jpg"
      },
      {
        name: "Dawson",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        name: "Dallas",
        icon: "mood",
        size: 2,
        alerts: 0,
        img: "https://randomuser.me/api/portraits/men/23.jpg"
      }
    ]
  }
];
export const Conversations = {
  all: [
    {
      name: "I'm quitting drinking today",
      summary: "I've been drinking for 22 years, and in that time I've lost...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 8,
      public: true,
      pinned: 0,
      replies: 22,
      trigger: true,
      last_update: new Date()
    },
    {
      name: "My partner left me - pls cheer me up",
      summary:
        "We have 3 children, we've been married 10 years, and last night he just walked out...",
      author: null,
      alerts: 1,
      involved: 0,
      participants: 13,
      public: false,
      pinned: 0,
      replies: 40,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "Any lawyers here?",
      summary: "I don't like asking for favours, but this is serious...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 7,
      public: true,
      pinned: 0,
      replies: 21,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "Who wants to come see Jurassic World?",
      summary: "Calling out all dinosaur nerds...",
      author: null,
      alerts: 0,
      involved: 1,
      participants: 5,
      public: false,
      pinned: 0,
      replies: 8,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "After hours doctors clinics in Melbourne?",
      summary: "What's out there?...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 3,
      public: true,
      pinned: 0,
      replies: 9,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "Dealing with loss",
      summary: "Some tips for dealing with the loss of a loved one...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 20,
      public: true,
      pinned: 0,
      replies: 78,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "I got a new job",
      summary: "It took ages, but I'm finally working again...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 10,
      public: true,
      pinned: 0,
      replies: 19,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "Ideas for Xmas holidays?",
      summary:
        "I'll have the kids this year, how can I keep them entertained?...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 31,
      public: true,
      pinned: 0,
      replies: 120,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "I finally left Tom",
      summary: "I'm worried he'll find me...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 2,
      public: false,
      pinned: 0,
      replies: 9,
      trigger: true,
      last_update: new Date()
    },
    {
      name: "100 days since I last took a punt",
      summary: "It's been a struggle, but today I'm celebrating...",
      author: null,
      alerts: 0,
      involved: 0,
      participants: 3,
      public: true,
      pinned: 0,
      replies: 18,
      trigger: false,
      last_update: new Date()
    }
  ],
  mine: [
    {
      name: "Just moved to Sydney, where's everyone at?",
      summary: "Help me get settled :)",
      author: null,
      alerts: 1,
      involved: 1,
      participants: 2,
      public: true,
      pinned: 0,
      replies: 7,
      trigger: false,
      last_update: new Date()
    },
    {
      name: "Dog parks in Maidstone?",
      summary: "Anyone know any good places?",
      author: null,
      alerts: 0,
      involved: 1,
      participants: 2,
      public: true,
      pinned: 0,
      replies: 4,
      trigger: false,
      last_update: new Date()
    }
  ]
};
