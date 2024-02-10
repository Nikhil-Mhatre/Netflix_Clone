interface FormItem {
    FieldName: FieldName; 
    FieldLabel: FieldLabel; 
    FieldType: FieldType
}

export const SIGNIN_FORMITEMS: FormItem[] = [
    { FieldName: "email", FieldLabel: "Email", FieldType:'text' },
    { FieldName: "password", FieldLabel: "Password", FieldType:'password' },
];

export const SIGNUP_FORMITEMS: FormItem[] = [
    { FieldName: "username", FieldLabel: "Username", FieldType:'text' },
    { FieldName: "email", FieldLabel: "Email", FieldType:'email' },
    { FieldName: "password", FieldLabel: "Password", FieldType:'password' },
];


export const FAQITEMS = [
    {
      id: 1,
      quest: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    },
    {
      id: 2,
      quest: "How much does Netflix cost?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    },
    {
      id: 3,
      quest: "Where can I watch?",
      answer:
        "Neflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    },
    {
      id: 4,
      quest: "How do I Cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      quest: "What can I watch on Netflix?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
  ];


  export const HomeFooterLinks = [
    {
        id:1,
        footLink: "FAQ"
    },
    {
        id:2,
        footLink: "Investor Relations"
    },
    {
        id:3,
        footLink: "Privacy"
    },
    {
        id:4,
        footLink: "Speed Test"
    },
    {
        id:5,
        footLink: "Help Center"
    },
    {
        id:6,
        footLink: "Jobs"
    },
    {
        id:7,
        footLink: "Cookie Perences"
    },
    {
        id:8,
        footLink: "Legal Notices"
    },
    {
        id:9,
        footLink: "Account"
    },
    {
        id:10,
        footLink: "Ways to watch"
    },
    {
        id:11,
        footLink: "Corporate Information"
    },
    {
        id:12,
        footLink: "Only on Netflix"
    },
    {
        id:13,
        footLink: "Media Centre"
    },
    {
        id:14,
        footLink: "Terms of Use"
    },
    {
        id:15,
        footLink: "contact Us"
    },
  ]