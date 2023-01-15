const data = [
    {
        id: 1,
        type: "greetings",
        content: {
            message: "Good Morning, Rick",
            image:
           "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            quote:
           "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
            button1: "LEARN MORE",
            button2: "SHARE INSIGHTS",
        },
    },
    {
        id: 2,
        type: "tips",
        content: {
            message: "Wellness Tip For The Day",
   
            sliderContent: [
                {
                    id: 1,
                    image:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    quote:
               "You are no richer than what you carry in your mind, no stronger then what you hold in your heart, and no purer than what you harbor in your soul.",
                    author: "- Edition",
                    quoteImage:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    wished: false,
                    button1: "LEARN MORE",
                    button2: "SHARE INSIGHTS",
                },
                {
                    id: 2,
                    image:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    quote:
               "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
                    author: "- Edition",
                    quoteImage:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    wished: false,
                    button1: "LEARN MORE",
                    button2: "SHARE INSIGHTS",
                },
                {
                    id: 2,
                    image:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    quote:
               "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
                    author: "- Edition",
                    quoteImage:
               "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    wished: false,
                    button1: "LEARN MORE",
                    button2: "SHARE INSIGHTS",
                },
            ],
        },
    },
    {
        id: 21,
        type: "wellness",
        content: {
            message: "wellness",
            data: [
                {
                    id: 1,
                    slides: [
                        {
                            name: "Happiness",
                            image:
                  "https://img.freepik.com/premium-vector/smiling-face-emoji_1319-431.jpg?w=2000",
                        },
                        {
                            name: "Career",
                            image:
                  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                        },
                        {
                            name: "Nature",
                            image:
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                        }
                    ],
                }
            ],
        },
    },
    {
        id: 3,
        type: "library",
        content: {
            message: "Browse Library",
            data: [
                {
                    name: "Happiness",
                    image:
               "https://img.freepik.com/premium-vector/smiling-face-emoji_1319-431.jpg?w=2000",
                },
                {
                    name: "Career",
                    image:
               "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                },
                {
                    name: "Nature",
                    image:
               "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                },
                {
                    name: "Compassion",
                    image:
               "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                {
                    name: "Health",
                    image:
               "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                {
                    name: "Sleep",
                    image:
               "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
            ],
        },
    },
    {
        id: 4,
        type: "program",
        content: {
            message: "Explore Programs",
            data: [
                {
                    id: 1,
                    slides: [
                        {
                            name: "Happiness",
                            image:
                   "https://img.freepik.com/premium-vector/smiling-face-emoji_1319-431.jpg?w=2000",
                        },
                        {
                            name: "Career",
                            image:
                   "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                        },
                        {
                            name: "Nature",
                            image:
                   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                        },
                        {
                            name: "Compassion",
                            image:
                   "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                        {
                            name: "Health",
                            image:
                   "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                        {
                            name: "Sleep",
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                    ],
                },
                {
                    id: 2,
                    slides: [
                        {
                            name: "Happiness",
                            image:
                   "https://img.freepik.com/premium-vector/smiling-face-emoji_1319-431.jpg?w=2000",
                        },
                        {
                            name: "Career",
                            image:
                   "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                        },
                        {
                            name: "Nature",
                            image:
                   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                        },
                        {
                            name: "Compassion",
                            image:
                   "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                        {
                            name: "Health",
                            image:
                   "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                        {
                            name: "Sleep",
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 7,
        type: "trending",
        content: {
            message: "Trending",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://cdn1.vectorstock.com/i/1000x1000/36/40/photo-session-banner-horizontal-concept-vector-16873640.jpg",
                        },
                        {
                            id: 2,
                            image:
                   "https://img.freepik.com/premium-psd/conference-social-media-post-marketing-business-social-banner-square-flyer_263626-63.jpg?w=2000",
                        },
                    ],
                },
                {
                    id: 2,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://img.freepik.com/free-vector/elegant-business-conference-poster-template_1361-1210.jpg?w=2000",
                        },
                        {
                            id: 2,
                            image:
                   "https://img.freepik.com/free-vector/business-conference-poster-template_1361-1212.jpg?w=2000",
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 5,
        type: "featured",
        content: {
            message: "Featured Programs",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Intelligence Quotient",
                            members: "213,000",
                            button: "open",
                        },
                        {
                            id: 2,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Success at work",
                            members: "126,265",
                            button: "open",
                        },
                    ],
                },
                {
                    id: 2,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Intelligence Quotient",
                            members: "213,000",
                            button: "open",
                        },
                        {
                            id: 2,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Success at work",
                            members: "126,265",
                            button: "open",
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 6,
        type: "highlights",
        content: {
            message: "Transformation Hightlights",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Transformation title",
                            author: "Kendell Jenner",
                            menu: "Build Confidence",
                            description:
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                        },
                        {
                            id: 2,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Transformation title",
                            author: "Kendell Jenner",
                            menu: "Build Confidence",
                            description:
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                        },
                    ],
                },
                {
                    id: 2,
                    data: [
                        {
                            id: 1,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Transformation title",
                            author: "Kendell Jenner",
                            menu: "Build Confidence",
                            description:
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                        },
                        {
                            id: 2,
                            image:
                   "https://images.unsplash.com/photo-1468174829941-1d60ae85c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                            title: "Transformation title",
                            author: "Kendell Jenner",
                            menu: "Build Confidence",
                            description:
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                        },
                    ],
                },
            ],
        },
    },
];
export {data};