import Greetings from "../../assets/images/new-greetings.jpg";
import DailyDose from "../../assets/images/dailydose.jpg";
import Tip1 from "../../assets/images/tip1.png";
import Tip2 from "../../assets/images/tip2.png";
import Tip3 from "../../assets/images/tip3.png";
import Problemsol1 from "../../assets/images/wellnessCenter/problemsol1.png";
import Problemsol2 from "../../assets/images/wellnessCenter/problemsol12.png";
import Meditation1 from "../../assets/images/wellnessCenter/meditation1.png";
import Meditation2 from "../../assets/images/wellnessCenter/meditation2.png";
import Transformstory from "../../assets/images/wellnessCenter/transformstory.jpg";
import Tricks1 from "../../assets/images/wellnessCenter/trick1.png";
import Tricks2 from "../../assets/images/wellnessCenter/trick2.png";
import Well1 from "../../assets/images/wellnessCenter/center1.png";
import Well2 from "../../assets/images/wellnessCenter/center2.png";
import Well3 from "../../assets/images/wellnessCenter/center3.png";

const data = [
    {
        id: 1,
        type: "greetings",
        content: {
            message: "Good Morning, Rick",
            image: Greetings,
            quote:
        "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
            button1: "LEARN MORE",
            button2: "SHARE INSIGHTS",
        },
    },
    {
        id: 21,
        type: "dose",
        content: {
            message: "Daily Dose of Positivity",
            image: DailyDose,
            quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Smile in the mirror. Do that every morning and you'll start to see a big difference in your lifeSmile in the mirror.",
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
                    image: Tip1,
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
                    image: Tip2,
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
                    image: Tip3,
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
                            image: Well1,
                        },
                        {
                            name: "Career",
                            image: Well2,
                        },
                        {
                            name: "Nature",
                            image: Well3,
                        },
                    ],
                },
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
            message: "Problems and Solutions",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image: Problemsol1,
                            name: "Find job in you",
                        },
                        {
                            id: 2,
                            image: Problemsol2,
                            name: "Practive Gratitude",
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 511,
        type: "trending",
        content: {
            message: "Tips and Tricks",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image: Tricks1,
                            name: "Excude Confidence",
                        },
                        {
                            id: 2,
                            image: Tricks2,
                            name: "Positivity",
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
            message: "Guided Meditation",
            slides: [
                {
                    id: 1,
                    data: [
                        {
                            id: 1,
                            image: Meditation1,
                            name: "Excude Confidence",
                        },
                        {
                            id: 2,
                            image: Meditation2,
                            name: "Positivity",
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
            message: "Transformation Stories",
            slides: [
                {
                    id: 1,
                    content: {
                        message: "Transformation Story Title",
                        image: Transformstory,
                        quote:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Smile in the mirror. Do that every morning and you'll start to see a big difference in your lifeSmile in the mirror.",
                    },
                },
                {
                    id: 2,
                    content: {
                        message: "Transformation Story Title",
                        image: Transformstory,
                        quote:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Smile in the mirror. Do that every morning and you'll start to see a big difference in your lifeSmile in the mirror.",
                    },
                },
            ],
        },
    },
];
export {data};
