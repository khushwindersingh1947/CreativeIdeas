import example from "./Images/example.jpg";
import { Route } from "react-router-dom";


const ideas = [{
    'id': 1,
    'img': "/ Images / example.jpg",
    'title': "example",
    'description': "The is an example description"
    }
];

export function Home() {
    return (
        <div className="Home">
            <h1>Welcome to your Creativity Hub</h1>
            <p>Here you can find all of your creative projects in one place.</p>
            <p>Click on the links above to get started.</p>
        </div>
    );
}

export function List() {
    return (
        <div className="List">
            {
                ideas.map((ideas) => (
                    <div className="idea">
                        <img src= {example} alt={ideas.title}></img>
                        <h1>{ideas.title}</h1>
                        <p>{ideas.description}</p>
                        <button onClick ={
                            <Route path="/List/:ideas.id" component={idea} />}>
                            Add Content
                        </button>
                    </div>
                ))
            }
            
        </div>
    );
}

export function idea() {
    return (
        <div className="idea">
            <h1>Empty idea</h1>
        </div>
    );
}