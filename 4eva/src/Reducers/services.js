const initialState ={
    redirectToReferrer: false,
    signIn:[
        {
            'id': 1,
            'username': 'Tocee Interiors',
            'location': 'Enugu',
            'service': 'Interior Decorator',
            'portfolio': [
                {
                    'id': 1,
                    'client': 'Mr & Mrs Faraday',
                    'image': require('./images/halls.jpg'),
                },
                {
                    'id': 2,
                    'client': 'Mr & Mrs Faraday',
                    'image': require('./images/halls.jpg'),
                },
                {
                    'id': 3,
                    'client': 'Mr & Mrs Shitu',
                    'image': require('./images/halls.jpg'),
                },
            ],
            
        },
        {
            'id': 2,
            'username': 'Frances Makeover',
            'location': 'Lagos',
            'service': 'Interior Decorator',
            'portfolio': [
                {
                    'id': 1,
                    'client': 'Mr & Mrs Faraday',
                    'image': require('./images/background.jpg'),
                },
                {
                    'id': 2,
                    'client': 'Mr & Mrs Faraday',
                    'image': require('./images/background.jpg'),
                },
                {
                    'id': 3,
                    'client': 'Mr & Mrs Shitu',
                    'image': require('./images/background.jpg'),
                },
            ]
        }
    ],
    couplegallery: [
        {
            'id': 1,
            'coupleImage': require('./images/background.jpg'),
            'nameOfCouple': 'Mr and Mrs Fadalurd'
        },
        {
            'id': 2,
            'coupleImage': require('./images/couple1.jpg'),
            'nameOfCouple': 'Mr and Mrs Isit'
        },
        {
            'id': 3,
            'coupleImage': require('./images/couple1.jpg'),
            'nameOfCouple': 'Mr and Mrs Isit'
        }
    ],
    posts: [
        {
            'id': 1,
            'postPicture': require('./images/background.jpg'),
            'postHeading': 'First Date Ideas',
            'author': 'Forever...and a day',
            'post': 'A lot of yappering would go here....', 
        },
        {
            'id': 2,
            'postPicture': require('./images/register.jpg'),
            'postHeading': 'Best venues for a first  date in Enugu',
            'author': 'Forever...and a day',
            'post': 'A lot of yappering would go here....', 
        },
        {
            'id': 3,
            'postPicture': require('./images/register.jpg'),
            'postHeading': 'Date Night, anyone?',
            'author': 'Forever...and a day',
            'post': 'A lot of yappering would go here....', 
        },
    ],
    bannerImages:[
        {
            "id": 1,
            "mainMessage": " Everyone and Everything you need to have a glam wedding!",
            "accompanyingMessage": "Browse Portfolios",
            "image": require ('./images/bridal-couple-footwear-38569-min.jpg')
        },
        {
            "id": 2,
            "mainMessage": " The only thing better than a Forever? Forever...and a day",
            "accompanyingMessage": "Start Planning",
            "image": require ('./images/beautiful-blur-bridal-256737.jpg')
        },
    ],
    products:[
        {
            "id": 1,
            "product": "Wedding Gowns",
            "backgroundImage": require('./images/gown.jpg'),
            "more":[
            {
                "id": 1,
                "location": "Enugu",
                "vendor": "Jumia",
                "price": "#150,000",
                "image": require('./images/rentals.jpg'),
            },
            {
                "id": 2,
                "location": "Lagos",
                "vendor": "Jumia",
                "price": "#150,000",
                "image": require('./images/rentals.jpg'),
                
            },
            {
                "id": 3,
                "location": "Lagos",
                "vendor": "Jumia",
                "price": "#150,000",
                "image": require('./images/rentals.jpg'),
                
            },

            ]
        },
        {
            "id": 2,
            "product": "Suits",
            "backgroundImage":require('./images/Suits.jpg'),
            "more":[],
        },
        {
            "id": 3,
            "product": "Wedding Shoes",
            "backgroundImage": require('./images/shoes.jpg'),
            "more":[],
        },
        {
            "id": 4,
            "product": "Souvenirs",
            "backgroundImage": require('./images/souvenir.jpg'),
            "more":[],
        },
        {
            "id": 5,
            "product": "Asoebi Materials",
            "backgroundImage": require('./images/asoebi materials.jpg'),
            "more":[],
        },
        {
            "id": 6,
            "product": "Accessories",
            "backgroundImage": require('./images/accessories.jpg'),
            "more":[],
        },
        {
            "id": 7,
            "product": "Reception Halls",
            "backgroundImage": require('./images/halls.jpg'),
            "more":[],
        },
        {
            "id": 8,
            "product": "Rentals",
            "backgroundImage": require('./images/cars.jpg'),
            "more":[],
        },
    ],
    services: [
        {
            "id": 1,
            "service": "Photographer/ Videographers",
            "backgroundImage": require('./images/photographers.webp'),
            "more":[],
        },
        {
            "id": 2,
            "service": "Hair and Make-up artists",
            "backgroundImage": require('./images/make-up.png'),
            "more":[
                {
                    "id": 1,
                    "location": "Kebbi",
                    "vendor": "Yemisi",
                    "contactDetails": "yemisifarida@gmail.com",
                    "image": require('./images/wooden.jpeg'),
                    'category': 'hair and make-up artists',
                },
                {
                    "id": 2,
                    "location": "Lagos",
                    "vendor": "Tocee",
                    "contactDetails": "toceebridals@gmail.com",
                    "image": require('./images/wooden.jpeg'),
                    'category': 'hair and make-up artists',
                },
                {
                    "id": 3,
                    "location": "Abuja",
                    "vendor": "Tony",
                    "contactDetails": "tonyhair@gmail.com",
                    "image": require('./images/make-up.png'),
                    'category': 'hair and make-up artists',
                },
    
                ]
        },
        {
            "id": 3,
            "service": "Caterers",
            "backgroundImage": require('./images/caterers.jpg'),
            "more":[],
        },
        {
            "id": 4,
            "service": "Ushers",
            "backgroundImage": require('./images/ushers.jpg'),
            "more":[],
        },
        {
            "id": 5,
            "service": "DJ / Live Band",
            "backgroundImage": require('./images/DJ.jpg'),
            "more":[],
        },
        {
            "id": 6,
            "service": "MC",
            "backgroundImage": require('./images/Emcee.jpg'),
            "more":[],
        },
        {
            "id": 7,
            "service": "Interior Decorators",
            "backgroundImage": require('./images/reception.jpg'),
            "more":[],
        },
        {
            "id": 8,
            "service": "Bakers",
            "backgroundImage": require('./images/cake.jpg'),
            "more":[],
        },
        {
            "id": 9,
            "service": "Fashion Designers",
            "backgroundImage": require('./images/fashiondesigners.jpg'),
            "more":[],
        },
        {
            "id": 10,
            "service": "Graphic Designers/ Web Designers",
            "backgroundImage": require('./images/graphicdesigners.jpg'),
            "more":[],
        },
        {
            "id": 11,
            "service": "Special effects",
            "backgroundImage": require('./images/specialEffects.jpg'),
            "more":[],
        },
        {
            "id": 12,
            "service": "Wedding Planners",
            "backgroundImage": require('./images/weddingPlanner.jpg'),
            "more":[],
        },
    ]
}

const rootreducer = (state = initialState, action) =>{
    return state
}
export default rootreducer